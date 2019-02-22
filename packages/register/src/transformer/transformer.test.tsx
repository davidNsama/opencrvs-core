import {
  createTestApp,
  mockOfflineData,
  assign,
  validToken,
  getItem,
  flushPromises,
  setItem
} from 'src/tests/util'
import { DRAFT_BIRTH_PARENT_FORM } from 'src/navigation/routes'
import { storeDraft, IDraft } from 'src/drafts'
import { ReactWrapper } from 'enzyme'
import { History } from 'history'
import { Store } from 'redux'
import * as fetch from 'jest-fetch-mock'
import { storage } from 'src/storage'
import { v4 as uuid } from 'uuid'
import { draftToGqlTransformer } from 'src/transformer'
import { getRegisterForm } from '@opencrvs/register/src/forms/register/application-selectors'
import { getOfflineDataSuccess } from 'src/offline/actions'
import { Event, IForm } from '@opencrvs/register/src/forms'
import { clone } from 'lodash'

interface IPersonDetails {
  [key: string]: any
}

storage.getItem = jest.fn()
storage.setItem = jest.fn()

beforeEach(() => {
  history.replaceState({}, '', '/')
  assign.mockClear()
})

describe('when draft data is transformed to graphql', () => {
  let app: ReactWrapper
  let history: History
  let store: Store
  let customDraft: IDraft
  let form: IForm

  const childDetails: IPersonDetails = {
    attendantAtBirth: 'NURSE',
    childBirthDate: '1999-10-10',
    familyName: 'ইসলাম',
    familyNameEng: 'Islam',
    firstNames: 'নাইম',
    firstNamesEng: 'Naim',
    gender: 'male',
    placeOfBirth: 'HOSPITAL',
    birthLocation: '90d39759-7f02-4646-aca3-9272b4b5ce5a',
    multipleBirth: '2',
    birthType: 'SINGLE',
    weightAtBirth: '5'
  }

  const fatherDetails: IPersonDetails = {
    fathersDetailsExist: true,
    iD: '23423442342423424',
    iDType: 'OTHER',
    iDTypeOther: 'Taxpayer Identification Number',
    addressSameAsMother: true,
    permanentAddressSameAsMother: true,
    country: 'BGD',
    countryPermanent: 'BGD',
    currentAddress: '',
    motherBirthDate: '1999-10-10',
    dateOfMarriage: '2010-10-10',
    educationalAttainment: 'PRIMARY_ISCED_1',
    familyName: 'ইসলাম',
    familyNameEng: 'Islam',
    firstNames: 'আনোয়ার',
    firstNamesEng: 'Anwar',
    maritalStatus: 'MARRIED',
    nationality: 'BGD'
  }

  const motherDetails: IPersonDetails = {
    iD: '2342434534565',
    iDType: 'NATIONAL_ID',
    country: 'BGD',
    nationality: 'BGD',
    familyName: 'ইসলাম',
    familyNameEng: 'Islam',
    firstNames: 'রোকেয়া',
    firstNamesEng: 'Rokeya',
    maritalStatus: 'MARRIED',
    dateOfMarriage: '2010-10-10',
    fatherBirthDate: '1999-10-10',
    educationalAttainment: 'PRIMARY_ISCED_1',
    currentAddressSameAsPermanent: true,
    addressLine1: 'Rd #10',
    addressLine1Permanent: 'Rd#10',
    addressLine2: 'Akua',
    addressLine2Permanent: 'Akua',
    addressLine3: 'union1',
    addressLine3Permanent: 'union1',
    addressLine4: 'upazila10',
    addressLine4Permanent: 'upazila10',
    countryPermanent: 'BGD',
    currentAddress: '',
    district: 'district2',
    districtPermanent: 'district2',
    permanentAddress: '',
    postCode: '1020',
    postCodePermanent: '1010',
    state: 'state4',
    statePermanent: 'state4'
  }

  const registrationDetails = {
    commentsOrNotes: 'comments',
    presentAtBirthRegistration: 'MOTHER_ONLY',
    registrationCertificateLanguage: ['en'],
    registrationPhone: '01736478884',
    whoseContactDetails: 'MOTHER'
  }

  beforeEach(async () => {
    getItem.mockReturnValue(validToken)
    setItem.mockClear()
    fetch.resetMocks()
    fetch.mockResponses(
      [JSON.stringify({ data: mockOfflineData.locations }), { status: 200 }],
      [JSON.stringify({ data: mockOfflineData.facilities }), { status: 200 }]
    )
    const testApp = createTestApp()
    app = testApp.app
    await flushPromises()
    app.update()
    history = testApp.history
    store = testApp.store
    store.dispatch(getOfflineDataSuccess(JSON.stringify(mockOfflineData)))

    const data = {
      child: childDetails,
      father: fatherDetails,
      mother: motherDetails,
      registration: registrationDetails,
      documents: { image_uploader: '' }
    }

    customDraft = { id: uuid(), data, event: Event.BIRTH }
    store.dispatch(storeDraft(customDraft))
    form = getRegisterForm(store.getState())[Event.BIRTH]
    history.replace(
      DRAFT_BIRTH_PARENT_FORM.replace(':draftId', customDraft.id.toString())
    )

    app.update()
  })

  describe('when user is in birth registration by parent informant view', () => {
    it('Check if new place of birth location address is parsed properly', () => {
      const clonedChild = clone(childDetails)
      clonedChild.placeOfBirth = 'PRIVATE_HOME'
      clonedChild.addressLine1 = 'Rd #10'
      clonedChild.addressLine2 = 'Akua'
      clonedChild.addressLine3 = 'union1'
      clonedChild.addressLine4 = 'upazila10'
      clonedChild.country = 'BGD'
      clonedChild.district = 'district2'
      clonedChild.postCode = '1020'
      clonedChild.state = 'state4'
      const data = {
        child: clonedChild,
        father: fatherDetails,
        mother: motherDetails,
        registration: registrationDetails,
        documents: { image_uploader: '' }
      }

      expect(draftToGqlTransformer(form, data).eventLocation.type).toBe(
        'PRIVATE_HOME'
      )
    })
    it('Pass BOTH_PARENTS as whoseContactDetails value', () => {
      const registration = clone(registrationDetails)
      registration.whoseContactDetails = 'BOTH_PARENTS'

      const data = {
        child: childDetails,
        father: fatherDetails,
        mother: motherDetails,
        registration,
        documents: { image_uploader: '' }
      }

      expect(draftToGqlTransformer(form, data).father.telecom).toBeFalsy()
    })

    it('Pass FATHER as whoseContactDetails value', () => {
      const registration = clone(registrationDetails)
      registration.whoseContactDetails = 'FATHER'

      const data = {
        child: childDetails,
        father: fatherDetails,
        mother: motherDetails,
        registration,
        documents: { image_uploader: '' }
      }

      expect(draftToGqlTransformer(form, data).father.telecom[0].value).toBe(
        '01736478884'
      )
    })

    it('Pass false as fathersDetailsExist on father section', () => {
      const clonedFather = clone(fatherDetails)
      clonedFather.fathersDetailsExist = false

      const data = {
        child: childDetails,
        father: clonedFather,
        mother: motherDetails,
        registration: registrationDetails,
        documents: { image_uploader: '' }
      }

      expect(draftToGqlTransformer(form, data).father).toBeUndefined()
    })
  })
})
