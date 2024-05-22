import { getClient } from '../client';
import { invokeFunctionUrlInputSchema, invokeFunctionUrlOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';

export const invokeFunctionUrl: Implementation['actions']['invokeFunctionUrl'] = async ({ ctx, logger, input }) => {
  const validatedInput = invokeFunctionUrlInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  let result;

  try {
    const { url, jsonBody } = validatedInput;

    // Convert jsonBody to an object or use an empty object if not provided
    let payload;
    try {
      payload = jsonBody ? JSON.parse(jsonBody) : {};
    } catch (error) {
      logger.forBot().error(`Invalid JSON body: ${jsonBody}`);
      throw new Error(`Invalid JSON body: ${jsonBody}`);
    }

    // Log the parsed payload
    logger.forBot().info(`Parsed payload: ${JSON.stringify(payload)}`);

    // Ensure the URL is a string
    if (!url) {
      throw new Error('URL is undefined');
    }

    // Log the URL and payload
    logger.forBot().debug(`Invoking URL: ${url}`);
    logger.forBot().debug(`Payload: ${JSON.stringify(payload)}`);

    // Make the request using axios
    result = await lambdaClient.invokeFunctionURL(url, payload);

    // Log the response to ensure it's correct
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    return {
      success: result.success,
      message: result.message,
      data: result.data,
    };
  } catch (error) {
    logger.forBot().debug(`'Invoke Function URL' exception ${JSON.stringify(error)}`);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      data: null,
    };
  }
};
