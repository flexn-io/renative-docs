---
id: "modules"
title: "@rnv/core"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [RnvContext](interfaces/RnvContext.md)
- [RnvContextFileObj](interfaces/RnvContextFileObj.md)
- [RnvContextPathObj](interfaces/RnvContextPathObj.md)
- [RnvContextPlatform](interfaces/RnvContextPlatform.md)

## Type Aliases

### CreateContextOptions

Ƭ **CreateContextOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `RNV_HOME_DIR?` | `string` |
| `cmd?` | `string` |
| `process` | `NodeJS.Process` |
| `program` | [`RnvContextProgram`](modules.md#rnvcontextprogram) |
| `subCmd?` | `string` |

#### Defined in

context/types.d.ts:12

___

### RnvContextBuildConfig

Ƭ **RnvContextBuildConfig**: `Partial`\<`ConfigFileBuildConfig`\> & \{ `_meta?`: \{ `currentAppConfigId`: `string`  } ; `_refs?`: `Record`\<`string`, `string`\>  }

#### Defined in

context/types.d.ts:69

___

### RnvContextFileKey

Ƭ **RnvContextFileKey**: ``"config"`` \| ``"configLocal"`` \| ``"configPrivate"``

#### Defined in

context/types.d.ts:301

___

### RnvContextFiles

Ƭ **RnvContextFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfig` | [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileApp`\> |
| `defaultWorkspace` | [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileWorkspace`\> & \{ `appConfig`: [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileApp`\> ; `project`: [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileProject`\>  } |
| `project` | [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileProject`\> & \{ `assets`: \{ `config?`: `ConfigFileRuntime`  } ; `builds`: `Record`\<`string`, `ConfigFileBuildConfig`\> ; `package`: `NpmPackageFile`  } |
| `rnv` | \{ `configWorkspaces?`: `ConfigFileWorkspaces` ; `package`: `NpmPackageFile` ; `pluginTemplates`: \{ `config?`: `ConfigFilePlugins` ; `configs`: `Record`\<`string`, `ConfigFilePlugins`\>  } ; `projectTemplates`: \{ `config?`: `ConfigFileTemplates`  }  } |
| `rnv.configWorkspaces?` | `ConfigFileWorkspaces` |
| `rnv.package` | `NpmPackageFile` |
| `rnv.pluginTemplates` | \{ `config?`: `ConfigFilePlugins` ; `configs`: `Record`\<`string`, `ConfigFilePlugins`\>  } |
| `rnv.pluginTemplates.config?` | `ConfigFilePlugins` |
| `rnv.pluginTemplates.configs` | `Record`\<`string`, `ConfigFilePlugins`\> |
| `rnv.projectTemplates` | \{ `config?`: `ConfigFileTemplates`  } |
| `rnv.projectTemplates.config?` | `ConfigFileTemplates` |
| `workspace` | [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileWorkspace`\> & \{ `appConfig`: [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileApp`\> ; `project`: [`RnvContextFileObj`](interfaces/RnvContextFileObj.md)\<`ConfigFileProject`\>  } |

#### Defined in

context/types.d.ts:128

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
| `appConfig` | [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) |
| `appConfigBase` | `string` |
| `buildHooks` | \{ `dir`: `string` ; `dist`: \{ `dir`: `string` ; `index`: `string`  } ; `index`: `string`  } |
| `buildHooks.dir` | `string` |
| `buildHooks.dist` | \{ `dir`: `string` ; `index`: `string`  } |
| `buildHooks.dist.dir` | `string` |
| `buildHooks.dist.index` | `string` |
| `buildHooks.index` | `string` |
| `defaultWorkspace` | [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) & \{ `appConfig`: \{ `configs`: `string`[] ; `configsLocal`: `string`[] ; `configsPrivate`: `string`[]  } ; `project`: \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: \{ `dir`: `string`  } ; `builds`: \{ `dir`: `string`  }  }  } |
| `home` | \{ `dir`: `string`  } |
| `home.dir` | `string` |
| `project` | [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) & \{ `appConfigBase`: \{ `dir`: `string` ; `fontsDir`: `string` ; `fontsDirs`: `string`[] ; `pluginsDir`: `string`  } ; `appConfigsDirNames`: `string`[] ; `appConfigsDirs`: `string`[] ; `assets`: \{ `config`: `string` ; `dir`: `string` ; `runtimeDir`: `string`  } ; `babelConfig?`: `string` ; `builds`: \{ `config`: `string` ; `dir`: `string`  } ; `dir`: `string` ; `fontSourceDirs?`: `string`[] ; `nodeModulesDir`: `string` ; `package?`: `string` ; `platformTemplatesDirs`: `Record`\<`string`, `string`\> ; `srcDir?`: `string`  } |
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
| `workspace` | [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) & \{ `appConfig`: [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) ; `project`: [`RnvContextPathObj`](interfaces/RnvContextPathObj.md) & \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: `string` ; `builds`: `string`  }  } |

#### Defined in

context/types.d.ts:166

___

### RnvContextProgram

Ƭ **RnvContextProgram**: `ParamKeys` & \{ `args`: `string`[] ; `option`: (`cmd`: `string`, `desc`: `string`) => `void` ; `parse`: (`arg`: `string`[]) => `void` ; `rawArgs`: `string`[]  }

#### Defined in

context/types.d.ts:19

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
| `currentEngine?` | `RnvEngine` |
| `currentPlatform?` | `RnvEnginePlatform` |
| `currentTemplate?` | `string` |
| `disableReset` | `boolean` |
| `engine?` | `RnvEngine` |
| `enginesById` | `Record`\<`string`, `RnvEngine`\> |
| `enginesByIndex` | `RnvEngine`[] |
| `enginesByPlatform` | `Record`\<`string`, `RnvEngine`\> |
| `forceBuildHookRebuild` | `boolean` |
| `forceBundleAssets?` | `boolean` |
| `hasAllEnginesRegistered` | `boolean` |
| `hosted` | `boolean` |
| `isTargetTrue` | `boolean` |
| `isWSConfirmed` | `boolean` |
| `keepSessionActive` | `boolean` |
| `localhost?` | `string` |
| `missingEnginePlugins` | `Record`\<`string`, `string`\> |
| `platform` | `RnvPlatform` |
| `platformBuildsProjectPath?` | `string` |
| `pluginVersions` | `Record`\<`string`, `string`\> |
| `plugins` | `Record`\<`string`, `RnvPlugin`\> |
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
| `supportedPlatforms` | [`RnvContextPlatform`](interfaces/RnvContextPlatform.md)[] |
| `target?` | `string` |
| `targetUDID?` | `string` |
| `task?` | `string` |
| `timestamp?` | `number` |
| `versionCheckCompleted` | `boolean` |
| `webpackTarget?` | `string` |

#### Defined in

context/types.d.ts:75

___

### RuntimePropKey

Ƭ **RuntimePropKey**: keyof [`RnvContextRuntime`](modules.md#rnvcontextruntime)

#### Defined in

context/types.d.ts:127
