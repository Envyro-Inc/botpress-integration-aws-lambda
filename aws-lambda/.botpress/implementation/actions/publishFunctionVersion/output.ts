/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Output {
  success: boolean;
  message: string;
  data: {
    FunctionName: string;
    FunctionArn: string;
    Runtime: string;
    Role: string;
    Handler: string;
    CodeSize: number;
    Description: string;
    Timeout: number;
    MemorySize: number;
    LastModified: string;
    CodeSha256: string;
    Version: string;
    VpcConfig?: {
      SubnetIds: string[];
      SecurityGroupIds: string[];
      VpcId: string;
    };
    Environment?: {
      Variables: {
        [k: string]: string;
      };
    };
    KMSKeyArn?: string;
    TracingConfig?: {
      Mode: string;
    };
    MasterArn?: string;
    RevisionId?: string;
    Architectures?: string[];
    State?: string;
    StateReason?: string;
    StateReasonCode?: string;
    LastUpdateStatus?: string;
    LastUpdateStatusReason?: string;
    LastUpdateStatusReasonCode?: string;
    FileSystemConfigs?: {
      Arn: string;
      LocalMountPath: string;
    }[];
  };
}
