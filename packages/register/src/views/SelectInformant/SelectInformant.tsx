import {
  ICON_ALIGNMENT,
  PrimaryButton,
  TertiaryButton
} from '@opencrvs/components/lib/buttons'
import { ErrorText } from '@opencrvs/components/lib/forms/ErrorText'
import { BackArrow } from '@opencrvs/components/lib/icons'
import { EventTopBar, RadioButton } from '@opencrvs/components/lib/interface'
import { BodyContent } from '@opencrvs/components/lib/layout'
import {
  goBack,
  goToBirthRegistrationAsParent,
  goToHome,
  goToMainContactPoint,
  goToPrimaryApplicant
} from '@register/navigation'
import styled from '@register/styledComponents'
import * as React from 'react'
import { defineMessages, InjectedIntlProps, injectIntl } from 'react-intl'
import { connect } from 'react-redux'

export const messages: {
  [key: string]: ReactIntl.FormattedMessage.MessageDescriptor
} = defineMessages({
  newBirthRegistration: {
    id: 'register.selectInformant.newBirthRegistration',
    defaultMessage: 'New birth application',
    description: 'The message that appears for new birth registrations'
  },
  informantTitle: {
    id: 'register.selectInformant.informantTitle',
    defaultMessage: 'Who is applying for birth registration?',
    description: 'The title that appears when asking for the informant'
  },
  mother: {
    id: 'register.selectInformant.mother',
    defaultMessage: 'Mother',
    description: 'The description that appears when asking for the informant'
  },
  father: {
    id: 'register.selectInformant.father',
    defaultMessage: 'Father',
    description: 'The title that appears when selecting the parent as informant'
  },
  parents: {
    id: 'register.selectInformant.parents',
    defaultMessage: 'Mother & Father',
    description:
      'The description that appears when selecting the parent as informant'
  },
  someoneElse: {
    id: 'register.selectInformant.someoneElse',
    defaultMessage: 'Someone Else',
    description:
      'The description that appears when selecting someone else as informant'
  },
  self: {
    id: 'register.selectInformant.self',
    defaultMessage: 'Self',
    description: 'The title that appears when selecting self as informant'
  },
  back: {
    id: 'menu.back',
    defaultMessage: 'Back',
    description: 'Back button in the menu'
  },
  errorMessage: {
    id: 'register.selectInformant.errorMessage',
    defaultMessage: 'Please select who is present and applying',
    description: 'Error Message to show when no event is being selected'
  },
  continueButton: {
    id: 'register.selectVitalEvent.continueButton',
    defaultMessage: 'Continue',
    description: 'Continue Button Text'
  }
})

const Title = styled.h4`
  ${({ theme }) => theme.fonts.h4Style};
  margin-bottom: 16px;
`
const Actions = styled.div`
  padding: 32px 0;
  & div:not(:last-child) {
    margin-bottom: 16px;
  }
`
enum INFORMANT {
  FATHER = 'father',
  MOTHER = 'mother',
  BOTH_PARENTS = 'parents',
  SELF = 'self',
  SOMEONE_ELSE = 'other'
}
export class SelectInformantView extends React.Component<
  {
    goBack: typeof goBack
    goToHome: typeof goToHome
    goToMainContactPoint: typeof goToMainContactPoint
    goToBirthRegistrationAsParent: typeof goToBirthRegistrationAsParent
    goToPrimaryApplicant: typeof goToPrimaryApplicant
  } & InjectedIntlProps
> {
  state = {
    informant: ''
  }
  handleContinue = () => {
    if (
      this.state.informant &&
      this.state.informant !== 'error' &&
      this.state.informant === INFORMANT.BOTH_PARENTS
    ) {
      this.props.goToPrimaryApplicant()
    } else if (this.state.informant && this.state.informant !== 'error') {
      this.props.goToMainContactPoint(this.state.informant)
    } else {
      this.setState({ informant: 'error' })
    }
  }
  render() {
    const { intl } = this.props
    return (
      <>
        <EventTopBar
          title={intl.formatMessage(messages.newBirthRegistration)}
          goHome={this.props.goToHome}
        />

        <BodyContent id="select_informant_view">
          <TertiaryButton
            align={ICON_ALIGNMENT.LEFT}
            icon={() => <BackArrow />}
            onClick={this.props.goBack}
          >
            {intl.formatMessage(messages.back)}
          </TertiaryButton>
          <Title>{intl.formatMessage(messages.informantTitle)}</Title>
          {this.state.informant === 'error' && (
            <ErrorText id="error_text">
              {intl.formatMessage(messages.errorMessage)}
            </ErrorText>
          )}
          <Actions id="select_parent_informant">
            <RadioButton
              size="large"
              key="select_informant_mother"
              name="birthevent"
              label={intl.formatMessage(messages.mother)}
              value={INFORMANT.MOTHER}
              id="select_informant_mother"
              selected={
                this.state.informant === INFORMANT.MOTHER
                  ? INFORMANT.MOTHER
                  : ''
              }
              onChange={() => this.setState({ informant: INFORMANT.MOTHER })}
            />
            <RadioButton
              size="large"
              key="select_informant_father"
              name="birthevent"
              label={intl.formatMessage(messages.father)}
              value={INFORMANT.FATHER}
              id="select_informant_father"
              selected={
                this.state.informant === INFORMANT.FATHER
                  ? INFORMANT.FATHER
                  : ''
              }
              onChange={() => this.setState({ informant: INFORMANT.FATHER })}
            />
            <RadioButton
              size="large"
              key="select_informant_parents"
              name="birthevent"
              label={intl.formatMessage(messages.parents)}
              value={INFORMANT.BOTH_PARENTS}
              id="select_informant_parents"
              selected={
                this.state.informant === INFORMANT.BOTH_PARENTS
                  ? INFORMANT.BOTH_PARENTS
                  : ''
              }
              onChange={() =>
                this.setState({ informant: INFORMANT.BOTH_PARENTS })
              }
            />
            <RadioButton
              size="large"
              key="select_informant_self"
              name="birthevent"
              label={intl.formatMessage(messages.self)}
              value={INFORMANT.SELF}
              id="select_informant_self"
              disabled={true}
            />
            <RadioButton
              size="large"
              key="select_informant_someone"
              name="birthevent"
              label={intl.formatMessage(messages.someoneElse)}
              value={INFORMANT.SOMEONE_ELSE}
              disabled={true}
              id="select_informant_someone"
            />
          </Actions>
          <PrimaryButton id="continue" onClick={this.handleContinue}>
            {intl.formatMessage(messages.continueButton)}
          </PrimaryButton>
        </BodyContent>
      </>
    )
  }
}

export const SelectInformant = connect(
  null,
  {
    goBack,
    goToHome,
    goToMainContactPoint,
    goToBirthRegistrationAsParent,
    goToPrimaryApplicant
  }
)(injectIntl(SelectInformantView))
