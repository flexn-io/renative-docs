---
id: "api_types"
title: "Module: api/types"
sidebar_label: "api/types"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [RnvApi](../interfaces/api_types.RnvApi.md)

## Type Aliases

### GetConfigPropFn

Ƭ **GetConfigPropFn**: \<T\>(`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md), `platform`: [`RnvPlatform`](types.md#rnvplatform), `key`: `T`, `defaultVal?`: [`ConfigProp`](schema_types.md#configprop)[`T`]) => [`ConfigProp`](schema_types.md#configprop)[`T`]

#### Type declaration

▸ \<`T`\>(`c`, `platform`, `key`, `defaultVal?`): [`ConfigProp`](schema_types.md#configprop)[`T`]

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ConfigPropKey`](schema_types.md#configpropkey) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md) |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | [`ConfigProp`](schema_types.md#configprop)[`T`] |

##### Returns

[`ConfigProp`](schema_types.md#configprop)[`T`]

#### Defined in

@rnv/core/lib/api/types.d.ts:115

___

### PromptOptions

Ƭ **PromptOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asString` | `string` |
| `keysAsArray` | `string`[] |
| `keysAsObject` | `Record`\<`string`, `string`\> |
| `optionsAsArray` | `any`[] |
| `valuesAsArray` | `any`[] |
| `valuesAsObject` | `Record`\<`string`, `any`\> |

#### Defined in

@rnv/core/lib/api/types.d.ts:91

___

### PromptParams

Ƭ **PromptParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices?` | (\{ `name`: `string` ; `value`: `any`  } \| `string`)[] |
| `default?` | `any` |
| `logMessage?` | `string` |
| `loop?` | `boolean` |
| `message?` | `string` |
| `name?` | `string` |
| `pageSize?` | `number` |
| `type` | `string` |
| `validate?` | (`i`: `string`) => `string` \| `boolean` |
| `warningMessage?` | `string` |

#### Defined in

@rnv/core/lib/api/types.d.ts:99

___

### PromptRenderFn

Ƭ **PromptRenderFn**: (`i`: `number`, `obj`: `any`, `mapping`: `any`, `defaultVal`: `string`) => `string`

#### Type declaration

▸ (`i`, `obj`, `mapping`, `defaultVal`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `obj` | `any` |
| `mapping` | `any` |
| `defaultVal` | `string` |

##### Returns

`string`

#### Defined in

@rnv/core/lib/api/types.d.ts:114

___

### RnvApiChalk

Ƭ **RnvApiChalk**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `bold` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `cyan` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `gray` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `green` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `grey` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `magenta` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `red` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `rgb` | (`red`: `number`, `green`: `number`, `blue`: `number`) => `any` |
| `white` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |
| `yellow` | [`RnvApiChalkFn`](api_types.md#rnvapichalkfn) |

#### Defined in

@rnv/core/lib/api/types.d.ts:50

___

### RnvApiChalkFn

Ƭ **RnvApiChalkFn**: (`v`: `any`) => `any` & [`RnvApiChalk`](api_types.md#rnvapichalk)

#### Defined in

@rnv/core/lib/api/types.d.ts:63

___

### RnvApiLogger

Ƭ **RnvApiLogger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chalk` | () => [`RnvApiChalk`](api_types.md#rnvapichalk) |
| `getCurrentCommand` | (`excludeDollar`: `boolean`) => `void` |
| `isInfoEnabled` | () => `boolean` |
| `logAndSave` | (`msg`: `string`, `skipLog?`: `boolean`) => `void` |
| `logAppInfo` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)) => `void` |
| `logComplete` | (`isEnd?`: `boolean`) => `void` |
| `logDebug` | (...`args`: `any`[]) => `void` |
| `logEnd` | (`code`: `number`) => `void` |
| `logError` | (`e`: `Error` \| `string` \| `unknown`, `isEnd?`: `boolean`, `skipAnalytics?`: `boolean`) => `void` |
| `logExitTask` | (`task`: `string`, `customChalk?`: (`s`: `string`) => `string`) => `void` |
| `logHook` | (`hook`: `string`, `msg?`: `string`) => `void` |
| `logInfo` | (`msg`: `string`) => `void` |
| `logInitTask` | (`task`: `string`, `customChalk?`: `string` \| (`s`: `string`) => `string`) => `void` |
| `logInitialize` | () => `void` |
| `logRaw` | (...`args`: `string`[]) => `void` |
| `logSuccess` | (`msg`: `string`) => `void` |
| `logSummary` | (`header`: `string`) => `void` |
| `logTask` | (`task`: `string`, `customChalk?`: `any`) => `void` |
| `logToSummary` | (`v`: `string`, `sanitizePaths?`: () => `string`) => `void` |
| `logWarning` | (`msg`: `string` \| `boolean` \| `unknown`) => `void` |
| `logWelcome` | () => `void` |
| `printArrIntoBox` | (`arr`: `string`[], `prefix?`: `string`) => `string` |
| `printBoxEnd` | () => `string` |
| `printBoxStart` | (`str`: `string`, `str2?`: `string`) => `string` |
| `printIntoBox` | (`str`: `string`) => `string` |

#### Defined in

@rnv/core/lib/api/types.d.ts:64

___

### RnvApiPrompt

Ƭ **RnvApiPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generateOptions` | (`inputData`: `any`, `isMultiChoice?`: `boolean`, `mapping?`: `any`, `renderMethod?`: [`PromptRenderFn`](api_types.md#promptrenderfn)) => [`PromptOptions`](api_types.md#promptoptions) |
| `inquirerPrompt` | (`options`: [`PromptParams`](api_types.md#promptparams)) => `Promise`\<`any`\> |
| `inquirerSeparator` | () => `any` |
| `pressAnyKeyToContinue` | () => `Promise`\<`any`\> |

#### Defined in

@rnv/core/lib/api/types.d.ts:32

___

### RnvApiSpinner

Ƭ **RnvApiSpinner**: (`msg`: `string` \| \{ `text`: `string`  }) => \{ `fail`: [`RnvApiSpinner`](api_types.md#rnvapispinner) ; `start`: [`RnvApiSpinner`](api_types.md#rnvapispinner) ; `succeed`: [`RnvApiSpinner`](api_types.md#rnvapispinner) ; `text`: `string`  }

#### Type declaration

▸ (`msg`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| \{ `text`: `string`  } |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fail` | [`RnvApiSpinner`](api_types.md#rnvapispinner) |
| `start` | [`RnvApiSpinner`](api_types.md#rnvapispinner) |
| `succeed` | [`RnvApiSpinner`](api_types.md#rnvapispinner) |
| `text` | `string` |

#### Defined in

@rnv/core/lib/api/types.d.ts:24

___

### RnvContextAnalytics

Ƭ **RnvContextAnalytics**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `captureEvent` | (`ops`: \{ `platform?`: [`RnvPlatform`](types.md#rnvplatform) ; `platforms?`: `string`[] ; `template?`: `string` ; `type`: `string`  }) => `void` |
| `captureException` | (`e`: `string` \| `Error`, `context`: \{ `extra`: `any`  }) => `void` |
| `teardown` | () => `Promise`\<`void`\> |

#### Defined in

@rnv/core/lib/api/types.d.ts:38
