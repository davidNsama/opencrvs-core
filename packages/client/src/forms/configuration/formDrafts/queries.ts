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
import gql from 'graphql-tag'
import { client } from '@client/utils/apolloClient'
import { ApolloQueryResult } from 'apollo-client'
import { GQLQuery } from '@opencrvs/gateway/src/graphql/schema'

export const FORM_DRAFT_FIELDS = gql`
  fragment FormDraftFields on FormDraft {
    event
    status
    comment
    version
    createdAt
    updatedAt
    history {
      status
      version
      comment
      updatedAt
    }
  }
`

export const GET_FORM_DRAFT = gql`
  ${FORM_DRAFT_FIELDS}
  query {
    getFormDraft {
      ...FormDraftFields
    }
  }
`
async function fetchFormDraft() {
  try {
    const queryResult: ApolloQueryResult<GQLQuery> = await client.query({
      query: GET_FORM_DRAFT,
      fetchPolicy: 'no-cache'
    })
    return {
      formDrafts: queryResult.data.getFormDraft
    }
  } catch {
    throw new Error('FormDraft fetch failed')
  }
}

export const formDraftQueries = {
  fetchFormDraft
}