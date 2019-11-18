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
import { ICON_ALIGNMENT } from '@opencrvs/components/lib/buttons'
import { TopBar } from '@opencrvs/components/lib/interface'
import { Container } from '@opencrvs/components/lib/layout'
import { Header } from '@client/components/interface/Header/Header'
import { messages } from '@client/i18n/messages/views/performance'
import { PERFORMANCE_REPORT_TYPE_WEEKY } from '@client/utils/constants'
import { IconTab } from '@client/views/RegistrationHome/RegistrationHome'
import * as React from 'react'
import { injectIntl, WrappedComponentProps } from 'react-intl'
import styled from 'styled-components'

type Props = WrappedComponentProps & { tabId: string }

type State = {}

const TAB_ID = {
  weekly: PERFORMANCE_REPORT_TYPE_WEEKY
}

const Content = styled.div`
  margin: 0 80px;
`

class PerformanceContentWrapperComponent extends React.Component<Props, State> {
  renderTopBar() {
    const { tabId, intl } = this.props

    return (
      <TopBar id="top-bar">
        <IconTab
          id={`tab_${TAB_ID.weekly}`}
          key={TAB_ID.weekly}
          active={tabId === TAB_ID.weekly}
          align={ICON_ALIGNMENT.LEFT}
        >
          {intl.formatMessage(messages.weeklyTabTitle)}
        </IconTab>
      </TopBar>
    )
  }
  render() {
    return (
      <Container>
        <Header />
        {this.renderTopBar()}

        <Content>{this.props.children}</Content>
      </Container>
    )
  }
}

export const PerformanceContentWrapper = injectIntl(
  PerformanceContentWrapperComponent
)
