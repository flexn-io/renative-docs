---
id: "engines"
title: "Module: engines"
sidebar_label: "engines"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### configureEngines

▸ **configureEngines**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:10

___

### generateEngineExtensions

▸ **generateEngineExtensions**(`exts`, `config`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `exts` | `string`[] |
| `config` | `Object` |
| `config.custom?` | `any` |
| `config.engineExtension` | `string` |
| `config.extends?` | `string` |
| `config.id` | `string` |
| `config.npm?` | `Object` |
| `config.npm.dependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.devDependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.optionalDependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.peerDependencies?` | `Record`\<`string`, `string`\> |
| `config.overview` | `string` |
| `config.platforms?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\> |
| `config.plugins?` | `Record`\<`string`, `string`\> |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:8

___

### generateEngineTasks

▸ **generateEngineTasks**(`taskArr`): [`RnvTaskMap`](tasks_types.md#rnvtaskmap)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskArr` | [`RnvTask`](tasks_types.md#rnvtask)[] |

#### Returns

[`RnvTaskMap`](tasks_types.md#rnvtaskmap)

#### Defined in

@rnv/core/lib/engines/index.d.ts:9

___

### getEngineRunner

▸ **getEngineRunner**(`c`, `task`, `customTasks?`, `failOnMissingEngine?`): [`RnvEngine`](engines_types.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | `string` |
| `customTasks?` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |
| `failOnMissingEngine?` | `boolean` |

#### Returns

[`RnvEngine`](engines_types.md#rnvengine)

#### Defined in

@rnv/core/lib/engines/index.d.ts:20

___

### getEngineRunnerByPlatform

▸ **getEngineRunnerByPlatform**(`c`, `platform`, `ignoreMissingError?`): [`RnvEngine`](engines_types.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `ignoreMissingError?` | `boolean` |

#### Returns

[`RnvEngine`](engines_types.md#rnvengine)

#### Defined in

@rnv/core/lib/engines/index.d.ts:16

___

### getEngineSubTasks

▸ **getEngineSubTasks**(`task`, `tasks`, `exactMatch?`): [`RnvTask`](tasks_types.md#rnvtask)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |
| `exactMatch?` | `boolean` |

#### Returns

[`RnvTask`](tasks_types.md#rnvtask)[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:19

___

### getEngineTask

▸ **getEngineTask**(`task`, `tasks?`, `customTasks?`): [`RnvTask`](tasks_types.md#rnvtask)

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks?` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |
| `customTasks?` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |

#### Returns

[`RnvTask`](tasks_types.md#rnvtask)

#### Defined in

@rnv/core/lib/engines/index.d.ts:17

___

### getRegisteredEngines

▸ **getRegisteredEngines**(`c`): [`RnvEngine`](engines_types.md#rnvengine)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

[`RnvEngine`](engines_types.md#rnvengine)[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:21

___

### hasEngineTask

▸ **hasEngineTask**(`task`, `tasks`, `isProjectScope?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |
| `isProjectScope?` | `boolean` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/engines/index.d.ts:18

___

### loadEnginePackageDeps

▸ **loadEnginePackageDeps**(`c`, `engineConfigs`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `engineConfigs` | [`RnvEngineInstallConfig`](engines_types.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<`number`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:14

___

### loadEnginePluginDeps

▸ **loadEnginePluginDeps**(`c`, `engineConfigs`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `engineConfigs` | [`RnvEngineInstallConfig`](engines_types.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<`number`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:13

___

### loadEngines

▸ **loadEngines**(`c`, `failOnMissingDeps?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `failOnMissingDeps?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:15

___

### registerAllPlatformEngines

▸ **registerAllPlatformEngines**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:12

___

### registerEngine

▸ **registerEngine**(`engine`, `platform?`, `engConfig?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `engine` | [`RnvEngine`](engines_types.md#rnvengine) |
| `platform?` | [`RnvPlatform`](types.md#rnvplatform) |
| `engConfig?` | [`RnvEngineTemplate`](engines_types.md#rnvenginetemplate) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:6

___

### registerEngineExtension

▸ **registerEngineExtension**(`ext`, `eExt?`, `extras?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `string` |
| `eExt?` | `string` |
| `extras?` | `string`[] |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:7

___

### registerMissingPlatformEngines

▸ **registerMissingPlatformEngines**(`c`, `taskInstance?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `taskInstance?` | [`RnvTask`](tasks_types.md#rnvtask) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:11
