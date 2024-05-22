import { getClient } from '../client'
import { listFunctionsInputSchema, listFunctionsOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const listFunctions: Implementation['actions']['listFunctions'] = async ({ ctx, logger, input }) => {
  const validatedInput = listFunctionsInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { limit } = validatedInput;
    const result = await lambdaClient.listFunctions(limit);

    logger.forBot().debug(`Successful - List Functions`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'List Functions' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
