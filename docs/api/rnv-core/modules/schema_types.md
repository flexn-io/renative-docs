---
id: "schema_types"
title: "Module: schema/types"
sidebar_label: "schema/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### AndroidManifest

Ƭ **AndroidManifest**: [`_AndroidManifestType`](schema_platforms_fragments_templateAndroidBase.md#_androidmanifesttype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:20

___

### AndroidManifestNode

Ƭ **AndroidManifestNode**: [`_ManifestChildWithChildrenType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildwithchildrentype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:19

___

### ConfigProp

Ƭ **ConfigProp**: [`_RootProjectBaseSchemaType`](schema_configFiles_project.md#_rootprojectbaseschematype) & [`_RootAppBaseSchemalType`](schema_configFiles_app.md#_rootappbaseschemaltype) & [`_MergedPlatformPrivateObjectType`](schema_configFiles_private.md#_mergedplatformprivateobjecttype) & [`_MergedPlatformObjectType`](schema_platforms.md#_mergedplatformobjecttype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:10

___

### ConfigPropKey

Ƭ **ConfigPropKey**: keyof [`ConfigProp`](schema_types.md#configprop)

#### Defined in

@rnv/core/lib/schema/types.d.ts:11

___

### PlatformKey

Ƭ **PlatformKey**: [`_PlatformsKeysType`](schema_shared.md#_platformskeystype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:16

___

### RenativeConfigAppDelegateMethod

Ƭ **RenativeConfigAppDelegateMethod**: [`_AppDelegateMethodType`](schema_platforms_fragments_templateXcodeBase.md#_appdelegatemethodtype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:18

___

### RenativeConfigPaths

Ƭ **RenativeConfigPaths**: [`ConfigFileBuildConfig`](schema_configFiles_buildConfig.md#configfilebuildconfig)[``"paths"``]

#### Defined in

@rnv/core/lib/schema/types.d.ts:13

___

### RenativeConfigPlugin

Ƭ **RenativeConfigPlugin**: `Exclude`\<[`ConfigFileBuildConfig`](schema_configFiles_buildConfig.md#configfilebuildconfig)[``"plugins"``][`string`], `string`\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:12

___

### RenativeConfigPluginPlatform

Ƭ **RenativeConfigPluginPlatform**: [`_PluginPlatformMergedSchemaType`](schema_plugins.md#_pluginplatformmergedschematype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:14

___

### RenativeConfigTaskKey

Ƭ **RenativeConfigTaskKey**: keyof `Required`\<`Required`\<[`ConfigFileBuildConfig`](schema_configFiles_buildConfig.md#configfilebuildconfig)\>[``"tasks"``]\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:17

___

### RenativeWebpackConfig

Ƭ **RenativeWebpackConfig**: [`RenativeConfigPlugin`](schema_types.md#renativeconfigplugin)[``"webpackConfig"``]

#### Defined in

@rnv/core/lib/schema/types.d.ts:15
