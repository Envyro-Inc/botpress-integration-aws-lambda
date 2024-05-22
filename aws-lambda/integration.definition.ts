import { IntegrationDefinition, Schema, z } from '@botpress/sdk'
import { name, integrationName } from './package.json'

import {
  listFunctionsInputSchema,
  listFunctionsOutputSchema,
  listFunctionVersionsInputSchema,
  listFunctionVersionsOutputSchema,
  getFunctionInputSchema,
  getFunctionOutputSchema,
  getFunctionConfigurationInputSchema,
  getFunctionConfigurationOutputSchema,
  getFunctionPolicyInputSchema,
  getFunctionPolicyOutputSchema,
  deleteFunctionInputSchema,
  deleteFunctionOutputSchema,
  publishFunctionVersionInputSchema,
  publishFunctionVersionOutputSchema,
  invokeFunctionInputSchema,
  invokeFunctionOutputSchema,
  invokeFunctionUrlInputSchema,
  invokeFunctionUrlOutputSchema,
  listLayersInputSchema,
  listLayersOutputSchema,
  listLayerVersionsInputSchema,
  listLayerVersionsOutputSchema,
  getLayerVersionInputSchema,
  getLayerVersionOutputSchema,
} from './src/misc/custom-schemas'

export default new IntegrationDefinition({
  name: integrationName ?? name,
  version: '24.5.0',
  title: 'AWS Lambda',
  readme: 'hub.md',
  icon: 'icon.svg',
  description: 
    'Empower your Botpress chatbot with AWS Lambda to manage serverless functions. List, get, and delete Lambda functions, invoke them, and handle layers directly through your chatbot. Ideal for automating cloud workflows.',
  configuration: {
    schema: z.object({
      accessKeyId: z.string(),                // AWS Access Key ID
      secretAccessKey: z.string().hidden(),   // AWS Secret Access Key
      region: z.string()                      // AWS Region
    })
  },
  events: {},
  user: {
    tags: {
      id: {
        title: "AWS Access Key ID",
      }
    }
  },
  channels: {},
  states: {},
  actions: {
    listFunctions: {
      title: 'List Functions',
      input: {
        schema: listFunctionsInputSchema
      },
      output: {
        schema: listFunctionsOutputSchema
      }
    },
    listFunctionVersions: {
      title: 'List Function Versions',
      input: {
        schema: listFunctionVersionsInputSchema
      },
      output: {
        schema: listFunctionVersionsOutputSchema
      }
    },
    getFunction: {
      title: 'Get Function',
      input: {
        schema: getFunctionInputSchema
      },
      output: {
        schema: getFunctionOutputSchema
      }
    },
    getFunctionConfiguration: {
      title: 'Get Function Configuration',
      input: {
        schema: getFunctionConfigurationInputSchema
      },
      output: {
        schema: getFunctionConfigurationOutputSchema
      }
    },
    getFunctionPolicy: {
      title: 'Get Function Policy',
      input: {
        schema: getFunctionPolicyInputSchema
      },
      output: {
        schema: getFunctionPolicyOutputSchema
      }
    },
    deleteFunction: {
      title: 'Delete Function',
      input: {
        schema: deleteFunctionInputSchema
      },
      output: {
        schema: deleteFunctionOutputSchema
      }
    },
    publishFunctionVersion: {
      title: 'Publish Function Version',
      input: {
        schema: publishFunctionVersionInputSchema
      },
      output: {
        schema: publishFunctionVersionOutputSchema
      }
    },
    invokeFunction: {
      title: 'Invoke Function',
      input: {
        schema: invokeFunctionInputSchema
      },
      output: {
        schema: invokeFunctionOutputSchema
      }
    },
    // invokeFunctionUrl: {
    //   title: 'Invoke Function Url',
    //   input: {
    //     schema: invokeFunctionUrlInputSchema
    //   },
    //   output: {
    //     schema: invokeFunctionUrlOutputSchema
    //   }
    // },
    listLayers: {
      title: 'List Layers',
      input: {
        schema: listLayersInputSchema
      },
      output: {
        schema: listLayersOutputSchema
      }
    },
    listLayerVersions: {
      title: 'List Layer Versions',
      input: {
        schema: listLayerVersionsInputSchema
      },
      output: {
        schema: listLayerVersionsOutputSchema
      }
    },
    getLayerVersion: {
      title: 'Get Layer Version',
      input: {
        schema: getLayerVersionInputSchema
      },
      output: {
        schema: getLayerVersionOutputSchema
      }
    }
  }
})
