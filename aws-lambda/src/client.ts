import {
  LambdaClient,
  ListFunctionsCommand,
  ListVersionsByFunctionCommand,
  GetFunctionCommand,
  GetFunctionConfigurationCommand,
  GetPolicyCommand,
  DeleteFunctionCommand,
  PublishVersionCommand,
  InvokeCommand,
  ListLayersCommand,
  ListLayerVersionsCommand,
  GetLayerVersionCommand,
  InvocationType,
  Runtime
} from "@aws-sdk/client-lambda";
import axios from "axios";

/**
 * LambdaApi Class: Provides methods to interact with AWS Lambda service.
 *
 * Methods:
 * - listFunctions: Lists all Lambda functions.
 * - listFunctionVersions: Lists all versions of a specified Lambda function.
 * - getFunction: Retrieves details about a specified Lambda function.
 * - getFunctionConfiguration: Retrieves configuration details of a specified Lambda function.
 * - getFunctionPolicy: Retrieves the resource policy of a specified Lambda function.
 * - deleteFunction: Deletes a specified Lambda function.
 * - publishFunctionVersion: Publishes a new version of a specified Lambda function.
 * - invokeFunction: Invokes a specified Lambda function.
 * - listLayers: Lists Lambda layers.
 * - listLayerVersions: Lists versions of a specified Lambda layer.
 * - getLayerVersion: Retrieves details of a specified Lambda layer version.
 */

export class LambdaApi {
  private lambdaClient: LambdaClient;

  constructor(region: string, accessKeyId: string, secretAccessKey: string) {
    this.lambdaClient = new LambdaClient({
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  /**
   * Lists all Lambda functions.
   * @param {number} [limit] - The maximum number of functions to return.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async listFunctions(limit?: number) {
    const command = new ListFunctionsCommand({ MaxItems: limit });
    return this.executeCommand(command, "Functions listed successfully");
  }

  /**
   * Lists all versions of a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @param {number} [maxItems] - The maximum number of versions to return.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async listFunctionVersions(functionName: string, maxItems?: number) {
    const command = new ListVersionsByFunctionCommand({ FunctionName: functionName, MaxItems: maxItems });
    return this.executeCommand(command, "Function versions listed successfully");
  }

  /**
   * Retrieves details about a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getFunction(functionName: string) {
    const command = new GetFunctionCommand({ FunctionName: functionName });
    return this.executeCommand(command, "Function retrieved successfully");
  }

  /**
   * Retrieves configuration details of a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getFunctionConfiguration(functionName: string) {
    const command = new GetFunctionConfigurationCommand({ FunctionName: functionName });
    return this.executeCommand(command, "Function configuration retrieved successfully");
  }

  /**
   * Retrieves the resource policy of a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getFunctionPolicy(functionName: string) {
    const command = new GetPolicyCommand({ FunctionName: functionName });
    return this.executeCommand(command, "Function policy retrieved successfully");
  }

  /**
   * Deletes a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async deleteFunction(functionName: string) {
    const command = new DeleteFunctionCommand({ FunctionName: functionName });
    return this.executeCommand(command, "Function deleted successfully");
  }

  /**
   * Publishes a new version of a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @param {string} [description] - The description of the version.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async publishFunctionVersion(functionName: string, description?: string) {
    const command = new PublishVersionCommand({ FunctionName: functionName, Description: description });
    return this.executeCommand(command, "Function version published successfully");
  }

  /**
   * Invokes a specified Lambda function.
   * @param {string} functionName - The name of the function.
   * @param {InvocationType} invocationType - The type of invocation.
   * @param {object} jsonBody - The JSON body to send as payload.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async invokeFunction(functionName: string, invocationType: InvocationType, jsonBody: object) {
    const command = new InvokeCommand({
      FunctionName: functionName,
      InvocationType: invocationType,
      Payload: Buffer.from(JSON.stringify(jsonBody)),
    });
    return this.executeCommand(command, "Function invoked successfully");
  }

    /**
   * Invokes a specified Lambda function via URL.
   * @param {string} url - The URL to trigger the Lambda function.
   * @param {object} [jsonBody] - The JSON body to send as payload.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
    async invokeFunctionURL(url: string, jsonBody?: object) {
      try {
        const payload = jsonBody || {};
        console.log('Invoking Lambda function via URL:', url);
        console.log('Payload:', payload);
  
        const response = await axios.post(url, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Lambda response:', response.data);
  
        return { success: true, message: 'Function invoked successfully', data: response.data };
      } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred';
        console.error('Error invoking Lambda function:', message);
        return { success: false, message, data: null };
      }
    }

  /**
   * Lists Lambda layers.
   * @param {Runtime} [compatibleRuntime] - The runtime identifier to filter the list of layers.
   * @param {number} [limit] - The maximum number of layers to return.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async listLayers(compatibleRuntime?: Runtime, limit?: number) {
    const command = new ListLayersCommand({ CompatibleRuntime: compatibleRuntime, MaxItems: limit });
    return this.executeCommand(command, "Layers listed successfully");
  }

  /**
   * Lists versions of a specified Lambda layer.
   * @param {string} layerName - The name of the layer.
   * @param {Runtime} [compatibleRuntime] - The runtime identifier to filter the list of layer versions.
   * @param {number} [limit] - The maximum number of versions to return.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async listLayerVersions(layerName: string, compatibleRuntime?: Runtime, limit?: number) {
    const command = new ListLayerVersionsCommand({ LayerName: layerName, CompatibleRuntime: compatibleRuntime, MaxItems: limit });
    return this.executeCommand(command, "Layer versions listed successfully");
  }

  /**
   * Retrieves details of a specified Lambda layer version.
   * @param {string} layerName - The name of the layer.
   * @param {number} versionNumber - The version number of the layer.
   * @returns {Promise<Object>} A promise that resolves to the result of the operation.
   */
  async getLayerVersion(layerName: string, versionNumber: number) {
    const command = new GetLayerVersionCommand({ LayerName: layerName, VersionNumber: versionNumber });
    return this.executeCommand(command, "Layer version retrieved successfully");
  }

  /**
   * Executes a provided command and handles the response or error.
   * @param {Command} command - The command to execute.
   * @param {string} successMessage - The success message to return if command execution is successful.
   * @returns {Promise<Object>} A promise that resolves to the operation result or an error message.
   */
  private async executeCommand(command: any, successMessage: string) {
    try {
      const response = await this.lambdaClient.send(command);
      const plainResponse = JSON.parse(JSON.stringify(response));
      
      return { success: true, message: successMessage, data: plainResponse };
    } catch (error: unknown) {
      const message = (error instanceof Error) ? error.message : "An unknown error occurred";
      return { success: false, message };
    }
  }
}

/**
 * Factory function to create an instance of LambdaApi.
 * @param {Object} config - Configuration object.
 * @param {string} config.region - The AWS region.
 * @param {string} config.accessKeyId - The AWS access key ID.
 * @param {string} config.secretAccessKey - The AWS secret access key.
 * @returns {LambdaApi} An instance of the LambdaApi class.
 */
export function getClient(config: { region: string, accessKeyId: string, secretAccessKey: string }) {
  return new LambdaApi(config.region, config.accessKeyId, config.secretAccessKey);
}