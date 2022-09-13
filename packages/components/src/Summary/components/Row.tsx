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

import React from 'react'
import styled from 'styled-components'
import { Text } from '../../Text'
import { colors } from '../../colors'

const RowContainer = styled.tr``

const RowLabelContainer = styled.th`
  width: 190px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.md}px) {
    display: block;
  }
`

const RowValueContainer = styled.td`
  width: 325px;

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.md}px) {
    width: 280px;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.grid.breakpoints.sm}px) {
    width: auto;
  }
`

const LockedBox = styled.div`
  height: 24px;
  border-radius: 4px;
  cursor: not-allowed;
  background-color: ${colors.grey200};
`

export interface ISummaryRowProps
  extends Omit<React.HTMLAttributes<HTMLTableRowElement>, 'placeholder'> {
  /** Data row label */
  label: string
  /** Data associated with label */
  value?: React.ReactNode
  /** Placeholder for value if value is not set */
  placeholder?: React.ReactNode
  /** Is the summary value greyed / locked out */
  locked?: boolean
}

const RowValue = ({
  value,
  placeholder,
  locked
}: Pick<ISummaryRowProps, 'value' | 'placeholder' | 'locked'>) => {
  if (locked) {
    return <LockedBox />
  }

  if (typeof value === 'string') {
    return (
      <Text variant="reg16" element="span">
        {value}
      </Text>
    )
  }

  if (value) {
    return <>{value}</>
  }

  if (typeof placeholder === 'string') {
    return (
      <Text variant="reg16" color="grey400" element="span">
        {placeholder}
      </Text>
    )
  }

  return <>{placeholder}</>
}

export const Row = ({
  label,
  value,
  placeholder,
  locked,
  ...props
}: ISummaryRowProps) => (
  <RowContainer {...props}>
    <RowLabelContainer
      data-testid={props['data-testid'] && `${props['data-testid']}-key`}
    >
      <Text variant="bold16" element="span">
        {label}
      </Text>
    </RowLabelContainer>
    <RowValueContainer
      data-testid={props['data-testid'] && `${props['data-testid']}-value`}
      data-testclass={locked && 'locked'}
    >
      <RowValue value={value} placeholder={placeholder} locked={locked} />
    </RowValueContainer>
  </RowContainer>
)
