/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */
import * as React from 'react'
import { PINKeypad, Spinner } from '@opencrvs/components/lib/interface'
import { Logo, Logout } from '@opencrvs/components/lib/icons'
import styled from '@client/styledComponents'
import { redirectToAuthentication } from '@client/profile/profileActions'
import { connect } from 'react-redux'
import { IStoreState } from '@client/store'
import { getUserDetails } from '@client/profile/profileSelectors'
import { IUserDetails } from '@client/utils/userUtils'
import { GQLHumanName } from '@opencrvs/gateway/src/graphql/schema'
import { injectIntl, WrappedComponentProps as IntlShapeProps } from 'react-intl'
import { storage } from '@client/storage'
import { SECURITY_PIN_EXPIRED_AT } from '@client/utils/constants'
import moment from 'moment'
import { SCREEN_LOCK } from '@client/components/ProtectedPage'
import { ErrorMessage } from '@opencrvs/components/lib/forms'
import { pinOps } from '@client/views/Unlock/ComparePINs'
import * as ReactDOM from 'react-dom'
import { getCurrentUserID, IUserData } from '@client/applications'
import { messages } from '@client/i18n/messages/views/pin'
import zambiaBackground from './background-zmb.jpg'

const PageWrapper = styled.div`
  ${({ theme }) => theme.fonts.bodyBoldStyle};
  ${({ theme }) => theme.gradients.gradientNightshade};
  ${window.config.COUNTRY === 'zmb'
    ? `background: url(${zambiaBackground});`
    : ''}
  height: calc(100vh + 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  width: 100%;
`

const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const StyledLogo = styled(Logo)`
  margin-top: -80px;
`

const LogoutHeader = styled.a`
  float: right;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  position: absolute;
  top: 30px;
  right: 30px;
  span {
    margin-right: 10px;
  }
`
const Container = styled.div`
  text-align: center;
`
const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

interface IState {
  pin: string
  userPin: string
  resetKey: number
  showSpinner: boolean
}
type ErrorState = {
  attempt: number
  errorMessage: string
}
type IFullState = IState & ErrorState

type Props = {
  userDetails: IUserDetails | null
  redirectToAuthentication: typeof redirectToAuthentication
}
type IFullProps = Props &
  IntlShapeProps & {
    onCorrectPinMatch: () => void
  }

const MAX_LOCK_TIME = 1
const MAX_ALLOWED_ATTEMPT = 3

class UnlockView extends React.Component<IFullProps, IFullState> {
  pinKeyRef: any

  constructor(props: IFullProps) {
    super(props)
    this.state = {
      attempt: 0,
      errorMessage: '',
      pin: '',
      userPin: '',
      resetKey: Date.now(),
      showSpinner: false
    }
  }

  componentDidMount() {
    this.loadUserPin()
    this.screenLockTimer()
    document.addEventListener('mouseup', this.handleClick, false)
    this.focusKeypad()
  }

  async loadUserPin() {
    const currentUserID = await getCurrentUserID()
    const allUserData = JSON.parse(
      await storage.getItem('USER_DATA')
    ) as IUserData[]
    const currentUserData = allUserData.find(
      user => user.userID === currentUserID
    ) as IUserData
    const userPin = currentUserData.userPIN as string
    this.setState(() => ({
      userPin
    }))
  }

  showName() {
    const { userDetails } = this.props
    const nameObj =
      (userDetails &&
        userDetails.name &&
        (userDetails.name.find(
          // @ts-ignore
          (storedName: GQLHumanName) => storedName.use === 'en'
        ) as GQLHumanName)) ||
      {}
    const fullName = `${String(nameObj.firstNames)} ${String(
      nameObj.familyName
    )}`
    return <Name>{fullName}</Name>
  }

  showErrorMessage() {
    return (
      this.state.errorMessage && (
        <ErrorMessage id="errorMsg">{this.state.errorMessage}</ErrorMessage>
      )
    )
  }

  onPinProvided = async (pin: string) => {
    const { intl } = this.props
    const { userPin } = this.state

    this.setState({
      showSpinner: true
    })
    const pinMatched = await pinOps.comparePins(pin, userPin)
    this.setState({
      showSpinner: false
    })

    if (this.state.attempt > MAX_ALLOWED_ATTEMPT) {
      return
    }

    if (this.state.attempt === MAX_ALLOWED_ATTEMPT && !pinMatched) {
      await storage.setItem(SECURITY_PIN_EXPIRED_AT, moment.now().toString())
      this.setState(prevState => {
        return {
          attempt: prevState.attempt + 1
        }
      })
      this.screenLockTimer()
      return
    }

    if (this.state.attempt < MAX_ALLOWED_ATTEMPT - 1 && !pinMatched) {
      this.setState(preState => ({
        attempt: preState.attempt + 1,
        errorMessage: intl.formatMessage(messages.incorrect),
        resetKey: Date.now()
      }))
      return
    }

    if (this.state.attempt === MAX_ALLOWED_ATTEMPT - 1 && !pinMatched) {
      this.setState(preState => ({
        attempt: preState.attempt + 1,
        errorMessage: intl.formatMessage(messages.lastTry),
        resetKey: Date.now()
      }))
      return
    }

    if (pinMatched) {
      this.setState(() => ({
        errorMessage: ''
      }))
      this.props.onCorrectPinMatch()
      return
    }
  }

  screenLockTimer = async () => {
    const { intl } = this.props
    const lockedAt = await storage.getItem(SECURITY_PIN_EXPIRED_AT)

    const intervalID = setInterval(() => {
      const currentTime = moment.now()
      const timeDiff = moment(currentTime).diff(
        parseInt(lockedAt, 10),
        'minutes'
      )
      if (lockedAt && timeDiff < MAX_LOCK_TIME) {
        if (this.state.attempt === MAX_ALLOWED_ATTEMPT + 2) {
          return
        }
        this.setState(prevState => ({
          attempt: MAX_ALLOWED_ATTEMPT + 2,
          errorMessage: intl.formatMessage(messages.locked)
        }))
      } else {
        clearInterval(intervalID)
        this.setState(() => ({
          attempt: 0,
          errorMessage: '',
          resetKey: Date.now()
        }))
      }
    }, 100)
  }

  logout = () => {
    storage.removeItem(SCREEN_LOCK)
    storage.removeItem(SECURITY_PIN_EXPIRED_AT)
    this.props.redirectToAuthentication()
  }

  componentDidUpdate = () => this.focusKeypad()

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleClick, false)
  }

  handleClick = (e: Event) => {
    this.focusKeypad()
  }

  focusKeypad = () => {
    const node =
      this.pinKeyRef && (ReactDOM.findDOMNode(this.pinKeyRef) as HTMLElement)
    if (node) {
      node.focus()
    }
  }

  render() {
    return this.state.showSpinner ? (
      <SpinnerWrapper>
        <Spinner id="hashingSpinner" />
      </SpinnerWrapper>
    ) : (
      <PageWrapper id="unlockPage">
        <LogoutHeader onClick={this.logout} id="logout">
          <span>Logout</span>
          <Logout />
        </LogoutHeader>
        <Container onClick={this.focusKeypad}>
          <StyledLogo />
          {this.showName()}

          {this.showErrorMessage()}
          <PINKeypad
            ref={(elem: any) => (this.pinKeyRef = elem)}
            onComplete={this.onPinProvided}
            pin={this.state.pin}
            key={this.state.resetKey}
          />
        </Container>
      </PageWrapper>
    )
  }
}

export const Unlock = connect(
  (store: IStoreState) => ({
    userDetails: getUserDetails(store)
  }),
  {
    redirectToAuthentication
  }
)(injectIntl<'intl', IFullProps>(UnlockView))