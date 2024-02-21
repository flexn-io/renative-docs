---
id: "system_types"
title: "Module: system/types"
sidebar_label: "system/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### DoResolveFn

Ƭ **DoResolveFn**: (`aPath?`: `string`, `mandatory?`: `boolean`, `options?`: [`ResolveOptions`](system_types.md#resolveoptions)) => `string` \| `undefined`

#### Type declaration

▸ (`aPath?`, `mandatory?`, `options?`): `string` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `aPath?` | `string` |
| `mandatory?` | `boolean` |
| `options?` | [`ResolveOptions`](system_types.md#resolveoptions) |

##### Returns

`string` \| `undefined`

#### Defined in

@rnv/core/lib/system/types.d.ts:1

___

### ExecCallback

Ƭ **ExecCallback**: (`result`: `unknown`, `isError`: `boolean`) => `void`

#### Type declaration

▸ (`result`, `isError`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown` |
| `isError` | `boolean` |

##### Returns

`void`

#### Defined in

@rnv/core/lib/system/types.d.ts:27

___

### ExecOptions

Ƭ **ExecOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `all?` | `boolean` |
| `cwd?` | `string` |
| `detached?` | `boolean` |
| `env?` | `Record`\<`string`, `any`\> |
| `ignoreErrors?` | `boolean` |
| `localDir?` | `string` |
| `maxErrorLength?` | `number` |
| `mono?` | `boolean` |
| `preferLocal?` | `boolean` |
| `privateParams?` | `string`[] |
| `rawCommand?` | \{ `args`: `string`[]  } |
| `rawCommand.args` | `string`[] |
| `shell?` | `boolean` |
| `silent?` | `boolean` |
| `stdio?` | ``"pipe"`` \| ``"inherit"`` \| ``"ignore"`` |
| `timeout?` | `number` |

#### Defined in

@rnv/core/lib/system/types.d.ts:8

___

### FileUtilsPropConfig

Ƭ **FileUtilsPropConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configProps?` | `Record`\<`string`, `any`\> |
| `files?` | `Record`\<`string`, `any`\> |
| `props` | `Record`\<`string`, `string`\> |
| `runtimeProps?` | `Record`\<`string`, `any`\> |

#### Defined in

@rnv/core/lib/system/types.d.ts:37

___

### OverridesOptions

Ƭ **OverridesOptions**: \{ `override`: `string` \| `number` \| `undefined` ; `pattern`: `string`  }[]

#### Defined in

@rnv/core/lib/system/types.d.ts:28

___

### ResolveOptions

Ƭ **ResolveOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basedir?` | `string` |
| `extensions?` | `string`[] |
| `forceForwardPaths?` | `boolean` |
| `keepSuffix?` | `boolean` |

#### Defined in

@rnv/core/lib/system/types.d.ts:2

___

### RnvCLI

Ƭ **RnvCLI**: `Record`\<`string`, `object`\>

#### Defined in

@rnv/core/lib/system/types.d.ts:36

___

### TimestampPathsConfig

Ƭ **TimestampPathsConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |
| `timestamp` | `number` |

#### Defined in

@rnv/core/lib/system/types.d.ts:32
