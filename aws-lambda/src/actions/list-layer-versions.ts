import { getClient } from '../client';
import { listLayerVersionsInputSchema, listLayerVersionsOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';
import { Runtime } from '@aws-sdk/client-lambda';

const compatibleRuntimes = [
  'nodejs12.x', 'nodejs14.x', 'nodejs16.x',
  'python3.6', 'python3.7', 'python3.8', 'python3.9',
  'ruby2.5', 'ruby2.7',
  'java8', 'java8.al2', 'java11',
  'go1.x',
  'dotnetcore2.1', 'dotnetcore3.1', 'dotnet6',
  'provided', 'provided.al2'
];

export const listLayerVersions: Implementation['actions']['listLayerVersions'] = async ({ ctx, logger, input }) => {
  const validatedInput = listLayerVersionsInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  let result;

  try {
    const { layerName, compatibleRuntime, limit } = validatedInput;

    // Mapping input to corresponding runtime value
    const runtime = (() => {
      switch (compatibleRuntime) {
        case 'nodejs12.x':
          return Runtime.nodejs12x;
        case 'nodejs14.x':
          return Runtime.nodejs14x;
        case 'nodejs16.x':
          return Runtime.nodejs16x;
        case 'python3.6':
          return Runtime.python36;
        case 'python3.7':
          return Runtime.python37;
        case 'python3.8':
          return Runtime.python38;
        case 'python3.9':
          return Runtime.python39;
        case 'ruby2.5':
          return Runtime.ruby25;
        case 'ruby2.7':
          return Runtime.ruby27;
        case 'java8':
          return Runtime.java8;
        case 'java8.al2':
          return Runtime.java8al2;
        case 'java11':
          return Runtime.java11;
        case 'go1.x':
          return Runtime.go1x;
        case 'dotnetcore2.1':
          return Runtime.dotnetcore21;
        case 'dotnetcore3.1':
          return Runtime.dotnetcore31;
        case 'dotnet6':
          return Runtime.dotnet6;
        case 'provided':
          return Runtime.provided;
        case 'provided.al2':
          return Runtime.providedal2;
        default:
          throw new Error(`Invalid compatible runtime: ${compatibleRuntime}. Valid options are: ${compatibleRuntimes.join(', ')}`);
      }
    })();

    result = await lambdaClient.listLayerVersions(layerName, runtime, limit);

    logger.forBot().debug(`Successful - List Layer Versions - ${layerName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'List Layer Versions' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
