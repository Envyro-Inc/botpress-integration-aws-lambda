# AWS Lambda Integration for Botpress

Harness the power of AWS Lambda directly from your Botpress chatbot. This integration allows you to manage Lambda functions, including listing, retrieving, invoking, and deleting functions, as well as handling Lambda layers.

## Table of Contents
- [Introduction](#introduction)
- [AWS Lambda Setup & Configuration](#aws-lambda-setup--configuration)
  - [Prerequisites](#prerequisites)
  - [Enable Integration](#enable-integration)
- [Actions](#actions)
  - [List Functions](#list-functions)
  - [List Function Versions](#list-function-versions)
  - [Get Function](#get-function)
  - [Get Function Configuration](#get-function-configuration)
  - [Get Function Policy](#get-function-policy)
  - [Delete Function](#delete-function)
  - [Publish Function Version](#publish-function-version)
  - [Invoke Function](#invoke-function)
  - [Invoke Function URL](#invoke-function-url)
  - [List Layers](#list-layers)
  - [List Layer Versions](#list-layer-versions)
  - [Get Layer Version](#get-layer-version)
- [Use Cases](#use-cases)
- [Supported Events](#supported-events)

## Introduction
The AWS Lambda integration for Botpress empowers your chatbot to manage serverless functions. List, get, and delete Lambda functions, invoke them, and handle layers directly through your chatbot. This integration is ideal for automating cloud workflows.

## AWS Lambda Setup & Configuration
### Prerequisites
Before enabling the Botpress AWS Lambda Integration, please ensure that you have the following:

- A Botpress server instance set up either locally or in the cloud.
- AWS credentials with permissions to access Lambda services.

### Enable Integration
To enable the AWS Lambda integration in Botpress, follow these steps:

1. Access your Botpress admin panel.
2. Navigate to the “Integrations” section.
3. Locate the AWS Lambda integration and click on “Enable” or “Configure.”
4. Provide the required `accessKeyId`, `secretAccessKey`, and `region`.
5. Save the configuration.

## Actions
Here are the actions supported by the AWS Lambda integration:

### List Functions
List all Lambda functions.

### List Function Versions
List all versions of a specified Lambda function.

### Get Function
Retrieve details about a specified Lambda function.

### Get Function Configuration
Retrieve configuration details of a specified Lambda function.

### Get Function Policy
Retrieve the resource policy of a specified Lambda function.

### Delete Function
Delete a specified Lambda function.

### Publish Function Version
Publish a new version of a specified Lambda function.

### Invoke Function
Invoke a specified Lambda function.

### List Layers
List Lambda layers.

### List Layer Versions
List versions of a specified Lambda layer.

### Get Layer Version
Retrieve details of a specified Lambda layer version.

## Use Cases
Here are some common use cases for the AWS Lambda integration:

1. **Function Management**
   - Enable users to list and retrieve details of Lambda functions.
   - Use the List Functions action to display all available functions.
   - Use the Get Function and Get Function Configuration actions to retrieve details and configuration of specific functions.

2. **Function Invocation**
   - Allow users to invoke Lambda functions directly from the chatbot.
   - Use the Invoke Function action to run functions with specific payloads.
   - Use the Invoke Function URL action to trigger functions via URLs.

3. **Version Management**
   - Manage and retrieve versions of Lambda functions.
   - Use the List Function Versions action to display all versions of a function.
   - Use the Publish Function Version action to create new versions.

4. **Layer Management**
   - Manage and retrieve Lambda layers and their versions.
   - Use the List Layers and List Layer Versions actions to display layers and their versions.
   - Use the Get Layer Version action to retrieve details of a specific layer version.

5. **Function Deletion**
   - Delete specific Lambda functions when they are no longer needed.
   - Use the Delete Function action to remove unused or obsolete functions.

## Supported Events
This integration does not currently include events that trigger based on AWS Lambda activities. However, you can customize the integration to listen for specific Lambda event notifications via AWS SNS (Simple Notification Service) or other AWS service+s that trigger workflows in Botpress.
