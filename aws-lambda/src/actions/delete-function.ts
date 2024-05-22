import { getClient } from '../client'
import { deleteFunctionInputSchema, deleteFunctionOutputSchema } from '../misc/custom-schemas'
import type { Implementation } from '../misc/types'

export const deleteFunction: Implementation['actions']['deleteFunction'] = async ({ ctx, logger, input }) => {
  const validatedInput = deleteFunctionInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  try {
    const { functionName } = validatedInput;
    const result = await lambdaClient.deleteFunction(functionName);

    logger.forBot().debug(`Successful - Delete Function - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Delete Function' exception ${JSON.stringify(error)}`);
    throw error; 
  }
}
