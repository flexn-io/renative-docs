---
id: "engines_types"
title: "Module: engines/types"
sidebar_label: "engines/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### RnvEngine

Ƭ **RnvEngine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileEngine`](schema_configFiles_types.md#configfileengine) |
| `originalTemplatePlatformProjectDir?` | `string` |
| `originalTemplatePlatformsDir?` | `string` |
| `outputDirName?` | `string` |
| `platforms` | `Record`\<`string`, [`RnvEnginePlatform`](engines_types.md#rnvengineplatform)\> |
| `projectDirName` | `string` |
| `rootPath?` | `string` |
| `runtimeExtraProps` | `Record`\<`string`, `string`\> |
| `serverDirName` | `string` |
| `tasks` | [`RnvTaskMap`](tasks_types.md#rnvtaskmap) |

#### Defined in

@rnv/core/lib/engines/types.d.ts:3

___

### RnvEngineInstallConfig

Ƭ **RnvEngineInstallConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configPath?` | `string` |
| `engineRootPath?` | `string` |
| `key` | `string` |
| `version?` | `string` |

#### Defined in

@rnv/core/lib/engines/types.d.ts:25

___

### RnvEnginePlatform

Ƭ **RnvEnginePlatform**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultPort` | `number` |
| `extensions` | `string`[] |
| `isWebHosted?` | `boolean` |

#### Defined in

@rnv/core/lib/engines/types.d.ts:15

___

### RnvEngineTemplate

Ƭ **RnvEngineTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `packageName?` | `string` |

#### Defined in

@rnv/core/lib/engines/types.d.ts:20

___

### RnvEngineTemplateMap

Ƭ **RnvEngineTemplateMap**: `Record`\<`string`, [`RnvEngineTemplate`](engines_types.md#rnvenginetemplate)\>

#### Defined in

@rnv/core/lib/engines/types.d.ts:24
