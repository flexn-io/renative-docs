---
id: "system_exec"
title: "Module: system/exec"
sidebar_label: "system/exec"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### ExecOptionsPresets

• `Const` **ExecOptionsPresets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FIRE_AND_FORGET` | [`ExecOptions`](system_types.md#execoptions) |
| `INHERIT_OUTPUT_NO_SPINNER` | [`ExecOptions`](system_types.md#execoptions) |
| `NO_SPINNER_FULL_ERROR_SUMMARY` | [`ExecOptions`](system_types.md#execoptions) |
| `SPINNER_FULL_ERROR_SUMMARY` | [`ExecOptions`](system_types.md#execoptions) |

#### Defined in

@rnv/core/lib/system/exec.d.ts:4

___

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commandExistsSync` | (`commandName`: `string`) => `boolean` |
| `execCLI` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `cli`: `string`, `command`: `string`, `opts?`: [`ExecOptions`](system_types.md#execoptions)) => `Promise`\<`string`\> |
| `executeAsync` | (`_c`: `string` \| `string`[] \| [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `_cmd?`: `string` \| `string`[] \| [`ExecOptions`](system_types.md#execoptions), `_opts?`: [`ExecOptions`](system_types.md#execoptions)) => `Promise`\<`string`\> |
| `executeTelnet` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `port`: `string`, `command`: `string`) => `Promise`\<`string`\> |
| `openCommand` | `string` |

#### Defined in

@rnv/core/lib/system/exec.d.ts:49

___

### openCommand

• `Const` **openCommand**: `string`

#### Defined in

@rnv/core/lib/system/exec.d.ts:46

## Functions

### commandExists

▸ **commandExists**(`commandName`, `callback?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |
| `callback?` | [`ExecCallback`](system_types.md#execcallback) |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:44

___

### commandExistsSync

▸ **commandExistsSync**(`commandName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/system/exec.d.ts:45

___

### execCLI

▸ **execCLI**(`c`, `cli`, `command`, `opts?`): `Promise`\<`string`\>

Execute CLI command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> | the trusty old c object |
| `cli` | `string` | the cli to be executed |
| `command` | `string` | the command to be executed |
| `opts?` | [`ExecOptions`](system_types.md#execoptions) | the options for the command |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:21

___

### execaCommand

▸ **execaCommand**(`cmd`, `options?`): `ExecaChildProcess`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `options?` | `Options`\<`string`\> |

#### Returns

`ExecaChildProcess`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:32

___

### executeAsync

▸ **executeAsync**(`_c`, `_cmd?`, `_opts?`): `Promise`\<`string`\>

Execute a plain command

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c` | `string` \| `string`[] \| [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `_cmd?` | `string` \| `string`[] \| [`ExecOptions`](system_types.md#execoptions) |
| `_opts?` | [`ExecOptions`](system_types.md#execoptions) |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:31

___

### executeTelnet

▸ **executeTelnet**(`c`, `port`, `command`): `Promise`\<`string`\>

Connect to a local telnet server and execute a command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> | - |
| `port` | `string` | where do you want me to connect to? |
| `command` | `string` | the command to be executed once I'm connected |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:42

___

### parseErrorMessage

▸ **parseErrorMessage**(`text`, `maxErrorLength?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `maxErrorLength?` | `number` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/exec.d.ts:43

___

### waitForExecCLI

▸ **waitForExecCLI**(`c`, `cli`, `command`, `callback`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `cli` | `string` |
| `command` | `string` |
| `callback` | (`resp`: `string` \| ``true``) => `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:47
