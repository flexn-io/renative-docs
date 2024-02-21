---
id: "context_types"
title: "Module: context/types"
sidebar_label: "context/types"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [RnvContext](../interfaces/context_types.RnvContext.md)
- [RnvContextFileObj](../interfaces/context_types.RnvContextFileObj.md)
- [RnvContextPathObj](../interfaces/context_types.RnvContextPathObj.md)
- [RnvContextPlatform](../interfaces/context_types.RnvContextPlatform.md)

## Type Aliases

### CreateContextOptions

Ƭ **CreateContextOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `RNV_HOME_DIR?` | `string` |
| `cmd?` | `string` |
| `process` | `NodeJS.Process` |
| `program` | [`RnvContextProgram`](context_types.md#rnvcontextprogram) |
| `subCmd?` | `string` |

#### Defined in

@rnv/core/lib/context/types.d.ts:12

___

### RnvContextBuildConfig

Ƭ **RnvContextBuildConfig**: `Partial`\<[`ConfigFileBuildConfig`](schema_configFiles_buildConfig.md#configfilebuildconfig)\> & \{ `_meta?`: \{ `currentAppConfigId`: `string`  } ; `_refs?`: `Record`\<`string`, `string`\>  }

#### Defined in

@rnv/core/lib/context/types.d.ts:69

___

### RnvContextFileKey

Ƭ **RnvContextFileKey**: ``"config"`` \| ``"configLocal"`` \| ``"configPrivate"``

#### Defined in

@rnv/core/lib/context/types.d.ts:301

___

### RnvContextFiles

Ƭ **RnvContextFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfig` | [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileApp`](schema_configFiles_types.md#configfileapp)\> |
| `defaultWorkspace` | [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileWorkspace`](schema_configFiles_types.md#configfileworkspace)\> & \{ `appConfig`: [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileApp`](schema_configFiles_types.md#configfileapp)\> ; `project`: [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileProject`](schema_configFiles_types.md#configfileproject)\>  } |
| `project` | [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileProject`](schema_configFiles_types.md#configfileproject)\> & \{ `assets`: \{ `config?`: [`ConfigFileRuntime`](schema_configFiles_types.md#configfileruntime)  } ; `builds`: `Record`\<`string`, [`ConfigFileBuildConfig`](schema_configFiles_buildConfig.md#configfilebuildconfig)\> ; `package`: [`NpmPackageFile`](configs_types.md#npmpackagefile)  } |
| `rnv` | \{ `configWorkspaces?`: [`ConfigFileWorkspaces`](schema_configFiles_types.md#configfileworkspaces) ; `package`: [`NpmPackageFile`](configs_types.md#npmpackagefile) ; `pluginTemplates`: \{ `config?`: [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins) ; `configs`: `Record`\<`string`, [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins)\>  } ; `projectTemplates`: \{ `config?`: [`ConfigFileTemplates`](schema_configFiles_types.md#configfiletemplates)  }  } |
| `rnv.configWorkspaces?` | [`ConfigFileWorkspaces`](schema_configFiles_types.md#configfileworkspaces) |
| `rnv.package` | [`NpmPackageFile`](configs_types.md#npmpackagefile) |
| `rnv.pluginTemplates` | \{ `config?`: [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins) ; `configs`: `Record`\<`string`, [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins)\>  } |
| `rnv.pluginTemplates.config?` | [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins) |
| `rnv.pluginTemplates.configs` | `Record`\<`string`, [`ConfigFilePlugins`](schema_configFiles_types.md#configfileplugins)\> |
| `rnv.projectTemplates` | \{ `config?`: [`ConfigFileTemplates`](schema_configFiles_types.md#configfiletemplates)  } |
| `rnv.projectTemplates.config?` | [`ConfigFileTemplates`](schema_configFiles_types.md#configfiletemplates) |
| `workspace` | [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileWorkspace`](schema_configFiles_types.md#configfileworkspace)\> & \{ `appConfig`: [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileApp`](schema_configFiles_types.md#configfileapp)\> ; `project`: [`RnvContextFileObj`](../interfaces/context_types.RnvContextFileObj.md)\<[`ConfigFileProject`](schema_configFiles_types.md#configfileproject)\>  } |

#### Defined in

@rnv/core/lib/context/types.d.ts:128

___

### RnvContextPaths

Ƭ **RnvContextPaths**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CURRENT_DIR` | `string` |
| `GLOBAL_RNV_CONFIG` | `string` |
| `GLOBAL_RNV_DIR` | `string` |
| `IS_LINKED` | `boolean` |
| `IS_NPX_MODE` | `boolean` |
| `RNV_HOME_DIR` | `string` |
| `RNV_NODE_MODULES_DIR` | `string` |
| `appConfig` | [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) |
| `appConfigBase` | `string` |
| `buildHooks` | \{ `dir`: `string` ; `dist`: \{ `dir`: `string` ; `index`: `string`  } ; `index`: `string`  } |
| `buildHooks.dir` | `string` |
| `buildHooks.dist` | \{ `dir`: `string` ; `index`: `string`  } |
| `buildHooks.dist.dir` | `string` |
| `buildHooks.dist.index` | `string` |
| `buildHooks.index` | `string` |
| `defaultWorkspace` | [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) & \{ `appConfig`: \{ `configs`: `string`[] ; `configsLocal`: `string`[] ; `configsPrivate`: `string`[]  } ; `project`: \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: \{ `dir`: `string`  } ; `builds`: \{ `dir`: `string`  }  }  } |
| `home` | \{ `dir`: `string`  } |
| `home.dir` | `string` |
| `project` | [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) & \{ `appConfigBase`: \{ `dir`: `string` ; `fontsDir`: `string` ; `fontsDirs`: `string`[] ; `pluginsDir`: `string`  } ; `appConfigsDirNames`: `string`[] ; `appConfigsDirs`: `string`[] ; `assets`: \{ `config`: `string` ; `dir`: `string` ; `runtimeDir`: `string`  } ; `babelConfig?`: `string` ; `builds`: \{ `config`: `string` ; `dir`: `string`  } ; `dir`: `string` ; `fontSourceDirs?`: `string`[] ; `nodeModulesDir`: `string` ; `package?`: `string` ; `platformTemplatesDirs`: `Record`\<`string`, `string`\> ; `srcDir?`: `string`  } |
| `rnv` | \{ `configWorkspaces`: `string` ; `dir`: `string` ; `engines`: \{ `dir`: `string`  } ; `package`: `string` ; `pluginTemplates`: \{ `config?`: `string` ; `dirs`: `Record`\<`string`, `string`\> ; `overrideDir?`: `string`  } ; `projectTemplate`: \{ `dir`: `string`  } ; `projectTemplates`: \{ `config`: `string` ; `dir`: `string`  }  } |
| `rnv.configWorkspaces` | `string` |
| `rnv.dir` | `string` |
| `rnv.engines` | \{ `dir`: `string`  } |
| `rnv.engines.dir` | `string` |
| `rnv.package` | `string` |
| `rnv.pluginTemplates` | \{ `config?`: `string` ; `dirs`: `Record`\<`string`, `string`\> ; `overrideDir?`: `string`  } |
| `rnv.pluginTemplates.config?` | `string` |
| `rnv.pluginTemplates.dirs` | `Record`\<`string`, `string`\> |
| `rnv.pluginTemplates.overrideDir?` | `string` |
| `rnv.projectTemplate` | \{ `dir`: `string`  } |
| `rnv.projectTemplate.dir` | `string` |
| `rnv.projectTemplates` | \{ `config`: `string` ; `dir`: `string`  } |
| `rnv.projectTemplates.config` | `string` |
| `rnv.projectTemplates.dir` | `string` |
| `template` | \{ `appConfigBase`: \{ `dir`: `string`  } ; `appConfigsDir`: `string` ; `assets`: \{ `dir`: `string`  } ; `builds`: \{ `dir`: `string`  } ; `config`: `string` ; `configTemplate`: `string` ; `dir`: `string`  } |
| `template.appConfigBase` | \{ `dir`: `string`  } |
| `template.appConfigBase.dir` | `string` |
| `template.appConfigsDir` | `string` |
| `template.assets` | \{ `dir`: `string`  } |
| `template.assets.dir` | `string` |
| `template.builds` | \{ `dir`: `string`  } |
| `template.builds.dir` | `string` |
| `template.config` | `string` |
| `template.configTemplate` | `string` |
| `template.dir` | `string` |
| `workspace` | [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) & \{ `appConfig`: [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) ; `project`: [`RnvContextPathObj`](../interfaces/context_types.RnvContextPathObj.md) & \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: `string` ; `builds`: `string`  }  } |

#### Defined in

@rnv/core/lib/context/types.d.ts:166

___

### RnvContextProgram

Ƭ **RnvContextProgram**: [`ParamKeys`](tasks_constants.md#paramkeys) & \{ `args`: `string`[] ; `option`: (`cmd`: `string`, `desc`: `string`) => `void` ; `parse`: (`arg`: `string`[]) => `void` ; `rawArgs`: `string`[]  }

#### Defined in

@rnv/core/lib/context/types.d.ts:19

___

### RnvContextRuntime

Ƭ **RnvContextRuntime**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_platformBuildsSuffix?` | `string` |
| `_skipNativeDepResolutions` | `boolean` |
| `_skipPluginScopeWarnings` | `boolean` |
| `activeTemplate?` | `string` |
| `appConfigDir?` | `string` |
| `appDir?` | `string` |
| `appId?` | `string` |
| `availablePlatforms` | `string`[] |
| `bundleAssets` | `boolean` |
| `currentEngine?` | [`RnvEngine`](engines_types.md#rnvengine) |
| `currentPlatform?` | [`RnvEnginePlatform`](engines_types.md#rnvengineplatform) |
| `currentTemplate?` | `string` |
| `disableReset` | `boolean` |
| `engine?` | [`RnvEngine`](engines_types.md#rnvengine) |
| `enginesById` | `Record`\<`string`, [`RnvEngine`](engines_types.md#rnvengine)\> |
| `enginesByIndex` | [`RnvEngine`](engines_types.md#rnvengine)[] |
| `enginesByPlatform` | `Record`\<`string`, [`RnvEngine`](engines_types.md#rnvengine)\> |
| `forceBuildHookRebuild` | `boolean` |
| `forceBundleAssets?` | `boolean` |
| `hasAllEnginesRegistered` | `boolean` |
| `hosted` | `boolean` |
| `isTargetTrue` | `boolean` |
| `isWSConfirmed` | `boolean` |
| `keepSessionActive` | `boolean` |
| `localhost?` | `string` |
| `missingEnginePlugins` | `Record`\<`string`, `string`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `platformBuildsProjectPath?` | `string` |
| `pluginVersions` | `Record`\<`string`, `string`\> |
| `plugins` | `Record`\<`string`, [`RnvPlugin`](plugins_types.md#rnvplugin)\> |
| `port` | `number` |
| `requiresBootstrap` | `boolean` |
| `requiresForcedTemplateApply` | `boolean` |
| `rnvVersionProject?` | `string` |
| `rnvVersionRunner?` | `string` |
| `runtimeExtraProps` | `Record`\<`string`, `string`\> |
| `scheme?` | `string` |
| `selectedTemplate?` | `string` |
| `selectedWorkspace?` | `string` |
| `shouldOpenBrowser?` | `boolean` |
| `skipActiveServerCheck` | `boolean` |
| `skipBuildHooks` | `boolean` |
| `skipPackageUpdate?` | `boolean` |
| `supportedPlatforms` | [`RnvContextPlatform`](../interfaces/context_types.RnvContextPlatform.md)[] |
| `target?` | `string` |
| `targetUDID?` | `string` |
| `task?` | `string` |
| `timestamp?` | `number` |
| `versionCheckCompleted` | `boolean` |
| `webpackTarget?` | `string` |

#### Defined in

@rnv/core/lib/context/types.d.ts:75

___

### RuntimePropKey

Ƭ **RuntimePropKey**: keyof [`RnvContextRuntime`](context_types.md#rnvcontextruntime)

#### Defined in

@rnv/core/lib/context/types.d.ts:127
