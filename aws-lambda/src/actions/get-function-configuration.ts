import { getClient } from '../client'
import { getFunctionConfigurationInputSchema, getFunctionConfigurationOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getFunctionConfiguration: Implementation['actions']['getFunctionConfiguration'] = async ({ ctx, logger, input }) => {
  const validatedInput = getFunctionConfigurationInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName } = validatedInput;
    const result = await lambdaClient.getFunctionConfiguration(functionName);

    logger.forBot().debug(`Successful - Get Function Configuration - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Get Function Configuration' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
