---
id: "logger"
title: "Module: logger"
sidebar_label: "logger"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### chalk

▸ **chalk**(): [`RnvApiChalk`](api_types.md#rnvapichalk)

#### Returns

[`RnvApiChalk`](api_types.md#rnvapichalk)

#### Defined in

@rnv/core/lib/logger/index.d.ts:2

___

### getCurrentCommand

▸ **getCurrentCommand**(`excludeDollar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `excludeDollar` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:5

___

### isInfoEnabled

▸ **isInfoEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/logger/index.d.ts:16

___

### logAndSave

▸ **logAndSave**(`msg`, `skipLog?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `skipLog?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:4

___

### logAppInfo

▸ **logAppInfo**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:22

___

### logComplete

▸ **logComplete**(`isEnd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnd?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:17

___

### logDebug

▸ **logDebug**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:15

___

### logEnd

▸ **logEnd**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:20

___

### logError

▸ **logError**(`e`, `isEnd?`, `skipAnalytics?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |
| `isEnd?` | `boolean` |
| `skipAnalytics?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:19

___

### logExitTask

▸ **logExitTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | (`s`: `string`) => `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:11

___

### logHook

▸ **logHook**(`hook`, `msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | `string` |
| `msg?` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:12

___

### logInfo

▸ **logInfo**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:14

___

### logInitTask

▸ **logInitTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | `string` \| (`s`: `string`) => `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:10

___

### logInitialize

▸ **logInitialize**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:21

___

### logRaw

▸ **logRaw**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:7

___

### logSuccess

▸ **logSuccess**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:18

___

### logSummary

▸ **logSummary**(`header`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:8

___

### logTask

▸ **logTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | `any` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:9

___

### logToSummary

▸ **logToSummary**(`v`, `sanitizePaths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |
| `sanitizePaths?` | () => `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:6

___

### logWarning

▸ **logWarning**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `unknown` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:13

___

### logWelcome

▸ **logWelcome**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:3

___

### printArrIntoBox

▸ **printArrIntoBox**(`arr`, `prefix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |
| `prefix?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/logger/index.d.ts:24

___

### printBoxEnd

▸ **printBoxEnd**(): `string`

#### Returns

`string`

#### Defined in

@rnv/core/lib/logger/index.d.ts:26

___

### printBoxStart

▸ **printBoxStart**(`str`, `str2?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `str2?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/logger/index.d.ts:25

___

### printIntoBox

▸ **printIntoBox**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/logger/index.d.ts:23
