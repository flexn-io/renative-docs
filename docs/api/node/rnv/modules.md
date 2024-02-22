---
id: "modules"
title: "rnv"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### executeAsync

▸ **executeAsync**(`_c`, `_cmd?`, `_opts?`): `Promise`\<`string`\>

Execute a plain command

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c` | `string` \| `string`[] \| `RnvContext`\<`any`\> |
| `_cmd?` | `string` \| `string`[] \| `ExecOptions` |
| `_opts?` | `ExecOptions` |

#### Returns

`Promise`\<`string`\>

#### Defined in

renative/packages/core/lib/system/exec.d.ts:31

___

### executeRnv

▸ **executeRnv**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cmd` | `string` |
| › `logger` | `RnvApiLogger` |
| › `process` | `Process` |
| › `program` | `RnvContextProgram` |
| › `prompt` | `RnvApiPrompt` |
| › `spinner` | `RnvApiSpinner` |
| › `subCmd` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

renative-docs/node_modules/rnv/lib/runner.d.ts:7

___

### executeTask

▸ **executeTask**(`c`, `task`, `parentTask?`, `originTask?`, `isFirstTask?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `RnvContext`\<`any`\> |
| `task` | `string` |
| `parentTask?` | `string` |
| `originTask?` | `string` |
| `isFirstTask?` | `boolean` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

renative/packages/core/lib/tasks/index.d.ts:6

___

### removeDirs

▸ **removeDirs**(`dirPaths`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPaths` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

renative/packages/core/lib/system/fs.d.ts:34

___

### withDefaultRNVBabel

▸ **withDefaultRNVBabel**(`cnf`): `BabelConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `BabelConfig` |

#### Returns

`BabelConfig`

#### Defined in

renative-docs/node_modules/rnv/lib/adapter/index.d.ts:2

___

### withRNVBabel

▸ **withRNVBabel**(`cnf`): (`api`: `BabelApi`) => `BabelConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `BabelConfig` |

#### Returns

`fn`

▸ (`api`): `BabelConfig`

##### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `BabelApi` |

##### Returns

`BabelConfig`

#### Defined in

renative-docs/node_modules/rnv/lib/adapter/index.d.ts:3

___

### withRNVMetro

▸ **withRNVMetro**(`cnf`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `unknown` |

#### Returns

`any`

#### Defined in

renative-docs/node_modules/rnv/lib/adapter/index.d.ts:4

___

### withRNVRNConfig

▸ **withRNVRNConfig**(`cnf`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `unknown` |

#### Returns

`any`

#### Defined in

renative-docs/node_modules/rnv/lib/adapter/index.d.ts:5
