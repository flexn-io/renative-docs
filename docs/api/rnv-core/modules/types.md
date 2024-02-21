---
id: "types"
title: "Module: types"
sidebar_label: "types"
sidebar_position: 0
custom_edit_url: null
---

## References

### ConfigFileApp

Re-exports [ConfigFileApp](schema_configFiles_types.md#configfileapp)

___

### ConfigFileEngine

Re-exports [ConfigFileEngine](schema_configFiles_types.md#configfileengine)

___

### ConfigFileIntegration

Re-exports [ConfigFileIntegration](schema_configFiles_types.md#configfileintegration)

___

### ConfigFileLocal

Re-exports [ConfigFileLocal](schema_configFiles_types.md#configfilelocal)

___

### ConfigFileOverrides

Re-exports [ConfigFileOverrides](schema_configFiles_types.md#configfileoverrides)

___

### ConfigFilePlugin

Re-exports [ConfigFilePlugin](schema_configFiles_types.md#configfileplugin)

___

### ConfigFilePlugins

Re-exports [ConfigFilePlugins](schema_configFiles_types.md#configfileplugins)

___

### ConfigFilePrivate

Re-exports [ConfigFilePrivate](schema_configFiles_types.md#configfileprivate)

___

### ConfigFileProject

Re-exports [ConfigFileProject](schema_configFiles_types.md#configfileproject)

___

### ConfigFileRuntime

Re-exports [ConfigFileRuntime](schema_configFiles_types.md#configfileruntime)

___

### ConfigFileTemplate

Re-exports [ConfigFileTemplate](schema_configFiles_types.md#configfiletemplate)

___

### ConfigFileTemplates

Re-exports [ConfigFileTemplates](schema_configFiles_types.md#configfiletemplates)

___

### ConfigFileWorkspace

Re-exports [ConfigFileWorkspace](schema_configFiles_types.md#configfileworkspace)

___

### ConfigFileWorkspaces

Re-exports [ConfigFileWorkspaces](schema_configFiles_types.md#configfileworkspaces)

## Type Aliases

### BabelApi

Ƭ **BabelApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache` | (`value`: `boolean`) => `void` |

#### Defined in

@rnv/core/lib/types.d.ts:26

___

### BabelConfig

Ƭ **BabelConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `plugins?` | [`string`, \{ `alias?`: `Record`\<`string`, `string` \| `undefined`\> ; `root?`: (`string` \| `undefined`)[]  }][] |
| `presets?` | (`string` \| [`string`, \{ `useTransformReactJSXExperimental?`: `boolean`  }])[] |
| `retainLines?` | `boolean` |

#### Defined in

@rnv/core/lib/types.d.ts:10

___

### Env

Ƭ **Env**: `Record`\<`string`, `any`\>

#### Defined in

@rnv/core/lib/types.d.ts:9

___

### RenativeConfigVersion

Ƭ **RenativeConfigVersion**: `string` \| \{ `version`: `string`  }

#### Defined in

@rnv/core/lib/types.d.ts:5

___

### RnvError

Ƭ **RnvError**: `any`

#### Defined in

@rnv/core/lib/types.d.ts:8

___

### RnvPlatform

Ƭ **RnvPlatform**: [`PlatformKey`](schema_types.md#platformkey) \| ``null``

#### Defined in

@rnv/core/lib/types.d.ts:3

___

### RnvPlatformWithAll

Ƭ **RnvPlatformWithAll**: [`PlatformKey`](schema_types.md#platformkey) \| ``"all"``

#### Defined in

@rnv/core/lib/types.d.ts:4
