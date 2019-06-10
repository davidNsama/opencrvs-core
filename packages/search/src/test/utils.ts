export const mockBirthFhirBundle = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl: 'urn:uuid:bcf4e631-ba4f-447b-b630-993709a38d71',
      resource: {
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: 'BDQNYZH'
        },
        resourceType: 'Composition',
        status: 'preliminary',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-types',
              code: 'birth-declaration'
            }
          ],
          text: 'Birth Declaration'
        },
        class: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-classes',
              code: 'crvs-document'
            }
          ],
          text: 'CRVS Document'
        },
        title: 'Birth Declaration',
        section: [
          {
            title: 'Child details',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'child-details'
                }
              ],
              text: 'Child details'
            },
            entry: [
              {
                reference: 'urn:uuid:e74ed25d-8c9c-49aa-9abc-d2a659078b22'
              }
            ]
          },
          {
            title: "Mother's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'mother-details'
                }
              ],
              text: "Mother's details"
            },
            entry: [
              {
                reference: 'urn:uuid:dcca6eb2-b608-4bb3-b17e-31ae9caa74dc'
              }
            ]
          },
          {
            title: "Father's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'father-details'
                }
              ],
              text: "Father's details"
            },
            entry: [
              {
                reference: 'urn:uuid:63e5ea6d-6dc7-4df7-b908-328872e770e3'
              }
            ]
          },
          {
            title: 'Birth encounter',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'birth-encounter'
                }
              ],
              text: 'Birth encounter'
            },
            entry: [
              {
                reference: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df'
              }
            ]
          }
        ],
        subject: {},
        date: '2019-04-03T08:56:10.718Z',
        author: [],
        id: 'b7a1743e-1431-41ed-87a8-3606ec7f6671'
      }
    },
    {
      fullUrl: 'urn:uuid:791afdc5-2d8b-4e05-bd99-4aeea0b0480c',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH'
            }
          ]
        },
        focus: {
          reference: 'urn:uuid:bcf4e631-ba4f-447b-b630-993709a38d71'
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/contact-person',
            valueString: 'FATHER'
          },
          {
            url:
              'http://opencrvs.org/specs/extension/contact-person-phone-number',
            valueString: '01711111111'
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/cabb1751-2f1f-48a4-8ff5-31e7b1d79005'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-04-03T08:56:12.031Z',
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/birth-tracking-id',
            value: 'BDQNYZH'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'DECLARED'
            }
          ]
        }
      }
    },
    {
      fullUrl: 'urn:uuid:e74ed25d-8c9c-49aa-9abc-d2a659078b22',
      resource: {
        resourceType: 'Patient',
        active: true,
        name: [
          {
            use: 'bn',
            given: ['রফিক'],
            family: ['ইসলাম']
          },
          {
            use: 'en',
            given: ['Rafiq'],
            family: ['Islam']
          }
        ],
        gender: 'male',
        birthDate: '2010-01-01'
      }
    },
    {
      fullUrl: 'urn:uuid:dcca6eb2-b608-4bb3-b17e-31ae9caa74dc',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '12341234123412341',
            type: 'BIRTH_REGISTRATION_NUMBER'
          }
        ],
        name: [
          {
            use: 'bn',
            given: ['বেগম'],
            family: ['রোকেয়া']
          },
          {
            use: 'en',
            given: ['Begum'],
            family: ['Rokeya']
          }
        ],
        birthDate: '1980-01-01',
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M'
            }
          ],
          text: 'MARRIED'
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/date-of-marriage',
            valueDateTime: '2008-01-01'
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          },
          {
            url: 'http://opencrvs.org/specs/extension/educational-attainment',
            valueString: 'PRIMARY_ISCED_1'
          }
        ],
        multipleBirthInteger: 1,
        address: [
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', '265abf9c-09d4-4b34-a0c6-336a53e23e4a'],
            district: 'a5010297-2d10-4109-8cb3-353ff9c084c2',
            state: '2414fc3f-7670-4d22-a053-5694858d72a2',
            country: 'BGD'
          },
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', '265abf9c-09d4-4b34-a0c6-336a53e23e4a'],
            district: 'a5010297-2d10-4109-8cb3-353ff9c084c2',
            state: '2414fc3f-7670-4d22-a053-5694858d72a2',
            country: 'BGD'
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:63e5ea6d-6dc7-4df7-b908-328872e770e3',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '17238230233223321',
            type: 'BIRTH_REGISTRATION_NUMBER'
          }
        ],
        name: [
          {
            use: 'bn',
            given: ['ফারুক'],
            family: ['ইসলাম']
          },
          {
            use: 'en',
            given: ['Faruq'],
            family: ['Islam']
          }
        ],
        birthDate: '1970-01-01',
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M'
            }
          ],
          text: 'MARRIED'
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/date-of-marriage',
            valueDateTime: '2008-01-01'
          },
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          },
          {
            url: 'http://opencrvs.org/specs/extension/educational-attainment',
            valueString: 'LOWER_SECONDARY_ISCED_2'
          }
        ],
        address: [
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', '265abf9c-09d4-4b34-a0c6-336a53e23e4a'],
            district: 'a5010297-2d10-4109-8cb3-353ff9c084c2',
            state: '2414fc3f-7670-4d22-a053-5694858d72a2',
            country: 'BGD'
          },
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', '265abf9c-09d4-4b34-a0c6-336a53e23e4a'],
            district: 'a5010297-2d10-4109-8cb3-353ff9c084c2',
            state: '2414fc3f-7670-4d22-a053-5694858d72a2',
            country: 'BGD'
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df',
      resource: {
        resourceType: 'Encounter',
        status: 'finished',
        location: [
          {
            location: {
              reference: 'urn:uuid:3e199a21-3f71-41eb-b8ba-215e547d0d05'
            }
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:3e199a21-3f71-41eb-b8ba-215e547d0d05',
      resource: {
        resourceType: 'Location',
        mode: 'instance',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/location-type',
              code: 'HOSPITAL'
            }
          ]
        },
        address: {
          line: ['', '', '', '', '', ''],
          district: '',
          state: '',
          postalCode: '',
          country: ''
        }
      }
    },
    {
      fullUrl: 'urn:uuid:e7249ecd-fb11-42cd-aa3b-d48e2288f504',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '57722-1',
              display: 'Birth plurality of Pregnancy'
            }
          ]
        },
        valueQuantity: {
          value: 'SINGLE'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:3a7eb860-2bdd-4a44-846b-74d6ce8a65cb',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured'
            }
          ]
        },
        valueQuantity: {
          value: 2,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:372abcdc-7b1d-4671-92dc-4a0353916cbe',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '73764-3',
              display: 'Birth attendant title'
            }
          ]
        },
        valueString: 'PHYSICIAN'
      }
    },
    {
      fullUrl: 'urn:uuid:99315e6d-bcb6-4e9a-ba85-a41cff4f3b08',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:ca8f8989-1a26-4494-a4d3-a777a620b1df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'present-at-birth-reg',
              display: 'Present at birth registration'
            }
          ]
        },
        valueString: 'BOTH_PARENTS'
      }
    }
  ],
  meta: {
    lastUpdated: '2019-04-03T08:56:10.718Z'
  }
}

export const mockBirthFhirBundleWithoutCompositionId = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl: 'urn:uuid:a2cb0db6-3526-4c2e-aa22-2f8fef9eef46',
      resource: {
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: 'BLNMDOY'
        },
        resourceType: 'Composition',
        status: 'preliminary',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-types',
              code: 'birth-declaration'
            }
          ],
          text: 'Birth Declaration'
        },
        class: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-classes',
              code: 'crvs-document'
            }
          ],
          text: 'CRVS Document'
        },
        title: 'Birth Declaration',
        section: [
          {
            title: 'Child details',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'child-details'
                }
              ],
              text: 'Child details'
            },
            entry: [
              {
                reference: 'urn:uuid:d449b644-5c1a-4355-bc82-7473d6a235b8'
              }
            ]
          },
          {
            title: "Mother's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'mother-details'
                }
              ],
              text: "Mother's details"
            },
            entry: [
              {
                reference: 'urn:uuid:afb2ecf4-76d8-46fa-854d-3651130a28db'
              }
            ]
          },
          {
            title: 'Birth encounter',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'birth-encounter'
                }
              ],
              text: 'Birth encounter'
            },
            entry: [
              {
                reference: 'urn:uuid:f5858402-c61a-48a2-876d-93cf06f876cb'
              }
            ]
          }
        ],
        subject: {},
        date: '2019-03-27T11:34:46.928Z',
        author: []
      }
    },
    {
      fullUrl: 'urn:uuid:412e286c-8839-4f1d-b7c0-4d069b2ec58c',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH'
            }
          ]
        },
        focus: {
          reference: 'urn:uuid:a2cb0db6-3526-4c2e-aa22-2f8fef9eef46'
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/contact-person',
            valueString: 'MOTHER'
          },
          {
            url:
              'http://opencrvs.org/specs/extension/contact-person-phone-number',
            valueString: '01722222222'
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/cabb1751-2f1f-48a4-8ff5-31e7b1d79005'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-27T11:34:48.804Z',
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/birth-tracking-id',
            value: 'BLNMDOZ'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'DECLARED'
            }
          ]
        }
      }
    },
    {
      fullUrl: 'urn:uuid:d449b644-5c1a-4355-bc82-7473d6a235b8',
      resource: {
        resourceType: 'Patient',
        active: true,
        name: [
          {
            use: 'bn',
            family: ['ম দুই']
          },
          {
            use: 'en',
            family: ['m two']
          }
        ],
        gender: 'male',
        birthDate: '2007-01-01'
      }
    },
    {
      fullUrl: 'urn:uuid:afb2ecf4-76d8-46fa-854d-3651130a28db',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '12341234123412341',
            type: 'BIRTH_REGISTRATION_NUMBER'
          }
        ],
        name: [
          {
            use: 'bn',
            family: ['ম ম দুই']
          },
          {
            use: 'en',
            family: ['m m two']
          }
        ],
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M'
            }
          ],
          text: 'MARRIED'
        },
        multipleBirthInteger: 1,
        address: [
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          },
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          }
        ],
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:f5858402-c61a-48a2-876d-93cf06f876cb',
      resource: {
        resourceType: 'Encounter',
        status: 'finished'
      }
    },
    {
      fullUrl: 'urn:uuid:4a093653-085d-4064-98b8-4d7508493207',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:f5858402-c61a-48a2-876d-93cf06f876cb'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'procedure',
                display: 'Procedure'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'present-at-birth-reg',
              display: 'Present at birth registration'
            }
          ]
        },
        valueString: 'MOTHER_ONLY'
      }
    }
  ],
  meta: {
    lastUpdated: '2019-03-27T11:34:46.928Z'
  }
}

export const mockDeathFhirBundle = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl: 'urn:uuid:a2e730c8-07c8-4943-b66b-4ef9e4bde7a1',
      resource: {
        id: 'ff6a4fce-4e72-463c-a6aa-718054643983',
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: 'DH86EY1'
        },
        resourceType: 'Composition',
        status: 'preliminary',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-types',
              code: 'death-declaration'
            }
          ],
          text: 'Death Declaration'
        },
        class: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-classes',
              code: 'crvs-document'
            }
          ],
          text: 'CRVS Document'
        },
        title: 'Death Declaration',
        section: [
          {
            title: 'Deceased details',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'deceased-details'
                }
              ],
              text: 'Deceased details'
            },
            entry: [
              {
                reference: 'urn:uuid:6167c7ac-ddde-4c84-ae9f-af3850b9f2bd'
              }
            ]
          },
          {
            title: "Informant's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'informant-details'
                }
              ],
              text: "Informant's details"
            },
            entry: [
              {
                reference: 'urn:uuid:d9dc4e44-987a-4313-89b1-0a71780c6bea'
              }
            ]
          },
          {
            title: 'Death encounter',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'death-encounter'
                }
              ],
              text: 'Death encounter'
            },
            entry: [
              {
                reference: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df'
              }
            ]
          }
        ],
        subject: {},
        date: '2019-03-19T13:05:13.524Z',
        author: []
      }
    },
    {
      fullUrl: 'urn:uuid:6167c7ac-ddde-4c84-ae9f-af3850b9f2bd',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '1234567890123',
            type: 'NATIONAL_ID'
          }
        ],
        name: [
          {
            use: 'bn',
            family: ['এলাস্তিচ']
          },
          {
            use: 'en',
            family: ['elastic']
          }
        ],
        gender: 'male',
        birthDate: '1940-01-01',
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M'
            }
          ],
          text: 'MARRIED'
        },
        address: [
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          },
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          }
        ],
        deceasedBoolean: true,
        deceasedDateTime: '2019-02-01',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:d9dc4e44-987a-4313-89b1-0a71780c6bea',
      resource: {
        resourceType: 'RelatedPerson',
        relationship: {
          coding: [
            {
              system:
                'http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype',
              code: 'EXTENDED_FAMILY'
            }
          ]
        },
        patient: {
          reference: 'urn:uuid:16d007fa-e516-4f71-8c4e-671c39274d1d'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:16d007fa-e516-4f71-8c4e-671c39274d1d',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '123123123',
            type: 'PASSPORT'
          }
        ],
        name: [
          {
            use: 'bn',
            family: ['এলাস্তিচ']
          },
          {
            use: 'en',
            family: ['elastic']
          }
        ],
        telecom: [
          {
            system: 'phone',
            value: '01711111115'
          }
        ],
        address: [
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          },
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          }
        ],
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df',
      resource: {
        resourceType: 'Encounter',
        status: 'finished',
        location: [
          {
            location: {
              reference: 'urn:uuid:b11350af-826d-4573-a256-6ecede0d8fd9'
            }
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:b11350af-826d-4573-a256-6ecede0d8fd9',
      resource: {
        resourceType: 'Location',
        mode: 'instance',
        partOf: {
          reference: 'Location/ee72f497-343f-4f0f-9062-d618fafc175c'
        },
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/location-type',
              code: 'PERMANENT'
            }
          ]
        },
        address: {
          type: 'PERMANENT',
          line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
          district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
          state: '9a236522-0c3d-40eb-83ad-e8567518c763',
          country: 'BGD'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:3cf94b36-1bba-4914-89ed-1e57230aba47',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'uncertified-manner-of-death',
              display: 'Uncertified manner of death'
            }
          ]
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/icd-10',
              code: 'NATURAL_CAUSES'
            }
          ]
        }
      }
    },
    {
      fullUrl: 'urn:uuid:cd9330bb-f406-464b-9508-253c727feb31',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'DEATH'
            }
          ]
        },
        focus: {
          reference: 'urn:uuid:a2e730c8-07c8-4943-b66b-4ef9e4bde7a1'
        },
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/death-tracking-id',
            value: 'DH86EY1'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'DECLARED'
            }
          ]
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/cabb1751-2f1f-48a4-8ff5-31e7b1d79005'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-19T13:05:19.260Z'
      }
    }
  ],
  meta: {
    lastUpdated: '2019-03-19T13:05:13.524Z'
  }
}

export const mockDeathFhirBundleWithoutCompositionId = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl: 'urn:uuid:a2e730c8-07c8-4943-b66b-4ef9e4bde7a1',
      resource: {
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: 'DH86EY1'
        },
        resourceType: 'Composition',
        status: 'preliminary',
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-types',
              code: 'death-declaration'
            }
          ],
          text: 'Death Declaration'
        },
        class: {
          coding: [
            {
              system: 'http://opencrvs.org/doc-classes',
              code: 'crvs-document'
            }
          ],
          text: 'CRVS Document'
        },
        title: 'Death Declaration',
        section: [
          {
            title: 'Deceased details',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'deceased-details'
                }
              ],
              text: 'Deceased details'
            },
            entry: [
              {
                reference: 'urn:uuid:6167c7ac-ddde-4c84-ae9f-af3850b9f2bd'
              }
            ]
          },
          {
            title: "Informant's details",
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/doc-sections',
                  code: 'informant-details'
                }
              ],
              text: "Informant's details"
            },
            entry: [
              {
                reference: 'urn:uuid:d9dc4e44-987a-4313-89b1-0a71780c6bea'
              }
            ]
          },
          {
            title: 'Death encounter',
            code: {
              coding: [
                {
                  system: 'http://opencrvs.org/specs/sections',
                  code: 'death-encounter'
                }
              ],
              text: 'Death encounter'
            },
            entry: [
              {
                reference: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df'
              }
            ]
          }
        ],
        subject: {},
        date: '2019-03-19T13:05:13.524Z',
        author: []
      }
    },
    {
      fullUrl: 'urn:uuid:6167c7ac-ddde-4c84-ae9f-af3850b9f2bd',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '1234567890123',
            type: 'NATIONAL_ID'
          }
        ],
        name: [
          {
            use: 'bn',
            family: ['এলাস্তিচ']
          },
          {
            use: 'en',
            family: ['elastic']
          }
        ],
        gender: 'male',
        birthDate: '1940-01-01',
        maritalStatus: {
          coding: [
            {
              system: 'http://hl7.org/fhir/StructureDefinition/marital-status',
              code: 'M'
            }
          ],
          text: 'MARRIED'
        },
        address: [
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          },
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          }
        ],
        deceasedBoolean: true,
        deceasedDateTime: '2019-02-01',
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:d9dc4e44-987a-4313-89b1-0a71780c6bea',
      resource: {
        resourceType: 'RelatedPerson',
        relationship: {
          coding: [
            {
              system:
                'http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype',
              code: 'EXTENDED_FAMILY'
            }
          ]
        },
        patient: {
          reference: 'urn:uuid:16d007fa-e516-4f71-8c4e-671c39274d1d'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:16d007fa-e516-4f71-8c4e-671c39274d1d',
      resource: {
        resourceType: 'Patient',
        active: true,
        identifier: [
          {
            value: '123123123',
            type: 'PASSPORT'
          }
        ],
        name: [
          {
            use: 'bn',
            family: ['এলাস্তিচ']
          },
          {
            use: 'en',
            family: ['elastic']
          }
        ],
        telecom: [
          {
            system: 'phone',
            value: '01711111115'
          }
        ],
        address: [
          {
            type: 'CURRENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          },
          {
            type: 'PERMANENT',
            line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
            district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
            state: '9a236522-0c3d-40eb-83ad-e8567518c763',
            country: 'BGD'
          }
        ],
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/patient-nationality',
            extension: [
              {
                url: 'code',
                valueCodeableConcept: {
                  coding: [
                    {
                      system: 'urn:iso:std:iso:3166',
                      code: 'BGD'
                    }
                  ]
                }
              },
              {
                url: 'period',
                valuePeriod: {
                  start: '',
                  end: ''
                }
              }
            ]
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df',
      resource: {
        resourceType: 'Encounter',
        status: 'finished',
        location: [
          {
            location: {
              reference: 'urn:uuid:b11350af-826d-4573-a256-6ecede0d8fd9'
            }
          }
        ]
      }
    },
    {
      fullUrl: 'urn:uuid:b11350af-826d-4573-a256-6ecede0d8fd9',
      resource: {
        resourceType: 'Location',
        mode: 'instance',
        partOf: {
          reference: 'Location/ee72f497-343f-4f0f-9062-d618fafc175c'
        },
        type: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/location-type',
              code: 'PERMANENT'
            }
          ]
        },
        address: {
          type: 'PERMANENT',
          line: ['', '', '', '', '', 'ee72f497-343f-4f0f-9062-d618fafc175c'],
          district: 'c879ce5c-545b-4042-98a6-77015b0e13df',
          state: '9a236522-0c3d-40eb-83ad-e8567518c763',
          country: 'BGD'
        }
      }
    },
    {
      fullUrl: 'urn:uuid:3cf94b36-1bba-4914-89ed-1e57230aba47',
      resource: {
        resourceType: 'Observation',
        status: 'final',
        context: {
          reference: 'urn:uuid:db0f9b0b-1cc8-48bb-b4fc-23584937d5df'
        },
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs'
              }
            ]
          }
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: 'uncertified-manner-of-death',
              display: 'Uncertified manner of death'
            }
          ]
        },
        valueCodeableConcept: {
          coding: [
            {
              system: 'http://hl7.org/fhir/ValueSet/icd-10',
              code: 'NATURAL_CAUSES'
            }
          ]
        }
      }
    },
    {
      fullUrl: 'urn:uuid:cd9330bb-f406-464b-9508-253c727feb31',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'DEATH'
            }
          ]
        },
        focus: {
          reference: 'urn:uuid:a2e730c8-07c8-4943-b66b-4ef9e4bde7a1'
        },
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/death-tracking-id',
            value: 'DH86EY1'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'DECLARED'
            }
          ]
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/cabb1751-2f1f-48a4-8ff5-31e7b1d79005'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-19T13:05:19.260Z'
      }
    }
  ],
  meta: {
    lastUpdated: '2019-03-19T13:05:13.524Z'
  }
}

export const mockComposition = {
  identifier: {
    system: 'urn:ietf:rfc:3986',
    value: '{{urn_uuid}}'
  },
  resourceType: 'Composition',
  status: 'preliminary',
  type: {
    coding: [
      {
        system: 'http://opencrvs.org/specs/types',
        code: 'birth-registration'
      }
    ],
    text: 'Birth Registration'
  },
  class: {
    coding: [
      {
        system: 'http://opencrvs.org/specs/classes',
        code: 'crvs-document'
      }
    ],
    text: 'CRVS Document'
  },
  subject: {
    reference: 'Patient/xyz' // A reference to the person being registered, by fullUrl
  },
  date: '{{logicalCompositionDate}}', // declaration date
  author: [
    {
      reference: 'Practitioner/xyz' // CHW that declared the event
    }
  ],
  title: 'Birth Registration',
  section: [
    {
      title: 'Child details',
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'child-details'
          }
        ],
        text: 'Child details'
      },
      text: '',
      entry: [
        {
          reference: 'urn:uuid:xxx' // reference to a Patient resource contained below, by fullUrl
        },
        {
          reference: 'urn:uuid:xxx' // reference to a Patient resource contained below, by fullUrl
        }
      ]
    },

    {
      title: "Mother's details",
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'mother-details'
          }
        ],
        text: "Mother's details"
      },
      text: '',
      entry: [
        {
          reference: 'urn:uuid:xxx' // reference to a Patient resource contained below, by fullUrl
        }
      ]
    },

    {
      title: "Father's details",
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'father-details'
          }
        ],
        text: "Father's details"
      },
      text: '',
      entry: [
        {
          reference: 'urn:uuid:xxx' // reference to a Patient resource contained below, by fullUrl
        }
      ]
    },

    {
      title: "Informant's details",
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'informant-details'
          }
        ],
        text: "Informant's details"
      },
      text: '',
      entry: [
        {
          reference: 'urn:uuid:xxx' // reference to a Patient resource contained below, by fullUrl
        }
      ]
    },

    {
      title: 'Birth Encounter',
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'birth-encounter'
          }
        ],
        text: 'Birth encounter'
      },
      text: '',
      entry: [
        {
          reference: 'urn:uuid:xxx' // reference to Encounter resource contained below, the encounter may have zero or more observations attached to it
        }
      ]
    },

    {
      title: 'Supporting documents',
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'supporting-documents'
          }
        ],
        text: 'Supporting documents'
      },
      text: '',
      entry: [
        {
          reference: 'DocumentReference/xxx' // reference to a DocumentReference resource contained below
        },
        {
          reference: 'DocumentReference/yyy' // reference to a DocumentReference resource contained below
        },
        {
          reference: 'DocumentReference/zzz' // reference to a DocumentReference resource contained below
        }
      ]
    }
  ],
  relatesTo: [
    {
      code: 'duplicate',
      targetReference: {
        reference: 'Composition/xyz'
      }
    },
    {
      code: 'duplicate',
      targetReference: {
        reference: 'Composition/abc'
      }
    }
  ]
}

export const mockSearchResponse = {
  hits: {
    total: 2,
    max_score: 2.7509375,
    hits: [
      {
        _index: 'ocrvs',
        _type: 'compositions',
        _id: 'c99e8d62-335e-458d-9fcc-45ec5836c404',
        _score: 2.7509375,
        _source: {
          childFirstNames: '',
          childFamilyName: 'sarkar',
          childFirstNamesLocal: 'test',
          childFamilyNameLocal: 'সরকার',
          childDoB: '1990-02-01',
          motherFirstNames: '',
          motherFamilyName: 'sarkar',
          motherFirstNamesLocal: 'চট্টগ্রাম',
          motherFamilyNameLocal: 'সরকার',
          motherDoB: '1960-02-01',
          motherIdentifier: '22123123123123123',
          createdBy: 'dcba7022-f0ff-4822-b5d9-cb90d0e7b8de',
          updatedBy: 'dcba7022-f0ff-4822-b5d9-cb90d0e7b8de'
        }
      }
    ]
  }
}

export const mockSearchResponseWithoutCreatedBy = {
  hits: {
    total: 2,
    max_score: 2.7509375,
    hits: [
      {
        _index: 'ocrvs',
        _type: 'compositions',
        _id: 'c99e8d62-335e-458d-9fcc-45ec5836c404',
        _score: 2.7509375,
        _source: {
          childFirstNames: '',
          childFamilyName: 'sarkar',
          childFirstNamesLocal: 'test',
          childFamilyNameLocal: 'সরকার',
          childDoB: '1990-02-01',
          motherFirstNames: '',
          motherFamilyName: 'sarkar',
          motherFirstNamesLocal: 'চট্টগ্রাম',
          motherFamilyNameLocal: 'সরকার',
          motherDoB: '1960-02-01',
          motherIdentifier: '22123123123123123'
        }
      }
    ]
  }
}

export const mockCompositionBody = {
  childFirstNames: 'hasan',
  childFamilyName: 'sarkar',
  childFirstNamesLocal: 'test',
  childFamilyNameLocal: 'সরকার',
  childDoB: '1990-02-01',
  gender: 'male',
  motherFirstNames: 'anninda',
  motherFamilyName: 'sarkar',
  motherFirstNamesLocal: 'চট্টগ্রাম',
  motherFamilyNameLocal: 'সরকার',
  fatherFirstNames: 'raihan',
  fatherFamilyName: 'khilzee',
  fatherDoB: '1960-02-01',
  motherDoB: '1960-02-01',
  motherIdentifier: '22123123123123123',
  fatherIdentifier: '221211111113123123'
}

export const mockCompositionEntry = {
  resourceType: 'Bundle',
  id: '9c0dde8d-65b2-49dd-8b7e-5dd0c7c63779',
  meta: {
    lastUpdated: '2019-01-14T10:58:20.694+00:00'
  },
  type: 'searchset',
  total: 1,
  link: [
    {
      relation: 'self',
      url: 'http://localhost:3447/fhir/Composition?identifier=Bt40VoY'
    }
  ],
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Composition/7b381f4e-2864-441a-9146-faa3929eeaa8',
      resource: {
        identifier: {
          system: 'urn:ietf:rfc:3986',
          value: 'Bt40VoY'
        },
        resourceType: 'Composition',
        status: 'preliminary',
        id: '489b76cf-6b58-4b0d-96ba-caa1271f787b'
      }
    }
  ]
}

export const mockCompositionResponse = {
  identifier: { system: 'urn:ietf:rfc:3986', value: 'BLURQJG' },
  resourceType: 'Composition',
  status: 'preliminary',
  type: {
    coding: [
      { system: 'http://opencrvs.org/doc-types', code: 'birth-declaration' }
    ],
    text: 'Birth Declaration'
  },
  class: {
    coding: [
      { system: 'http://opencrvs.org/doc-classes', code: 'crvs-document' }
    ],
    text: 'CRVS Document'
  },
  title: 'Birth Declaration',
  section: [
    {
      title: 'Child details',
      code: {
        coding: [
          { system: 'http://opencrvs.org/doc-sections', code: 'child-details' }
        ],
        text: 'Child details'
      },
      entry: [{ reference: 'urn:uuid:fc3fd2df-92cc-452d-855f-5277396f9cce' }]
    },
    {
      title: "Mother's details",
      code: {
        coding: [
          { system: 'http://opencrvs.org/doc-sections', code: 'mother-details' }
        ],
        text: "Mother's details"
      },
      entry: [{ reference: 'urn:uuid:feb86ab7-437a-43e7-8d10-7fad17cda5f9' }]
    },
    {
      title: 'Birth encounter',
      code: {
        coding: [
          {
            system: 'http://opencrvs.org/specs/sections',
            code: 'birth-encounter'
          }
        ],
        text: 'Birth encounter'
      },
      entry: [{ reference: 'urn:uuid:6077ab73-2e55-4aa8-8b85-f733c44c1b77' }]
    }
  ],
  subject: {},
  date: '2019-04-02T11:22:46.135Z',
  author: [],
  id: '9acd5bb1-696c-4fdf-ad3a-59c75634ea69',
  relatesTo: [
    {
      code: 'duplicate',
      targetReference: {
        reference: 'Composi$ion/ff6a4fce-4e72-463c-a6aa-718054643983'
      }
    },
    {
      code: 'duplicate',
      targetReference: {
        reference: 'Composition/3a092303-6ecd-46db-b0b3-fa236964ba32'
      }
    }
  ],
  meta: {
    lastUpdated: '201$-04-02T12:56:18.460+00:00',
    versionId: '074c1544-7f3a-4825-816d-8d8fff90934f'
  }
}

export const mockTaskBundle = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Task/e849ceb4-0adc-4be2-8fc8-8a4c41781bb5',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH'
            }
          ]
        },
        id: 'e849ceb4-0adc-4be2-8fc8-8a4c41781bb5'
      }
    }
  ]
}

export const mockBirthRejectionTaskBundle = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Task/16b3a085-0cf8-40db-8213-58ecc8f72790/_history/99c8a143-675e-4a5c-a6d7-aaa5f10e8b9e',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH'
            }
          ]
        },
        focus: {
          reference: 'Composition/d6667198-3581-4beb-b9a6-52b93aee3159'
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/contact-person',
            valueString: 'MOTHER'
          },
          {
            url:
              'http://opencrvs.org/specs/extension/contact-person-phone-number',
            valueString: '01722222222'
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-27T11:40:09.493Z',
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/birth-tracking-id',
            value: 'BLNMDOZ'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'REJECTED'
            }
          ]
        },
        meta: {
          lastUpdated: '2019-03-27T11:34:48.970+00:00',
          versionId: '99c8a143-675e-4a5c-a6d7-aaa5f10e8b9e'
        },
        id: '16b3a085-0cf8-40db-8213-58ecc8f72790',
        note: [
          {
            text: 'reason=duplicate&comment=Possible Duplicate found!',
            time: 'Wed, 27 Mar 2019 11:40:09 GMT',
            authorString: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
          }
        ]
      },
      request: {
        method: 'POST',
        url: 'Task'
      }
    }
  ]
}

export const mockBirthRejectionTaskBundleWithoutCompositionReference = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Task/16b3a085-0cf8-40db-8213-58ecc8f72790/_history/99c8a143-675e-4a5c-a6d7-aaa5f10e8b9e',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'BIRTH'
            }
          ]
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/contact-person',
            valueString: 'MOTHER'
          },
          {
            url:
              'http://opencrvs.org/specs/extension/contact-person-phone-number',
            valueString: '01722222222'
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-27T11:40:09.493Z',
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/birth-tracking-id',
            value: 'BLNMDOZ'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'REJECTED'
            }
          ]
        },
        meta: {
          lastUpdated: '2019-03-27T11:34:48.970+00:00',
          versionId: '99c8a143-675e-4a5c-a6d7-aaa5f10e8b9e'
        },
        id: '16b3a085-0cf8-40db-8213-58ecc8f72790',
        note: [
          {
            text: 'reason=duplicate&comment=Possible Duplicate found!',
            time: 'Wed, 27 Mar 2019 11:40:09 GMT',
            authorString: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
          }
        ]
      },
      request: {
        method: 'POST',
        url: 'Task'
      }
    }
  ]
}

export const mockDeathRejectionTaskBundle = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Task/be13e81f-0cd7-4ff3-a2d3-a1bc7a7f543a/_history/57a41663-6f07-42b7-9cce-c2945ddd3a0c',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'DEATH'
            }
          ]
        },
        focus: {
          reference: 'Composition/37df1f45-0b27-43da-aebb-8041a73cb103'
        },
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/death-tracking-id',
            value: 'DKCGBVI'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'REJECTED'
            }
          ]
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-27T11:44:41.407Z',
        meta: {
          lastUpdated: '2019-03-27T11:38:44.701+00:00',
          versionId: '57a41663-6f07-42b7-9cce-c2945ddd3a0c'
        },
        id: 'be13e81f-0cd7-4ff3-a2d3-a1bc7a7f543a',
        note: [
          {
            text: 'reason=missing_supporting_doc&comment=No documents found!',
            time: 'Wed, 27 Mar 2019 11:44:41 GMT',
            authorString: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
          }
        ]
      },
      request: {
        method: 'POST',
        url: 'Task'
      }
    }
  ]
}

export const mockDeathRejectionTaskBundleWithoutCompositionReference = {
  resourceType: 'Bundle',
  type: 'document',
  entry: [
    {
      fullUrl:
        'http://localhost:3447/fhir/Task/be13e81f-0cd7-4ff3-a2d3-a1bc7a7f543a/_history/57a41663-6f07-42b7-9cce-c2945ddd3a0c',
      resource: {
        resourceType: 'Task',
        status: 'requested',
        code: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/types',
              code: 'DEATH'
            }
          ]
        },
        identifier: [
          {
            system: 'http://opencrvs.org/specs/id/death-tracking-id',
            value: 'DKCGBVI'
          }
        ],
        businessStatus: {
          coding: [
            {
              system: 'http://opencrvs.org/specs/reg-status',
              code: 'REJECTED'
            }
          ]
        },
        extension: [
          {
            url: 'http://opencrvs.org/specs/extension/regLastUser',
            valueReference: {
              reference: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastLocation',
            valueReference: {
              reference: 'Location/308c35b4-04f8-4664-83f5-9790e790cde1'
            }
          },
          {
            url: 'http://opencrvs.org/specs/extension/regLastOffice',
            valueReference: {
              reference: 'Location/b49503bf-531d-4642-ae1b-13f647b88ec6'
            }
          }
        ],
        lastModified: '2019-03-27T11:44:41.407Z',
        meta: {
          lastUpdated: '2019-03-27T11:38:44.701+00:00',
          versionId: '57a41663-6f07-42b7-9cce-c2945ddd3a0c'
        },
        id: 'be13e81f-0cd7-4ff3-a2d3-a1bc7a7f543a',
        note: [
          {
            text: 'reason=missing_supporting_doc&comment=No documents found!',
            time: 'Wed, 27 Mar 2019 11:44:41 GMT',
            authorString: 'Practitioner/220ad6b8-346f-4a1d-8a5c-086ce38067c9'
          }
        ]
      },
      request: {
        method: 'POST',
        url: 'Task'
      }
    }
  ]
}

export const mockSearchResult = {
  took: 1,
  timed_out: false,
  _shards: {
    total: 10,
    successful: 10,
    skipped: 0,
    failed: 0
  },
  hits: {
    total: 6,
    max_score: 1,
    hits: [
      {
        _index: 'ocrvs',
        _type: 'compositions',
        _id: 'BGM9CA2',
        _score: 1,
        _source: {
          childFamilyName: 'Moajjem',
          childFamilyNameLocal: 'মোয়াজ্জেম',
          childDoB: '2011-11-11',
          gender: 'male',
          motherFamilyName: 'Moajjem',
          motherFamilyNameLocal: 'মোয়াজ্জেম',
          motherIdentifier: '11111111111111111'
        }
      }
    ]
  }
}