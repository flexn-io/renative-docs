---
id: "api"
title: "Module: api"
sidebar_label: "api"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### createRnvApi

▸ **createRnvApi**(`_api?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_api?` | `Object` |
| `_api.analytics` | [`RnvContextAnalytics`](api_types.md#rnvcontextanalytics) |
| `_api.doResolve` | [`DoResolveFn`](system_types.md#doresolvefn) |
| `_api.getConfigProp` | [`GetConfigPropFn`](api_types.md#getconfigpropfn) |
| `_api.logger` | [`RnvApiLogger`](api_types.md#rnvapilogger) |
| `_api.prompt` | [`RnvApiPrompt`](api_types.md#rnvapiprompt) |
| `_api.spinner` | [`RnvApiSpinner`](api_types.md#rnvapispinner) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/api/index.d.ts:3

___

### generateOptions

▸ **generateOptions**(`inputData`, `isMultiChoice?`, `mapping?`, `renderMethod?`): [`PromptOptions`](api_types.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputData` | `any` |
| `isMultiChoice?` | `boolean` |
| `mapping?` | `any` |
| `renderMethod?` | [`PromptRenderFn`](api_types.md#promptrenderfn) |

#### Returns

[`PromptOptions`](api_types.md#promptoptions)

#### Defined in

@rnv/core/lib/api/index.d.ts:13

___

### inquirerPrompt

▸ **inquirerPrompt**(`options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PromptParams`](api_types.md#promptparams) |

#### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/api/index.d.ts:11

___

### inquirerSeparator

▸ **inquirerSeparator**(): `any`

#### Returns

`any`

#### Defined in

@rnv/core/lib/api/index.d.ts:12

___

### pressAnyKeyToContinue

▸ **pressAnyKeyToContinue**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/api/index.d.ts:14
