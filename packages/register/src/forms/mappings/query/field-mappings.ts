import { IFormField, IFormData, IFormFieldValue, IAttachment } from '../..'
import { GQLHumanName } from '@opencrvs/gateway/src/graphql/schema'

export const nameFieldTransformer = (
  language: string,
  nameKey: string,
  transformedFieldName?: string
) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  const selectedName =
    queryData[sectionId] &&
    queryData[sectionId].name &&
    (queryData[sectionId].name as GQLHumanName[]).find(
      name => name.use === language
    )
  if (!selectedName || !selectedName[nameKey]) {
    return transformedData
  }
  if (!transformedData[sectionId]) {
    transformedData[sectionId] = {}
  }
  transformedData[sectionId][
    transformedFieldName ? transformedFieldName : field.name
  ] = selectedName[nameKey]
  return transformedData
}

export const fieldValueTransformer = (transformedFieldName: string) => (
  transformedData: IFormData,
  queryData: any,
  sectionId: string,
  field: IFormField
) => {
  transformedData[sectionId][field.name] =
    queryData[sectionId][transformedFieldName]
  return transformedData
}
