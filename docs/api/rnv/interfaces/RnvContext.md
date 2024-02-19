[@rnv/core](../README.md) / [Exports](../modules.md) / RnvContext

# Interface: RnvContext\<Payload\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `any` |

## Table of contents

### Properties

- [\_currentTask](RnvContext.md#_currenttask)
- [\_renativePluginCache](RnvContext.md#_renativeplugincache)
- [\_requiresNpmInstall](RnvContext.md#_requiresnpminstall)
- [assetConfig](RnvContext.md#assetconfig)
- [buildConfig](RnvContext.md#buildconfig)
- [buildHooks](RnvContext.md#buildhooks)
- [buildPipes](RnvContext.md#buildpipes)
- [cli](RnvContext.md#cli)
- [command](RnvContext.md#command)
- [configPropsInjects](RnvContext.md#configpropsinjects)
- [files](RnvContext.md#files)
- [injectableConfigProps](RnvContext.md#injectableconfigprops)
- [isBuildHooksReady](RnvContext.md#isbuildhooksready)
- [isDefault](RnvContext.md#isdefault)
- [isSystemWin](RnvContext.md#issystemwin)
- [logMessages](RnvContext.md#logmessages)
- [paths](RnvContext.md#paths)
- [payload](RnvContext.md#payload)
- [platform](RnvContext.md#platform)
- [process](RnvContext.md#process)
- [program](RnvContext.md#program)
- [rnvVersion](RnvContext.md#rnvversion)
- [runningProcesses](RnvContext.md#runningprocesses)
- [runtime](RnvContext.md#runtime)
- [runtimePropsInjects](RnvContext.md#runtimepropsinjects)
- [subCommand](RnvContext.md#subcommand)
- [supportedPlatforms](RnvContext.md#supportedplatforms)
- [systemPropsInjects](RnvContext.md#systempropsinjects)
- [timeEnd](RnvContext.md#timeend)
- [timeStart](RnvContext.md#timestart)

## Properties

### \_currentTask

• `Optional` **\_currentTask**: `string`

#### Defined in

context/types.d.ts:49

___

### \_renativePluginCache

• **\_renativePluginCache**: `Record`\<`string`, \{ `android?`: \{ `disabled?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidtv?`: \{ `disabled?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `androidwear?`: \{ `disabled?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `chromecast?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `custom?`: `any` ; `deprecated?`: `string` ; `disableNpm?`: `boolean` ; `disablePluginTemplateOverrides?`: `boolean` ; `disabled?`: `boolean` ; `firetv?`: \{ `disabled?`: `boolean` ; `implementation?`: `string` ; `package?`: `string` ; `path?`: `string` ; `projectName?`: `string` ; `skipImplementation?`: `boolean` ; `skipLinking?`: `boolean` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: `_ManifestChildType`[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `strings_xml?`: \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }  }  } ; `fontSources?`: `string`[] ; `ios?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `kaios?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `linux?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `macos?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `npm?`: `Record`\<`string`, `string`\> ; `pluginDependencies?`: `Record`\<`string`, `string`\> ; `props?`: `Record`\<`string`, `string`\> ; `skipMerge?`: `boolean` ; `source?`: `string` ; `tizen?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `tizenmobile?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `tizenwatch?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `tvos?`: \{ `buildType?`: ``"dynamic"`` \| ``"static"`` ; `commit?`: `string` ; `disabled?`: `boolean` ; `git?`: `string` ; `isStatic?`: `boolean` ; `path?`: `string` ; `podName?`: `string` ; `podNames?`: `string`[] ; `staticFrameworks?`: `string`[] ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `version?`: `string`  } ; `version?`: `string` ; `web?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `webos?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `webpackConfig?`: \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } ; `webtv?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `windows?`: \{ `disabled?`: `boolean` ; `path?`: `string`  } ; `xbox?`: \{ `disabled?`: `boolean` ; `path?`: `string`  }  }\>

#### Defined in

context/types.d.ts:56

___

### \_requiresNpmInstall

• `Optional` **\_requiresNpmInstall**: `boolean`

#### Defined in

context/types.d.ts:51

___

### assetConfig

• **assetConfig**: `object`

#### Defined in

context/types.d.ts:43

___

### buildConfig

• **buildConfig**: [`RnvContextBuildConfig`](../modules.md#rnvcontextbuildconfig)

complete object containing ALL renative.*.json files collected and merged during execution

#### Defined in

context/types.d.ts:42

___

### buildHooks

• **buildHooks**: `Record`\<`string`, (`c`: [`RnvContext`](RnvContext.md)\<`any`\>) => `Promise`\<`void`\>\>

#### Defined in

context/types.d.ts:58

___

### buildPipes

• **buildPipes**: `Record`\<`string`, (`c`: [`RnvContext`](RnvContext.md)\<`any`\>) => `Promise`\<`boolean`\>[]\>

#### Defined in

context/types.d.ts:52

___

### cli

• **cli**: `Record`\<`string`, `string`\>

#### Defined in

context/types.d.ts:57

___

### command

• **command**: `string`

first command value from cli (ie "rnv run -p android") returns "run"

#### Defined in

context/types.d.ts:34

___

### configPropsInjects

• **configPropsInjects**: `OverridesOptions`

#### Defined in

context/types.d.ts:59

___

### files

• **files**: [`RnvContextFiles`](../modules.md#rnvcontextfiles)

#### Defined in

context/types.d.ts:63

___

### injectableConfigProps

• **injectableConfigProps**: `Record`\<`string`, `any`\>

#### Defined in

context/types.d.ts:60

___

### isBuildHooksReady

• **isBuildHooksReady**: `boolean`

#### Defined in

context/types.d.ts:53

___

### isDefault

• **isDefault**: `boolean`

#### Defined in

context/types.d.ts:67

___

### isSystemWin

• **isSystemWin**: `boolean`

#### Defined in

context/types.d.ts:48

___

### logMessages

• **logMessages**: `string`[]

#### Defined in

context/types.d.ts:64

___

### paths

• **paths**: [`RnvContextPaths`](../modules.md#rnvcontextpaths)

#### Defined in

context/types.d.ts:62

___

### payload

• **payload**: `Payload`

Extra payload object used by 3rd party (ie @rnv/sdk-apple) to decorate context with extra typed information

#### Defined in

context/types.d.ts:30

___

### platform

• **platform**: `RnvPlatform`

#### Defined in

context/types.d.ts:44

___

### process

• **process**: `Process`

#### Defined in

context/types.d.ts:45

___

### program

• **program**: [`RnvContextProgram`](../modules.md#rnvcontextprogram)

#### Defined in

context/types.d.ts:26

___

### rnvVersion

• **rnvVersion**: `string`

#### Defined in

context/types.d.ts:47

___

### runningProcesses

• **runningProcesses**: `ExecaChildProcess`[]

#### Defined in

context/types.d.ts:46

___

### runtime

• **runtime**: [`RnvContextRuntime`](../modules.md#rnvcontextruntime)

#### Defined in

context/types.d.ts:61

___

### runtimePropsInjects

• **runtimePropsInjects**: `OverridesOptions`

#### Defined in

context/types.d.ts:55

___

### subCommand

• **subCommand**: `string`

second command value from cli (ie "rnv hooks list") returns "list"

#### Defined in

context/types.d.ts:38

___

### supportedPlatforms

• **supportedPlatforms**: `string`[]

#### Defined in

context/types.d.ts:54

___

### systemPropsInjects

• **systemPropsInjects**: `OverridesOptions`

#### Defined in

context/types.d.ts:50

___

### timeEnd

• **timeEnd**: `Date`

#### Defined in

context/types.d.ts:66

___

### timeStart

• **timeStart**: `Date`

#### Defined in

context/types.d.ts:65
