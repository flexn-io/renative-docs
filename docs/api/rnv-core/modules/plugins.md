---
id: "plugins"
title: "Module: plugins"
sidebar_label: "plugins"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### checkForPluginDependencies

▸ **checkForPluginDependencies**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:12

___

### configurePlugins

▸ **configurePlugins**(`c`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:6

___

### copyTemplatePluginsSync

▸ **copyTemplatePluginsSync**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:14

___

### getLocalRenativePlugin

▸ **getLocalRenativePlugin**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `webpack` | \{ `moduleAliases`: \{ `renative`: \{ `projectPath`: `string`  }  } ; `modulePaths`: `never`[]  } |
| `webpack.moduleAliases` | \{ `renative`: \{ `projectPath`: `string`  }  } |
| `webpack.moduleAliases.renative` | \{ `projectPath`: `string`  } |
| `webpack.moduleAliases.renative.projectPath` | `string` |
| `webpack.modulePaths` | `never`[] |

#### Defined in

@rnv/core/lib/plugins/index.d.ts:17

___

### getMergedPlugin

▸ **getMergedPlugin**(`c`, `key`): [`RnvPlugin`](plugins_types.md#rnvplugin)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `key` | `string` |

#### Returns

[`RnvPlugin`](plugins_types.md#rnvplugin)

#### Defined in

@rnv/core/lib/plugins/index.d.ts:5

___

### includesPluginPath

▸ **includesPluginPath**(`str?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str?` | `string` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:16

___

### installPackageDependenciesAndPlugins

▸ **installPackageDependenciesAndPlugins**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:11

___

### loadPluginTemplates

▸ **loadPluginTemplates**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:9

___

### overrideFileContents

▸ **overrideFileContents**(`dest`, `override`, `overridePath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `string` |
| `override` | `Record`\<`string`, `string`\> |
| `overridePath?` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:10

___

### overrideTemplatePlugins

▸ **overrideTemplatePlugins**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:13

___

### parsePlugins

▸ **parsePlugins**(`c`, `platform`, `pluginCallback`, `ignorePlatformObjectCheck?`, `includeDisabledOrExcludedPlugins?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `pluginCallback` | [`PluginCallback`](plugins_types.md#plugincallback) |
| `ignorePlatformObjectCheck?` | `boolean` |
| `includeDisabledOrExcludedPlugins?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:8

___

### resolvePluginDependants

▸ **resolvePluginDependants**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:7

___

### sanitizePluginPath

▸ **sanitizePluginPath**(`str`, `name`, `mandatory?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `name` | `string` |
| `mandatory?` | `boolean` |
| `options?` | [`ResolveOptions`](system_types.md#resolveoptions) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:15

___

### updateRenativeConfigs

▸ **updateRenativeConfigs**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:28
