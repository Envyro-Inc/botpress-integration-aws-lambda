import { getClient } from '../client'
import { getLayerVersionInputSchema, getLayerVersionOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getLayerVersion: Implementation['actions']['getLayerVersion'] = async ({ ctx, logger, input }) => {
  const validatedInput = getLayerVersionInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { layerName, versionNumber } = validatedInput;
    const result = await lambdaClient.getLayerVersion(layerName, versionNumber);

    logger.forBot().debug(`Successful - Get Layer Version - ${layerName}:${versionNumber}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Get Layer Version' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
