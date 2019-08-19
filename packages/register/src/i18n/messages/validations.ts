import { defineMessages } from 'react-intl'

interface IValidationMessages {
  bengaliOnlyNameFormat: ReactIntl.FormattedMessage.MessageDescriptor
  blockAlphaNumericDot: ReactIntl.FormattedMessage.MessageDescriptor
  dateFormat: ReactIntl.FormattedMessage.MessageDescriptor
  dobEarlierThanDom: ReactIntl.FormattedMessage.MessageDescriptor
  domLaterThanDob: ReactIntl.FormattedMessage.MessageDescriptor
  emailAddressFormat: ReactIntl.FormattedMessage.MessageDescriptor
  englishOnlyNameFormat: ReactIntl.FormattedMessage.MessageDescriptor
  greaterThanZero: ReactIntl.FormattedMessage.MessageDescriptor
  isValidBirthDate: ReactIntl.FormattedMessage.MessageDescriptor
  isValidDateOfDeath: ReactIntl.FormattedMessage.MessageDescriptor
  maxLength: ReactIntl.FormattedMessage.MessageDescriptor
  minLength: ReactIntl.FormattedMessage.MessageDescriptor
  numberRequired: ReactIntl.FormattedMessage.MessageDescriptor
  phoneNumberFormat: ReactIntl.FormattedMessage.MessageDescriptor
  range: ReactIntl.FormattedMessage.MessageDescriptor
  required: ReactIntl.FormattedMessage.MessageDescriptor
  requiredSymbol: ReactIntl.FormattedMessage.MessageDescriptor
  validBirthRegistrationNumber: ReactIntl.FormattedMessage.MessageDescriptor
  validDeathRegistrationNumber: ReactIntl.FormattedMessage.MessageDescriptor
  validNationalId: ReactIntl.FormattedMessage.MessageDescriptor
  validPassportNumber: ReactIntl.FormattedMessage.MessageDescriptor
  phoneNumberNotValid: ReactIntl.FormattedMessage.MessageDescriptor
  validDrivingLicenseNumber: ReactIntl.FormattedMessage.MessageDescriptor
}

const messagesToDefine: IValidationMessages = {
  phoneNumberNotValid: {
    id: 'register.SelectContactPoint.phoneNoError',
    defaultMessage: 'Not a valid mobile number',
    description: 'Phone no error text'
  },
  bengaliOnlyNameFormat: {
    defaultMessage: 'Must contain only Bengali characters',
    description:
      'The error message that appears when a non bengali character is used in a Bengali name',
    id: 'validations.bengaliOnlyNameFormat'
  },
  blockAlphaNumericDot: {
    defaultMessage:
      'Can contain only block character, number and dot (e.g. C91.5)',
    description: 'The error message that appears when an invalid value is used',
    id: 'validations.blockAlphaNumericDot'
  },
  dateFormat: {
    defaultMessage: 'Must be a valid date',
    description: 'The error message appears when the given date is not valid',
    id: 'validations.dateFormat'
  },
  dobEarlierThanDom: {
    defaultMessage: 'Must be earlier than marriage date',
    description:
      'The error message appears when the given birth date is later than the given marriage date',
    id: 'validations.dobEarlierThanDom'
  },
  domLaterThanDob: {
    defaultMessage: 'Must be later than birth date',
    description:
      'The error message appears when the given marriage date is earlier than the given birth date',
    id: 'validations.domLaterThanDob'
  },
  emailAddressFormat: {
    defaultMessage: 'Must be a valid email address',
    description:
      'The error message appears when the email addresses are not valid',
    id: 'validations.emailAddressFormat'
  },
  englishOnlyNameFormat: {
    defaultMessage: 'Must contain only English characters',
    description:
      'The error message that appears when a non English character is used in an English name',
    id: 'validations.englishOnlyNameFormat'
  },
  greaterThanZero: {
    defaultMessage: 'Must be a greater than zero',
    description:
      'The error message appears when input is less than or equal to 0',
    id: 'validations.greaterThanZero'
  },
  isValidBirthDate: {
    defaultMessage: 'Must be a valid birth date',
    description:
      'The error message appears when the given birth date is not valid',
    id: 'validations.isValidBirthDate'
  },
  isValidDateOfDeath: {
    defaultMessage: 'Must be a valid date of death',
    description:
      'The error message appears when the given date of death is not valid',
    id: 'validations.isValidDateOfDeath'
  },
  maxLength: {
    defaultMessage: 'Must not be more than {max} characters',
    description:
      'The error message that appears on fields with a maximum length',
    id: 'validations.maxLength'
  },
  minLength: {
    defaultMessage: 'Must be {min} characters or more',
    description:
      'The error message that appears on fields with a minimum length',
    id: 'validations.minLength'
  },
  numberRequired: {
    defaultMessage: 'Must be a number',
    description:
      'The error message that appears on fields where the value must be a number',
    id: 'validations.numberRequired'
  },
  phoneNumberFormat: {
    defaultMessage:
      'Must be {num} digit valid mobile phone number that stars with {start}',
    description:
      'The error message that appears on phone numbers where the first two characters must be a 01 and length must be 11',
    id: 'validations.phoneNumberFormat'
  },
  range: {
    defaultMessage: 'Must be within {min} and {max}',
    description:
      'The error message that appears when an out of range value is used',
    id: 'validations.range'
  },
  required: {
    defaultMessage: 'Required',
    description: 'The error message that appears on required fields',
    id: 'validations.required'
  },
  requiredSymbol: {
    defaultMessage: '',
    description:
      'A blank error message. Used for highlighting a required field without showing an error',
    id: 'validations.requiredSymbol'
  },
  validBirthRegistrationNumber: {
    defaultMessage:
      'The Birth Registration Number can only contain block character and number where the length must be within {min} and {max}',
    description:
      'The error message that appears when an invalid value is used as brn',
    id: 'validations.validBirthRegistrationNumber'
  },
  validDeathRegistrationNumber: {
    defaultMessage:
      'The Death Registration Number can only be alpha numeric and must be {validLength} characters long',
    description:
      'The error message that appears when an invalid value is used as drn',
    id: 'validations.validDeathRegistrationNumber'
  },
  validNationalId: {
    defaultMessage:
      'The National ID can only be numeric and must be {validLength} digits long',
    description:
      'The error message that appears when an invalid value is used as nid',
    id: 'validations.validNationalId'
  },
  validPassportNumber: {
    defaultMessage:
      'The Passport Number can only be alpha numeric and must be {validLength} characters long',
    description:
      'The error message that appears when an invalid value is used as passport number',
    id: 'validations.validPassportNumber'
  },
  validDrivingLicenseNumber: {
    id: 'validations.validDrivingLicenseNumber',
    defaultMessage:
      'The Driving License Number can only be alpha numeric and must be {validLength} characters long',
    description:
      'The error message that appeards when an invalid value is used as driving license number'
  }
}

export const validationMessages: IValidationMessages = defineMessages(
  messagesToDefine
)