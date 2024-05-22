import { getClient } from '../client'
import { getFunctionPolicyInputSchema, getFunctionPolicyOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const getFunctionPolicy: Implementation['actions']['getFunctionPolicy'] = async ({ ctx, logger, input }) => {
  const validatedInput = getFunctionPolicyInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName } = validatedInput;
    const result = await lambdaClient.getFunctionPolicy(functionName);

    logger.forBot().debug(`Successful - Get Function Policy - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Get Function Policy' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
