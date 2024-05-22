/* tslint:disable */
// This file is generated
// Do not edit this file
/* tslint:disable */
// This file is generated
// Do not edit this file

import * as sdk from "@botpress/sdk"

import type * as configuration from "./configuration/index"
import type * as actions from "./actions/index"
import type * as channels from "./channels/index"
import type * as events from "./events/index"
import type * as states from "./states/index"
export * as configuration from "./configuration/index"
export * as actions from "./actions/index"
export * as channels from "./channels/index"
export * as events from "./events/index"
export * as states from "./states/index"

type TIntegration = {
  name: "aws-lambda"
  version: "24.5.0"
  configuration: configuration.Configuration
  actions: actions.Actions
  channels: channels.Channels
  events: events.Events
  states: states.States
  user: { "tags": { "id": { "title": "AWS Access Key ID" } }, "creation": { "enabled": false, "requiredTags": [] } }
}

export type IntegrationProps = sdk.IntegrationProps<TIntegration>

export class Integration extends sdk.Integration<TIntegration> {}

export type Client = sdk.IntegrationSpecificClient<TIntegration>