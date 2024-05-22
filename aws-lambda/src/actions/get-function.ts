import { getClient } from '../client'
import { getFunctionInputSchema, getFunctionOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getFunction: Implementation['actions']['getFunction'] = async ({ ctx, logger, input }) => {
  const validatedInput = getFunctionInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName } = validatedInput;
    const result = await lambdaClient.getFunction(functionName);

    logger.forBot().debug(`Successful - Get Function - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Get Function' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
