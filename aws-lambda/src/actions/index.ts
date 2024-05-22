import { deleteFunction } from './delete-function'
import { getFunctionConfiguration } from './get-function-configuration'
import { getFunctionPolicy } from './get-function-policy'
import { getFunction } from './get-function'
import { getLayerVersion } from './get-layer-version'
import { invokeFunction } from './invoke-function'
import { listFunctionVersions } from './list-function-versions'
import { listFunctions } from './list-functions'
import { listLayerVersions } from './list-layer-versions'
import { listLayers } from './list-layers'
import { publishFunctionVersion } from './publish-function-version'
import { invokeFunctionUrl } from './invoke-function-url'

export default {
    deleteFunction,
    getFunctionConfiguration,
    getFunctionPolicy,
    getFunction,
    getLayerVersion,
    invokeFunction,
    invokeFunctionUrl,
    listFunctionVersions,
    listFunctions,
    listLayerVersions,
    listLayers,
    publishFunctionVersion
}
