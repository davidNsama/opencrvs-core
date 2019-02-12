import { defineMessages } from 'react-intl'
import {
  messages as identityMessages,
  identityOptions
} from '../../../identity'
import { messages as maritalStatusMessages } from '../../../maritalStatus'
import { messages as educationMessages } from '../../../education'
import {
  ViewType,
  SELECT_WITH_OPTIONS,
  TEXT,
  NUMBER,
  DATE,
  SUBSECTION,
  RADIO_GROUP,
  SELECT_WITH_DYNAMIC_OPTIONS,
  TEXT_WITH_DYNAMIC_DEFINITIONS
} from 'src/forms'
import {
  bengaliOnlyNameFormat,
  englishOnlyNameFormat,
  dateFormat,
  validIDNumber,
  isValidBirthDate
} from 'src/utils/validate'

export interface IMotherSectionFormData {
  firstName: string
}
import { IFormSection } from '../../../index'
import { messages as addressMessages } from '../../../address'
import { countries } from '../../../countries'
import { conditionals } from '../../../utils'
import { OFFLINE_LOCATIONS_KEY } from 'src/offline/reducer'
import { iDType } from 'src/views/PrintCertificate/ParentDetails'
import {
  fieldToNameTransformer,
  fieldToArrayTransformer,
  fieldToIdentifierTransformer,
  fieldToAddressTransformer,
  fieldNameTransformer,
  copyAddressTransformer
} from 'src/forms/mappings/mutation/field-mappings'
import {
  nameToFieldTransformer,
  fieldValueTransformer,
  arrayToFieldTransformer,
  identifierToFieldTransformer,
  addressToFieldTransformer,
  sameAddressFieldTransformer
} from 'src/forms/mappings/query/field-mappings'

const messages = defineMessages({
  motherTab: {
    id: 'register.form.tabs.motherTab',
    defaultMessage: 'Mother',
    description: 'Tab title for Mother'
  },
  motherTitle: {
    id: 'register.form.section.motherTitle',
    defaultMessage: "Mother's details",
    description: 'Form section title for Mother'
  },
  nationality: {
    id: 'formFields.mother.nationality',
    defaultMessage: 'Nationality',
    description: 'Label for form field: Nationality'
  },
  nationalityBangladesh: {
    id: 'formFields.mother.nationalityBangladesh',
    defaultMessage: 'Bangladesh',
    description: 'Option for form field: Nationality'
  },
  motherFirstNames: {
    id: 'formFields.motherFirstNames',
    defaultMessage: 'First name(s)',
    description: 'Label for form field: First names'
  },
  motherFamilyName: {
    id: 'formFields.motherFamilyName',
    defaultMessage: 'Family name',
    description: 'Label for form field: Family name'
  },
  motherFirstNamesEng: {
    id: 'formFields.motherFirstNamesEng',
    defaultMessage: 'First name(s) (in english)',
    description: 'Label for form field: First names in english'
  },
  motherFamilyNameEng: {
    id: 'formFields.motherFamilyNameEng',
    defaultMessage: 'Family name (in english)',
    description: 'Label for form field: Family name in english'
  },
  defaultLabel: {
    id: 'formFields.defaultLabel',
    defaultMessage: 'Label goes here',
    description: 'default label'
  },
  motherDateOfBirth: {
    id: 'formFields.motherDateOfBirth',
    defaultMessage: 'Date of birth',
    description: 'Label for form field: Date of birth'
  },
  motherEducationAttainment: {
    id: 'formFields.motherEducationAttainment',
    defaultMessage: "Mother's level of formal education attained",
    description: 'Label for form field: Mother education'
  },
  currentAddress: {
    id: 'formFields.currentAddress',
    defaultMessage: 'Current Address',
    description: 'Title for the current address fields'
  },
  permanentAddress: {
    id: 'formFields.permanentAddress',
    defaultMessage: 'Permanent Address',
    description: 'Title for the permanent address fields'
  },
  optionalLabel: {
    id: 'formFields.optionalLabel',
    defaultMessage: 'Optional',
    description: 'Optional label'
  }
})

export const motherSection: IFormSection = {
  id: 'mother',
  viewType: 'form' as ViewType,
  name: messages.motherTab,
  title: messages.motherTitle,
  fields: [
    {
      name: 'iDType',
      type: SELECT_WITH_OPTIONS,
      label: identityMessages.iDType,
      required: true,
      initialValue: '',
      validate: [],
      options: identityOptions,
      mapping: {
        mutation: fieldToIdentifierTransformer('type'),
        query: identifierToFieldTransformer('type')
      }
    },
    {
      name: 'iDTypeOther',
      type: TEXT,
      label: identityMessages.iDTypeOtherLabel,
      required: true,
      initialValue: '',
      validate: [],
      conditionals: [conditionals.iDType],
      mapping: {
        mutation: fieldToIdentifierTransformer('otherType'),
        query: identifierToFieldTransformer('otherType')
      }
    },
    {
      name: 'iD',
      type: TEXT_WITH_DYNAMIC_DEFINITIONS,
      dynamicDefinitions: {
        label: {
          dependency: 'iDType',
          labelMapper: iDType
        },
        validate: [
          {
            validator: validIDNumber,
            dependencies: ['iDType']
          }
        ]
      },
      label: identityMessages.iD,
      required: true,
      initialValue: '',
      validate: [],
      mapping: {
        mutation: fieldToIdentifierTransformer('id'),
        query: identifierToFieldTransformer('id')
      }
    },
    {
      name: 'nationality',
      type: SELECT_WITH_OPTIONS,
      label: messages.nationality,
      required: false,
      initialValue: 'BGD',
      validate: [],
      options: countries,
      mapping: {
        mutation: fieldToArrayTransformer,
        query: arrayToFieldTransformer
      }
    },
    {
      name: 'firstNames',
      type: TEXT,
      label: messages.motherFirstNames,
      required: false,
      initialValue: '',
      validate: [bengaliOnlyNameFormat],
      mapping: {
        mutation: fieldToNameTransformer('bn'),
        query: nameToFieldTransformer('bn')
      }
    },
    {
      name: 'familyName',
      type: TEXT,
      label: messages.motherFamilyName,
      required: true,
      initialValue: '',
      validate: [bengaliOnlyNameFormat],
      mapping: {
        mutation: fieldToNameTransformer('bn'),
        query: nameToFieldTransformer('bn')
      }
    },
    {
      name: 'firstNamesEng',
      type: TEXT,
      label: messages.motherFirstNamesEng,
      required: false,
      initialValue: '',
      validate: [englishOnlyNameFormat],
      mapping: {
        mutation: fieldToNameTransformer('en', 'firstNames'),
        query: nameToFieldTransformer('en', 'firstNames')
      }
    },
    {
      name: 'familyNameEng',
      type: TEXT,
      label: messages.motherFamilyNameEng,
      required: false,
      initialValue: '',
      validate: [englishOnlyNameFormat],
      mapping: {
        mutation: fieldToNameTransformer('en', 'familyName'),
        query: nameToFieldTransformer('en', 'familyName')
      }
    },
    {
      name: 'motherBirthDate',
      type: DATE,
      label: messages.motherDateOfBirth,
      required: false,
      initialValue: '',
      validate: [isValidBirthDate],
      mapping: {
        mutation: fieldNameTransformer('birthDate'),
        query: fieldValueTransformer('birthDate')
      }
    },
    {
      name: 'maritalStatus',
      type: SELECT_WITH_OPTIONS,
      label: maritalStatusMessages.maritalStatus,
      required: false,
      initialValue: 'MARRIED',
      validate: [],
      options: [
        { value: 'SINGLE', label: maritalStatusMessages.maritalStatusSingle },
        { value: 'MARRIED', label: maritalStatusMessages.maritalStatusMarried },
        { value: 'WIDOWED', label: maritalStatusMessages.maritalStatusWidowed },
        {
          value: 'DIVORCED',
          label: maritalStatusMessages.maritalStatusDivorced
        },
        {
          value: 'NOT_STATED',
          label: maritalStatusMessages.maritalStatusNotStated
        }
      ]
    },
    {
      name: 'dateOfMarriage',
      type: DATE,
      label: maritalStatusMessages.dateOfMarriage,
      required: false,
      initialValue: '',
      validate: [dateFormat],
      conditionals: [conditionals.isMarried]
    },
    {
      name: 'educationalAttainment',
      type: SELECT_WITH_OPTIONS,
      label: messages.motherEducationAttainment,
      required: false,
      initialValue: '',
      validate: [],
      options: [
        {
          value: 'NO_SCHOOLING',
          label: educationMessages.educationAttainmentNone
        },
        {
          value: 'PRIMARY_ISCED_1',
          label: educationMessages.educationAttainmentISCED1
        },
        {
          value: 'LOWER_SECONDARY_ISCED_2',
          label: educationMessages.educationAttainmentISCED2
        },
        {
          value: 'UPPER_SECONDARY_ISCED_3',
          label: educationMessages.educationAttainmentISCED3
        },
        {
          value: 'POST_SECONDARY_ISCED_4',
          label: educationMessages.educationAttainmentISCED4
        },
        {
          value: 'FIRST_STAGE_TERTIARY_ISCED_5',
          label: educationMessages.educationAttainmentISCED5
        },
        {
          value: 'SECOND_STAGE_TERTIARY_ISCED_6',
          label: educationMessages.educationAttainmentISCED6
        },
        {
          value: 'NOT_STATED',
          label: educationMessages.educationAttainmentNotStated
        }
      ]
    },

    {
      name: 'permanentAddress',
      type: SUBSECTION,
      label: messages.permanentAddress,
      initialValue: '',
      validate: []
    },
    {
      name: 'countryPermanent',
      type: SELECT_WITH_OPTIONS,
      label: addressMessages.country,
      required: true,
      initialValue: window.config.COUNTRY.toUpperCase(),
      validate: [],
      options: countries,
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 0, 'country'),
        query: addressToFieldTransformer('PERMANENT', 0, 'country')
      }
    },
    {
      name: 'statePermanent',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.state,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'countryPermanent'
      },
      conditionals: [conditionals.countryPermanent],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 0, 'state'),
        query: addressToFieldTransformer('PERMANENT', 0, 'state')
      }
    },
    {
      name: 'districtPermanent',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.district,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'statePermanent'
      },
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 0, 'district'),
        query: addressToFieldTransformer('PERMANENT', 0, 'district')
      }
    },
    {
      name: 'addressLine4Permanent',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.addressLine4,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'districtPermanent'
      },
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 6),
        query: addressToFieldTransformer('PERMANENT', 6)
      }
    },
    {
      name: 'addressLine3Permanent',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.addressLine3,
      required: false,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'addressLine4Permanent'
      },
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.isNotCityLocationPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 4),
        query: addressToFieldTransformer('PERMANENT', 4)
      }
    },
    {
      name: 'addressLine3CityOptionPermanent',
      type: TEXT,
      label: addressMessages.addressLine3CityOption,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.isCityLocationPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 5),
        query: addressToFieldTransformer('PERMANENT', 5)
      }
    },
    {
      name: 'addressLine2Permanent',
      type: TEXT,
      label: addressMessages.addressLine2,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.addressLine3Permanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 3),
        query: addressToFieldTransformer('PERMANENT', 3)
      }
    },
    {
      name: 'addressLine1CityOptionPermanent',
      type: TEXT,
      label: addressMessages.addressLine1,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.isCityLocationPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 2),
        query: addressToFieldTransformer('PERMANENT', 2)
      }
    },
    {
      name: 'postCodeCityOptionPermanent',
      type: NUMBER,
      label: addressMessages.postCode,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.isCityLocationPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 0, 'postalCode'),
        query: addressToFieldTransformer('PERMANENT', 0, 'postalCode')
      }
    },
    {
      name: 'addressLine1Permanent',
      type: TEXT,
      label: addressMessages.addressLine1,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.addressLine3Permanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 1),
        query: addressToFieldTransformer('PERMANENT', 1)
      }
    },
    {
      name: 'postCodePermanent',
      type: NUMBER,
      label: addressMessages.postCode,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.countryPermanent,
        conditionals.statePermanent,
        conditionals.districtPermanent,
        conditionals.addressLine4Permanent,
        conditionals.addressLine3Permanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('PERMANENT', 0, 'postalCode'),
        query: addressToFieldTransformer('PERMANENT', 0, 'postalCode')
      }
    },
    {
      name: 'currentAddressSameAsPermanent',
      type: RADIO_GROUP,
      label: addressMessages.currentAddressSameAsPermanent,
      required: true,
      initialValue: true,
      validate: [],
      options: [
        { value: true, label: addressMessages.confirm },
        { value: false, label: addressMessages.deny }
      ],
      conditionals: [],
      mapping: {
        mutation: copyAddressTransformer(
          'PERMANENT',
          'mother',
          'CURRENT',
          'mother'
        ),
        query: sameAddressFieldTransformer(
          'PERMANENT',
          'mother',
          'CURRENT',
          'mother'
        )
      }
    },
    {
      name: 'currentAddress',
      type: SUBSECTION,
      label: messages.currentAddress,
      initialValue: '',
      validate: [],
      conditionals: [conditionals.currentAddressSameAsPermanent]
    },
    {
      name: 'country',
      type: SELECT_WITH_OPTIONS,
      label: addressMessages.country,
      required: true,
      initialValue: window.config.COUNTRY.toUpperCase(),
      validate: [],
      options: countries,
      conditionals: [conditionals.currentAddressSameAsPermanent],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT'),
        query: addressToFieldTransformer('CURRENT')
      }
    },
    {
      name: 'state',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.state,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'country'
      },
      conditionals: [
        conditionals.country,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT'),
        query: addressToFieldTransformer('CURRENT')
      }
    },
    {
      name: 'district',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.district,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'state'
      },
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT'),
        query: addressToFieldTransformer('CURRENT')
      }
    },
    {
      name: 'addressLine4',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.addressLine4,
      required: true,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'district'
      },
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 6),
        query: addressToFieldTransformer('CURRENT', 6)
      }
    },
    {
      name: 'addressLine3',
      type: SELECT_WITH_DYNAMIC_OPTIONS,
      label: addressMessages.addressLine3,
      required: false,
      initialValue: '',
      validate: [],
      dynamicOptions: {
        resource: OFFLINE_LOCATIONS_KEY,
        dependency: 'addressLine4'
      },
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.currentAddressSameAsPermanent,
        conditionals.isNotCityLocation
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 4),
        query: addressToFieldTransformer('CURRENT', 4)
      }
    },
    {
      name: 'addressLine3CityOption',
      type: TEXT,
      label: addressMessages.addressLine3CityOption,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.currentAddressSameAsPermanent,
        conditionals.isCityLocation
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 5),
        query: addressToFieldTransformer('CURRENT', 5)
      }
    },
    {
      name: 'addressLine2',
      type: TEXT,
      label: addressMessages.addressLine2,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.addressLine3,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 3),
        query: addressToFieldTransformer('CURRENT', 3)
      }
    },
    {
      name: 'addressLine1CityOption',
      type: TEXT,
      label: addressMessages.addressLine1,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.currentAddressSameAsPermanent,
        conditionals.isCityLocation
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 2),
        query: addressToFieldTransformer('CURRENT', 2)
      }
    },
    {
      name: 'postCodeCityOption',
      type: NUMBER,
      label: addressMessages.postCode,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.currentAddressSameAsPermanent,
        conditionals.isCityLocation
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 0, 'postalCode'),
        query: addressToFieldTransformer('CURRENT', 0, 'postalCode')
      }
    },
    {
      name: 'addressLine1',
      type: TEXT,
      label: addressMessages.addressLine1,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.addressLine3,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 1),
        query: addressToFieldTransformer('CURRENT', 1)
      }
    },
    {
      name: 'postCode',
      type: NUMBER,
      label: addressMessages.postCode,
      required: false,
      initialValue: '',
      validate: [],
      conditionals: [
        conditionals.country,
        conditionals.state,
        conditionals.district,
        conditionals.addressLine4,
        conditionals.addressLine3,
        conditionals.currentAddressSameAsPermanent
      ],
      mapping: {
        mutation: fieldToAddressTransformer('CURRENT', 0, 'postalCode'),
        query: addressToFieldTransformer('CURRENT', 0, 'postalCode')
      }
    }
  ]
}
