/* tslint:disable */
// This file is generated
// Do not edit this file
import * as listFunctions from "./listFunctions/index";
export * as listFunctions from "./listFunctions/index";
import * as listFunctionVersions from "./listFunctionVersions/index";
export * as listFunctionVersions from "./listFunctionVersions/index";
import * as getFunction from "./getFunction/index";
export * as getFunction from "./getFunction/index";
import * as getFunctionConfiguration from "./getFunctionConfiguration/index";
export * as getFunctionConfiguration from "./getFunctionConfiguration/index";
import * as getFunctionPolicy from "./getFunctionPolicy/index";
export * as getFunctionPolicy from "./getFunctionPolicy/index";
import * as deleteFunction from "./deleteFunction/index";
export * as deleteFunction from "./deleteFunction/index";
import * as publishFunctionVersion from "./publishFunctionVersion/index";
export * as publishFunctionVersion from "./publishFunctionVersion/index";
import * as invokeFunction from "./invokeFunction/index";
export * as invokeFunction from "./invokeFunction/index";
import * as listLayers from "./listLayers/index";
export * as listLayers from "./listLayers/index";
import * as listLayerVersions from "./listLayerVersions/index";
export * as listLayerVersions from "./listLayerVersions/index";
import * as getLayerVersion from "./getLayerVersion/index";
export * as getLayerVersion from "./getLayerVersion/index";

export type Actions = {
  listFunctions: listFunctions.ActionListFunctions;
  listFunctionVersions: listFunctionVersions.ActionListFunctionVersions;
  getFunction: getFunction.ActionGetFunction;
  getFunctionConfiguration: getFunctionConfiguration.ActionGetFunctionConfiguration;
  getFunctionPolicy: getFunctionPolicy.ActionGetFunctionPolicy;
  deleteFunction: deleteFunction.ActionDeleteFunction;
  publishFunctionVersion: publishFunctionVersion.ActionPublishFunctionVersion;
  invokeFunction: invokeFunction.ActionInvokeFunction;
  listLayers: listLayers.ActionListLayers;
  listLayerVersions: listLayerVersions.ActionListLayerVersions;
  getLayerVersion: getLayerVersion.ActionGetLayerVersion;
}
