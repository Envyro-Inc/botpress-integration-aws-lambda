import { getClient } from '../client';
import { invokeFunctionInputSchema, invokeFunctionOutputSchema } from '../misc/custom-schemas';
import type { Implementation } from '../misc/types';
import { InvocationType } from '@aws-sdk/client-lambda';

export const invokeFunction: Implementation['actions']['invokeFunction'] = async ({ ctx, logger, input }) => {
  const validatedInput = invokeFunctionInputSchema.parse(input);

  const lambdaClient = getClient(ctx.configuration);

  let result;

  try {
    const { functionName, invocationType, jsonBody } = validatedInput;

    // Convert jsonBody to an object or use an empty object if not provided
    let payload;
    try {
      payload = jsonBody ? JSON.parse(jsonBody) : {};
    } catch (error) {
      logger.forBot().error(`Invalid JSON body: ${jsonBody}`);
      throw new Error(`Invalid JSON body: ${jsonBody}`);
    }

    // Log the parsed payload
    logger.forBot().debug(`Parsed payload: ${JSON.stringify(payload)}`);

    // Check for different invocation types and set the proper enum value
    switch (invocationType) {
      case 'Event':
        result = await lambdaClient.invokeFunction(functionName, InvocationType.Event, payload);
        logger.forBot().debug(`Response Event - ${JSON.stringify(result)}`);
        break;
      case 'RequestResponse':
        result = await lambdaClient.invokeFunction(functionName, InvocationType.RequestResponse, payload);
        logger.forBot().debug(`Response Request Response - ${JSON.stringify(result)}`);
        break;
      case 'DryRun':
        result = await lambdaClient.invokeFunction(functionName, InvocationType.DryRun, payload);
        logger.forBot().debug(`Response DryRun - ${JSON.stringify(result)}`);
        break;
      default:
        throw new Error(`Unsupported invocation type: ${invocationType}`);
    }

    logger.forBot().debug(`Successful - Invoke Function - ${functionName}`);
    logger.forBot().debug(`Response - ${JSON.stringify(result)}`);

    // Inspect the type and structure of result.data.Payload
    const payloadData = result.data.Payload;
    logger.forBot().debug(`Type of result.data.Payload: ${typeof payloadData}`);
    logger.forBot().debug(`Payload structure: ${JSON.stringify(payloadData)}`);

    // Reconstruct Uint8Array from the object and decode it
    if (payloadData && typeof payloadData === 'object') {
      const uint8Array = new Uint8Array(Object.values(payloadData));
      const payloadString = new TextDecoder('utf-8').decode(uint8Array);
      let payloadJson;
      try {
        payloadJson = JSON.parse(payloadString);
      } catch (error) {
        logger.forBot().error(`Failed to parse Payload as JSON: ${payloadString}`);
        payloadJson = payloadString; // Fallback to raw string if parsing fails
      }

      logger.forBot().debug(`Payload as string: ${payloadString}`);
      logger.forBot().debug(`Payload as JSON: ${JSON.stringify(payloadJson)}`);
      result.data.Payload = payloadJson; // Update the Payload with the decoded value
    } else {
      logger.forBot().debug(`Payload is not in expected format.`);
    }

    return {
      success: result.success,
      message: result.message,
      data: result.data
    };
  } catch (error) {
    logger.forBot().debug(`'Invoke Function' exception ${JSON.stringify(error)}`);
    throw error;
  }
};
