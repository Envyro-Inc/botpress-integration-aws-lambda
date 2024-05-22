import { InvocationType } from '@aws-sdk/client-lambda'
import { z } from '@botpress/sdk'

/*
Action Schemas
*/

// Input and Output Schemas for listFunctions
export const listFunctionsInputSchema = z.object({
  limit: z.number().optional().describe('The maximum number of functions to return.').placeholder('10')
})

export const listFunctionsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      extendedRequestId: z.string().optional(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Functions: z.array(z.object({
      FunctionName: z.string(),
      FunctionArn: z.string(),
      Runtime: z.string(),
      Role: z.string(),
      Handler: z.string(),
      CodeSize: z.number(),
      Description: z.string(),
      Timeout: z.number(),
      MemorySize: z.number(),
      LastModified: z.string(),
      CodeSha256: z.string(),
      Version: z.string(),
      VpcConfig: z.object({
        SubnetIds: z.array(z.string()),
        SecurityGroupIds: z.array(z.string()),
        VpcId: z.string(),
      }).optional(),
      Environment: z.object({
        Variables: z.record(z.string()),
      }).optional(),
      KMSKeyArn: z.string().optional(),
      TracingConfig: z.object({
        Mode: z.string(),
      }).optional(),
      MasterArn: z.string().optional(),
      RevisionId: z.string().optional(),
      Architectures: z.array(z.string()).optional(),
      State: z.string().optional(),
      StateReason: z.string().optional(),
      StateReasonCode: z.string().optional(),
      LastUpdateStatus: z.string().optional(),
      LastUpdateStatusReason: z.string().optional(),
      LastUpdateStatusReasonCode: z.string().optional(),
      FileSystemConfigs: z.array(z.object({
        Arn: z.string(),
        LocalMountPath: z.string(),
      })).optional(),
    })),
    NextMarker: z.string().optional(),
  })
})

// Input and Output Schemas for listFunctionVersions
export const listFunctionVersionsInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function'),
  maxItems: z.number().optional().describe('The maximum number of versions to return.').placeholder('10')
})

export const listFunctionVersionsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      extendedRequestId: z.string().optional(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Versions: z.array(z.object({
      FunctionName: z.string(),
      FunctionArn: z.string(),
      Runtime: z.string(),
      Role: z.string(),
      Handler: z.string(),
      CodeSize: z.number(),
      Description: z.string(),
      Timeout: z.number(),
      MemorySize: z.number(),
      LastModified: z.string(),
      CodeSha256: z.string(),
      Version: z.string(),
      VpcConfig: z.object({
        SubnetIds: z.array(z.string()),
        SecurityGroupIds: z.array(z.string()),
        VpcId: z.string(),
      }).optional(),
      Environment: z.object({
        Variables: z.record(z.string()),
      }).optional(),
      KMSKeyArn: z.string().optional(),
      TracingConfig: z.object({
        Mode: z.string(),
      }).optional(),
      MasterArn: z.string().optional(),
      RevisionId: z.string().optional(),
      Architectures: z.array(z.string()).optional(),
      State: z.string().optional(),
      StateReason: z.string().optional(),
      StateReasonCode: z.string().optional(),
      LastUpdateStatus: z.string().optional(),
      LastUpdateStatusReason: z.string().optional(),
      LastUpdateStatusReasonCode: z.string().optional(),
      FileSystemConfigs: z.array(z.object({
        Arn: z.string(),
        LocalMountPath: z.string(),
      })).optional(),
    })),
    NextMarker: z.string().optional(),
  })
})

// Input and Output Schemas for getFunction
export const getFunctionInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function')
})

export const getFunctionOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    Configuration: z.object({
      FunctionName: z.string(),
      FunctionArn: z.string(),
      Runtime: z.string(),
      Role: z.string(),
      Handler: z.string(),
      CodeSize: z.number(),
      Description: z.string(),
      Timeout: z.number(),
      MemorySize: z.number(),
      LastModified: z.string(),
      CodeSha256: z.string(),
      Version: z.string(),
      VpcConfig: z.object({
        SubnetIds: z.array(z.string()),
        SecurityGroupIds: z.array(z.string()),
        VpcId: z.string(),
      }).optional(),
      Environment: z.object({
        Variables: z.record(z.string()),
      }).optional(),
      KMSKeyArn: z.string().optional(),
      TracingConfig: z.object({
        Mode: z.string(),
      }).optional(),
      MasterArn: z.string().optional(),
      RevisionId: z.string().optional(),
      Architectures: z.array(z.string()).optional(),
      State: z.string().optional(),
      StateReason: z.string().optional(),
      StateReasonCode: z.string().optional(),
      LastUpdateStatus: z.string().optional(),
      LastUpdateStatusReason: z.string().optional(),
      LastUpdateStatusReasonCode: z.string().optional(),
      FileSystemConfigs: z.array(z.object({
        Arn: z.string(),
        LocalMountPath: z.string(),
      })).optional(),
    }),
    Code: z.object({
      RepositoryType: z.string(),
      Location: z.string(),
    }),
    Tags: z.record(z.string()).optional(),
    Concurrency: z.object({
      ReservedConcurrentExecutions: z.number(),
    }).optional(),
  })
})

// Input and Output Schemas for getFunctionConfiguration
export const getFunctionConfigurationInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function')
})

export const getFunctionConfigurationOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    FunctionName: z.string(),
    FunctionArn: z.string(),
    Runtime: z.string(),
    Role: z.string(),
    Handler: z.string(),
    CodeSize: z.number(),
    Description: z.string(),
    Timeout: z.number(),
    MemorySize: z.number(),
    LastModified: z.string(),
    CodeSha256: z.string(),
    Version: z.string(),
    VpcConfig: z.object({
      SubnetIds: z.array(z.string()),
      SecurityGroupIds: z.array(z.string()),
      VpcId: z.string(),
    }).optional(),
    Environment: z.object({
      Variables: z.record(z.string()),
    }).optional(),
    KMSKeyArn: z.string().optional(),
    TracingConfig: z.object({
      Mode: z.string(),
    }).optional(),
    MasterArn: z.string().optional(),
    RevisionId: z.string().optional(),
    Architectures: z.array(z.string()).optional(),
    State: z.string().optional(),
    StateReason: z.string().optional(),
    StateReasonCode: z.string().optional(),
    LastUpdateStatus: z.string().optional(),
    LastUpdateStatusReason: z.string().optional(),
    LastUpdateStatusReasonCode: z.string().optional(),
    FileSystemConfigs: z.array(z.object({
      Arn: z.string(),
      LocalMountPath: z.string(),
    })).optional(),
  })
})

// Input and Output Schemas for getFunctionPolicy
export const getFunctionPolicyInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function')
})

export const getFunctionPolicyOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    Policy: z.string(),
    RevisionId: z.string(),
  })
})

// Input and Output Schemas for deleteFunction
export const deleteFunctionInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function')
})

export const deleteFunctionOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      extendedRequestId: z.string().optional(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
  })
})

// Input and Output Schemas for publishFunctionVersion
export const publishFunctionVersionInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function'),
  description: z.string().optional().describe('The description of the version.').placeholder('Initial version')
})

export const publishFunctionVersionOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    FunctionName: z.string(),
    FunctionArn: z.string(),
    Runtime: z.string(),
    Role: z.string(),
    Handler: z.string(),
    CodeSize: z.number(),
    Description: z.string(),
    Timeout: z.number(),
    MemorySize: z.number(),
    LastModified: z.string(),
    CodeSha256: z.string(),
    Version: z.string(),
    VpcConfig: z.object({
      SubnetIds: z.array(z.string()),
      SecurityGroupIds: z.array(z.string()),
      VpcId: z.string(),
    }).optional(),
    Environment: z.object({
      Variables: z.record(z.string()),
    }).optional(),
    KMSKeyArn: z.string().optional(),
    TracingConfig: z.object({
      Mode: z.string(),
    }).optional(),
    MasterArn: z.string().optional(),
    RevisionId: z.string().optional(),
    Architectures: z.array(z.string()).optional(),
    State: z.string().optional(),
    StateReason: z.string().optional(),
    StateReasonCode: z.string().optional(),
    LastUpdateStatus: z.string().optional(),
    LastUpdateStatusReason: z.string().optional(),
    LastUpdateStatusReasonCode: z.string().optional(),
    FileSystemConfigs: z.array(z.object({
      Arn: z.string(),
      LocalMountPath: z.string(),
    })).optional(),
  })
})

// Input and Output Schemas for invokeFunction
export const invokeFunctionInputSchema = z.object({
  functionName: z.string().describe('The name of the Lambda function.').placeholder('my-function'),
  invocationType: z.string().describe('The type of invocation. Enter Event, RequestResponse or DryRun').default('RequestResponse').placeholder('RequestResponse'),
  jsonBody: z.string().describe('The JSON body to send as payload.').optional()
})

export const invokeFunctionOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    StatusCode: z.number(),
    ExecutedVersion: z.string(),
    Payload: z.any().optional(),
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }).optional(),
  }),
});

// Input and Output Schemas for invokeFunctionURL
export const invokeFunctionUrlInputSchema = z.object({
  url: z.string().url().describe('The URL to trigger the Lambda function.').placeholder('https://your-lambda-url'),
  jsonBody: z.string().describe('The JSON body to send as payload.').placeholder("{ key1: 'value1', key2: 'value2' }").optional(),
});

export const invokeFunctionUrlOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional()
});

// Input and Output Schemas for listLayers
export const listLayersInputSchema = z.object({
  compatibleRuntime: z.string().optional().describe('The runtime identifier to filter the list of layers.').placeholder('nodejs14.x'),
  limit: z.number().optional().describe('The maximum number of layers to return.').placeholder('10')
})

export const listLayersOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      extendedRequestId: z.string().optional(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    Layers: z.array(z.object({
      LayerName: z.string(),
      LayerArn: z.string(),
      LatestMatchingVersion: z.object({
        LayerVersionArn: z.string(),
        Version: z.number(),
        Description: z.string().optional(),
        CreatedDate: z.string(),
        CompatibleRuntimes: z.array(z.string()),
        LicenseInfo: z.string().optional(),
      }),
    })),
  })
})

// Input and Output Schemas for listLayerVersions
export const listLayerVersionsInputSchema = z.object({
  layerName: z.string().describe('The name of the layer.').placeholder('my-layer'),
  compatibleRuntime: z.string().optional().describe('The runtime identifier to filter the list of layer versions.').placeholder('nodejs14.x'),
  limit: z.number().optional().describe('The maximum number of versions to return.').placeholder('10')
})

export const listLayerVersionsOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    $metadata: z.object({
      httpStatusCode: z.number(),
      requestId: z.string(),
      extendedRequestId: z.string().optional(),
      attempts: z.number(),
      totalRetryDelay: z.number(),
    }),
    LayerVersions: z.array(z.object({
      LayerVersionArn: z.string(),
      Version: z.number(),
      Description: z.string().optional(),
      CreatedDate: z.string(),
      CompatibleRuntimes: z.array(z.string()),
      LicenseInfo: z.string().optional(),
    })),
  })
})

// Input and Output Schemas for getLayerVersion
export const getLayerVersionInputSchema = z.object({
  layerName: z.string().describe('The name of the layer.').placeholder('my-layer'),
  versionNumber: z.number().describe('The version number of the layer.').placeholder('1')
})

export const getLayerVersionOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    Content: z.object({
      Location: z.string(),
      CodeSha256: z.string(),
      CodeSize: z.number(),
      SigningProfileVersionArn: z.string().optional(),
      SigningJobArn: z.string().optional(),
    }),
    LayerArn: z.string(),
    LayerVersionArn: z.string(),
    Description: z.string().optional(),
    CreatedDate: z.string(),
    Version: z.number(),
    CompatibleRuntimes: z.array(z.string()),
    LicenseInfo: z.string().optional(),
  }).optional()
})