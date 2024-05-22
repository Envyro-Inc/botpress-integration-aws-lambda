import { getClient } from '../client'
import { listFunctionVersionsInputSchema, listFunctionVersionsOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const listFunctionVersions: Implementation['actions']['listFunctionVersions'] = async ({ ctx, logger, input }) => {
  const validatedInput = listFunctionVersionsInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName, maxItems } = validatedInput;
    const result = await lambdaClient.listFunctionVersions(functionName, maxItems);

    logger.forBot().debug(`Successful - List Function Versions - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'List Function Versions' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
