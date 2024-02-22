---
id: "modules"
title: "@rnv/core"
sidebar_label: "@rnv/core (Node)"
sidebar_position: 0.5
custom_edit_url: null
---

## Type Aliases

### AndroidManifest

Ƭ **AndroidManifest**: `_AndroidManifestType`

#### Defined in

schema/types.d.ts:20

___

### AndroidManifestNode

Ƭ **AndroidManifestNode**: `_ManifestChildWithChildrenType`

#### Defined in

schema/types.d.ts:19

___

### BabelApi

Ƭ **BabelApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache` | (`value`: `boolean`) => `void` |

#### Defined in

types.d.ts:27

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

types.d.ts:11

___

### BuildConfigPropKey

Ƭ **BuildConfigPropKey**: keyof [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)

#### Defined in

types.d.ts:34

___

### BuildSchemePropKey

Ƭ **BuildSchemePropKey**: keyof `Required`\<`Plat`\>[``"buildSchemes"``][`string`]

#### Defined in

types.d.ts:32

___

### CommonPropKey

Ƭ **CommonPropKey**: keyof [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)[``"common"``]

#### Defined in

types.d.ts:33

___

### ConfigFileApp

Ƭ **ConfigFileApp**: `_RootAppSchemaType`

#### Defined in

schema/configFiles/types.d.ts:16

___

### ConfigFileBuildConfig

Ƭ **ConfigFileBuildConfig**: `_ConfigRootMerged`

#### Defined in

schema/configFiles/buildConfig.d.ts:23

___

### ConfigFileEngine

Ƭ **ConfigFileEngine**: `_ConfigRootEngineType`

#### Defined in

schema/configFiles/types.d.ts:17

___

### ConfigFileIntegration

Ƭ **ConfigFileIntegration**: `_RootIntegrationSchemaType`

#### Defined in

schema/configFiles/types.d.ts:26

___

### ConfigFileLocal

Ƭ **ConfigFileLocal**: `_RootLocalSchemaType`

#### Defined in

schema/configFiles/types.d.ts:20

___

### ConfigFileOverrides

Ƭ **ConfigFileOverrides**: `_RootOverridesSchemaType`

#### Defined in

schema/configFiles/types.d.ts:28

___

### ConfigFilePlugin

Ƭ **ConfigFilePlugin**: `_RootPluginSchemaType`

#### Defined in

schema/configFiles/types.d.ts:18

___

### ConfigFilePlugins

Ƭ **ConfigFilePlugins**: `_RootPluginsSchemaType`

#### Defined in

schema/configFiles/types.d.ts:19

___

### ConfigFilePrivate

Ƭ **ConfigFilePrivate**: `_RootPrivateSchemaType`

#### Defined in

schema/configFiles/types.d.ts:21

___

### ConfigFileProject

Ƭ **ConfigFileProject**: `_RootProjectSchemaType`

#### Defined in

schema/configFiles/types.d.ts:15

___

### ConfigFileRuntime

Ƭ **ConfigFileRuntime**: `_RootRuntimeSchemaType`

#### Defined in

schema/configFiles/types.d.ts:27

___

### ConfigFileTemplate

Ƭ **ConfigFileTemplate**: `_RootTemplateSchemaType`

#### Defined in

schema/configFiles/types.d.ts:22

___

### ConfigFileTemplates

Ƭ **ConfigFileTemplates**: `_RootTemplatesSchemaType`

#### Defined in

schema/configFiles/types.d.ts:23

___

### ConfigFileWorkspace

Ƭ **ConfigFileWorkspace**: `_RootWorkspaceSchemaType`

#### Defined in

schema/configFiles/types.d.ts:24

___

### ConfigFileWorkspaces

Ƭ **ConfigFileWorkspaces**: `_RootWorkspacesSchemaType`

#### Defined in

schema/configFiles/types.d.ts:25

___

### ConfigProp

Ƭ **ConfigProp**: `_RootProjectBaseSchemaType` & `_RootAppBaseSchemalType` & `_MergedPlatformPrivateObjectType` & `_MergedPlatformObjectType`

#### Defined in

schema/types.d.ts:10

___

### ConfigPropKey

Ƭ **ConfigPropKey**: keyof [`ConfigProp`](modules.md#configprop)

#### Defined in

schema/types.d.ts:11

___

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

### DoResolveFn

Ƭ **DoResolveFn**: (`aPath?`: `string`, `mandatory?`: `boolean`, `options?`: [`ResolveOptions`](modules.md#resolveoptions)) => `string` \| `undefined`

#### Type declaration

▸ (`aPath?`, `mandatory?`, `options?`): `string` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `aPath?` | `string` |
| `mandatory?` | `boolean` |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) |

##### Returns

`string` \| `undefined`

#### Defined in

system/types.d.ts:1

___

### Env

Ƭ **Env**: `Record`\<`string`, `any`\>

#### Defined in

types.d.ts:10

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

system/types.d.ts:27

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

system/types.d.ts:8

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

system/types.d.ts:37

___

### GetConfigPropFn

Ƭ **GetConfigPropFn**: \<T\>(`c`: [`RnvContext`](modules.md#rnvcontext), `platform`: [`RnvPlatform`](modules.md#rnvplatform), `key`: `T`, `defaultVal?`: [`ConfigProp`](modules.md#configprop)[`T`]) => [`ConfigProp`](modules.md#configprop)[`T`]

#### Type declaration

▸ \<`T`\>(`c`, `platform`, `key`, `defaultVal?`): [`ConfigProp`](modules.md#configprop)[`T`]

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ConfigPropKey`](modules.md#configpropkey) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | [`ConfigProp`](modules.md#configprop)[`T`] |

##### Returns

[`ConfigProp`](modules.md#configprop)[`T`]

#### Defined in

api/types.d.ts:115

___

### OverridesOptions

Ƭ **OverridesOptions**: \{ `override`: `string` \| `number` \| `undefined` ; `pattern`: `string`  }[]

#### Defined in

system/types.d.ts:28

___

### ParamKeys

Ƭ **ParamKeys**: `Partial`\<`Record`\<`ProgramOptionsKey`, `ParamType`\>\>

#### Defined in

tasks/constants.d.ts:342

___

### ParseFontsCallback

Ƭ **ParseFontsCallback**: (`font`: `string`, `dir`: `string`) => `void`

#### Type declaration

▸ (`font`, `dir`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `font` | `string` |
| `dir` | `string` |

##### Returns

`void`

#### Defined in

projects/types.d.ts:1

___

### PlatPropKey

Ƭ **PlatPropKey**: keyof `Plat`

#### Defined in

types.d.ts:31

___

### PlatformKey

Ƭ **PlatformKey**: `_PlatformsKeysType`

#### Defined in

schema/types.d.ts:16

___

### PluginCallback

Ƭ **PluginCallback**: (`plugin`: [`RnvPlugin`](modules.md#rnvplugin), `pluginPlat`: [`RenativeConfigPluginPlatform`](modules.md#renativeconfigpluginplatform), `key`: `string`) => `void`

#### Type declaration

▸ (`plugin`, `pluginPlat`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`RnvPlugin`](modules.md#rnvplugin) |
| `pluginPlat` | [`RenativeConfigPluginPlatform`](modules.md#renativeconfigpluginplatform) |
| `key` | `string` |

##### Returns

`void`

#### Defined in

plugins/types.d.ts:3

___

### PluginListResponse

Ƭ **PluginListResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allPlugins` | `Record`\<`string`, [`PluginListResponseItem`](modules.md#pluginlistresponseitem)\> |
| `asArray` | [`PluginListResponseItem`](modules.md#pluginlistresponseitem)[] |
| `asString` | `string` |
| `plugins` | `string`[] |

#### Defined in

plugins/types.d.ts:4

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

plugins/types.d.ts:10

___

### PromptOptions

Ƭ **PromptOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asString` | `string` |
| `keysAsArray` | `string`[] |
| `keysAsObject` | `Record`\<`string`, `string`\> |
| `optionsAsArray` | `any`[] |
| `valuesAsArray` | `any`[] |
| `valuesAsObject` | `Record`\<`string`, `any`\> |

#### Defined in

api/types.d.ts:91

___

### PromptParams

Ƭ **PromptParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices?` | (\{ `name`: `string` ; `value`: `any`  } \| `string`)[] |
| `default?` | `any` |
| `logMessage?` | `string` |
| `loop?` | `boolean` |
| `message?` | `string` |
| `name?` | `string` |
| `pageSize?` | `number` |
| `type` | `string` |
| `validate?` | (`i`: `string`) => `string` \| `boolean` |
| `warningMessage?` | `string` |

#### Defined in

api/types.d.ts:99

___

### PromptRenderFn

Ƭ **PromptRenderFn**: (`i`: `number`, `obj`: `any`, `mapping`: `any`, `defaultVal`: `string`) => `string`

#### Type declaration

▸ (`i`, `obj`, `mapping`, `defaultVal`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `obj` | `any` |
| `mapping` | `any` |
| `defaultVal` | `string` |

##### Returns

`string`

#### Defined in

api/types.d.ts:114

___

### RenativeConfigAppDelegateMethod

Ƭ **RenativeConfigAppDelegateMethod**: `_AppDelegateMethodType`

#### Defined in

schema/types.d.ts:18

___

### RenativeConfigPaths

Ƭ **RenativeConfigPaths**: [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)[``"paths"``]

#### Defined in

schema/types.d.ts:13

___

### RenativeConfigPlugin

Ƭ **RenativeConfigPlugin**: `Exclude`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)[``"plugins"``][`string`], `string`\>

#### Defined in

schema/types.d.ts:12

___

### RenativeConfigPluginPlatform

Ƭ **RenativeConfigPluginPlatform**: `_PluginPlatformMergedSchemaType`

#### Defined in

schema/types.d.ts:14

___

### RenativeConfigTaskKey

Ƭ **RenativeConfigTaskKey**: keyof `Required`\<`Required`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\>[``"tasks"``]\>

#### Defined in

schema/types.d.ts:17

___

### RenativeConfigVersion

Ƭ **RenativeConfigVersion**: `string` \| \{ `version`: `string`  }

#### Defined in

types.d.ts:6

___

### RenativeWebpackConfig

Ƭ **RenativeWebpackConfig**: [`RenativeConfigPlugin`](modules.md#renativeconfigplugin)[``"webpackConfig"``]

#### Defined in

schema/types.d.ts:15

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

system/types.d.ts:2

___

### RnvApi

Ƭ **RnvApi**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `analytics` | [`RnvContextAnalytics`](modules.md#rnvcontextanalytics) |
| `doResolve` | [`DoResolveFn`](modules.md#doresolvefn) |
| `fsExistsSync` | typeof `fs.existsSync` |
| `fsReadFileSync` | (`dest`: `fs.PathLike` \| `undefined`) => `Buffer` |
| `fsReaddirSync` | (`dest`: `fs.PathLike` \| `undefined`) => `string`[] |
| `fsWriteFileSync` | (`dest`: `string` \| `undefined`, `data`: `string`, `options?`: `fs.WriteFileOptions`) => `void` |
| `getConfigProp` | [`GetConfigPropFn`](modules.md#getconfigpropfn) |
| `isDefault` | `boolean` |
| `logger` | [`RnvApiLogger`](modules.md#rnvapilogger) |
| `path` | typeof `path` |
| `prompt` | [`RnvApiPrompt`](modules.md#rnvapiprompt) |
| `spinner` | [`RnvApiSpinner`](modules.md#rnvapispinner) |

#### Defined in

api/types.d.ts:10

___

### RnvApiChalk

Ƭ **RnvApiChalk**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blue` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `bold` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `cyan` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `gray` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `green` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `grey` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `magenta` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `red` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `rgb` | (`red`: `number`, `green`: `number`, `blue`: `number`) => `any` |
| `white` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |
| `yellow` | [`RnvApiChalkFn`](modules.md#rnvapichalkfn) |

#### Defined in

api/types.d.ts:50

___

### RnvApiChalkFn

Ƭ **RnvApiChalkFn**: (`v`: `any`) => `any` & [`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

api/types.d.ts:63

___

### RnvApiLogger

Ƭ **RnvApiLogger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chalk` | () => [`RnvApiChalk`](modules.md#rnvapichalk) |
| `getCurrentCommand` | (`excludeDollar`: `boolean`) => `void` |
| `isInfoEnabled` | () => `boolean` |
| `logAndSave` | (`msg`: `string`, `skipLog?`: `boolean`) => `void` |
| `logAppInfo` | (`c`: [`RnvContext`](modules.md#rnvcontext)) => `void` |
| `logComplete` | (`isEnd?`: `boolean`) => `void` |
| `logDebug` | (...`args`: `any`[]) => `void` |
| `logEnd` | (`code`: `number`) => `void` |
| `logError` | (`e`: `Error` \| `string` \| `unknown`, `isEnd?`: `boolean`, `skipAnalytics?`: `boolean`) => `void` |
| `logExitTask` | (`task`: `string`, `customChalk?`: (`s`: `string`) => `string`) => `void` |
| `logHook` | (`hook`: `string`, `msg?`: `string`) => `void` |
| `logInfo` | (`msg`: `string`) => `void` |
| `logInitTask` | (`task`: `string`, `customChalk?`: `string` \| (`s`: `string`) => `string`) => `void` |
| `logInitialize` | () => `void` |
| `logRaw` | (...`args`: `string`[]) => `void` |
| `logSuccess` | (`msg`: `string`) => `void` |
| `logSummary` | (`header`: `string`) => `void` |
| `logTask` | (`task`: `string`, `customChalk?`: `any`) => `void` |
| `logToSummary` | (`v`: `string`, `sanitizePaths?`: () => `string`) => `void` |
| `logWarning` | (`msg`: `string` \| `boolean` \| `unknown`) => `void` |
| `logWelcome` | () => `void` |
| `printArrIntoBox` | (`arr`: `string`[], `prefix?`: `string`) => `string` |
| `printBoxEnd` | () => `string` |
| `printBoxStart` | (`str`: `string`, `str2?`: `string`) => `string` |
| `printIntoBox` | (`str`: `string`) => `string` |

#### Defined in

api/types.d.ts:64

___

### RnvApiPrompt

Ƭ **RnvApiPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generateOptions` | (`inputData`: `any`, `isMultiChoice?`: `boolean`, `mapping?`: `any`, `renderMethod?`: [`PromptRenderFn`](modules.md#promptrenderfn)) => [`PromptOptions`](modules.md#promptoptions) |
| `inquirerPrompt` | (`options`: [`PromptParams`](modules.md#promptparams)) => `Promise`\<`any`\> |
| `inquirerSeparator` | (`text?`: `string`) => `any` |
| `pressAnyKeyToContinue` | () => `Promise`\<`any`\> |

#### Defined in

api/types.d.ts:32

___

### RnvApiSpinner

Ƭ **RnvApiSpinner**: (`msg`: `string` \| \{ `text`: `string`  }) => \{ `fail`: [`RnvApiSpinner`](modules.md#rnvapispinner) ; `start`: [`RnvApiSpinner`](modules.md#rnvapispinner) ; `succeed`: [`RnvApiSpinner`](modules.md#rnvapispinner) ; `text`: `string`  }

#### Type declaration

▸ (`msg`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` \| \{ `text`: `string`  } |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fail` | [`RnvApiSpinner`](modules.md#rnvapispinner) |
| `start` | [`RnvApiSpinner`](modules.md#rnvapispinner) |
| `succeed` | [`RnvApiSpinner`](modules.md#rnvapispinner) |
| `text` | `string` |

#### Defined in

api/types.d.ts:24

___

### RnvCLI

Ƭ **RnvCLI**: `Record`\<`string`, `object`\>

#### Defined in

system/types.d.ts:36

___

### RnvContext

Ƭ **RnvContext**\<`Payload`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `any` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_currentTask?` | `string` | - |
| `_renativePluginCache` | `Record`\<`string`, [`ConfigFilePlugin`](modules.md#configfileplugin)\> | - |
| `_requiresNpmInstall?` | `boolean` | - |
| `assetConfig` | `object` | - |
| `buildConfig` | [`RnvContextBuildConfig`](modules.md#rnvcontextbuildconfig) | complete object containing ALL renative.*.json files collected and merged during execution |
| `buildHooks` | `Record`\<`string`, (`c`: [`RnvContext`](modules.md#rnvcontext)) => `Promise`\<`void`\>\> | - |
| `buildPipes` | `Record`\<`string`, (`c`: [`RnvContext`](modules.md#rnvcontext)) => `Promise`\<`boolean`\>[]\> | - |
| `cli` | `Record`\<`string`, `string` \| `undefined`\> | - |
| `command` | `string` \| ``null`` | first command value from cli (ie "rnv run -p android") returns "run" |
| `configPropsInjects` | [`OverridesOptions`](modules.md#overridesoptions) | - |
| `files` | [`RnvContextFiles`](modules.md#rnvcontextfiles) | - |
| `injectableConfigProps` | `Record`\<`string`, [`ConfigProp`](modules.md#configprop)[[`ConfigPropKey`](modules.md#configpropkey)]\> | - |
| `isBuildHooksReady` | `boolean` | - |
| `isDefault` | `boolean` | - |
| `isSystemWin` | `boolean` | - |
| `logMessages` | `string`[] | - |
| `paths` | [`RnvContextPaths`](modules.md#rnvcontextpaths) | - |
| `payload` | `Payload` | Extra payload object used by 3rd party (ie @rnv/sdk-apple) to decorate context with extra typed information |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) | - |
| `process` | `NodeJS.Process` | - |
| `program` | [`RnvContextProgram`](modules.md#rnvcontextprogram) | - |
| `rnvVersion` | `string` | - |
| `runningProcesses` | `ExecaChildProcess`[] | - |
| `runtime` | [`RnvContextRuntime`](modules.md#rnvcontextruntime) | - |
| `runtimePropsInjects` | [`OverridesOptions`](modules.md#overridesoptions) | - |
| `subCommand` | `string` \| ``null`` | second command value from cli (ie "rnv hooks list") returns "list" |
| `supportedPlatforms` | `string`[] | - |
| `systemPropsInjects` | [`OverridesOptions`](modules.md#overridesoptions) | - |
| `timeEnd` | `Date` | - |
| `timeStart` | `Date` | - |

#### Defined in

context/types.d.ts:25

___

### RnvContextAnalytics

Ƭ **RnvContextAnalytics**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `captureEvent` | (`ops`: \{ `platform?`: [`RnvPlatform`](modules.md#rnvplatform) ; `platforms?`: `string`[] ; `template?`: `string` ; `type`: `string`  }) => `void` |
| `captureException` | (`e`: `string` \| `Error`, `context`: \{ `extra`: `any`  }) => `void` |
| `teardown` | () => `Promise`\<`void`\> |

#### Defined in

api/types.d.ts:38

___

### RnvContextBuildConfig

Ƭ **RnvContextBuildConfig**: `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\> & \{ `_meta?`: \{ `currentAppConfigId`: `string`  } ; `_refs?`: `Record`\<`string`, `string`\>  }

#### Defined in

context/types.d.ts:69

___

### RnvContextFileKey

Ƭ **RnvContextFileKey**: ``"config"`` \| ``"configLocal"`` \| ``"configPrivate"``

#### Defined in

context/types.d.ts:302

___

### RnvContextFileObj

Ƭ **RnvContextFileObj**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | `T` |
| `configLocal?` | [`ConfigFileLocal`](modules.md#configfilelocal) |
| `configPrivate?` | [`ConfigFilePrivate`](modules.md#configfileprivate) |
| `config_original?` | `T` |
| `configs` | `T`[] |
| `configsLocal` | [`ConfigFileLocal`](modules.md#configfilelocal)[] |
| `configsPrivate` | [`ConfigFilePrivate`](modules.md#configfileprivate)[] |

#### Defined in

context/types.d.ts:157

___

### RnvContextFiles

Ƭ **RnvContextFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfig` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileApp`](modules.md#configfileapp)\> |
| `defaultWorkspace` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileWorkspace`](modules.md#configfileworkspace)\> & \{ `appConfig`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileApp`](modules.md#configfileapp)\> ; `project`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileProject`](modules.md#configfileproject)\>  } |
| `project` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileProject`](modules.md#configfileproject)\> & \{ `assets`: \{ `config?`: [`ConfigFileRuntime`](modules.md#configfileruntime)  } ; `builds`: `Record`\<`string`, [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\> ; `package`: `NpmPackageFile`  } |
| `rnv` | \{ `configWorkspaces?`: [`ConfigFileWorkspaces`](modules.md#configfileworkspaces) ; `package`: `NpmPackageFile` ; `pluginTemplates`: \{ `config?`: [`ConfigFilePlugins`](modules.md#configfileplugins) ; `configs`: `Record`\<`string`, [`ConfigFilePlugins`](modules.md#configfileplugins)\>  } ; `projectTemplates`: \{ `config?`: [`ConfigFileTemplates`](modules.md#configfiletemplates)  }  } |
| `rnv.configWorkspaces?` | [`ConfigFileWorkspaces`](modules.md#configfileworkspaces) |
| `rnv.package` | `NpmPackageFile` |
| `rnv.pluginTemplates` | \{ `config?`: [`ConfigFilePlugins`](modules.md#configfileplugins) ; `configs`: `Record`\<`string`, [`ConfigFilePlugins`](modules.md#configfileplugins)\>  } |
| `rnv.pluginTemplates.config?` | [`ConfigFilePlugins`](modules.md#configfileplugins) |
| `rnv.pluginTemplates.configs` | `Record`\<`string`, [`ConfigFilePlugins`](modules.md#configfileplugins)\> |
| `rnv.projectTemplates` | \{ `config?`: [`ConfigFileTemplates`](modules.md#configfiletemplates)  } |
| `rnv.projectTemplates.config?` | [`ConfigFileTemplates`](modules.md#configfiletemplates) |
| `workspace` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileWorkspace`](modules.md#configfileworkspace)\> & \{ `appConfig`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileApp`](modules.md#configfileapp)\> ; `project`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileProject`](modules.md#configfileproject)\>  } |

#### Defined in

context/types.d.ts:128

___

### RnvContextPathObj

Ƭ **RnvContextPathObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfigsDir` | `string` |
| `config` | `string` |
| `configExists?` | `boolean` |
| `configLocal` | `string` |
| `configLocalExists?` | `boolean` |
| `configPrivate` | `string` |
| `configPrivateExists?` | `boolean` |
| `configs` | `string`[] |
| `configsLocal` | `string`[] |
| `configsPrivate` | `string`[] |
| `dir` | `string` |
| `dirs` | `string`[] |
| `fontsDir` | `string` |
| `fontsDirs` | `string`[] |
| `pluginDirs` | `string`[] |

#### Defined in

context/types.d.ts:278

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
| `appConfig` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) |
| `appConfigBase` | `string` |
| `buildHooks` | \{ `dir`: `string` ; `dist`: \{ `dir`: `string` ; `index`: `string`  } ; `index`: `string`  } |
| `buildHooks.dir` | `string` |
| `buildHooks.dist` | \{ `dir`: `string` ; `index`: `string`  } |
| `buildHooks.dist.dir` | `string` |
| `buildHooks.dist.index` | `string` |
| `buildHooks.index` | `string` |
| `defaultWorkspace` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfig`: \{ `configs`: `string`[] ; `configsLocal`: `string`[] ; `configsPrivate`: `string`[]  } ; `project`: \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: \{ `dir`: `string`  } ; `builds`: \{ `dir`: `string`  }  }  } |
| `home` | \{ `dir`: `string`  } |
| `home.dir` | `string` |
| `project` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfigBase`: \{ `dir`: `string` ; `fontsDir`: `string` ; `fontsDirs`: `string`[] ; `pluginsDir`: `string`  } ; `appConfigsDirNames`: `string`[] ; `appConfigsDirs`: `string`[] ; `assets`: \{ `config`: `string` ; `dir`: `string` ; `runtimeDir`: `string`  } ; `babelConfig?`: `string` ; `builds`: \{ `config`: `string` ; `dir`: `string`  } ; `dir`: `string` ; `dotRnvDir`: `string` ; `fontSourceDirs?`: `string`[] ; `nodeModulesDir`: `string` ; `package?`: `string` ; `platformTemplatesDirs`: `Record`\<`string`, `string`\> ; `srcDir?`: `string`  } |
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
| `workspace` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfig`: [`RnvContextPathObj`](modules.md#rnvcontextpathobj) ; `project`: [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: `string` ; `builds`: `string`  }  } |

#### Defined in

context/types.d.ts:166

___

### RnvContextPlatform

Ƭ **RnvContextPlatform**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `engine?` | [`RnvEngine`](modules.md#rnvengine) |
| `isConnected` | `boolean` |
| `isValid?` | `boolean` |
| `platform` | [`PlatformKey`](modules.md#platformkey) |
| `port?` | `number` |

#### Defined in

context/types.d.ts:295

___

### RnvContextProgram

Ƭ **RnvContextProgram**: [`ParamKeys`](modules.md#paramkeys) & \{ `args?`: `string`[] ; `option?`: (`cmd`: `string`, `desc`: `string`) => `void` ; `parse?`: (`arg`: `string`[]) => `void` ; `rawArgs?`: `string`[]  }

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
| `currentEngine?` | [`RnvEngine`](modules.md#rnvengine) |
| `currentPlatform?` | [`RnvEnginePlatform`](modules.md#rnvengineplatform) |
| `currentTemplate?` | `string` |
| `disableReset` | `boolean` |
| `engine?` | [`RnvEngine`](modules.md#rnvengine) |
| `enginesById` | `Record`\<`string`, [`RnvEngine`](modules.md#rnvengine)\> |
| `enginesByIndex` | [`RnvEngine`](modules.md#rnvengine)[] |
| `enginesByPlatform` | `Record`\<`string`, [`RnvEngine`](modules.md#rnvengine)\> |
| `forceBuildHookRebuild` | `boolean` |
| `forceBundleAssets?` | `boolean` |
| `hasAllEnginesRegistered` | `boolean` |
| `hosted` | `boolean` |
| `isTargetTrue` | `boolean` |
| `isWSConfirmed` | `boolean` |
| `keepSessionActive` | `boolean` |
| `localhost?` | `string` |
| `missingEnginePlugins` | `Record`\<`string`, `string`\> |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `platformBuildsProjectPath?` | `string` |
| `pluginVersions` | `Record`\<`string`, `string`\> |
| `plugins` | `Record`\<`string`, [`RnvPlugin`](modules.md#rnvplugin)\> |
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
| `supportedPlatforms` | [`RnvContextPlatform`](modules.md#rnvcontextplatform)[] |
| `target?` | `string` |
| `targetUDID?` | `string` |
| `task?` | `string` |
| `timestamp?` | `number` |
| `versionCheckCompleted` | `boolean` |
| `webpackTarget?` | `string` |

#### Defined in

context/types.d.ts:75

___

### RnvEngine

Ƭ **RnvEngine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileEngine`](modules.md#configfileengine) |
| `originalTemplatePlatformProjectDir?` | `string` |
| `originalTemplatePlatformsDir?` | `string` |
| `outputDirName?` | `string` |
| `platforms` | `Record`\<`string`, [`RnvEnginePlatform`](modules.md#rnvengineplatform)\> |
| `projectDirName` | `string` |
| `rootPath?` | `string` |
| `runtimeExtraProps` | `Record`\<`string`, `string`\> |
| `serverDirName` | `string` |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap) |

#### Defined in

engines/types.d.ts:3

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

engines/types.d.ts:25

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

engines/types.d.ts:15

___

### RnvEngineTemplate

Ƭ **RnvEngineTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `packageName?` | `string` |

#### Defined in

engines/types.d.ts:20

___

### RnvEngineTemplateMap

Ƭ **RnvEngineTemplateMap**: `Record`\<`string`, [`RnvEngineTemplate`](modules.md#rnvenginetemplate)\>

#### Defined in

engines/types.d.ts:24

___

### RnvError

Ƭ **RnvError**: `any`

#### Defined in

types.d.ts:9

___

### RnvPlatform

Ƭ **RnvPlatform**: [`PlatformKey`](modules.md#platformkey) \| ``null``

#### Defined in

types.d.ts:4

___

### RnvPlatformWithAll

Ƭ **RnvPlatformWithAll**: [`PlatformKey`](modules.md#platformkey) \| ``"all"``

#### Defined in

types.d.ts:5

___

### RnvPlugin

Ƭ **RnvPlugin**: [`RenativeConfigPlugin`](modules.md#renativeconfigplugin) & \{ `_id?`: `string` ; `_scopes?`: `string`[] ; `config?`: [`ConfigFilePlugin`](modules.md#configfileplugin) ; `packageName?`: `string` ; `scope?`: `string`  }

#### Defined in

plugins/types.d.ts:20

___

### RnvPluginScope

Ƭ **RnvPluginScope**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `npmVersion?` | `string` |
| `scope` | `string` |

#### Defined in

plugins/types.d.ts:16

___

### RnvTask

Ƭ **RnvTask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `fn?` | [`RnvTaskFn`](modules.md#rnvtaskfn) |
| `fnHelp?` | [`RnvTaskFn`](modules.md#rnvtaskfn) |
| `forceBuildHookRebuild?` | `boolean` |
| `ignoreEngines?` | `boolean` |
| `isGlobalScope?` | `boolean` |
| `isPriorityOrder?` | `boolean` |
| `isPrivate?` | `boolean` |
| `params` | [`RnvTaskParameter`](modules.md#rnvtaskparameter)[] |
| `platforms` | `string`[] |
| `task` | `string` |

#### Defined in

tasks/types.d.ts:2

___

### RnvTaskFn

Ƭ **RnvTaskFn**: (`c`: [`RnvContext`](modules.md#rnvcontext), `parentTask?`: `string`, `originTask?`: `string`) => `Promise`\<`any`\>

#### Type declaration

▸ (`c`, `parentTask?`, `originTask?`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `parentTask?` | `string` |
| `originTask?` | `string` |

##### Returns

`Promise`\<`any`\>

#### Defined in

tasks/types.d.ts:38

___

### RnvTaskMap

Ƭ **RnvTaskMap**: `Record`\<`string`, [`RnvTask`](modules.md#rnvtask)\>

#### Defined in

tasks/types.d.ts:37

___

### RnvTaskParameter

Ƭ **RnvTaskParameter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `examples?` | `string`[] |
| `isRequired?` | `boolean` |
| `key?` | `string` |
| `options?` | `string`[] |
| `shortcut?` | `string` |
| `value?` | `string` |
| `variadic?` | `boolean` |

#### Defined in

tasks/types.d.ts:27

___

### RuntimePropKey

Ƭ **RuntimePropKey**: keyof [`RnvContextRuntime`](modules.md#rnvcontextruntime)

#### Defined in

context/types.d.ts:127

___

### TaskItemMap

Ƭ **TaskItemMap**: `Record`\<`string`, \{ `desc?`: `string` ; `taskKey`: `string`  }\>

#### Defined in

tasks/types.d.ts:39

___

### TaskObj

Ƭ **TaskObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `taskInstance` | [`RnvTask`](modules.md#rnvtask) |

#### Defined in

tasks/types.d.ts:43

___

### TaskOption

Ƭ **TaskOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asArray?` | `string`[] |
| `command` | `string` |
| `description?` | `string` |
| `isGlobalScope?` | `boolean` |
| `isPriorityOrder?` | `boolean` |
| `isPrivate?` | `boolean` |
| `name` | `string` |
| `subCommand?` | `string` |
| `subTasks?` | [`TaskOption`](modules.md#taskoption)[] |
| `value` | `string` |

#### Defined in

tasks/types.d.ts:15

___

### TimestampPathsConfig

Ƭ **TimestampPathsConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |
| `timestamp` | `number` |

#### Defined in

system/types.d.ts:32

## Variables

### ALEXA

• `Const` **ALEXA**: ``"alexa"``

#### Defined in

constants.d.ts:6

___

### ANDROID

• `Const` **ANDROID**: ``"android"``

#### Defined in

constants.d.ts:2

___

### ANDROID\_AUTO

• `Const` **ANDROID\_AUTO**: ``"androidauto"``

#### Defined in

constants.d.ts:3

___

### ANDROID\_TV

• `Const` **ANDROID\_TV**: ``"androidtv"``

#### Defined in

constants.d.ts:4

___

### ANDROID\_WEAR

• `Const` **ANDROID\_WEAR**: ``"androidwear"``

#### Defined in

constants.d.ts:5

___

### APPLE\_AUTO

• `Const` **APPLE\_AUTO**: ``"appleauto"``

#### Defined in

constants.d.ts:7

___

### ASTIAN

• `Const` **ASTIAN**: ``"astian"``

#### Defined in

constants.d.ts:8

___

### BLACKBERRY

• `Const` **BLACKBERRY**: ``"blackberry"``

#### Defined in

constants.d.ts:9

___

### CHROMECAST

• `Const` **CHROMECAST**: ``"chromecast"``

#### Defined in

constants.d.ts:10

___

### CHROME\_OS

• `Const` **CHROME\_OS**: ``"chromeos"``

#### Defined in

constants.d.ts:11

___

### CoreEnvVars

• `Const` **CoreEnvVars**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BASE` | () => `RnvEnvContext` |
| `RNV_EXTENSIONS` | () => \{ `RNV_EXTENSIONS`: `string`[]  } |

#### Defined in

env/index.d.ts:2

___

### DEFAULTS

• `Const` **DEFAULTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author` | `string` |
| `backgroundColor` | `string` |
| `buildToolsVersion` | `string` |
| `certificateProfile` | `string` |
| `compileSdkVersion` | `number` |
| `deploymentTarget` | `string` |
| `devServerHost` | `string` |
| `gradleWrapperVersion` | `string` |
| `minSdkVersion` | `number` |
| `signingConfig` | `string` |
| `targetSdkVersion` | `number` |

#### Defined in

schema/defaults.d.ts:1

___

### DEFAULT\_TASK\_DESCRIPTIONS

• `Const` **DEFAULT\_TASK\_DESCRIPTIONS**: `Record`\<`string`, `string`\>

#### Defined in

tasks/constants.d.ts:62

___

### ExecOptionsPresets

• `Const` **ExecOptionsPresets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FIRE_AND_FORGET` | [`ExecOptions`](modules.md#execoptions) |
| `INHERIT_OUTPUT_NO_SPINNER` | [`ExecOptions`](modules.md#execoptions) |
| `NO_SPINNER_FULL_ERROR_SUMMARY` | [`ExecOptions`](modules.md#execoptions) |
| `SPINNER_FULL_ERROR_SUMMARY` | [`ExecOptions`](modules.md#execoptions) |

#### Defined in

system/exec.d.ts:4

___

### FIRE\_OS

• `Const` **FIRE\_OS**: ``"fireos"``

#### Defined in

constants.d.ts:12

___

### FIRE\_TV

• `Const` **FIRE\_TV**: ``"firetv"``

#### Defined in

constants.d.ts:13

___

### HBBTV

• `Const` **HBBTV**: ``"hbbtv"``

#### Defined in

constants.d.ts:14

___

### IOS

• `Const` **IOS**: ``"ios"``

#### Defined in

constants.d.ts:15

___

### KAIOS

• `Const` **KAIOS**: ``"kaios"``

#### Defined in

constants.d.ts:16

___

### LINUX

• `Const` **LINUX**: ``"linux"``

#### Defined in

constants.d.ts:44

___

### MACOS

• `Const` **MACOS**: ``"macos"``

#### Defined in

constants.d.ts:17

___

### MEEGO

• `Const` **MEEGO**: ``"meego"``

#### Defined in

constants.d.ts:18

___

### NETCAST

• `Const` **NETCAST**: ``"netcast"``

#### Defined in

constants.d.ts:19

___

### OCCULUS

• `Const` **OCCULUS**: ``"occulus"``

#### Defined in

constants.d.ts:20

___

### ORSAY

• `Const` **ORSAY**: ``"orsay"``

#### Defined in

constants.d.ts:21

___

### PARAMS

• `Const` **PARAMS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `all` | `string`[] |
| `withAll` | (`arr?`: [`RnvTaskParameter`](modules.md#rnvtaskparameter)[]) => [`RnvTaskParameter`](modules.md#rnvtaskparameter)[] |
| `withBase` | (`arr?`: [`RnvTaskParameter`](modules.md#rnvtaskparameter)[]) => [`RnvTaskParameter`](modules.md#rnvtaskparameter)[] |
| `withConfigure` | (`arr?`: [`RnvTaskParameter`](modules.md#rnvtaskparameter)[]) => [`RnvTaskParameter`](modules.md#rnvtaskparameter)[] |
| `withRun` | (`arr?`: [`RnvTaskParameter`](modules.md#rnvtaskparameter)[]) => [`RnvTaskParameter`](modules.md#rnvtaskparameter)[] |

#### Defined in

tasks/constants.d.ts:343

___

### PARAM\_KEYS

• `Const` **PARAM\_KEYS**: `Record`\<`string`, [`RnvTaskParameter`](modules.md#rnvtaskparameter)\>

#### Defined in

tasks/constants.d.ts:338

___

### PS4

• `Const` **PS4**: ``"ps4"``

#### Defined in

constants.d.ts:22

___

### RENATIVE\_CONFIG\_BUILD\_NAME

• `Const` **RENATIVE\_CONFIG\_BUILD\_NAME**: ``"renative.build.json"``

#### Defined in

constants.d.ts:53

___

### RENATIVE\_CONFIG\_ENGINE\_NAME

• `Const` **RENATIVE\_CONFIG\_ENGINE\_NAME**: ``"renative.engine.json"``

#### Defined in

constants.d.ts:59

___

### RENATIVE\_CONFIG\_LOCAL\_NAME

• `Const` **RENATIVE\_CONFIG\_LOCAL\_NAME**: ``"renative.local.json"``

#### Defined in

constants.d.ts:50

___

### RENATIVE\_CONFIG\_NAME

• `Const` **RENATIVE\_CONFIG\_NAME**: ``"renative.json"``

#### Defined in

constants.d.ts:49

___

### RENATIVE\_CONFIG\_PLATFORMS\_NAME

• `Const` **RENATIVE\_CONFIG\_PLATFORMS\_NAME**: ``"renative.platforms.json"``

#### Defined in

constants.d.ts:58

___

### RENATIVE\_CONFIG\_PLUGINS\_NAME

• `Const` **RENATIVE\_CONFIG\_PLUGINS\_NAME**: ``"renative.plugins.json"``

#### Defined in

constants.d.ts:56

___

### RENATIVE\_CONFIG\_PRIVATE\_NAME

• `Const` **RENATIVE\_CONFIG\_PRIVATE\_NAME**: ``"renative.private.json"``

#### Defined in

constants.d.ts:51

___

### RENATIVE\_CONFIG\_RUNTIME\_NAME

• `Const` **RENATIVE\_CONFIG\_RUNTIME\_NAME**: ``"renative.runtime.json"``

#### Defined in

constants.d.ts:54

___

### RENATIVE\_CONFIG\_TEMPLATES\_NAME

• `Const` **RENATIVE\_CONFIG\_TEMPLATES\_NAME**: ``"renative.templates.json"``

#### Defined in

constants.d.ts:57

___

### RENATIVE\_CONFIG\_TEMPLATE\_NAME

• `Const` **RENATIVE\_CONFIG\_TEMPLATE\_NAME**: ``"renative.template.json"``

#### Defined in

constants.d.ts:52

___

### RENATIVE\_CONFIG\_WORKSPACES\_NAME

• `Const` **RENATIVE\_CONFIG\_WORKSPACES\_NAME**: ``"renative.workspaces.json"``

#### Defined in

constants.d.ts:55

___

### ROKU

• `Const` **ROKU**: ``"roku"``

#### Defined in

constants.d.ts:23

___

### RootAppSchema

• `Const` **RootAppSchema**: `AnyZodObject`

#### Defined in

schema/configFiles/app.d.ts:37602

___

### RootEngineSchema

• `Const` **RootEngineSchema**: `z.ZodObject`\<\{ `custom`: `z.ZodOptional`\<`z.ZodAny`\> ; `engineExtension`: `z.ZodString` ; `extends`: `z.ZodOptional`\<`z.ZodString`\> ; `id`: `z.ZodString` ; `npm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `dependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `devDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `optionalDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `peerDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }\>\> ; `overview`: `z.ZodString` ; `platforms`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodObject`\<\{ `engine`: `z.ZodOptional`\<`z.ZodString`\> ; `npm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `dependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `devDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `optionalDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `peerDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\>\> ; `plugins`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `custom?`: `any` ; `engineExtension`: `string` ; `extends?`: `string` ; `id`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  } ; `overview`: `string` ; `platforms?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\> ; `plugins?`: `Record`\<`string`, `string`\>  }, \{ `custom?`: `any` ; `engineExtension`: `string` ; `extends?`: `string` ; `id`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  } ; `overview`: `string` ; `platforms?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\> ; `plugins?`: `Record`\<`string`, `string`\>  }\>

#### Defined in

schema/configFiles/engine.d.ts:2

___

### RootGlobalSchema

• `Const` **RootGlobalSchema**: `z.ZodObject`\<\{ `appConfigsPath`: `z.ZodOptional`\<`z.ZodString`\> ; `defaultTargets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\> ; `disableTelemetry`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `projectTemplates`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\>\> ; `sdks`: `z.ZodOptional`\<`z.ZodObject`\<\{ `ANDROID_NDK`: `z.ZodOptional`\<`z.ZodString`\> ; `ANDROID_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `KAIOS_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `TIZEN_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `WEBOS_SDK`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }, \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appConfigsPath?`: `string` ; `defaultTargets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\> ; `disableTelemetry?`: `boolean` ; `projectTemplates?`: `Record`\<`string`, {}\> ; `sdks?`: \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }  }, \{ `appConfigsPath?`: `string` ; `defaultTargets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\> ; `disableTelemetry?`: `boolean` ; `projectTemplates?`: `Record`\<`string`, {}\> ; `sdks?`: \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }  }\>

#### Defined in

schema/configFiles/workspace.d.ts:2

___

### RootIntegrationSchema

• `Const` **RootIntegrationSchema**: `z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>

#### Defined in

schema/configFiles/integration.d.ts:2

___

### RootLocalSchema

• `Const` **RootLocalSchema**: `z.ZodObject`\<\{ `_meta`: `z.ZodOptional`\<`z.ZodObject`\<\{ `currentAppConfigId`: `z.ZodOptional`\<`z.ZodString`\> ; `requiresJetify`: `z.ZodOptional`\<`z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  }, \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  }\>\> ; `defaultTargets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\> ; `workspaceAppConfigsDir`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `_meta?`: \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } ; `defaultTargets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\> ; `workspaceAppConfigsDir?`: `string`  }, \{ `_meta?`: \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } ; `defaultTargets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\> ; `workspaceAppConfigsDir?`: `string`  }\>

#### Defined in

schema/configFiles/local.d.ts:2

___

### RootPluginSchema

• `Const` **RootPluginSchema**: `z.ZodObject`\<\{ `android`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `androidtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `androidwear`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `chromecast`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `custom`: `z.ZodOptional`\<`z.ZodAny`\> ; `deprecated`: `z.ZodOptional`\<`z.ZodString`\> ; `disableNpm`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `disablePluginTemplateOverrides`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `firetv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `fontSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `ios`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildType`: `z.ZodOptional`\<`z.ZodEnum`\<[``"dynamic"``, ``"static"``]\>\> ; `commit`: `z.ZodOptional`\<`z.ZodString`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `git`: `z.ZodOptional`\<`z.ZodString`\> ; `isStatic`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `podName`: `z.ZodOptional`\<`z.ZodString`\> ; `podNames`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticFrameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `templateXcode`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AppDelegate_h`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateExtensions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }\>\> ; `AppDelegate_mm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateMethods`: `z.ZodOptional`\<`z.ZodObject`\<\{ `application`: `z.ZodObject`\<\{ `applicationDidBecomeActive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `continue`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didConnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didDisconnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFailToRegisterForRemoteNotificationsWithError`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFinishLaunchingWithOptions`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceiveRemoteNotification`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegister`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegisterForRemoteNotificationsWithDeviceToken`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `open`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `supportedInterfaceOrientationsFor`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\> ; `userNotificationCenter`: `z.ZodObject`\<\{ `willPresent`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }\>\> ; `Info_plist`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `Podfile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `header`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `injectLines`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `podDependencies`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `post_install`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticPods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }\>\> ; `project_pbxproj`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildPhases`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `inputPaths`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `shellPath`: `z.ZodString` ; `shellScript`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }\>, ``"many"``\>\> ; `buildSettings`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `frameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `headerFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `resourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }\>\> ; `kaios`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `linux`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `macos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `npm`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `pluginDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodNullable`\<`z.ZodString`\>\>\> ; `props`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `skipMerge`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `source`: `z.ZodOptional`\<`z.ZodString`\> ; `tizen`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tizenmobile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tizenwatch`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tvos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildType`: `z.ZodOptional`\<`z.ZodEnum`\<[``"dynamic"``, ``"static"``]\>\> ; `commit`: `z.ZodOptional`\<`z.ZodString`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `git`: `z.ZodOptional`\<`z.ZodString`\> ; `isStatic`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `podName`: `z.ZodOptional`\<`z.ZodString`\> ; `podNames`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticFrameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `templateXcode`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AppDelegate_h`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateExtensions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }\>\> ; `AppDelegate_mm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateMethods`: `z.ZodOptional`\<`z.ZodObject`\<\{ `application`: `z.ZodObject`\<\{ `applicationDidBecomeActive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `continue`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didConnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didDisconnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFailToRegisterForRemoteNotificationsWithError`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFinishLaunchingWithOptions`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceiveRemoteNotification`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegister`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegisterForRemoteNotificationsWithDeviceToken`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `open`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `supportedInterfaceOrientationsFor`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\> ; `userNotificationCenter`: `z.ZodObject`\<\{ `willPresent`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }\>\> ; `Info_plist`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `Podfile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `header`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `injectLines`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `podDependencies`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `post_install`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticPods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }\>\> ; `project_pbxproj`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildPhases`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `inputPaths`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `shellPath`: `z.ZodString` ; `shellScript`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }\>, ``"many"``\>\> ; `buildSettings`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `frameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `headerFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `resourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\> ; `web`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `webos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `webpackConfig`: `z.ZodOptional`\<`z.ZodObject`\<\{ `moduleAliases`: `z.ZodOptional`\<`z.ZodUnion`\<[`z.ZodBoolean`, `z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `projectPath`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `projectPath`: `string`  }, \{ `projectPath`: `string`  }\>]\>\>]\>\> ; `modulePaths`: `z.ZodOptional`\<`z.ZodUnion`\<[`z.ZodBoolean`, `z.ZodArray`\<`z.ZodString`, ``"many"``\>]\>\> ; `nextTranspileModules`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  }, \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  }\>\> ; `webtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `windows`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `xbox`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `custom?`: `any` ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `custom?`: `any` ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }\>

#### Defined in

schema/configFiles/plugin.d.ts:2

___

### RootPluginsSchema

• `Const` **RootPluginsSchema**: `z.ZodObject`\<\{ `custom`: `z.ZodOptional`\<`z.ZodAny`\> ; `disableRnvDefaultOverrides`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `pluginTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `android`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `androidtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `androidwear`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `chromecast`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `deprecated`: `z.ZodOptional`\<`z.ZodString`\> ; `disableNpm`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `disablePluginTemplateOverrides`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `firetv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `projectName`: `z.ZodOptional`\<`z.ZodString`\> ; `skipImplementation`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `skipLinking`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `templateAndroid`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AndroidManifest_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<`_ManifestChildType`, `z.ZodTypeDef`, `_ManifestChildType`\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  }\>\> ; `MainActivity_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> ; `MainApplication_java`: `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> ; `app_build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> ; `build_gradle`: `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> ; `gradle_properties`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> ; `strings_xml`: `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }, \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  }\>\> ; `fontSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `ios`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildType`: `z.ZodOptional`\<`z.ZodEnum`\<[``"dynamic"``, ``"static"``]\>\> ; `commit`: `z.ZodOptional`\<`z.ZodString`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `git`: `z.ZodOptional`\<`z.ZodString`\> ; `isStatic`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `podName`: `z.ZodOptional`\<`z.ZodString`\> ; `podNames`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticFrameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `templateXcode`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AppDelegate_h`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateExtensions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }\>\> ; `AppDelegate_mm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateMethods`: `z.ZodOptional`\<`z.ZodObject`\<\{ `application`: `z.ZodObject`\<\{ `applicationDidBecomeActive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `continue`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didConnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didDisconnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFailToRegisterForRemoteNotificationsWithError`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFinishLaunchingWithOptions`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceiveRemoteNotification`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegister`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegisterForRemoteNotificationsWithDeviceToken`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `open`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `supportedInterfaceOrientationsFor`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\> ; `userNotificationCenter`: `z.ZodObject`\<\{ `willPresent`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }\>\> ; `Info_plist`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `Podfile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `header`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `injectLines`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `podDependencies`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `post_install`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticPods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }\>\> ; `project_pbxproj`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildPhases`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `inputPaths`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `shellPath`: `z.ZodString` ; `shellScript`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }\>, ``"many"``\>\> ; `buildSettings`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `frameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `headerFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `resourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }\>\> ; `kaios`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `linux`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `macos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `npm`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `pluginDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodNullable`\<`z.ZodString`\>\>\> ; `props`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `skipMerge`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `source`: `z.ZodOptional`\<`z.ZodString`\> ; `tizen`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tizenmobile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tizenwatch`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `tvos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildType`: `z.ZodOptional`\<`z.ZodEnum`\<[``"dynamic"``, ``"static"``]\>\> ; `commit`: `z.ZodOptional`\<`z.ZodString`\> ; `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `git`: `z.ZodOptional`\<`z.ZodString`\> ; `isStatic`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `path`: `z.ZodOptional`\<`z.ZodString`\> ; `podName`: `z.ZodOptional`\<`z.ZodString`\> ; `podNames`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticFrameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `templateXcode`: `z.ZodOptional`\<`z.ZodObject`\<\{ `AppDelegate_h`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateExtensions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }, \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  }\>\> ; `AppDelegate_mm`: `z.ZodOptional`\<`z.ZodObject`\<\{ `appDelegateImports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `appDelegateMethods`: `z.ZodOptional`\<`z.ZodObject`\<\{ `application`: `z.ZodObject`\<\{ `applicationDidBecomeActive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `continue`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didConnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didDisconnectCarInterfaceController`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFailToRegisterForRemoteNotificationsWithError`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didFinishLaunchingWithOptions`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceive`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didReceiveRemoteNotification`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegister`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `didRegisterForRemoteNotificationsWithDeviceToken`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `open`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\> ; `supportedInterfaceOrientationsFor`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\> ; `userNotificationCenter`: `z.ZodObject`\<\{ `willPresent`: `z.ZodArray`\<`z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `order`: `z.ZodNumber` ; `value`: `z.ZodString` ; `weight`: `z.ZodNumber`  }, ``"strip"``, `z.ZodTypeAny`, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }, \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  }\>]\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }, \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }, \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }, \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  }\>\> ; `Info_plist`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `Podfile`: `z.ZodOptional`\<`z.ZodObject`\<\{ `header`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `injectLines`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `podDependencies`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `post_install`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `staticPods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }, \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  }\>\> ; `project_pbxproj`: `z.ZodOptional`\<`z.ZodObject`\<\{ `buildPhases`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `inputPaths`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `shellPath`: `z.ZodString` ; `shellScript`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }, \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }\>, ``"many"``\>\> ; `buildSettings`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `frameworks`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `headerFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `resourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `sourceFiles`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }, \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }, \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }, \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  }\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\> ; `web`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `webos`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `webpackConfig`: `z.ZodOptional`\<`z.ZodObject`\<\{ `moduleAliases`: `z.ZodOptional`\<`z.ZodUnion`\<[`z.ZodBoolean`, `z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodObject`\<\{ `projectPath`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `projectPath`: `string`  }, \{ `projectPath`: `string`  }\>]\>\>]\>\> ; `modulePaths`: `z.ZodOptional`\<`z.ZodUnion`\<[`z.ZodBoolean`, `z.ZodArray`\<`z.ZodString`, ``"many"``\>]\>\> ; `nextTranspileModules`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  }, \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  }\>\> ; `webtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `windows`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\> ; `xbox`: `z.ZodOptional`\<`z.ZodObject`\<\{ `disabled`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `forceLinking`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodBoolean`\>\> ; `path`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }, \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `custom?`: `any` ; `disableRnvDefaultOverrides?`: `boolean` ; `pluginTemplates`: `Record`\<`string`, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }\>  }, \{ `custom?`: `any` ; `disableRnvDefaultOverrides?`: `boolean` ; `pluginTemplates`: `Record`\<`string`, \{ `android?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string` \| ``null``\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `forceLinking?`: `boolean` ; `path?`: `string`  }  }\>  }\>

#### Defined in

schema/configFiles/plugins.d.ts:5189

___

### RootPrivateSchema

• `Const` **RootPrivateSchema**: `z.ZodObject`\<\{ `platforms`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `androidtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `androidwear`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `chromecast`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `firetv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `ios`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `kaios`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `linux`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `macos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizen`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizenmobile`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizenwatch`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tvos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `web`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `webos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `webtv`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `windows`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `xbox`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  }, \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  }\>\> ; `private`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodAny`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `platforms?`: \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } ; `private?`: `Record`\<`string`, `any`\>  }, \{ `platforms?`: \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } ; `private?`: `Record`\<`string`, `any`\>  }\>

#### Defined in

schema/configFiles/private.d.ts:18

___

### RootProjectSchema

• `Const` **RootProjectSchema**: `AnyZodObject`

#### Defined in

schema/configFiles/project.d.ts:37891

___

### RootTemplateSchema

• `Const` **RootTemplateSchema**: `z.ZodObject`\<\{ `defaults`: `z.ZodOptional`\<`z.ZodObject`\<\{ `defaultCommandSchemes`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"run"``, ``"export"``, ``"build"``]\>, `z.ZodString`\>\> ; `portOffset`: `z.ZodOptional`\<`z.ZodNumber`\> ; `ports`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodNumber`\>\> ; `supportedPlatforms`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, ``"many"``\>\> ; `targets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"export"`` \| ``"build"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\>  }, \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"export"`` \| ``"build"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\>  }\>\> ; `engines`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodLiteral`\<``"source:rnv"``\>\>\> ; `templateConfig`: `z.ZodOptional`\<`z.ZodObject`\<\{ `bootstrapQuestions`: `z.ZodArray`\<`z.ZodObject`\<\{ `configProp`: `z.ZodOptional`\<`z.ZodObject`\<\{ `key`: `z.ZodString` ; `prop`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `key`: `string` ; `prop`: `string`  }, \{ `key`: `string` ; `prop`: `string`  }\>\> ; `options`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `title`: `z.ZodString` ; `value`: `z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `title`: `string` ; `value`: {}  }, \{ `title`: `string` ; `value`: {}  }\>, ``"many"``\>\> ; `title`: `z.ZodString` ; `type`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }, \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `includedPaths`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageTemplate`: `z.ZodOptional`\<`z.ZodObject`\<\{ `dependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `devDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `name`: `z.ZodOptional`\<`z.ZodString`\> ; `optionalDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `peerDependencies`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodString`\>\> ; `version`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }, \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `bootstrapQuestions`: \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }[] ; `includedPaths?`: `string`[] ; `packageTemplate?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }  }, \{ `bootstrapQuestions`: \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }[] ; `includedPaths?`: `string`[] ; `packageTemplate?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"export"`` \| ``"build"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\>  } ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `templateConfig?`: \{ `bootstrapQuestions`: \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }[] ; `includedPaths?`: `string`[] ; `packageTemplate?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }  }  }, \{ `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"export"`` \| ``"build"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, `string`\>\>  } ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `templateConfig?`: \{ `bootstrapQuestions`: \{ `configProp?`: \{ `key`: `string` ; `prop`: `string`  } ; `options?`: \{ `title`: `string` ; `value`: {}  }[] ; `title`: `string` ; `type`: `string`  }[] ; `includedPaths?`: `string`[] ; `packageTemplate?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  }  }  }\>

#### Defined in

schema/configFiles/template.d.ts:2

___

### RootTemplatesSchema

• `Const` **RootTemplatesSchema**: `z.ZodObject`\<\{ `engineTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `id`: `z.ZodString` ; `key`: `z.ZodOptional`\<`z.ZodString`\> ; `version`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\>\> ; `integrationTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `version`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `version`: `string`  }, \{ `version`: `string`  }\>\> ; `platformTemplates`: `z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodObject`\<\{ `engine`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `engine`: `string`  }, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `description`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `description`: `string`  }, \{ `description`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `engineTemplates`: `Record`\<`string`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\> ; `integrationTemplates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `platformTemplates`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `Record`\<`string`, \{ `description`: `string`  }\>  }, \{ `engineTemplates`: `Record`\<`string`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\> ; `integrationTemplates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `platformTemplates`: `Partial`\<`Record`\<``"ios"`` \| ``"android"`` \| ``"firetv"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"web"`` \| ``"webtv"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tvos"`` \| ``"webos"`` \| ``"macos"`` \| ``"windows"`` \| ``"linux"`` \| ``"tizenwatch"`` \| ``"kaios"`` \| ``"chromecast"`` \| ``"xbox"``, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `Record`\<`string`, \{ `description`: `string`  }\>  }\>

#### Defined in

schema/configFiles/templates.d.ts:2

___

### SAILFISH

• `Const` **SAILFISH**: ``"sailfish"``

#### Defined in

constants.d.ts:24

___

### SUPPORTED\_PLATFORMS

• `Const` **SUPPORTED\_PLATFORMS**: readonly [``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]

#### Defined in

constants.d.ts:60

___

### TASK\_APP\_CONFIGURE

• `Const` **TASK\_APP\_CONFIGURE**: ``"app configure"``

#### Defined in

tasks/constants.d.ts:53

___

### TASK\_APP\_CREATE

• `Const` **TASK\_APP\_CREATE**: ``"app create"``

#### Defined in

tasks/constants.d.ts:54

___

### TASK\_BUILD

• `Const` **TASK\_BUILD**: ``"build"``

#### Defined in

tasks/constants.d.ts:7

___

### TASK\_CLEAN

• `Const` **TASK\_CLEAN**: ``"clean"``

#### Defined in

tasks/constants.d.ts:15

___

### TASK\_CONFIGURE

• `Const` **TASK\_CONFIGURE**: ``"configure"``

#### Defined in

tasks/constants.d.ts:3

___

### TASK\_CONFIGURE\_SOFT

• `Const` **TASK\_CONFIGURE\_SOFT**: ``"configureSoft"``

#### Defined in

tasks/constants.d.ts:56

___

### TASK\_CRYPTO\_DECRYPT

• `Const` **TASK\_CRYPTO\_DECRYPT**: ``"crypto decrypt"``

#### Defined in

tasks/constants.d.ts:43

___

### TASK\_CRYPTO\_ENCRYPT

• `Const` **TASK\_CRYPTO\_ENCRYPT**: ``"crypto encrypt"``

#### Defined in

tasks/constants.d.ts:42

___

### TASK\_CRYPTO\_INSTALL\_CERTS

• `Const` **TASK\_CRYPTO\_INSTALL\_CERTS**: ``"crypto installCerts"``

#### Defined in

tasks/constants.d.ts:44

___

### TASK\_CRYPTO\_INSTALL\_PROFILE

• `Const` **TASK\_CRYPTO\_INSTALL\_PROFILE**: ``"crypto installProfile"``

#### Defined in

tasks/constants.d.ts:46

___

### TASK\_CRYPTO\_INSTALL\_PROFILES

• `Const` **TASK\_CRYPTO\_INSTALL\_PROFILES**: ``"crypto installProfiles"``

#### Defined in

tasks/constants.d.ts:45

___

### TASK\_CRYPTO\_UPDATE\_PROFILE

• `Const` **TASK\_CRYPTO\_UPDATE\_PROFILE**: ``"crypto updateProfile"``

#### Defined in

tasks/constants.d.ts:47

___

### TASK\_CRYPTO\_UPDATE\_PROFILES

• `Const` **TASK\_CRYPTO\_UPDATE\_PROFILES**: ``"crypto updateProfiles"``

#### Defined in

tasks/constants.d.ts:48

___

### TASK\_DEBUG

• `Const` **TASK\_DEBUG**: ``"debug"``

#### Defined in

tasks/constants.d.ts:11

___

### TASK\_DEPLOY

• `Const` **TASK\_DEPLOY**: ``"deploy"``

#### Defined in

tasks/constants.d.ts:13

___

### TASK\_DOCTOR

• `Const` **TASK\_DOCTOR**: ``"doctor"``

#### Defined in

tasks/constants.d.ts:4

___

### TASK\_EJECT

• `Const` **TASK\_EJECT**: ``"eject"``

#### Defined in

tasks/constants.d.ts:58

___

### TASK\_EXPORT

• `Const` **TASK\_EXPORT**: ``"export"``

#### Defined in

tasks/constants.d.ts:10

___

### TASK\_HELP

• `Const` **TASK\_HELP**: ``"help"``

#### Defined in

tasks/constants.d.ts:6

___

### TASK\_HOOKS\_LIST

• `Const` **TASK\_HOOKS\_LIST**: ``"hooks list"``

#### Defined in

tasks/constants.d.ts:50

___

### TASK\_HOOKS\_PIPES

• `Const` **TASK\_HOOKS\_PIPES**: ``"hooks pipes"``

#### Defined in

tasks/constants.d.ts:51

___

### TASK\_HOOKS\_RUN

• `Const` **TASK\_HOOKS\_RUN**: ``"hooks run"``

#### Defined in

tasks/constants.d.ts:49

___

### TASK\_INFO

• `Const` **TASK\_INFO**: ``"info"``

#### Defined in

tasks/constants.d.ts:8

___

### TASK\_INSTALL

• `Const` **TASK\_INSTALL**: ``"install"``

#### Defined in

tasks/constants.d.ts:18

___

### TASK\_KILL

• `Const` **TASK\_KILL**: ``"kill"``

#### Defined in

tasks/constants.d.ts:57

___

### TASK\_LINK

• `Const` **TASK\_LINK**: ``"link"``

#### Defined in

tasks/constants.d.ts:16

___

### TASK\_LOG

• `Const` **TASK\_LOG**: ``"log"``

#### Defined in

tasks/constants.d.ts:14

___

### TASK\_NEW

• `Const` **TASK\_NEW**: ``"new"``

#### Defined in

tasks/constants.d.ts:5

___

### TASK\_PACKAGE

• `Const` **TASK\_PACKAGE**: ``"package"``

#### Defined in

tasks/constants.d.ts:12

___

### TASK\_PKG

• `Const` **TASK\_PKG**: ``"pkg"``

#### Defined in

tasks/constants.d.ts:52

___

### TASK\_PLATFORM\_CONFIGURE

• `Const` **TASK\_PLATFORM\_CONFIGURE**: ``"platform configure"``

#### Defined in

tasks/constants.d.ts:32

___

### TASK\_PLATFORM\_CONNECT

• `Const` **TASK\_PLATFORM\_CONNECT**: ``"platform connect"``

#### Defined in

tasks/constants.d.ts:33

___

### TASK\_PLATFORM\_EJECT

• `Const` **TASK\_PLATFORM\_EJECT**: ``"platform eject"``

#### Defined in

tasks/constants.d.ts:34

___

### TASK\_PLATFORM\_LIST

• `Const` **TASK\_PLATFORM\_LIST**: ``"platform list"``

#### Defined in

tasks/constants.d.ts:35

___

### TASK\_PLATFORM\_SETUP

• `Const` **TASK\_PLATFORM\_SETUP**: ``"platform setup"``

#### Defined in

tasks/constants.d.ts:36

___

### TASK\_PLUGIN\_ADD

• `Const` **TASK\_PLUGIN\_ADD**: ``"plugin add"``

#### Defined in

tasks/constants.d.ts:39

___

### TASK\_PLUGIN\_LIST

• `Const` **TASK\_PLUGIN\_LIST**: ``"plugin list"``

#### Defined in

tasks/constants.d.ts:40

___

### TASK\_PLUGIN\_UPDATE

• `Const` **TASK\_PLUGIN\_UPDATE**: ``"plugin update"``

#### Defined in

tasks/constants.d.ts:41

___

### TASK\_PROJECT\_CONFIGURE

• `Const` **TASK\_PROJECT\_CONFIGURE**: ``"project configure"``

#### Defined in

tasks/constants.d.ts:37

___

### TASK\_PROJECT\_UPGRADE

• `Const` **TASK\_PROJECT\_UPGRADE**: ``"project upgrade"``

#### Defined in

tasks/constants.d.ts:38

___

### TASK\_PUBLISH

• `Const` **TASK\_PUBLISH**: ``"publish"``

#### Defined in

tasks/constants.d.ts:19

___

### TASK\_RUN

• `Const` **TASK\_RUN**: ``"run"``

#### Defined in

tasks/constants.d.ts:2

___

### TASK\_START

• `Const` **TASK\_START**: ``"start"``

#### Defined in

tasks/constants.d.ts:9

___

### TASK\_STATUS

• `Const` **TASK\_STATUS**: ``"status"``

#### Defined in

tasks/constants.d.ts:20

___

### TASK\_SWITCH

• `Const` **TASK\_SWITCH**: ``"switch"``

#### Defined in

tasks/constants.d.ts:21

___

### TASK\_TARGET

• `Const` **TASK\_TARGET**: ``"target"``

#### Defined in

tasks/constants.d.ts:24

___

### TASK\_TARGET\_LAUNCH

• `Const` **TASK\_TARGET\_LAUNCH**: ``"target launch"``

#### Defined in

tasks/constants.d.ts:22

___

### TASK\_TARGET\_LIST

• `Const` **TASK\_TARGET\_LIST**: ``"target list"``

#### Defined in

tasks/constants.d.ts:23

___

### TASK\_TELEMETRY\_DISABLE

• `Const` **TASK\_TELEMETRY\_DISABLE**: ``"telemetry disable"``

#### Defined in

tasks/constants.d.ts:59

___

### TASK\_TELEMETRY\_ENABLE

• `Const` **TASK\_TELEMETRY\_ENABLE**: ``"telemetry enable"``

#### Defined in

tasks/constants.d.ts:60

___

### TASK\_TELEMETRY\_STATUS

• `Const` **TASK\_TELEMETRY\_STATUS**: ``"telemetry status"``

#### Defined in

tasks/constants.d.ts:61

___

### TASK\_TEMPLATE\_ADD

• `Const` **TASK\_TEMPLATE\_ADD**: ``"template add"``

#### Defined in

tasks/constants.d.ts:25

___

### TASK\_TEMPLATE\_APPLY

• `Const` **TASK\_TEMPLATE\_APPLY**: ``"template apply"``

#### Defined in

tasks/constants.d.ts:27

___

### TASK\_TEMPLATE\_LIST

• `Const` **TASK\_TEMPLATE\_LIST**: ``"template list"``

#### Defined in

tasks/constants.d.ts:26

___

### TASK\_UNLINK

• `Const` **TASK\_UNLINK**: ``"unlink"``

#### Defined in

tasks/constants.d.ts:17

___

### TASK\_WORKSPACE\_ADD

• `Const` **TASK\_WORKSPACE\_ADD**: ``"workspace add"``

#### Defined in

tasks/constants.d.ts:28

___

### TASK\_WORKSPACE\_CONFIGURE

• `Const` **TASK\_WORKSPACE\_CONFIGURE**: ``"workspace configure"``

#### Defined in

tasks/constants.d.ts:55

___

### TASK\_WORKSPACE\_CONNECT

• `Const` **TASK\_WORKSPACE\_CONNECT**: ``"workspace connect"``

#### Defined in

tasks/constants.d.ts:29

___

### TASK\_WORKSPACE\_LIST

• `Const` **TASK\_WORKSPACE\_LIST**: ``"workspace list"``

#### Defined in

tasks/constants.d.ts:30

___

### TASK\_WORKSPACE\_UPDATE

• `Const` **TASK\_WORKSPACE\_UPDATE**: ``"workspace update"``

#### Defined in

tasks/constants.d.ts:31

___

### TIVO

• `Const` **TIVO**: ``"tivo"``

#### Defined in

constants.d.ts:25

___

### TIZEN

• `Const` **TIZEN**: ``"tizen"``

#### Defined in

constants.d.ts:26

___

### TIZEN\_MOBILE

• `Const` **TIZEN\_MOBILE**: ``"tizenmobile"``

#### Defined in

constants.d.ts:28

___

### TIZEN\_WATCH

• `Const` **TIZEN\_WATCH**: ``"tizenwatch"``

#### Defined in

constants.d.ts:27

___

### TVOS

• `Const` **TVOS**: ``"tvos"``

#### Defined in

constants.d.ts:29

___

### UBUNTU

• `Const` **UBUNTU**: ``"ubuntu"``

#### Defined in

constants.d.ts:30

___

### UBUNTU\_TOUCH

• `Const` **UBUNTU\_TOUCH**: ``"ubuntutouch"``

#### Defined in

constants.d.ts:31

___

### UNITY

• `Const` **UNITY**: ``"unity"``

#### Defined in

constants.d.ts:32

___

### USER\_HOME\_DIR

• `Const` **USER\_HOME\_DIR**: `string`

#### Defined in

constants.d.ts:1

___

### VEWD

• `Const` **VEWD**: ``"vewd"``

#### Defined in

constants.d.ts:33

___

### VIDAA

• `Const` **VIDAA**: ``"vidaa"``

#### Defined in

constants.d.ts:34

___

### VIERACONNECT

• `Const` **VIERACONNECT**: ``"vieraconnect"``

#### Defined in

constants.d.ts:35

___

### VIZIO

• `Const` **VIZIO**: ``"vizio"``

#### Defined in

constants.d.ts:36

___

### WATCHOS

• `Const` **WATCHOS**: ``"watchos"``

#### Defined in

constants.d.ts:37

___

### WEB

• `Const` **WEB**: ``"web"``

#### Defined in

constants.d.ts:38

___

### WEBIAN

• `Const` **WEBIAN**: ``"webian"``

#### Defined in

constants.d.ts:41

___

### WEBOS

• `Const` **WEBOS**: ``"webos"``

#### Defined in

constants.d.ts:40

___

### WEBTV

• `Const` **WEBTV**: ``"webtv"``

#### Defined in

constants.d.ts:39

___

### WII

• `Const` **WII**: ``"wii"``

#### Defined in

constants.d.ts:42

___

### WINDOWS

• `Const` **WINDOWS**: ``"windows"``

#### Defined in

constants.d.ts:43

___

### WP10

• `Const` **WP10**: ``"wp10"``

#### Defined in

constants.d.ts:45

___

### WP8

• `Const` **WP8**: ``"wp8"``

#### Defined in

constants.d.ts:46

___

### XBOX

• `Const` **XBOX**: ``"xbox"``

#### Defined in

constants.d.ts:47

___

### XBOX360

• `Const` **XBOX360**: ``"xbox360"``

#### Defined in

constants.d.ts:48

___

### isSystemLinux

• `Const` **isSystemLinux**: `boolean`

#### Defined in

utils/utils.d.ts:2

___

### isSystemMac

• `Const` **isSystemMac**: `boolean`

#### Defined in

utils/utils.d.ts:1

___

### isSystemWin

• `Const` **isSystemWin**: `boolean`

#### Defined in

utils/utils.d.ts:3

___

### openCommand

• `Const` **openCommand**: `string`

#### Defined in

system/exec.d.ts:46

## Functions

### \_getConfigProp

▸ **_getConfigProp**\<`T`\>(`c`, `platform`, `key`, `defaultVal?`, `sourceObj?`): \{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"build"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"id"`` \| ``"custom"`` \| ``"backgroundColor"`` \| ``"hidden"`` \| ``"title"`` \| ``"target"`` \| ``"description"`` \| ``"crypto"`` \| ``"environment"`` \| ``"env"`` \| ``"extend"`` \| ``"package"`` \| ``"projectName"`` \| ``"templateAndroid"`` \| ``"version"`` \| ``"templateXcode"`` \| ``"nextTranspileModules"`` \| ``"webpackConfig"`` \| ``"fontSources"`` \| ``"reactNativeEngine"`` \| ``"teamID"`` \| ``"provisioningProfiles"`` \| ``"pagesDir"`` \| ``"outputDir"`` \| ``"exportDir"`` \| ``"electronConfig"`` \| ``"BrowserWindow"`` \| ``"iconColor"`` \| ``"templateVSProject"`` \| ``"certificateProfile"`` \| ``"appName"`` \| ``"timestampBuildFiles"`` \| ``"devServerHost"`` \| ``"hostedShellHeaders"`` \| ``"enableAndroidX"`` \| ``"enableJetifier"`` \| ``"signingConfig"`` \| ``"minSdkVersion"`` \| ``"multipleAPKs"`` \| ``"aab"`` \| ``"extraGradleParams"`` \| ``"minifyEnabled"`` \| ``"targetSdkVersion"`` \| ``"compileSdkVersion"`` \| ``"kotlinVersion"`` \| ``"ndkVersion"`` \| ``"supportLibVersion"`` \| ``"googleServicesVersion"`` \| ``"gradleBuildToolsVersion"`` \| ``"gradleWrapperVersion"`` \| ``"excludedFeatures"`` \| ``"includedFeatures"`` \| ``"buildToolsVersion"`` \| ``"disableSigning"`` \| ``"storeFile"`` \| ``"keyAlias"`` \| ``"newArchEnabled"`` \| ``"ignoreWarnings"`` \| ``"ignoreLogs"`` \| ``"deploymentTarget"`` \| ``"orientationSupport"`` \| ``"excludedArchs"`` \| ``"urlScheme"`` \| ``"teamIdentifier"`` \| ``"scheme"`` \| ``"schemeTarget"`` \| ``"appleId"`` \| ``"provisioningStyle"`` \| ``"codeSignIdentity"`` \| ``"commandLineArguments"`` \| ``"provisionProfileSpecifier"`` \| ``"provisionProfileSpecifiers"`` \| ``"allowProvisioningUpdates"`` \| ``"codeSignIdentities"`` \| ``"systemCapabilities"`` \| ``"entitlements"`` \| ``"runScheme"`` \| ``"sdk"`` \| ``"testFlightId"`` \| ``"firebaseId"`` \| ``"exportOptions"`` \| ``"extendPlatform"`` \| ``"assetFolderPlatform"`` \| ``"engine"`` \| ``"entryFile"`` \| ``"bundleAssets"`` \| ``"enableSourceMaps"`` \| ``"bundleIsDev"`` \| ``"getJsBundleFile"`` \| ``"includedPermissions"`` \| ``"excludedPermissions"`` \| ``"idSuffix"`` \| ``"versionCode"`` \| ``"versionFormat"`` \| ``"versionCodeFormat"`` \| ``"versionCodeOffset"`` \| ``"author"`` \| ``"license"`` \| ``"includedFonts"`` \| ``"splashScreen"`` \| ``"assetSources"`` \| ``"includedPlugins"`` \| ``"excludedPlugins"`` \| ``"runtime"`` \| ``"extendsTemplate"`` \| ``"skipBootstrapCopy"`` \| ``"workspaceID"`` \| ``"projectVersion"`` \| ``"isMonorepo"`` \| ``"isTemplate"`` \| ``"defaults"`` \| ``"pipes"`` \| ``"templates"`` \| ``"currentTemplate"`` \| ``"paths"`` \| ``"permissions"`` \| ``"engines"`` \| ``"enableHookRebuild"`` \| ``"monoRoot"`` \| ``"tasks"`` \| ``"integrations"`` \| ``"skipAutoUpdate"`` \| ``"isNew"`` \| ``"storePassword"`` \| ``"keyPassword"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | \{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"build"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`] |
| `sourceObj?` | `Partial`\<`_ConfigRootMerged`\> |

#### Returns

\{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"build"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`]

#### Defined in

configs/configProp.d.ts:7

___

### applyTemplate

▸ **applyTemplate**(`c`, `selectedTemplate?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `selectedTemplate?` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

templates/index.d.ts:8

___

### areNodeModulesInstalled

▸ **areNodeModulesInstalled**(): `boolean`

#### Returns

`boolean`

#### Defined in

projects/npm.d.ts:3

___

### arrayMerge

▸ **arrayMerge**(`destinationArray`, `sourceArray`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationArray` | `string`[] |
| `sourceArray` | `string`[] |

#### Returns

`string`[]

#### Defined in

system/fs.d.ts:39

___

### buildHooks

▸ **buildHooks**(`c`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<``true``\>

#### Defined in

buildHooks/index.d.ts:3

___

### chalk

▸ **chalk**(): [`RnvApiChalk`](modules.md#rnvapichalk)

#### Returns

[`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

logger/index.d.ts:2

___

### checkAndBootstrapIfRequired

▸ **checkAndBootstrapIfRequired**(`c`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<``true``\>

#### Defined in

projects/index.d.ts:4

___

### checkAndCreateGitignore

▸ **checkAndCreateGitignore**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/index.d.ts:5

___

### checkAndCreateProjectPackage

▸ **checkAndCreateProjectPackage**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/package.d.ts:2

___

### checkAndMigrateProject

▸ **checkAndMigrateProject**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

migrator/index.d.ts:1

___

### checkForPluginDependencies

▸ **checkForPluginDependencies**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

plugins/index.d.ts:12

___

### checkIfProjectAndNodeModulesExists

▸ **checkIfProjectAndNodeModulesExists**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

projects/dependencyManager.d.ts:3

___

### checkIfTemplateConfigured

▸ **checkIfTemplateConfigured**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

configs/templates.d.ts:2

___

### checkNpxIsInstalled

▸ **checkNpxIsInstalled**(): `Promise`\<``true``\>

#### Returns

`Promise`\<``true``\>

#### Defined in

projects/npm.d.ts:2

___

### checkRequiredPackage

▸ **checkRequiredPackage**(`c`, `pkg`, `version`, `type`, `skipAsking?`, `skipInstall?`, `skipVersionCheck?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `pkg` | `string` |
| `version` | `string` |
| `type` | `NpmDepKey` |
| `skipAsking?` | `boolean` |
| `skipInstall?` | `boolean` |
| `skipVersionCheck?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/dependencyManager.d.ts:4

___

### cleanEmptyFoldersRecursively

▸ **cleanEmptyFoldersRecursively**(`folder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | `string` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:49

___

### cleanFolder

▸ **cleanFolder**(`d`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

system/fs.d.ts:29

___

### cleanNodeModules

▸ **cleanNodeModules**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

projects/npm.d.ts:8

___

### cleanPlaformAssets

▸ **cleanPlaformAssets**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/index.d.ts:12

___

### cleanPlatformBuild

▸ **cleanPlatformBuild**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

platforms/index.d.ts:9

___

### commandExists

▸ **commandExists**(`commandName`, `callback?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |
| `callback?` | [`ExecCallback`](modules.md#execcallback) |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

system/exec.d.ts:44

___

### commandExistsSync

▸ **commandExistsSync**(`commandName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |

#### Returns

`boolean`

#### Defined in

system/exec.d.ts:45

___

### configureEngines

▸ **configureEngines**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

engines/index.d.ts:10

___

### configureEntryPoint

▸ **configureEntryPoint**(`c`, `platform`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

templates/index.d.ts:5

___

### configureFonts

▸ **configureFonts**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/index.d.ts:6

___

### configurePlugins

▸ **configurePlugins**(`c`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<``true``\>

#### Defined in

plugins/index.d.ts:6

___

### configureRuntimeDefaults

▸ **configureRuntimeDefaults**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

context/runtime.d.ts:2

___

### configureTemplateFiles

▸ **configureTemplateFiles**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

templates/index.d.ts:4

___

### copyAssetsFolder

▸ **copyAssetsFolder**(`c`, `platform`, `subPath?`, `customFn?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `subPath?` | `string` |
| `customFn?` | (`c`: [`RnvContext`](modules.md#rnvcontext), `platform`: [`RnvPlatform`](modules.md#rnvplatform)) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

projects/index.d.ts:9

___

### copyBuildsFolder

▸ **copyBuildsFolder**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

projects/index.d.ts:10

___

### copyContentsIfNotExistsRecursiveSync

▸ **copyContentsIfNotExistsRecursiveSync**(`src`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:51

___

### copyFileSync

▸ **copyFileSync**(`source`, `target`, `skipOverride?`, `timestampPathsConfig?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `skipOverride?` | `boolean` |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](modules.md#timestamppathsconfig) |

#### Returns

`void`

#### Defined in

system/fs.d.ts:18

___

### copyFileWithInjectSync

▸ **copyFileWithInjectSync**(`source`, `target`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](modules.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](modules.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

system/fs.d.ts:21

___

### copyFolderContentsRecursive

▸ **copyFolderContentsRecursive**(`source`, `target`, `convertSvg?`, `skipPaths?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipPaths?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

system/fs.d.ts:25

___

### copyFolderContentsRecursiveSync

▸ **copyFolderContentsRecursiveSync**(`source`, `target`, `convertSvg?`, `skipPaths?`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`, `extFilter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipPaths?` | `string`[] |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](modules.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](modules.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](modules.md#rnvcontext) |
| `extFilter?` | `string`[] |

#### Returns

`void`

#### Defined in

system/fs.d.ts:24

___

### copyFolderRecursiveSync

▸ **copyFolderRecursiveSync**(`source`, `target`, `convertSvg?`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`, `extFilter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](modules.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](modules.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](modules.md#rnvcontext) |
| `extFilter?` | `string`[] |

#### Returns

`void`

#### Defined in

system/fs.d.ts:23

___

### copyRuntimeAssets

▸ **copyRuntimeAssets**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/index.d.ts:7

___

### copySharedPlatforms

▸ **copySharedPlatforms**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

platforms/index.d.ts:14

___

### copyTemplatePluginsSync

▸ **copyTemplatePluginsSync**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

plugins/index.d.ts:14

___

### createPlatformBuild

▸ **createPlatformBuild**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

platforms/index.d.ts:10

___

### createRnvApi

▸ **createRnvApi**(`_api?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_api?` | `Object` |
| `_api.analytics` | [`RnvContextAnalytics`](modules.md#rnvcontextanalytics) |
| `_api.doResolve` | [`DoResolveFn`](modules.md#doresolvefn) |
| `_api.getConfigProp` | [`GetConfigPropFn`](modules.md#getconfigpropfn) |
| `_api.logger` | [`RnvApiLogger`](modules.md#rnvapilogger) |
| `_api.prompt` | [`RnvApiPrompt`](modules.md#rnvapiprompt) |
| `_api.spinner` | [`RnvApiSpinner`](modules.md#rnvapispinner) |

#### Returns

`void`

#### Defined in

api/index.d.ts:3

___

### createRnvContext

▸ **createRnvContext**(`ctx?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx?` | [`CreateContextOptions`](modules.md#createcontextoptions) |

#### Returns

`void`

#### Defined in

context/index.d.ts:3

___

### createWorkspace

▸ **createWorkspace**(`c`, `workspaceID`, `workspacePath`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `workspaceID` | `string` |
| `workspacePath` | `string` |

#### Returns

`Promise`\<``true``\>

#### Defined in

configs/workspaces.d.ts:3

___

### doResolve

▸ **doResolve**(`aPath?`, `mandatory?`, `options?`): `string`

An attempt at drying out filesystem references to [external packages](https://tinyurl.com/mao2dy6).

We access external packages for a number of reasons:
 - to simply resolve a non-scoped package's (absolute) path on disk. e.g. '/var/project/node_modules/react-native'
 - to resolve a scoped package's (absolute) path on disk. e.g. '/var/project/node_modules/@aScope/react-native'
 - to resolve an individual file/dir's (absolute) path on disk. e.g. '/var/project/node_modules/react-native/blur/android' (note this is a normally illegal package reference)
 - to resolve an individual file (absolute) path on disk by FS relative reference. e.g. '/var/project/node_modules/react-native/relPath'

** Please note that we do not support [subpackage paths](https://tinyurl.com/vub6c7t). All suffixed paths (e.g. 'react-native/SUFFIX_PATH', '@aScope/react-native/SUFFIX_PATH')
will be treated as a filepath from root of resolved package (i.e. will ignore subdirectory package.json)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aPath?` | `string` | package name. e.g. 'file:../rel/path', 'react-native', 'react-native/android', '@react-native-community/masked-view/android' |
| `mandatory?` | `boolean` | whether it throws |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) | docs - https://tinyurl.com/r9sfpf7 && `{keepSuffix: boolean}` |

#### Returns

`string`

#### Defined in

system/resolve.d.ts:18

___

### doResolvePath

▸ **doResolvePath**(`aPath`, `mandatory?`, `options?`, `fallbackBase?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |
| `mandatory?` | `boolean` |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) |
| `fallbackBase?` | `string` |

#### Returns

`string`

#### Defined in

system/resolve.d.ts:19

___

### ejectPlatform

▸ **ejectPlatform**(`c`, `platform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | `string` |

#### Returns

`void`

#### Defined in

platforms/index.d.ts:15

___

### execCLI

▸ **execCLI**(`c`, `cli`, `command`, `opts?`): `Promise`\<`string`\>

Execute CLI command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) | the trusty old c object |
| `cli` | `string` | the cli to be executed |
| `command` | `string` | the command to be executed |
| `opts?` | [`ExecOptions`](modules.md#execoptions) | the options for the command |

#### Returns

`Promise`\<`string`\>

#### Defined in

system/exec.d.ts:21

___

### execaCommand

▸ **execaCommand**(`cmd`, `options?`): `ExecaChildProcess`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | `string` |
| `options?` | `Options`\<`string`\> |

#### Returns

`ExecaChildProcess`\<`string`\>

#### Defined in

system/exec.d.ts:32

___

### executeAsync

▸ **executeAsync**(`_c`, `_cmd?`, `_opts?`): `Promise`\<`string`\>

Execute a plain command

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c` | `string` \| `string`[] \| [`RnvContext`](modules.md#rnvcontext) |
| `_cmd?` | `string` \| `string`[] \| [`ExecOptions`](modules.md#execoptions) |
| `_opts?` | [`ExecOptions`](modules.md#execoptions) |

#### Returns

`Promise`\<`string`\>

#### Defined in

system/exec.d.ts:31

___

### executeEngineTask

▸ **executeEngineTask**(`c`, `task`, `parentTask?`, `originTask?`, `tasks?`, `isFirstTask?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | `string` |
| `parentTask?` | `string` |
| `originTask?` | `string` |
| `tasks?` | `Record`\<`string`, [`RnvTask`](modules.md#rnvtask)\> |
| `isFirstTask?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

tasks/index.d.ts:9

___

### executeOrSkipTask

▸ **executeOrSkipTask**(`c`, `task`, `parentTask`, `originTask?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | `string` |
| `parentTask` | `string` |
| `originTask?` | `string` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

tasks/index.d.ts:7

___

### executePipe

▸ **executePipe**(`c`, `key`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

buildHooks/index.d.ts:2

___

### executeRnvCore

▸ **executeRnvCore**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

runner.d.ts:1

___

### executeTask

▸ **executeTask**(`c`, `task`, `parentTask?`, `originTask?`, `isFirstTask?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | `string` |
| `parentTask?` | `string` |
| `originTask?` | `string` |
| `isFirstTask?` | `boolean` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

tasks/index.d.ts:6

___

### executeTelnet

▸ **executeTelnet**(`c`, `port`, `command`): `Promise`\<`string`\>

Connect to a local telnet server and execute a command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) | - |
| `port` | `string` | where do you want me to connect to? |
| `command` | `string` | the command to be executed once I'm connected |

#### Returns

`Promise`\<`string`\>

#### Defined in

system/exec.d.ts:42

___

### findSuitableTask

▸ **findSuitableTask**(`c`, `specificTask?`): `Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `specificTask?` | `string` |

#### Returns

`Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Defined in

tasks/index.d.ts:5

___

### fixPackageJson

▸ **fixPackageJson**(`c`, `pkgPath`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `pkgPath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

doctor/index.d.ts:2

___

### fixPackageObject

▸ **fixPackageObject**(`pp`): `Record`\<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pp` | `Record`\<`string`, `unknown`\> |

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

doctor/index.d.ts:3

___

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |
| `decimals?` | `number` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:47

___

### fsChmodSync

▸ **fsChmodSync**(`dest`, `flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |
| `flag` | `Mode` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:10

___

### fsCopyFileSync

▸ **fsCopyFileSync**(`source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:5

___

### fsExistsSync

▸ **fsExistsSync**(`dest`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`boolean`

#### Defined in

system/fs.d.ts:6

___

### fsLstatSync

▸ **fsLstatSync**(`dest`): `Stats`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`Stats`

#### Defined in

system/fs.d.ts:8

___

### fsMkdirSync

▸ **fsMkdirSync**(`arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:13

___

### fsReadFile

▸ **fsReadFile**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | (`err`: `unknown`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:16

___

### fsReadFileSync

▸ **fsReadFileSync**(`dest`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`Buffer`

#### Defined in

system/fs.d.ts:9

___

### fsReaddir

▸ **fsReaddir**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | (`err`: `unknown`, `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:17

___

### fsReaddirSync

▸ **fsReaddirSync**(`dest`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`string`[]

#### Defined in

system/fs.d.ts:7

___

### fsRenameSync

▸ **fsRenameSync**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | `PathLike` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:11

___

### fsStatSync

▸ **fsStatSync**(`arg1`): `Stats`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`Stats`

#### Defined in

system/fs.d.ts:12

___

### fsSymlinkSync

▸ **fsSymlinkSync**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | `PathLike` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:15

___

### fsUnlinkSync

▸ **fsUnlinkSync**(`arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:14

___

### fsWriteFileSync

▸ **fsWriteFileSync**(`dest`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `string` |
| `data` | `string` |
| `options?` | `WriteFileOptions` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:4

___

### generateBuildConfig

▸ **generateBuildConfig**(`_c?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c?` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

configs/buildConfig.d.ts:2

___

### generateContextDefaults

▸ **generateContextDefaults**(): [`RnvContext`](modules.md#rnvcontext)

#### Returns

[`RnvContext`](modules.md#rnvcontext)

#### Defined in

context/defaults.d.ts:8

___

### generateContextPaths

▸ **generateContextPaths**(`pathObj`, `dir`, `configName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathObj` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) |
| `dir` | `string` |
| `configName?` | `string` |

#### Returns

`void`

#### Defined in

context/index.d.ts:2

___

### generateDefaultChalk

▸ **generateDefaultChalk**(): [`RnvApiChalk`](modules.md#rnvapichalk)

#### Returns

[`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

logger/defaults.d.ts:2

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

engines/index.d.ts:8

___

### generateEngineTasks

▸ **generateEngineTasks**(`taskArr`): [`RnvTaskMap`](modules.md#rnvtaskmap)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskArr` | [`RnvTask`](modules.md#rnvtask)[] |

#### Returns

[`RnvTaskMap`](modules.md#rnvtaskmap)

#### Defined in

engines/index.d.ts:9

___

### generateLocalConfig

▸ **generateLocalConfig**(`c`, `resetAppId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `resetAppId?` | `boolean` |

#### Returns

`void`

#### Defined in

configs/configLocal.d.ts:2

___

### generateLocalJsonSchemas

▸ **generateLocalJsonSchemas**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

schema/schemaManager.d.ts:1

___

### generateOptions

▸ **generateOptions**(`inputData`, `isMultiChoice?`, `mapping?`, `renderMethod?`): [`PromptOptions`](modules.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputData` | `any` |
| `isMultiChoice?` | `boolean` |
| `mapping?` | `any` |
| `renderMethod?` | [`PromptRenderFn`](modules.md#promptrenderfn) |

#### Returns

[`PromptOptions`](modules.md#promptoptions)

#### Defined in

api/index.d.ts:13

___

### generatePlatformAssetsRuntimeConfig

▸ **generatePlatformAssetsRuntimeConfig**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

configs/platformAssets.d.ts:2

___

### generatePlatformChoices

▸ **generatePlatformChoices**(`c`): \{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

\{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``  }[]

#### Defined in

platforms/index.d.ts:4

___

### generatePlatformTemplatePaths

▸ **generatePlatformTemplatePaths**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

configs/configProject.d.ts:8

___

### generateRnvConfigFileObj

▸ **generateRnvConfigFileObj**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `configs` | `never`[] |
| `configsLocal` | `never`[] |
| `configsPrivate` | `never`[] |

#### Defined in

context/defaults.d.ts:3

___

### generateRnvConfigPathObj

▸ **generateRnvConfigPathObj**(): [`RnvContextPathObj`](modules.md#rnvcontextpathobj)

#### Returns

[`RnvContextPathObj`](modules.md#rnvcontextpathobj)

#### Defined in

context/defaults.d.ts:2

___

### getApi

▸ **getApi**(): [`RnvApi`](modules.md#rnvapi)

#### Returns

[`RnvApi`](modules.md#rnvapi)

#### Defined in

api/provider.d.ts:2

___

### getAppConfigBuildsFolder

▸ **getAppConfigBuildsFolder**(`c`, `platform`, `customPath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `customPath?` | `string` |

#### Returns

`string`

#### Defined in

common.d.ts:7

___

### getAppFolder

▸ **getAppFolder**(`c`, `isRelativePath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `isRelativePath?` | `boolean` |

#### Returns

`string`

#### Defined in

common.d.ts:5

___

### getConfigProp

▸ **getConfigProp**\<`T`\>(`c`, `platform`, `key`, `defaultVal?`): [`ConfigProp`](modules.md#configprop)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"id"`` \| ``"custom"`` \| ``"backgroundColor"`` \| ``"hidden"`` \| ``"title"`` \| ``"target"`` \| ``"description"`` \| ``"crypto"`` \| ``"environment"`` \| ``"env"`` \| ``"extend"`` \| ``"package"`` \| ``"projectName"`` \| ``"templateAndroid"`` \| ``"version"`` \| ``"templateXcode"`` \| ``"nextTranspileModules"`` \| ``"webpackConfig"`` \| ``"fontSources"`` \| ``"reactNativeEngine"`` \| ``"teamID"`` \| ``"provisioningProfiles"`` \| ``"pagesDir"`` \| ``"outputDir"`` \| ``"exportDir"`` \| ``"electronConfig"`` \| ``"BrowserWindow"`` \| ``"iconColor"`` \| ``"templateVSProject"`` \| ``"certificateProfile"`` \| ``"appName"`` \| ``"timestampBuildFiles"`` \| ``"devServerHost"`` \| ``"hostedShellHeaders"`` \| ``"enableAndroidX"`` \| ``"enableJetifier"`` \| ``"signingConfig"`` \| ``"minSdkVersion"`` \| ``"multipleAPKs"`` \| ``"aab"`` \| ``"extraGradleParams"`` \| ``"minifyEnabled"`` \| ``"targetSdkVersion"`` \| ``"compileSdkVersion"`` \| ``"kotlinVersion"`` \| ``"ndkVersion"`` \| ``"supportLibVersion"`` \| ``"googleServicesVersion"`` \| ``"gradleBuildToolsVersion"`` \| ``"gradleWrapperVersion"`` \| ``"excludedFeatures"`` \| ``"includedFeatures"`` \| ``"buildToolsVersion"`` \| ``"disableSigning"`` \| ``"storeFile"`` \| ``"keyAlias"`` \| ``"newArchEnabled"`` \| ``"ignoreWarnings"`` \| ``"ignoreLogs"`` \| ``"deploymentTarget"`` \| ``"orientationSupport"`` \| ``"excludedArchs"`` \| ``"urlScheme"`` \| ``"teamIdentifier"`` \| ``"scheme"`` \| ``"schemeTarget"`` \| ``"appleId"`` \| ``"provisioningStyle"`` \| ``"codeSignIdentity"`` \| ``"commandLineArguments"`` \| ``"provisionProfileSpecifier"`` \| ``"provisionProfileSpecifiers"`` \| ``"allowProvisioningUpdates"`` \| ``"codeSignIdentities"`` \| ``"systemCapabilities"`` \| ``"entitlements"`` \| ``"runScheme"`` \| ``"sdk"`` \| ``"testFlightId"`` \| ``"firebaseId"`` \| ``"exportOptions"`` \| ``"extendPlatform"`` \| ``"assetFolderPlatform"`` \| ``"engine"`` \| ``"entryFile"`` \| ``"bundleAssets"`` \| ``"enableSourceMaps"`` \| ``"bundleIsDev"`` \| ``"getJsBundleFile"`` \| ``"includedPermissions"`` \| ``"excludedPermissions"`` \| ``"idSuffix"`` \| ``"versionCode"`` \| ``"versionFormat"`` \| ``"versionCodeFormat"`` \| ``"versionCodeOffset"`` \| ``"author"`` \| ``"license"`` \| ``"includedFonts"`` \| ``"splashScreen"`` \| ``"assetSources"`` \| ``"includedPlugins"`` \| ``"excludedPlugins"`` \| ``"runtime"`` \| ``"extendsTemplate"`` \| ``"skipBootstrapCopy"`` \| ``"workspaceID"`` \| ``"projectVersion"`` \| ``"isMonorepo"`` \| ``"isTemplate"`` \| ``"defaults"`` \| ``"pipes"`` \| ``"templates"`` \| ``"currentTemplate"`` \| ``"paths"`` \| ``"permissions"`` \| ``"engines"`` \| ``"enableHookRebuild"`` \| ``"monoRoot"`` \| ``"tasks"`` \| ``"integrations"`` \| ``"skipAutoUpdate"`` \| ``"isNew"`` \| ``"storePassword"`` \| ``"keyPassword"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | [`ConfigProp`](modules.md#configprop)[`T`] |

#### Returns

[`ConfigProp`](modules.md#configprop)[`T`]

#### Defined in

configs/configProp.d.ts:6

___

### getContext

▸ **getContext**\<`C`\>(): [`RnvContext`](modules.md#rnvcontext)\<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | `any` |

#### Returns

[`RnvContext`](modules.md#rnvcontext)\<`C`\>

#### Defined in

context/provider.d.ts:2

___

### getCurrentCommand

▸ **getCurrentCommand**(`excludeDollar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `excludeDollar` | `boolean` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:5

___

### getDirectories

▸ **getDirectories**(`source`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`string`[]

#### Defined in

system/fs.d.ts:48

___

### getEngineRunner

▸ **getEngineRunner**(`c`, `task`, `customTasks?`, `failOnMissingEngine?`): [`RnvEngine`](modules.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | `string` |
| `customTasks?` | [`RnvTaskMap`](modules.md#rnvtaskmap) |
| `failOnMissingEngine?` | `boolean` |

#### Returns

[`RnvEngine`](modules.md#rnvengine)

#### Defined in

engines/index.d.ts:20

___

### getEngineRunnerByPlatform

▸ **getEngineRunnerByPlatform**(`c`, `platform`, `ignoreMissingError?`): [`RnvEngine`](modules.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `ignoreMissingError?` | `boolean` |

#### Returns

[`RnvEngine`](modules.md#rnvengine)

#### Defined in

engines/index.d.ts:16

___

### getEngineSubTasks

▸ **getEngineSubTasks**(`task`, `tasks`, `exactMatch?`): [`RnvTask`](modules.md#rnvtask)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap) |
| `exactMatch?` | `boolean` |

#### Returns

[`RnvTask`](modules.md#rnvtask)[]

#### Defined in

engines/index.d.ts:19

___

### getEngineTask

▸ **getEngineTask**(`task`, `tasks?`, `customTasks?`): [`RnvTask`](modules.md#rnvtask)

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks?` | [`RnvTaskMap`](modules.md#rnvtaskmap) |
| `customTasks?` | [`RnvTaskMap`](modules.md#rnvtaskmap) |

#### Returns

[`RnvTask`](modules.md#rnvtask)

#### Defined in

engines/index.d.ts:17

___

### getEngineTemplateByPlatform

▸ **getEngineTemplateByPlatform**(`c`, `platform`): [`RnvEngineTemplate`](modules.md#rnvenginetemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

[`RnvEngineTemplate`](modules.md#rnvenginetemplate)

#### Defined in

configs/engines.d.ts:4

___

### getFileListSync

▸ **getFileListSync**(`dir`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `PathLike` |

#### Returns

`string`[]

#### Defined in

system/fs.d.ts:45

___

### getFlavouredProp

▸ **getFlavouredProp**\<`T`, `K`\>(`c`, `obj`, `key`): `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `obj` | `T` |
| `key` | `K` |

#### Returns

`T`[`K`]

#### Defined in

configs/configProp.d.ts:768

___

### getInstalledTemplateOptions

▸ **getInstalledTemplateOptions**(`c`): [`PromptOptions`](modules.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

[`PromptOptions`](modules.md#promptoptions)

#### Defined in

templates/index.d.ts:6

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

plugins/index.d.ts:17

___

### getMergedPlugin

▸ **getMergedPlugin**(`c`, `key`): [`RnvPlugin`](modules.md#rnvplugin)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `key` | `string` |

#### Returns

[`RnvPlugin`](modules.md#rnvplugin)

#### Defined in

plugins/index.d.ts:5

___

### getPlatformProjectDir

▸ **getPlatformProjectDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`string`

#### Defined in

common.d.ts:6

___

### getRealPath

▸ **getRealPath**(`c`, `p`, `key?`, `original?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `p` | `string` |
| `key?` | `string` |
| `original?` | `string` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:38

___

### getRegisteredEngines

▸ **getRegisteredEngines**(`c`): [`RnvEngine`](modules.md#rnvengine)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

[`RnvEngine`](modules.md#rnvengine)[]

#### Defined in

engines/index.d.ts:21

___

### getRelativePath

▸ **getRelativePath**(`from`, `to`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:50

___

### getTemplateOptions

▸ **getTemplateOptions**(`c`, `isGlobalScope?`): [`PromptOptions`](modules.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `isGlobalScope?` | `boolean` |

#### Returns

[`PromptOptions`](modules.md#promptoptions)

#### Defined in

configs/templates.d.ts:3

___

### getTimestampPathsConfig

▸ **getTimestampPathsConfig**(`c`, `platform`): [`TimestampPathsConfig`](modules.md#timestamppathsconfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

[`TimestampPathsConfig`](modules.md#timestamppathsconfig)

#### Defined in

common.d.ts:4

___

### getWorkspaceConnectionString

▸ **getWorkspaceConnectionString**(`obj?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `Object` |
| `obj.path` | `string` |
| `obj.remote?` | `Object` |
| `obj.remote.type` | `string` |
| `obj.remote.url` | `string` |

#### Returns

`any`

#### Defined in

configs/workspaces.d.ts:5

___

### getWorkspaceDirPath

▸ **getWorkspaceDirPath**(`c`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`string`\>

#### Defined in

configs/workspaces.d.ts:4

___

### getWorkspaceOptions

▸ **getWorkspaceOptions**(`c`): [`PromptOptions`](modules.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

[`PromptOptions`](modules.md#promptoptions)

#### Defined in

configs/workspaces.d.ts:6

___

### hasEngineTask

▸ **hasEngineTask**(`task`, `tasks`, `isProjectScope?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap) |
| `isProjectScope?` | `boolean` |

#### Returns

`boolean`

#### Defined in

engines/index.d.ts:18

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

plugins/index.d.ts:16

___

### initializeTask

▸ **initializeTask**(`c`, `task`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

tasks/index.d.ts:4

___

### injectPlatformDependencies

▸ **injectPlatformDependencies**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

projects/dependencyManager.d.ts:5

___

### inquirerPrompt

▸ **inquirerPrompt**(`options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PromptParams`](modules.md#promptparams) |

#### Returns

`Promise`\<`any`\>

#### Defined in

api/index.d.ts:11

___

### inquirerSeparator

▸ **inquirerSeparator**(`text?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text?` | `string` |

#### Returns

`any`

#### Defined in

api/index.d.ts:12

___

### installPackageDependencies

▸ **installPackageDependencies**(`c`, `failOnError?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `failOnError?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/npm.d.ts:6

___

### installPackageDependenciesAndPlugins

▸ **installPackageDependenciesAndPlugins**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

plugins/index.d.ts:11

___

### invalidatePodsChecksum

▸ **invalidatePodsChecksum**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

system/fs.d.ts:22

___

### isArray

▸ **isArray**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`unknown`

#### Defined in

utils/is.d.ts:2

___

### isBool

▸ **isBool**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:6

___

### isDate

▸ **isDate**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:11

___

### isError

▸ **isError**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:10

___

### isFunction

▸ **isFunction**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:5

___

### isInfoEnabled

▸ **isInfoEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

logger/index.d.ts:16

___

### isLikeNull

▸ **isLikeNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:13

___

### isNull

▸ **isNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:7

___

### isNumber

▸ **isNumber**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:4

___

### isObject

▸ **isObject**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`unknown`

#### Defined in

utils/is.d.ts:1

___

### isPlatformActive

▸ **isPlatformActive**(`c`, `platform`, `resolve?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `resolve?` | () => `void` |

#### Returns

`boolean`

#### Defined in

platforms/index.d.ts:13

___

### isPlatformSupported

▸ **isPlatformSupported**(`c`, `isGlobalScope?`): `Promise`\<[`RnvPlatform`](modules.md#rnvplatform)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `isGlobalScope?` | `boolean` |

#### Returns

`Promise`\<[`RnvPlatform`](modules.md#rnvplatform)\>

#### Defined in

platforms/index.d.ts:11

___

### isPlatformSupportedSync

▸ **isPlatformSupportedSync**(`c`, `platform`, `resolve?`, `reject?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `resolve?` | () => `void` |
| `reject?` | (`e`: `string`) => `void` |

#### Returns

`boolean`

#### Defined in

platforms/index.d.ts:12

___

### isRegExp

▸ **isRegExp**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`unknown`

#### Defined in

utils/is.d.ts:9

___

### isScopedPackagePath

▸ **isScopedPackagePath**(`aPath`): ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `aPath` | `string` |

#### Returns

``true``

#### Defined in

system/resolve.d.ts:20

___

### isString

▸ **isString**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:3

___

### isSymbol

▸ **isSymbol**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:12

___

### isTemplateInstalled

▸ **isTemplateInstalled**(`c`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`string` \| ``false``

#### Defined in

templates/index.d.ts:7

___

### isUndefined

▸ **isUndefined**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

utils/is.d.ts:8

___

### isYarnInstalled

▸ **isYarnInstalled**(): `string` \| ``true``

#### Returns

`string` \| ``true``

#### Defined in

projects/npm.d.ts:5

___

### jetifyIfRequired

▸ **jetifyIfRequired**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/npm.d.ts:7

___

### listAndSelectNpmVersion

▸ **listAndSelectNpmVersion**(`c`, `npmPackage`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `npmPackage` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

projects/npm.d.ts:4

___

### listAppConfigsFoldersSync

▸ **listAppConfigsFoldersSync**(`c`, `ignoreHiddenConfigs`, `appConfigsDirPath?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `ignoreHiddenConfigs` | `boolean` |
| `appConfigsDirPath?` | `string` |

#### Returns

`string`[]

#### Defined in

configs/appConfigs.d.ts:2

___

### loadEnginePackageDeps

▸ **loadEnginePackageDeps**(`c`, `engineConfigs`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `engineConfigs` | [`RnvEngineInstallConfig`](modules.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<`number`\>

#### Defined in

engines/index.d.ts:14

___

### loadEnginePluginDeps

▸ **loadEnginePluginDeps**(`c`, `engineConfigs`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `engineConfigs` | [`RnvEngineInstallConfig`](modules.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<`number`\>

#### Defined in

engines/index.d.ts:13

___

### loadEngines

▸ **loadEngines**(`c`, `failOnMissingDeps?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `failOnMissingDeps?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

engines/index.d.ts:15

___

### loadFile

▸ **loadFile**\<`T`, `K`\>(`fileObj`, `pathObj`, `key`): ``false`` \| `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileObj` | `T` |
| `pathObj` | `Partial`\<`Record`\<`K`, `unknown`\>\> |
| `key` | `K` |

#### Returns

``false`` \| `T`[`K`]

#### Defined in

system/fs.d.ts:46

___

### loadFileExtended

▸ **loadFileExtended**(`c`, `fileObj`, `pathObj`, `key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `fileObj` | `Record`\<`string`, `any`\> |
| `pathObj` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) |
| `key` | [`RnvContextFileKey`](modules.md#rnvcontextfilekey) |

#### Returns

`any`

#### Defined in

configs/index.d.ts:2

___

### loadIntegrations

▸ **loadIntegrations**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`void`\>

#### Defined in

integrations/index.d.ts:2

___

### loadPluginTemplates

▸ **loadPluginTemplates**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

plugins/index.d.ts:9

___

### loadWorkspacesConfigSync

▸ **loadWorkspacesConfigSync**(): `void`

#### Returns

`void`

#### Defined in

configs/workspaces.d.ts:7

___

### logAndSave

▸ **logAndSave**(`msg`, `skipLog?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `skipLog?` | `boolean` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:4

___

### logAppInfo

▸ **logAppInfo**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

logger/index.d.ts:22

___

### logComplete

▸ **logComplete**(`isEnd?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnd?` | `boolean` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:17

___

### logDebug

▸ **logDebug**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

logger/index.d.ts:15

___

### logEnd

▸ **logEnd**(`code`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:20

___

### logError

▸ **logError**(`e`, `isEnd?`, `skipAnalytics?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |
| `isEnd?` | `boolean` |
| `skipAnalytics?` | `boolean` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:19

___

### logErrorPlatform

▸ **logErrorPlatform**(`c`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`boolean`

#### Defined in

platforms/index.d.ts:3

___

### logExitTask

▸ **logExitTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | (`s`: `string`) => `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:11

___

### logHook

▸ **logHook**(`hook`, `msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hook` | `string` |
| `msg?` | `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:12

___

### logInfo

▸ **logInfo**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:14

___

### logInitTask

▸ **logInitTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | `string` \| (`s`: `string`) => `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:10

___

### logInitialize

▸ **logInitialize**(): `void`

#### Returns

`void`

#### Defined in

logger/index.d.ts:21

___

### logRaw

▸ **logRaw**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`void`

#### Defined in

logger/index.d.ts:7

___

### logSuccess

▸ **logSuccess**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:18

___

### logSummary

▸ **logSummary**(`header`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:8

___

### logTask

▸ **logTask**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | `any` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:9

___

### logToSummary

▸ **logToSummary**(`v`, `sanitizePaths?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |
| `sanitizePaths?` | () => `string` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:6

___

### logWarning

▸ **logWarning**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `unknown` |

#### Returns

`void`

#### Defined in

logger/index.d.ts:13

___

### logWelcome

▸ **logWelcome**(): `void`

#### Returns

`void`

#### Defined in

logger/index.d.ts:3

___

### mergeObjects

▸ **mergeObjects**\<`T1`\>(`c`, `obj1`, `obj2`, `dynamicRefs?`, `replaceArrays?`): `T1`

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `obj1` | `Partial`\<`T1`\> |
| `obj2` | `Partial`\<`T1`\> |
| `dynamicRefs?` | `boolean` |
| `replaceArrays?` | `boolean` |

#### Returns

`T1`

#### Defined in

system/fs.d.ts:43

___

### mkdirSync

▸ **mkdirSync**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:28

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

plugins/index.d.ts:10

___

### overrideTemplatePlugins

▸ **overrideTemplatePlugins**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

plugins/index.d.ts:13

___

### parseErrorMessage

▸ **parseErrorMessage**(`text`, `maxErrorLength?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `maxErrorLength?` | `number` |

#### Returns

`string`

#### Defined in

system/exec.d.ts:43

___

### parseFonts

▸ **parseFonts**(`c`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `callback` | [`ParseFontsCallback`](modules.md#parsefontscallback) |

#### Returns

`void`

#### Defined in

projects/index.d.ts:8

___

### parsePlugins

▸ **parsePlugins**(`c`, `platform`, `pluginCallback`, `ignorePlatformObjectCheck?`, `includeDisabledOrExcludedPlugins?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `pluginCallback` | [`PluginCallback`](modules.md#plugincallback) |
| `ignorePlatformObjectCheck?` | `boolean` |
| `includeDisabledOrExcludedPlugins?` | `boolean` |

#### Returns

`void`

#### Defined in

plugins/index.d.ts:8

___

### parseRenativeConfigs

▸ **parseRenativeConfigs**(`c`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

configs/index.d.ts:3

___

### pressAnyKeyToContinue

▸ **pressAnyKeyToContinue**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Defined in

api/index.d.ts:14

___

### printArrIntoBox

▸ **printArrIntoBox**(`arr`, `prefix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |
| `prefix?` | `string` |

#### Returns

`string`

#### Defined in

logger/index.d.ts:24

___

### printBoxEnd

▸ **printBoxEnd**(): `string`

#### Returns

`string`

#### Defined in

logger/index.d.ts:26

___

### printBoxStart

▸ **printBoxStart**(`str`, `str2?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `str2?` | `string` |

#### Returns

`string`

#### Defined in

logger/index.d.ts:25

___

### printIntoBox

▸ **printIntoBox**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

logger/index.d.ts:23

___

### readCleanFile

▸ **readCleanFile**(`source`, `overrides?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `overrides?` | [`OverridesOptions`](modules.md#overridesoptions) |

#### Returns

`Buffer`

#### Defined in

system/fs.d.ts:20

___

### readObjectSync

▸ **readObjectSync**\<`T`\>(`filePath?`, `sanitize?`, `c?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath?` | `string` |
| `sanitize?` | `boolean` |
| `c?` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`T`

#### Defined in

system/fs.d.ts:36

___

### registerAllPlatformEngines

▸ **registerAllPlatformEngines**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

engines/index.d.ts:12

___

### registerCustomTask

▸ **registerCustomTask**(`_c`, `task`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c` | [`RnvContext`](modules.md#rnvcontext) |
| `task` | [`RnvTask`](modules.md#rnvtask) |

#### Returns

`Promise`\<`void`\>

#### Defined in

tasks/index.d.ts:3

___

### registerEngine

▸ **registerEngine**(`engine`, `platform?`, `engConfig?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `engine` | [`RnvEngine`](modules.md#rnvengine) |
| `platform?` | [`RnvPlatform`](modules.md#rnvplatform) |
| `engConfig?` | [`RnvEngineTemplate`](modules.md#rnvenginetemplate) |

#### Returns

`Promise`\<`void`\>

#### Defined in

engines/index.d.ts:6

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

engines/index.d.ts:7

___

### registerIntegration

▸ **registerIntegration**(): `void`

#### Returns

`void`

#### Defined in

integrations/index.d.ts:3

___

### registerMissingPlatformEngines

▸ **registerMissingPlatformEngines**(`c`, `taskInstance?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `taskInstance?` | [`RnvTask`](modules.md#rnvtask) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

engines/index.d.ts:11

___

### removeDir

▸ **removeDir**(`pth`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pth` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:27

___

### removeDirSync

▸ **removeDirSync**(`_dir`, `_rmSelf?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_dir` | `string` |
| `_rmSelf?` | `boolean` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:33

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

system/fs.d.ts:32

___

### removeDirsSync

▸ **removeDirsSync**(`dirPaths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPaths` | `string`[] |

#### Returns

`void`

#### Defined in

system/fs.d.ts:31

___

### removeFilesSync

▸ **removeFilesSync**(`filePaths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePaths` | `string`[] |

#### Returns

`void`

#### Defined in

system/fs.d.ts:30

___

### replaceHomeFolder

▸ **replaceHomeFolder**(`p`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:44

___

### resolvePackage

▸ **resolvePackage**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:41

___

### resolvePluginDependants

▸ **resolvePluginDependants**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

plugins/index.d.ts:7

___

### sanitizeDynamicProps

▸ **sanitizeDynamicProps**\<`T`\>(`obj`, `propConfig`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `propConfig` | [`FileUtilsPropConfig`](modules.md#fileutilspropconfig) |

#### Returns

`T`

#### Defined in

system/fs.d.ts:42

___

### sanitizeDynamicRefs

▸ **sanitizeDynamicRefs**\<`T`\>(`c`, `obj`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `obj` | `T` |

#### Returns

`T`

#### Defined in

system/fs.d.ts:40

___

### sanitizePluginPath

▸ **sanitizePluginPath**(`str`, `name`, `mandatory?`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `name` | `string` |
| `mandatory?` | `boolean` |
| `options?` | [`ResolveOptions`](modules.md#resolveoptions) |

#### Returns

`string`

#### Defined in

plugins/index.d.ts:15

___

### saveAsJs

▸ **saveAsJs**(`source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

system/fs.d.ts:26

___

### shouldSkipTask

▸ **shouldSkipTask**(`c`, `taskKey`, `originTaskKey?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `taskKey` | `string` |
| `originTaskKey?` | `string` |

#### Returns

`boolean`

#### Defined in

tasks/index.d.ts:8

___

### updateObjectSync

▸ **updateObjectSync**(`filePath`, `updateObj`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `updateObj` | `object` |

#### Returns

`object`

#### Defined in

system/fs.d.ts:37

___

### updateProjectPlatforms

▸ **updateProjectPlatforms**(`c`, `platforms`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `platforms` | (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] |

#### Returns

`void`

#### Defined in

configs/configProject.d.ts:7

___

### updateRenativeConfigs

▸ **updateRenativeConfigs**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

plugins/index.d.ts:28

___

### upgradeDependencies

▸ **upgradeDependencies**(`packageFile`, `packagesPath`, `configFile`, `configPath`, `version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageFile` | `NpmPackageFile` |
| `packagesPath` | `string` |
| `configFile` | `_RootProjectSchemaType` |
| `configPath` | `string` |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

configs/configProject.d.ts:6

___

### upgradeProjectDependencies

▸ **upgradeProjectDependencies**(`c`, `version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

configs/configProject.d.ts:5

___

### validateRenativeProjectSchema

▸ **validateRenativeProjectSchema**(`inputJson`): `SafeParseReturnType`\<\{ `[x: string]`: `any`;  }, \{ `[x: string]`: `any`;  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputJson` | `unknown` |

#### Returns

`SafeParseReturnType`\<\{ `[x: string]`: `any`;  }, \{ `[x: string]`: `any`;  }\>

#### Defined in

schema/validators.d.ts:1

___

### versionCheck

▸ **versionCheck**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

projects/index.d.ts:11

___

### waitForExecCLI

▸ **waitForExecCLI**(`c`, `cli`, `command`, `callback`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `cli` | `string` |
| `command` | `string` |
| `callback` | (`resp`: `string` \| ``true``) => `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

system/exec.d.ts:47

___

### writeCleanFile

▸ **writeCleanFile**(`source`, `destination`, `overrides?`, `timestampPathsConfig?`, `c?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `overrides?` | [`OverridesOptions`](modules.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](modules.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](modules.md#rnvcontext) |

#### Returns

`void`

#### Defined in

system/fs.d.ts:19

___

### writeFileSync

▸ **writeFileSync**(`filePath`, `obj`, `spaces?`, `addNewLine?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `obj` | `string` \| `object` |
| `spaces?` | `number` |
| `addNewLine?` | `boolean` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:34

___

### writeObjectSync

▸ **writeObjectSync**(`filePath`, `obj`, `spaces`, `addNewLine?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `obj` | `string` \| `object` |
| `spaces` | `number` |
| `addNewLine?` | `boolean` |

#### Returns

`string`

#### Defined in

system/fs.d.ts:35

___

### writeRenativeConfigFile

▸ **writeRenativeConfigFile**(`c`, `configPath`, `configData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `configPath` | `string` |
| `configData` | `string` \| `object` |

#### Returns

`void`

#### Defined in

configs/utils.d.ts:2
