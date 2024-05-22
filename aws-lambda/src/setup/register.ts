import { getClient } from 'src/client';
import * as bpclient from "@botpress/client";
import type { RegisterFunction } from '../misc/types'

export const register: RegisterFunction = async ({ ctx, client, logger }) => {
  try {
    // Assuming there's an S3 client setup which can be imported and used to check access
    const lambdaClient = getClient(ctx.configuration);  // Ensure getClient is properly imported and setup
    const result = await lambdaClient.listFunctions();
    
    // If the listFunctions command does not throw, it means we have successfully accessed S3
    logger.forBot().info("Successfully accessed AWS Lambda: Integration can proceed");
    
    // Optionally, you can log the count of functions or other details
    logger.forBot().info(`Found ${result} functions in the account.`);

  } catch (error) {
    // If there's an error in the command, it will come here
    logger.forBot().error("Failed to access AWS Lambda: Check configuration", error);

    throw new bpclient.RuntimeError(
      "Configuration Error! Unknown error."
    );
  }
}
