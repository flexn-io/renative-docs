---
id: "plugins_types"
title: "Module: plugins/types"
sidebar_label: "plugins/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### PluginCallback

Ƭ **PluginCallback**: (`plugin`: [`RnvPlugin`](plugins_types.md#rnvplugin), `pluginPlat`: [`RenativeConfigPluginPlatform`](schema_types.md#renativeconfigpluginplatform), `key`: `string`) => `void`

#### Type declaration

▸ (`plugin`, `pluginPlat`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`RnvPlugin`](plugins_types.md#rnvplugin) |
| `pluginPlat` | [`RenativeConfigPluginPlatform`](schema_types.md#renativeconfigpluginplatform) |
| `key` | `string` |

##### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/types.d.ts:3

___

### PluginListResponse

Ƭ **PluginListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allPlugins` | `Record`\<`string`, [`PluginListResponseItem`](plugins_types.md#pluginlistresponseitem)\> |
| `asArray` | [`PluginListResponseItem`](plugins_types.md#pluginlistresponseitem)[] |
| `asString` | `string` |
| `plugins` | `string`[] |

#### Defined in

@rnv/core/lib/plugins/types.d.ts:4

___

### PluginListResponseItem

Ƭ **PluginListResponseItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `props?` | `Record`\<`string`, `string`\> |
| `value` | `string` |
| `version?` | `string` |

#### Defined in

@rnv/core/lib/plugins/types.d.ts:10

___

### RnvPlugin

Ƭ **RnvPlugin**: [`RenativeConfigPlugin`](schema_types.md#renativeconfigplugin) & \{ `_id?`: `string` ; `_scopes?`: `string`[] ; `config?`: [`ConfigFilePlugin`](schema_configFiles_types.md#configfileplugin) ; `packageName?`: `string` ; `scope?`: `string`  }

#### Defined in

@rnv/core/lib/plugins/types.d.ts:20

___

### RnvPluginScope

Ƭ **RnvPluginScope**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `npmVersion?` | `string` |
| `scope` | `string` |

#### Defined in

@rnv/core/lib/plugins/types.d.ts:16
