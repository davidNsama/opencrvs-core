import { defineMessages } from 'react-intl'

interface IConstantsMessages {
  areYouSure: ReactIntl.FormattedMessage.MessageDescriptor
  applicantContactNumber: ReactIntl.FormattedMessage.MessageDescriptor
  application: ReactIntl.FormattedMessage.MessageDescriptor
  applicationCollectedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationFailedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationInformantLabel: ReactIntl.FormattedMessage.MessageDescriptor
  applicationRegisteredOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationRejectedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationStartedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationState: ReactIntl.FormattedMessage.MessageDescriptor
  applicationSubmittedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationTitle: ReactIntl.FormattedMessage.MessageDescriptor
  applicationUpdatedOn: ReactIntl.FormattedMessage.MessageDescriptor
  applicationValidatedOn: ReactIntl.FormattedMessage.MessageDescriptor
  birth: ReactIntl.FormattedMessage.MessageDescriptor
  by: ReactIntl.FormattedMessage.MessageDescriptor
  certified: ReactIntl.FormattedMessage.MessageDescriptor
  collected: ReactIntl.FormattedMessage.MessageDescriptor
  collectedBy: ReactIntl.FormattedMessage.MessageDescriptor
  comment: ReactIntl.FormattedMessage.MessageDescriptor
  dateOfApplication: ReactIntl.FormattedMessage.MessageDescriptor
  death: ReactIntl.FormattedMessage.MessageDescriptor
  declared: ReactIntl.FormattedMessage.MessageDescriptor
  dob: ReactIntl.FormattedMessage.MessageDescriptor
  dod: ReactIntl.FormattedMessage.MessageDescriptor
  eventDate: ReactIntl.FormattedMessage.MessageDescriptor
  failedToSend: ReactIntl.FormattedMessage.MessageDescriptor
  gender: ReactIntl.FormattedMessage.MessageDescriptor
  id: ReactIntl.FormattedMessage.MessageDescriptor
  issuedBy: ReactIntl.FormattedMessage.MessageDescriptor
  labelLanguage: ReactIntl.FormattedMessage.MessageDescriptor
  labelPassword: ReactIntl.FormattedMessage.MessageDescriptor
  labelPhone: ReactIntl.FormattedMessage.MessageDescriptor
  labelPin: ReactIntl.FormattedMessage.MessageDescriptor
  labelRole: ReactIntl.FormattedMessage.MessageDescriptor
  lastEdited: ReactIntl.FormattedMessage.MessageDescriptor
  name: ReactIntl.FormattedMessage.MessageDescriptor
  noNameProvided: ReactIntl.FormattedMessage.MessageDescriptor
  noResults: ReactIntl.FormattedMessage.MessageDescriptor
  pendingConnection: ReactIntl.FormattedMessage.MessageDescriptor
  performanceTitle: ReactIntl.FormattedMessage.MessageDescriptor
  reason: ReactIntl.FormattedMessage.MessageDescriptor
  registered: ReactIntl.FormattedMessage.MessageDescriptor
  rejected: ReactIntl.FormattedMessage.MessageDescriptor
  rejectedDays: ReactIntl.FormattedMessage.MessageDescriptor
  relationship: ReactIntl.FormattedMessage.MessageDescriptor
  review: ReactIntl.FormattedMessage.MessageDescriptor
  search: ReactIntl.FormattedMessage.MessageDescriptor
  sending: ReactIntl.FormattedMessage.MessageDescriptor
  sentOn: ReactIntl.FormattedMessage.MessageDescriptor
  status: ReactIntl.FormattedMessage.MessageDescriptor
  submissionStatus: ReactIntl.FormattedMessage.MessageDescriptor
  trackingId: ReactIntl.FormattedMessage.MessageDescriptor
  type: ReactIntl.FormattedMessage.MessageDescriptor
  update: ReactIntl.FormattedMessage.MessageDescriptor
  user: ReactIntl.FormattedMessage.MessageDescriptor
  username: ReactIntl.FormattedMessage.MessageDescriptor
  waitingToSend: ReactIntl.FormattedMessage.MessageDescriptor
}
const messagesToDefine: IConstantsMessages = {
  applicantContactNumber: {
    defaultMessage: 'Applicant contact number',
    description: 'The title of contact number label',
    id: 'constants.applicantContactNumber'
  },
  application: {
    defaultMessage: 'application',
    description: 'A label for application',
    id: 'constants.application'
  },
  applicationCollectedOn: {
    defaultMessage: 'Certificate collected on',
    description:
      'Label for the workflow timestamp when the status is collected',
    id: 'constants.applicationCollectedOn'
  },
  applicationFailedOn: {
    defaultMessage: 'Failed to send on',
    description: 'Label for the workflow timestamp when the status is failed',
    id: 'constants.applicationFailedOn'
  },
  applicationInformantLabel: {
    defaultMessage: 'Informant',
    description: 'Informant Label',
    id: 'constants.informant'
  },
  applicationRegisteredOn: {
    defaultMessage: 'Application registered on',
    description:
      'Label for the workflow timestamp when the status is registered',
    id: 'constants.applicationRegisteredOn'
  },
  applicationRejectedOn: {
    defaultMessage: 'Application rejected on',
    description: 'Label for the workflow timestamp when the status is rejected',
    id: 'constants.applicationRejectedOn'
  },
  applicationStartedOn: {
    defaultMessage: 'Started on',
    description:
      'Label for the workflow timestamp when the status is draft created',
    id: 'constants.applicationStartedOn'
  },
  applicationState: {
    defaultMessage: 'Application {action} on',
    description: 'A label to describe when the application was actioned on',
    id: 'constants.applicationState'
  },
  applicationSubmittedOn: {
    defaultMessage: 'Application submitted on',
    description:
      'Label for the workflow timestamp when the status is application',
    id: 'constants.applicationSubmittedOn'
  },
  applicationTitle: {
    defaultMessage: 'Applications',
    description: 'Application title',
    id: 'constants.applications'
  },
  applicationUpdatedOn: {
    defaultMessage: 'Updated on',
    description:
      'Label for the workflow timestamp when the status is draft updated',
    id: 'constants.applicationUpdatedOn'
  },
  applicationValidatedOn: {
    defaultMessage: 'Application reviewed on',
    description:
      'Label for the workflow timestamp when the status is validated',
    id: 'constants.applicationValidatedOn'
  },
  areYouSure: {
    defaultMessage: 'Are you sure?',
    description: 'Description for are you sure label in modals',
    id: 'constants.areYouSure'
  },
  birth: {
    defaultMessage: 'Birth',
    description: 'A label from the birth event',
    id: 'constants.birth'
  },
  by: {
    defaultMessage: 'By',
    description: 'Label for By (the person who performed the action)',
    id: 'constants.by'
  },
  certified: {
    defaultMessage: 'certified',
    description: 'A label for certified',
    id: 'constants.certified'
  },
  collected: {
    defaultMessage: 'collected',
    description: 'The status label for collected',
    id: 'constants.collected'
  },
  collectedBy: {
    defaultMessage: 'Collected by',
    description: 'The collected by sec text',
    id: 'constants.collectedBy'
  },
  comment: {
    defaultMessage: 'Comment',
    description: 'Label for rejection comment',
    id: 'constants.comment'
  },
  dateOfApplication: {
    defaultMessage: 'Date of application',
    description: 'Date of application label',
    id: 'constants.dateOfApplication'
  },
  death: {
    defaultMessage: 'Death',
    description: 'A label from the death event',
    id: 'constants.death'
  },
  declared: {
    defaultMessage: 'submitted',
    description: 'A label for submitted',
    id: 'constants.submitted'
  },
  dob: {
    defaultMessage: 'D.o.B.',
    description: 'Date of birth label',
    id: 'constants.dob'
  },
  dod: {
    defaultMessage: 'D.o.D',
    description: 'Label for DoD in work queue list item',
    id: 'constants.dod'
  },
  eventDate: {
    defaultMessage: 'Date of event',
    description: 'Label for event date in list item',
    id: 'constants.eventDate'
  },
  failedToSend: {
    defaultMessage: 'Failed to send',
    description: 'Label for application status Failed',
    id: 'constants.failedToSend'
  },
  gender: {
    defaultMessage: 'Gender',
    description: 'Gender label',
    id: 'constants.gender'
  },
  id: {
    defaultMessage: 'ID',
    description: 'ID Label',
    id: 'constants.id'
  },
  issuedBy: {
    defaultMessage: 'Issued by',
    description: 'The issued by sec text',
    id: 'constants.issuedBy'
  },
  labelLanguage: {
    defaultMessage: 'Language',
    description: 'language label',
    id: 'constants.language'
  },
  labelPassword: {
    defaultMessage: 'Password',
    description: 'Password label',
    id: 'constants.password'
  },
  labelPhone: {
    defaultMessage: 'Phone number',
    description: 'Phone label',
    id: 'constants.phoneNumber'
  },
  labelPin: {
    defaultMessage: 'PIN',
    description: 'PIN label',
    id: 'constants.PIN'
  },
  labelRole: {
    defaultMessage: 'Role',
    description: 'Role label',
    id: 'constants.role'
  },
  lastEdited: {
    defaultMessage: 'Last edited',
    description: 'Label for rejection date in work queue list item',
    id: 'constants.lastEdited'
  },
  name: {
    defaultMessage: 'Name',
    description: 'Name label',
    id: 'constants.name'
  },
  noNameProvided: {
    defaultMessage: 'No name provided',
    description: 'Label for empty title',
    id: 'constants.noNameProvided'
  },
  noResults: {
    defaultMessage: 'No result to display',
    description:
      'Text to display if the search return no results for the current filters',
    id: 'constants.noResults'
  },
  pendingConnection: {
    defaultMessage: 'Pending connection',
    description: 'Label for application status Pending Connection',
    id: 'constants.pendingConnection'
  },
  performanceTitle: {
    defaultMessage: 'Performance',
    description: 'Performance title',
    id: 'constants.performance'
  },
  reason: {
    defaultMessage: 'Reason',
    description: 'Label for Reason the application was rejected',
    id: 'constants.reason'
  },
  registered: {
    defaultMessage: 'registered',
    description: 'A label for registered',
    id: 'constants.registered'
  },
  rejected: {
    defaultMessage: 'rejected',
    description: 'A label for rejected',
    id: 'constants.rejected'
  },
  rejectedDays: {
    defaultMessage: 'Rejected {text}',
    description: 'The title of rejected days of application',
    id: 'constants.rejectedDays'
  },
  relationship: {
    defaultMessage: 'Relationship',
    description: 'Relationship Label for death',
    id: 'constants.relationship'
  },
  review: {
    defaultMessage: 'Review',
    description: 'A label from the review button',
    id: 'constants.review'
  },
  search: {
    defaultMessage: 'Search',
    description: 'The title of the page',
    id: 'constants.search'
  },
  sending: {
    defaultMessage: 'Sending...',
    description: 'Label for application status Submitting',
    id: 'constants.sending'
  },
  sentOn: {
    defaultMessage: 'Sent on',
    description: 'Label for rejection date in work queue list item',
    id: 'constants.sentOn'
  },
  status: {
    defaultMessage: 'Status',
    description: 'Title for column',
    id: 'constants.status'
  },
  submissionStatus: {
    defaultMessage: 'Submission status',
    description: 'Label for table header of column Submission status',
    id: 'constants.submissionStatus'
  },
  trackingId: {
    defaultMessage: 'Tracking ID',
    description: 'Search menu tracking id type',
    id: 'constants.trackingId'
  },
  type: {
    defaultMessage: 'Type',
    description: 'Label for type of event in work queue list item',
    id: 'constants.type'
  },
  update: {
    defaultMessage: 'Update',
    description: 'The title of reject button in list item actions',
    id: 'constants.update'
  },
  user: {
    defaultMessage: 'User',
    description: 'The name of the user form',
    id: 'constants.user'
  },
  username: {
    defaultMessage: 'Username',
    description: 'Username',
    id: 'constants.username'
  },
  waitingToSend: {
    defaultMessage: 'Waiting to send',
    description: 'Label for application status Ready to Submit',
    id: 'constants.waitingToSend'
  }
}

export const constantsMessages: IConstantsMessages = defineMessages(
  messagesToDefine
)

interface IDynamicConstants {
  [key: string]: ReactIntl.FormattedMessage.MessageDescriptor
}

const dynamicMessagesToDefine: IDynamicConstants = {
  declared: {
    id: 'constants.submitted',
    defaultMessage: 'submitted',
    description: 'A label for submitted'
  },
  rejected: {
    id: 'constants.rejected',
    defaultMessage: 'rejected',
    description: 'A label for rejected'
  },
  registered: {
    id: 'constants.registered',
    defaultMessage: 'registered',
    description: 'A label for registered'
  },
  certified: {
    id: 'constants.certified',
    defaultMessage: 'certified',
    description: 'A label for certified'
  },
  male: {
    id: 'constants.male',
    defaultMessage: 'Male',
    description: 'The duplicates text for male'
  },
  female: {
    id: 'constants.female',
    defaultMessage: 'Female',
    description: 'The duplicates text for female'
  },
  birth: {
    id: 'constants.birth',
    defaultMessage: 'Birth',
    description: 'A label from the birth event'
  },
  death: {
    id: 'constants.death',
    defaultMessage: 'Death',
    description: 'A label from the death event'
  },
  father: {
    id: 'form.field.label.applicantRelation.father',
    defaultMessage: 'Father',
    description: 'Label for option Father'
  },
  mother: {
    id: 'form.field.label.applicantRelation.mother',
    defaultMessage: 'Mother',
    description: 'Label for option Mother'
  },
  spouse: {
    id: 'form.field.label.applicantRelation.spouse',
    defaultMessage: 'Spouse',
    description: 'Label for option Spouse'
  },
  son: {
    id: 'form.field.label.applicantRelation.son',
    defaultMessage: 'Son',
    description: 'Label for option Son'
  },
  daughter: {
    id: 'form.field.label.applicantRelation.daughter',
    defaultMessage: 'Daughter',
    description: 'Label for option Daughter'
  },
  MOTHER: {
    id: 'form.field.label.applicantRelation.father',
    defaultMessage: 'Father',
    description: 'Label for option Father'
  },
  FATHER: {
    id: 'form.field.label.applicantRelation.father',
    defaultMessage: 'Father',
    description: 'Label for option Father'
  },
  BOTH_PARENTS: {
    id: 'register.selectInformant.parents',
    defaultMessage: 'Mother & Father',
    description:
      'The description that appears when selecting the parent as informant'
  },
  SELF: {
    defaultMessage: 'Self',
    description: 'The title that appears when selecting self as informant',
    id: 'form.field.label.self'
  },
  OTHER: {
    defaultMessage: 'Someone else',
    description: 'Other Label',
    id: 'form.field.label.someoneElse'
  },
  SPOUSE: {
    id: 'form.field.label.applicantRelation.spouse',
    defaultMessage: 'Spouse',
    description: 'Label for option Spouse'
  },
  SON: {
    id: 'form.field.label.applicantRelation.son',
    defaultMessage: 'Son',
    description: 'Label for option Son'
  },
  DAUGHTER: {
    id: 'form.field.label.applicantRelation.daughter',
    defaultMessage: 'Daughter',
    description: 'Label for option Daughter'
  },
  EXTENDED_FAMILY: {
    defaultMessage: 'Extended Family',
    description: 'Label for option Extended Family',
    id: 'form.field.label.applicantRelation.extendedFamily'
  },
  SOMEONE_ELSE: {
    defaultMessage: 'Someone else',
    description: 'Other Label',
    id: 'form.field.label.someoneElse'
  }
}

export const dynamicConstantsMessages: IDynamicConstants = defineMessages(
  dynamicMessagesToDefine
)

const countryMessagesToDefine: IDynamicConstants = {
  AFG: {
    id: 'countries.AFG',
    defaultMessage: 'Afghanistan',
    description: 'ISO Country: AFG'
  },
  ALA: {
    id: 'countries.ALA',
    defaultMessage: 'Åland Islands',
    description: 'ISO Country: ALA'
  },
  ALB: {
    id: 'countries.ALB',
    defaultMessage: 'Albania',
    description: 'ISO Country: ALB'
  },
  DZA: {
    id: 'countries.DZA',
    defaultMessage: 'Algeria',
    description: 'ISO Country: DZA'
  },
  ASM: {
    id: 'countries.ASM',
    defaultMessage: 'American Samoa',
    description: 'ISO Country: ASM'
  },
  AND: {
    id: 'countries.AND',
    defaultMessage: 'Andorra',
    description: 'ISO Country: AND'
  },
  AGO: {
    id: 'countries.AGO',
    defaultMessage: 'Angola',
    description: 'ISO Country: AGO'
  },
  AIA: {
    id: 'countries.AIA',
    defaultMessage: 'Anguilla',
    description: 'ISO Country: AIA'
  },
  ATA: {
    id: 'countries.ATA',
    defaultMessage: 'Antarctica',
    description: 'ISO Country: ATA'
  },
  ATG: {
    id: 'countries.ATG',
    defaultMessage: 'Antigua and Barbuda',
    description: 'ISO Country: ATG'
  },
  ARG: {
    id: 'countries.ARG',
    defaultMessage: 'Argentina',
    description: 'ISO Country: ARG'
  },
  ARM: {
    id: 'countries.ARM',
    defaultMessage: 'Armenia',
    description: 'ISO Country: ARM'
  },
  ABW: {
    id: 'countries.ABW',
    defaultMessage: 'Aruba',
    description: 'ISO Country: ABW'
  },
  AUS: {
    id: 'countries.AUS',
    defaultMessage: 'Australia',
    description: 'ISO Country: AUS'
  },
  AUT: {
    id: 'countries.AUT',
    defaultMessage: 'Austria',
    description: 'ISO Country: AUT'
  },
  AZE: {
    id: 'countries.AZE',
    defaultMessage: 'Azerbaijan',
    description: 'ISO Country: AZE'
  },
  BHS: {
    id: 'countries.BHS',
    defaultMessage: 'Bahamas',
    description: 'ISO Country: BHS'
  },
  BHR: {
    id: 'countries.BHR',
    defaultMessage: 'Bahrain',
    description: 'ISO Country: BHR'
  },
  BGD: {
    id: 'countries.BGD',
    defaultMessage: 'Bangladesh',
    description: 'ISO Country: BGD'
  },
  BRB: {
    id: 'countries.BRB',
    defaultMessage: 'Barbados',
    description: 'ISO Country: BRB'
  },
  BLR: {
    id: 'countries.BLR',
    defaultMessage: 'Belarus',
    description: 'ISO Country: BLR'
  },
  BEL: {
    id: 'countries.BEL',
    defaultMessage: 'Belgium',
    description: 'ISO Country: BEL'
  },
  BLZ: {
    id: 'countries.BLZ',
    defaultMessage: 'Belize',
    description: 'ISO Country: BLZ'
  },
  BEN: {
    id: 'countries.BEN',
    defaultMessage: 'Benin',
    description: 'ISO Country: BEN'
  },
  BMU: {
    id: 'countries.BMU',
    defaultMessage: 'Bermuda',
    description: 'ISO Country: BMU'
  },
  BTN: {
    id: 'countries.BTN',
    defaultMessage: 'Bhutan',
    description: 'ISO Country: BTN'
  },
  BOL: {
    id: 'countries.BOL',
    defaultMessage: 'Bolivia (Plurinational State of)',
    description: 'ISO Country: BOL'
  },
  BES: {
    id: 'countries.BES',
    defaultMessage: 'Bonaire, Sint Eustatius and Saba',
    description: 'ISO Country: BES'
  },
  BIH: {
    id: 'countries.BIH',
    defaultMessage: 'Bosnia and Herzegovina',
    description: 'ISO Country: BIH'
  },
  BWA: {
    id: 'countries.BWA',
    defaultMessage: 'Botswana',
    description: 'ISO Country: BWA'
  },
  BVT: {
    id: 'countries.BVT',
    defaultMessage: 'Bouvet Island',
    description: 'ISO Country: BVT'
  },
  BRA: {
    id: 'countries.BRA',
    defaultMessage: 'Brazil',
    description: 'ISO Country: BRA'
  },
  IOT: {
    id: 'countries.IOT',
    defaultMessage: 'British Indian Ocean Territory',
    description: 'ISO Country: IOT'
  },
  VGB: {
    id: 'countries.VGB',
    defaultMessage: 'British Virgin Islands',
    description: 'ISO Country: VGB'
  },
  BRN: {
    id: 'countries.BRN',
    defaultMessage: 'Brunei Darussalam',
    description: 'ISO Country: BRN'
  },
  BGR: {
    id: 'countries.BGR',
    defaultMessage: 'Bulgaria',
    description: 'ISO Country: BGR'
  },
  BFA: {
    id: 'countries.BFA',
    defaultMessage: 'Burkina Faso',
    description: 'ISO Country: BFA'
  },
  BDI: {
    id: 'countries.BDI',
    defaultMessage: 'Burundi',
    description: 'ISO Country: BDI'
  },
  CPV: {
    id: 'countries.CPV',
    defaultMessage: 'Cabo Verde',
    description: 'ISO Country: CPV'
  },
  KHM: {
    id: 'countries.KHM',
    defaultMessage: 'Cambodia',
    description: 'ISO Country: KHM'
  },
  CMR: {
    id: 'countries.CMR',
    defaultMessage: 'Cameroon',
    description: 'ISO Country: CMR'
  },
  CAN: {
    id: 'countries.CAN',
    defaultMessage: 'Canada',
    description: 'ISO Country: CAN'
  },
  CYM: {
    id: 'countries.CYM',
    defaultMessage: 'Cayman Islands',
    description: 'ISO Country: CYM'
  },
  CAF: {
    id: 'countries.CAF',
    defaultMessage: 'Central African Republic',
    description: 'ISO Country: CAF'
  },
  TCD: {
    id: 'countries.TCD',
    defaultMessage: 'Chad',
    description: 'ISO Country: TCD'
  },
  CHL: {
    id: 'countries.CHL',
    defaultMessage: 'Chile',
    description: 'ISO Country: CHL'
  },
  CHN: {
    id: 'countries.CHN',
    defaultMessage: 'China',
    description: 'ISO Country: CHN'
  },
  HKG: {
    id: 'countries.HKG',
    defaultMessage: '"China, Hong Kong Special Administrative Region"',
    description: 'ISO Country: HKG'
  },
  MAC: {
    id: 'countries.MAC',
    defaultMessage: '"China, Macao Special Administrative Region"',
    description: 'ISO Country: MAC'
  },
  CXR: {
    id: 'countries.CXR',
    defaultMessage: 'Christmas Island',
    description: 'ISO Country: CXR'
  },
  CCK: {
    id: 'countries.CCK',
    defaultMessage: 'Cocos (Keeling) Islands',
    description: 'ISO Country: CCK'
  },
  COL: {
    id: 'countries.COL',
    defaultMessage: 'Colombia',
    description: 'ISO Country: COL'
  },
  COM: {
    id: 'countries.COM',
    defaultMessage: 'Comoros',
    description: 'ISO Country: COM'
  },
  COG: {
    id: 'countries.COG',
    defaultMessage: 'Congo',
    description: 'ISO Country: COG'
  },
  COK: {
    id: 'countries.COK',
    defaultMessage: 'Cook Islands',
    description: 'ISO Country: COK'
  },
  CRI: {
    id: 'countries.CRI',
    defaultMessage: 'Costa Rica',
    description: 'ISO Country: CRI'
  },
  CIV: {
    id: 'countries.CIV',
    defaultMessage: "Côte d'Ivoire",
    description: 'ISO Country: CIV'
  },
  HRV: {
    id: 'countries.HRV',
    defaultMessage: 'Croatia',
    description: 'ISO Country: HRV'
  },
  CUB: {
    id: 'countries.CUB',
    defaultMessage: 'Cuba',
    description: 'ISO Country: CUB'
  },
  CUW: {
    id: 'countries.CUW',
    defaultMessage: 'Curaçao',
    description: 'ISO Country: CUW'
  },
  CYP: {
    id: 'countries.CYP',
    defaultMessage: 'Cyprus',
    description: 'ISO Country: CYP'
  },
  CZE: {
    id: 'countries.CZE',
    defaultMessage: 'Czechia',
    description: 'ISO Country: CZE'
  },
  PRK: {
    id: 'countries.PRK',
    defaultMessage: "Democratic People's Republic of Korea",
    description: 'PRK'
  },
  COD: {
    id: 'countries.COD',
    defaultMessage: 'Democratic Republic of the Congo',
    description: 'ISO Country: COD'
  },
  DNK: {
    id: 'countries.DNK',
    defaultMessage: 'Denmark',
    description: 'ISO Country: DNK'
  },
  DJI: {
    id: 'countries.DJI',
    defaultMessage: 'Djibouti',
    description: 'ISO Country: DJI'
  },
  DMA: {
    id: 'countries.DMA',
    defaultMessage: 'Dominica',
    description: 'ISO Country: DMA'
  },
  DOM: {
    id: 'countries.DOM',
    defaultMessage: 'Dominican Republic',
    description: 'ISO Country: DOM'
  },
  ECU: {
    id: 'countries.ECU',
    defaultMessage: 'Ecuador',
    description: 'ISO Country: ECU'
  },
  EGY: {
    id: 'countries.EGY',
    defaultMessage: 'Egypt',
    description: 'ISO Country: EGY'
  },
  SLV: {
    id: 'countries.SLV',
    defaultMessage: 'El Salvador',
    description: 'ISO Country: SLV'
  },
  GNQ: {
    id: 'countries.GNQ',
    defaultMessage: 'Equatorial Guinea',
    description: 'ISO Country: GNQ'
  },
  ERI: {
    id: 'countries.ERI',
    defaultMessage: 'Eritrea',
    description: 'ISO Country: ERI'
  },
  EST: {
    id: 'countries.EST',
    defaultMessage: 'Estonia',
    description: 'ISO Country: EST'
  },
  SWZ: {
    id: 'countries.SWZ',
    defaultMessage: 'Eswatini',
    description: 'ISO Country: SWZ'
  },
  ETH: {
    id: 'countries.ETH',
    defaultMessage: 'Ethiopia',
    description: 'ISO Country: ETH'
  },
  FLK: {
    id: 'countries.FLK',
    defaultMessage: 'Falkland Islands (Malvinas)',
    description: 'ISO Country: FLK'
  },
  FRO: {
    id: 'countries.FRO',
    defaultMessage: 'Faroe Islands',
    description: 'ISO Country: FRO'
  },
  FJI: {
    id: 'countries.FJI',
    defaultMessage: 'Fiji',
    description: 'ISO Country: FJI'
  },
  FIN: {
    id: 'countries.FIN',
    defaultMessage: 'Finland',
    description: 'ISO Country: FIN'
  },
  FRA: {
    id: 'countries.FRA',
    defaultMessage: 'France',
    description: 'ISO Country: FRA'
  },
  GUF: {
    id: 'countries.GUF',
    defaultMessage: 'French Guiana',
    description: 'ISO Country: GUF'
  },
  PYF: {
    id: 'countries.PYF',
    defaultMessage: 'French Polynesia',
    description: 'ISO Country: PYF'
  },
  ATF: {
    id: 'countries.ATF',
    defaultMessage: 'French Southern Territories',
    description: 'ISO Country: ATF'
  },
  GAB: {
    id: 'countries.GAB',
    defaultMessage: 'Gabon',
    description: 'ISO Country: GAB'
  },
  GMB: {
    id: 'countries.GMB',
    defaultMessage: 'Gambia',
    description: 'ISO Country: GMB'
  },
  GEO: {
    id: 'countries.GEO',
    defaultMessage: 'Georgia',
    description: 'ISO Country: GEO'
  },
  DEU: {
    id: 'countries.DEU',
    defaultMessage: 'Germany',
    description: 'ISO Country: DEU'
  },
  GHA: {
    id: 'countries.GHA',
    defaultMessage: 'Ghana',
    description: 'ISO Country: GHA'
  },
  GIB: {
    id: 'countries.GIB',
    defaultMessage: 'Gibraltar',
    description: 'ISO Country: GIB'
  },
  GRC: {
    id: 'countries.GRC',
    defaultMessage: 'Greece',
    description: 'ISO Country: GRC'
  },
  GRL: {
    id: 'countries.GRL',
    defaultMessage: 'Greenland',
    description: 'ISO Country: GRL'
  },
  GRD: {
    id: 'countries.GRD',
    defaultMessage: 'Grenada',
    description: 'ISO Country: GRD'
  },
  GLP: {
    id: 'countries.GLP',
    defaultMessage: 'Guadeloupe',
    description: 'ISO Country: GLP'
  },
  GUM: {
    id: 'countries.GUM',
    defaultMessage: 'Guam',
    description: 'ISO Country: GUM'
  },
  GTM: {
    id: 'countries.GTM',
    defaultMessage: 'Guatemala',
    description: 'ISO Country: GTM'
  },
  GGY: {
    id: 'countries.GGY',
    defaultMessage: 'Guernsey',
    description: 'ISO Country: GGY'
  },
  GIN: {
    id: 'countries.GIN',
    defaultMessage: 'Guinea',
    description: 'ISO Country: GIN'
  },
  GNB: {
    id: 'countries.GNB',
    defaultMessage: 'Guinea-Bissau',
    description: 'ISO Country: GNB'
  },
  GUY: {
    id: 'countries.GUY',
    defaultMessage: 'Guyana',
    description: 'ISO Country: GUY'
  },
  HTI: {
    id: 'countries.HTI',
    defaultMessage: 'Haiti',
    description: 'ISO Country: HTI'
  },
  HMD: {
    id: 'countries.HMD',
    defaultMessage: 'Heard Island and McDonald Islands',
    description: 'ISO Country: HMD'
  },
  VAT: {
    id: 'countries.VAT',
    defaultMessage: 'Holy See',
    description: 'ISO Country: VAT'
  },
  HND: {
    id: 'countries.HND',
    defaultMessage: 'Honduras',
    description: 'ISO Country: HND'
  },
  HUN: {
    id: 'countries.HUN',
    defaultMessage: 'Hungary',
    description: 'ISO Country: HUN'
  },
  ISL: {
    id: 'countries.ISL',
    defaultMessage: 'Iceland',
    description: 'ISO Country: ISL'
  },
  IND: {
    id: 'countries.IND',
    defaultMessage: 'India',
    description: 'ISO Country: IND'
  },
  IDN: {
    id: 'countries.IDN',
    defaultMessage: 'Indonesia',
    description: 'ISO Country: IDN'
  },
  IRN: {
    id: 'countries.IRN',
    defaultMessage: 'Iran (Islamic Republic of)',
    description: 'ISO Country: IRN'
  },
  IRQ: {
    id: 'countries.IRQ',
    defaultMessage: 'Iraq',
    description: 'ISO Country: IRQ'
  },
  IRL: {
    id: 'countries.IRL',
    defaultMessage: 'Ireland',
    description: 'ISO Country: IRL'
  },
  IMN: {
    id: 'countries.IMN',
    defaultMessage: 'Isle of Man',
    description: 'ISO Country: IMN'
  },
  ISR: {
    id: 'countries.ISR',
    defaultMessage: 'Israel',
    description: 'ISO Country: ISR'
  },
  ITA: {
    id: 'countries.ITA',
    defaultMessage: 'Italy',
    description: 'ISO Country: ITA'
  },
  JAM: {
    id: 'countries.JAM',
    defaultMessage: 'Jamaica',
    description: 'ISO Country: JAM'
  },
  JPN: {
    id: 'countries.JPN',
    defaultMessage: 'Japan',
    description: 'ISO Country: JPN'
  },
  JEY: {
    id: 'countries.JEY',
    defaultMessage: 'Jersey',
    description: 'ISO Country: JEY'
  },
  JOR: {
    id: 'countries.JOR',
    defaultMessage: 'Jordan',
    description: 'ISO Country: JOR'
  },
  KAZ: {
    id: 'countries.KAZ',
    defaultMessage: 'Kazakhstan',
    description: 'ISO Country: KAZ'
  },
  KEN: {
    id: 'countries.KEN',
    defaultMessage: 'Kenya',
    description: 'ISO Country: KEN'
  },
  KIR: {
    id: 'countries.KIR',
    defaultMessage: 'Kiribati',
    description: 'ISO Country: KIR'
  },
  KWT: {
    id: 'countries.KWT',
    defaultMessage: 'Kuwait',
    description: 'ISO Country: KWT'
  },
  KGZ: {
    id: 'countries.KGZ',
    defaultMessage: 'Kyrgyzstan',
    description: 'ISO Country: KGZ'
  },
  LAO: {
    id: 'countries.KGZ',
    defaultMessage: "Lao People's Democratic Republic Republic",
    description: 'ISO Country: LAO'
  },
  LVA: {
    id: 'countries.LVA',
    defaultMessage: 'Latvia',
    description: 'ISO Country: LVA'
  },
  LBN: {
    id: 'countries.LBN',
    defaultMessage: 'Lebanon',
    description: 'ISO Country: LBN'
  },
  LSO: {
    id: 'countries.LSO',
    defaultMessage: 'Lesotho',
    description: 'ISO Country: LSO'
  },
  LBR: {
    id: 'countries.LBR',
    defaultMessage: 'Liberia',
    description: 'ISO Country: LBR'
  },
  LBY: {
    id: 'countries.LBY',
    defaultMessage: 'Libya',
    description: 'ISO Country: LBY'
  },
  LIE: {
    id: 'countries.LIE',
    defaultMessage: 'Liechtenstein',
    description: 'ISO Country: LIE'
  },
  LTU: {
    id: 'countries.LTU',
    defaultMessage: 'Lithuania',
    description: 'ISO Country: LTU'
  },
  LUX: {
    id: 'countries.LUX',
    defaultMessage: 'Luxembourg',
    description: 'ISO Country: LUX'
  },
  MDG: {
    id: 'countries.MDG',
    defaultMessage: 'Madagascar',
    description: 'ISO Country: MDG'
  },
  MWI: {
    id: 'countries.MWI',
    defaultMessage: 'Malawi',
    description: 'ISO Country: MWI'
  },
  MYS: {
    id: 'countries.MYS',
    defaultMessage: 'Malaysia',
    description: 'ISO Country: MYS'
  },
  MDV: {
    id: 'countries.MDV',
    defaultMessage: 'Maldives',
    description: 'ISO Country: MDV'
  },
  MLI: {
    id: 'countries.MLI',
    defaultMessage: 'Mali',
    description: 'ISO Country: MLI'
  },
  MLT: {
    id: 'countries.MLT',
    defaultMessage: 'Malta',
    description: 'ISO Country: MLT'
  },
  MHL: {
    id: 'countries.MHL',
    defaultMessage: 'Marshall Islands',
    description: 'ISO Country: MHL'
  },
  MTQ: {
    id: 'countries.MTQ',
    defaultMessage: 'Martinique',
    description: 'ISO Country: MTQ'
  },
  MRT: {
    id: 'countries.MRT',
    defaultMessage: 'Mauritania',
    description: 'ISO Country: MRT'
  },
  MUS: {
    id: 'countries.MUS',
    defaultMessage: 'Mauritius',
    description: 'ISO Country: MUS'
  },
  MYT: {
    id: 'countries.MYT',
    defaultMessage: 'Mayotte',
    description: 'ISO Country: MYT'
  },
  MEX: {
    id: 'countries.MEX',
    defaultMessage: 'Mexico',
    description: 'ISO Country: MEX'
  },
  FSM: {
    id: 'countries.FSM',
    defaultMessage: 'Micronesia (Federated States of)',
    description: 'ISO Country: FSM'
  },

  MCO: {
    id: 'countries.MCO',
    defaultMessage: 'Monaco',
    description: 'ISO Country: MCO'
  },
  MNG: {
    id: 'countries.MNG',
    defaultMessage: 'Mongolia',
    description: 'ISO Country: MNG'
  },
  MNE: {
    id: 'countries.MNE',
    defaultMessage: 'Montenegro',
    description: 'ISO Country: MNE'
  },
  MSR: {
    id: 'countries.MSR',
    defaultMessage: 'Montserrat',
    description: 'ISO Country: MSR'
  },
  MAR: {
    id: 'countries.MAR',
    defaultMessage: 'Morocco',
    description: 'ISO Country: MAR'
  },
  MOZ: {
    id: 'countries.MOZ',
    defaultMessage: 'Mozambique',
    description: 'ISO Country: MOZ'
  },
  MMR: {
    id: 'countries.MMR',
    defaultMessage: 'Myanmar',
    description: 'ISO Country: MMR'
  },
  NAM: {
    id: 'countries.NAM',
    defaultMessage: 'Namibia',
    description: 'ISO Country: NAM'
  },
  NRU: {
    id: 'countries.NRU',
    defaultMessage: 'Nauru',
    description: 'ISO Country: NRU'
  },
  NPL: {
    id: 'countries.NPL',
    defaultMessage: 'Nepal',
    description: 'ISO Country: NPL'
  },
  NLD: {
    id: 'countries.NLD',
    defaultMessage: 'Netherlands',
    description: 'ISO Country: NLD'
  },
  NCL: {
    id: 'countries.NCL',
    defaultMessage: 'New Caledonia',
    description: 'ISO Country: NCL'
  },
  NZL: {
    id: 'countries.NZL',
    defaultMessage: 'New Zealand',
    description: 'ISO Country: NZL'
  },
  NIC: {
    id: 'countries.NIC',
    defaultMessage: 'Nicaragua',
    description: 'ISO Country: NIC'
  },
  NER: {
    id: 'countries.NER',
    defaultMessage: 'Niger',
    description: 'ISO Country: NER'
  },
  NGA: {
    id: 'countries.NGA',
    defaultMessage: 'Nigeria',
    description: 'ISO Country: NGA'
  },
  NIU: {
    id: 'countries.NIU',
    defaultMessage: 'Niue',
    description: 'ISO Country: NIU'
  },
  NFK: {
    id: 'countries.NFK',
    defaultMessage: 'Norfolk Island',
    description: 'ISO Country: NFK'
  },
  MNP: {
    id: 'countries.MNP',
    defaultMessage: 'Northern Mariana Islands',
    description: 'ISO Country: MNP'
  },
  NOR: {
    id: 'countries.NOR',
    defaultMessage: 'Norway',
    description: 'ISO Country: NOR'
  },
  OMN: {
    id: 'countries.OMN',
    defaultMessage: 'Oman',
    description: 'ISO Country: OMN'
  },
  PAK: {
    id: 'countries.PAK',
    defaultMessage: 'Pakistan',
    description: 'ISO Country: PAK'
  },
  PLW: {
    id: 'countries.PLW',
    defaultMessage: 'Palau',
    description: 'ISO Country: PLW'
  },
  PAN: {
    id: 'countries.PAN',
    defaultMessage: 'Panama',
    description: 'ISO Country: PAN'
  },
  PNG: {
    id: 'countries.PNG',
    defaultMessage: 'Papua New Guinea',
    description: 'ISO Country: PNG'
  },
  PRY: {
    id: 'countries.PRY',
    defaultMessage: 'Paraguay',
    description: 'ISO Country: PRY'
  },
  PER: {
    id: 'countries.PER',
    defaultMessage: 'Peru',
    description: 'ISO Country: PER'
  },
  PHL: {
    id: 'countries.PHL',
    defaultMessage: 'Philippines',
    description: 'ISO Country: PHL'
  },
  PCN: {
    id: 'countries.PCN',
    defaultMessage: 'Pitcairn',
    description: 'ISO Country: PCN'
  },
  POL: {
    id: 'countries.POL',
    defaultMessage: 'Poland',
    description: 'ISO Country: POL'
  },
  PRT: {
    id: 'countries.PRT',
    defaultMessage: 'Portugal',
    description: 'ISO Country: PRT'
  },
  PRI: {
    id: 'countries.PRI',
    defaultMessage: 'Puerto Rico',
    description: 'ISO Country: PRI'
  },
  QAT: {
    id: 'countries.QAT',
    defaultMessage: 'Qatar',
    description: 'ISO Country: QAT'
  },
  KOR: {
    id: 'countries.KOR',
    defaultMessage: 'Republic of Korea',
    description: 'ISO Country: KOR'
  },
  MDA: {
    id: 'countries.MDA',
    defaultMessage: 'Republic of Moldova',
    description: 'ISO Country: MDA'
  },
  REU: {
    id: 'countries.REU',
    defaultMessage: 'Réunion',
    description: 'ISO Country: REU'
  },
  ROU: {
    id: 'countries.ROU',
    defaultMessage: 'Romania',
    description: 'ISO Country: ROU'
  },
  RUS: {
    id: 'countries.RUS',
    defaultMessage: 'Russian Federation',
    description: 'ISO Country: RUS'
  },
  RWA: {
    id: 'countries.RWA',
    defaultMessage: 'Rwanda',
    description: 'ISO Country: RWA'
  },
  BLM: {
    id: 'countries.BLM',
    defaultMessage: 'Saint Barthélemy',
    description: 'ISO Country: BLM'
  },
  SHN: {
    id: 'countries.SHN',
    defaultMessage: 'Saint Helena',
    description: 'ISO Country: SHN'
  },
  KNA: {
    id: 'countries.KNA',
    defaultMessage: 'Saint Kitts and Nevis',
    description: 'ISO Country: KNA'
  },
  LCA: {
    id: 'countries.LCA',
    defaultMessage: 'Saint Lucia',
    description: 'ISO Country: LCA'
  },
  MAF: {
    id: 'countries.MAF',
    defaultMessage: 'Saint Martin (French Part)',
    description: 'ISO Country: MAF'
  },
  SPM: {
    id: 'countries.SPM',
    defaultMessage: 'Saint Pierre and Miquelon',
    description: 'ISO Country: SPM'
  },
  VCT: {
    id: 'countries.VCT',
    defaultMessage: 'Saint Vincent and the Grenadines',
    description: 'ISO Country: VCT'
  },
  WSM: {
    id: 'countries.WSM',
    defaultMessage: 'Samoa',
    description: 'ISO Country: WSM'
  },
  SMR: {
    id: 'countries.SMR',
    defaultMessage: 'San Marino',
    description: 'ISO Country: SMR'
  },
  STP: {
    id: 'countries.STP',
    defaultMessage: 'Sao Tome and Principe',
    description: 'ISO Country: STP'
  },
  SAU: {
    id: 'countries.SAU',
    defaultMessage: 'Saudi Arabia',
    description: 'ISO Country: SAU'
  },
  SEN: {
    id: 'countries.SEN',
    defaultMessage: 'Senegal',
    description: 'ISO Country: SEN'
  },
  SRB: {
    id: 'countries.SRB',
    defaultMessage: 'Serbia',
    description: 'ISO Country: SRB'
  },
  SYC: {
    id: 'countries.SYC',
    defaultMessage: 'Seychelles',
    description: 'ISO Country: SYC'
  },
  SLE: {
    id: 'countries.SLE',
    defaultMessage: 'Sierra Leone',
    description: 'ISO Country: SLE'
  },
  SGP: {
    id: 'countries.SGP',
    defaultMessage: 'Singapore',
    description: 'ISO Country: SGP'
  },
  SXM: {
    id: 'countries.SXM',
    defaultMessage: 'Sint Maarten (Dutch part)',
    description: 'ISO Country: SXM'
  },
  SVK: {
    id: 'countries.SVK',
    defaultMessage: 'Slovakia',
    description: 'ISO Country: SVK'
  },
  SVN: {
    id: 'countries.SVN',
    defaultMessage: 'Slovenia',
    description: 'ISO Country: SVN'
  },
  SLB: {
    id: 'countries.SLB',
    defaultMessage: 'Solomon Islands',
    description: 'ISO Country: SLB'
  },
  SOM: {
    id: 'countries.SOM',
    defaultMessage: 'Somalia',
    description: 'ISO Country: SOM'
  },
  ZAF: {
    id: 'countries.ZAF',
    defaultMessage: 'South Africa',
    description: 'ISO Country: ZAF'
  },
  SGS: {
    id: 'countries.SGS',
    defaultMessage: 'South Georgia and the South Sandwich Islands',
    description: 'ISO Country: SGS'
  },
  SSD: {
    id: 'countries.SSD',
    defaultMessage: 'South Sudan',
    description: 'ISO Country: SSD'
  },
  ESP: {
    id: 'countries.ESP',
    defaultMessage: 'Spain',
    description: 'ISO Country: ESP'
  },
  LKA: {
    id: 'countries.LKA',
    defaultMessage: 'Sri Lanka',
    description: 'ISO Country: LKA'
  },
  PSE: {
    id: 'countries.PSE',
    defaultMessage: 'State of Palestine',
    description: 'ISO Country: PSE'
  },
  SDN: {
    id: 'countries.SDN',
    defaultMessage: 'Sudan',
    description: 'ISO Country: SDN'
  },
  SUR: {
    id: 'countries.SUR',
    defaultMessage: 'Suriname',
    description: 'ISO Country: SUR'
  },
  SJM: {
    id: 'countries.SJM',
    defaultMessage: 'Svalbard and Jan Mayen Islands',
    description: 'ISO Country: SJM'
  },
  SWE: {
    id: 'countries.SWE',
    defaultMessage: 'Sweden',
    description: 'ISO Country: SWE'
  },
  CHE: {
    id: 'countries.CHE',
    defaultMessage: 'Switzerland',
    description: 'ISO Country: CHE'
  },
  SYR: {
    id: 'countries.SYR',
    defaultMessage: 'Syrian Arab Republic',
    description: 'ISO Country: SYR'
  },
  TJK: {
    id: 'countries.TJK',
    defaultMessage: 'Tajikistan',
    description: 'ISO Country: TJK'
  },
  THA: {
    id: 'countries.THA',
    defaultMessage: 'Thailand',
    description: 'ISO Country: THA'
  },
  MKD: {
    id: 'countries.MKD',
    defaultMessage: 'The former Yugoslav Republic of Macedonia',
    description: 'ISO Country: MKD'
  },
  TLS: {
    id: 'countries.TLS',
    defaultMessage: 'Timor-Leste',
    description: 'ISO Country: TLS'
  },
  TGO: {
    id: 'countries.TGO',
    defaultMessage: 'Togo',
    description: 'ISO Country: TGO'
  },
  TKL: {
    id: 'countries.TKL',
    defaultMessage: 'Tokelau',
    description: 'ISO Country: TKL'
  },
  TON: {
    id: 'countries.TON',
    defaultMessage: 'Tonga',
    description: 'ISO Country: TON'
  },
  TTO: {
    id: 'countries.TTO',
    defaultMessage: 'Trinidad and Tobago',
    description: 'ISO Country: TTO'
  },
  TUN: {
    id: 'countries.TUN',
    defaultMessage: 'Tunisia',
    description: 'ISO Country: TUN'
  },
  TUR: {
    id: 'countries.TUR',
    defaultMessage: 'Turkey',
    description: 'ISO Country: TUR'
  },
  TKM: {
    id: 'countries.TKM',
    defaultMessage: 'Turkmenistan',
    description: 'ISO Country: TKM'
  },
  TCA: {
    id: 'countries.TCA',
    defaultMessage: 'Turks and Caicos Islands',
    description: 'ISO Country: TCA'
  },
  TUV: {
    id: 'countries.TUV',
    defaultMessage: 'Tuvalu',
    description: 'ISO Country: TUV'
  },
  UGA: {
    id: 'countries.UGA',
    defaultMessage: 'Uganda',
    description: 'ISO Country: UGA'
  },
  UKR: {
    id: 'countries.UKR',
    defaultMessage: 'Ukraine',
    description: 'ISO Country: UKR'
  },
  ARE: {
    id: 'countries.ARE',
    defaultMessage: 'United Arab Emirates',
    description: 'ISO Country: ARE'
  },
  GBR: {
    id: 'countries.GBR',
    defaultMessage: 'United Kingdom of Great Britain and Northern Ireland',
    description: 'ISO Country: GBR'
  },
  TZA: {
    id: 'countries.TZA',
    defaultMessage: 'United Republic of Tanzania',
    description: 'ISO Country: TZA'
  },
  UMI: {
    id: 'countries.UMI',
    defaultMessage: 'United States Minor Outlying Islands',
    description: 'ISO Country: UMI'
  },
  USA: {
    id: 'countries.USA',
    defaultMessage: 'United States of America',
    description: 'ISO Country: USA'
  },
  VIR: {
    id: 'countries.VIR',
    defaultMessage: 'United States Virgin Islands',
    description: 'ISO Country: VIR'
  },
  URY: {
    id: 'countries.URY',
    defaultMessage: 'Uruguay',
    description: 'ISO Country: URY'
  },
  UZB: {
    id: 'countries.UZB',
    defaultMessage: 'Uzbekistan',
    description: 'ISO Country: UZB'
  },
  VUT: {
    id: 'countries.VUT',
    defaultMessage: 'Vanuatu',
    description: 'ISO Country: VUT'
  },
  VEN: {
    id: 'countries.VEN',
    defaultMessage: 'Venezuela (Bolivarian Republic of)',
    description: 'ISO Country: VEN'
  },
  VNM: {
    id: 'countries.VNM',
    defaultMessage: 'Viet Nam',
    description: 'ISO Country: VNM'
  },
  WLF: {
    id: 'countries.WLF',
    defaultMessage: 'Wallis and Futuna Islands',
    description: 'ISO Country: WLF'
  },
  ESH: {
    id: 'countries.ESH',
    defaultMessage: 'Western Sahara',
    description: 'ISO Country: ESH'
  },
  YEM: {
    id: 'countries.YEM',
    defaultMessage: 'Yemen',
    description: 'ISO Country: YEM'
  },
  ZMB: {
    id: 'countries.ZMB',
    defaultMessage: 'Zambia',
    description: 'ISO Country: ZMB'
  },
  ZWE: {
    id: 'countries.ZWE',
    defaultMessage: 'Zimbabwe',
    description: 'ISO Country ZWE'
  }
}

export const countryMessages: IDynamicConstants = defineMessages(
  countryMessagesToDefine
)