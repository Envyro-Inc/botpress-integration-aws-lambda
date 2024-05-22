import { getClient } from '../client'
import { publishFunctionVersionInputSchema, publishFunctionVersionOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const publishFunctionVersion: Implementation['actions']['publishFunctionVersion'] = async ({ ctx, logger, input }) => {
  const validatedInput = publishFunctionVersionInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName, description } = validatedInput;
    const result = await lambdaClient.publishFunctionVersion(functionName, description);

    logger.forBot().debug(`Successful - Publish Function Version - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Publish Function Version' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
