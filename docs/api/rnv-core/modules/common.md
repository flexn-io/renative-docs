---
id: "common"
title: "Module: common"
sidebar_label: "common"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `checkPortInUse` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform), `port`: `number`) => `Promise`\<`unknown`\> |
| `getAppAuthor` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppDescription` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppFolder` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `isRelativePath?`: `boolean`) => `string` |
| `getAppId` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppLicense` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppTemplateFolder` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppTitle` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getAppVersion` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` |
| `getAppVersionCode` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` |
| `getBuildFilePath` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform), `filePath`: `string`, `altTemplateFolder?`: `string`) => `string` |
| `getBuildsFolder` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform), `customPath?`: `string`) => `string` \| ``null`` |
| `getConfigProp` | [`GetConfigPropFn`](api_types.md#getconfigpropfn) |
| `getEntryFile` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getGetJsBundleFile` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `string` \| `undefined` |
| `getIP` | () => `any` |
| `writeCleanFile` | (`source`: `string`, `destination`: `string`, `overrides?`: [`OverridesOptions`](system_types.md#overridesoptions), `timestampPathsConfig?`: [`TimestampPathsConfig`](system_types.md#timestamppathsconfig), `c?`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>) => `void` |

#### Defined in

@rnv/core/lib/common.d.ts:1194

## Functions

### \_getConfigProp

▸ **_getConfigProp**\<`T`\>(`c`, `platform`, `key`, `defaultVal?`, `sourceObj?`): \{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"build"`` \| ``"run"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"id"`` \| ``"custom"`` \| ``"backgroundColor"`` \| ``"hidden"`` \| ``"title"`` \| ``"target"`` \| ``"description"`` \| ``"crypto"`` \| ``"environment"`` \| ``"env"`` \| ``"extend"`` \| ``"package"`` \| ``"projectName"`` \| ``"templateAndroid"`` \| ``"version"`` \| ``"templateXcode"`` \| ``"nextTranspileModules"`` \| ``"webpackConfig"`` \| ``"fontSources"`` \| ``"reactNativeEngine"`` \| ``"teamID"`` \| ``"provisioningProfiles"`` \| ``"pagesDir"`` \| ``"outputDir"`` \| ``"exportDir"`` \| ``"electronConfig"`` \| ``"BrowserWindow"`` \| ``"iconColor"`` \| ``"templateVSProject"`` \| ``"certificateProfile"`` \| ``"appName"`` \| ``"timestampBuildFiles"`` \| ``"devServerHost"`` \| ``"hostedShellHeaders"`` \| ``"enableAndroidX"`` \| ``"enableJetifier"`` \| ``"signingConfig"`` \| ``"minSdkVersion"`` \| ``"multipleAPKs"`` \| ``"aab"`` \| ``"extraGradleParams"`` \| ``"minifyEnabled"`` \| ``"targetSdkVersion"`` \| ``"compileSdkVersion"`` \| ``"kotlinVersion"`` \| ``"ndkVersion"`` \| ``"supportLibVersion"`` \| ``"googleServicesVersion"`` \| ``"gradleBuildToolsVersion"`` \| ``"gradleWrapperVersion"`` \| ``"excludedFeatures"`` \| ``"includedFeatures"`` \| ``"buildToolsVersion"`` \| ``"disableSigning"`` \| ``"storeFile"`` \| ``"keyAlias"`` \| ``"newArchEnabled"`` \| ``"ignoreWarnings"`` \| ``"ignoreLogs"`` \| ``"deploymentTarget"`` \| ``"orientationSupport"`` \| ``"excludedArchs"`` \| ``"urlScheme"`` \| ``"teamIdentifier"`` \| ``"scheme"`` \| ``"schemeTarget"`` \| ``"appleId"`` \| ``"provisioningStyle"`` \| ``"codeSignIdentity"`` \| ``"commandLineArguments"`` \| ``"provisionProfileSpecifier"`` \| ``"provisionProfileSpecifiers"`` \| ``"allowProvisioningUpdates"`` \| ``"codeSignIdentities"`` \| ``"systemCapabilities"`` \| ``"entitlements"`` \| ``"runScheme"`` \| ``"sdk"`` \| ``"testFlightId"`` \| ``"firebaseId"`` \| ``"exportOptions"`` \| ``"extendPlatform"`` \| ``"assetFolderPlatform"`` \| ``"engine"`` \| ``"entryFile"`` \| ``"bundleAssets"`` \| ``"enableSourceMaps"`` \| ``"bundleIsDev"`` \| ``"getJsBundleFile"`` \| ``"includedPermissions"`` \| ``"excludedPermissions"`` \| ``"idSuffix"`` \| ``"versionCode"`` \| ``"versionFormat"`` \| ``"versionCodeFormat"`` \| ``"versionCodeOffset"`` \| ``"author"`` \| ``"license"`` \| ``"includedFonts"`` \| ``"splashScreen"`` \| ``"assetSources"`` \| ``"includedPlugins"`` \| ``"excludedPlugins"`` \| ``"runtime"`` \| ``"extendsTemplate"`` \| ``"skipBootstrapCopy"`` \| ``"workspaceID"`` \| ``"projectVersion"`` \| ``"isMonorepo"`` \| ``"isTemplate"`` \| ``"defaults"`` \| ``"pipes"`` \| ``"templates"`` \| ``"currentTemplate"`` \| ``"paths"`` \| ``"permissions"`` \| ``"engines"`` \| ``"enableHookRebuild"`` \| ``"monoRoot"`` \| ``"tasks"`` \| ``"integrations"`` \| ``"skipAutoUpdate"`` \| ``"isNew"`` \| ``"storePassword"`` \| ``"keyPassword"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | \{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"build"`` \| ``"run"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`] |
| `sourceObj?` | `Partial`\<`_ConfigRootMerged`\> |

#### Returns

\{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"build"`` \| ``"run"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`]

#### Defined in

@rnv/core/lib/common.d.ts:25

___

### addSystemInjects

▸ **addSystemInjects**(`c`, `injects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `injects` | [`OverridesOptions`](system_types.md#overridesoptions) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/common.d.ts:8

___

### checkPortInUse

▸ **checkPortInUse**(`c`, `platform`, `port`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `port` | `number` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

@rnv/core/lib/common.d.ts:1191

___

### confirmActiveBundler

▸ **confirmActiveBundler**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/common.d.ts:15

___

### existBuildsOverrideForTargetPathSync

▸ **existBuildsOverrideForTargetPathSync**(`c`, `destPath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `destPath` | `string` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/common.d.ts:14

___

### getAppAuthor

▸ **getAppAuthor**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1169

___

### getAppDescription

▸ **getAppDescription**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1173

___

### getAppFolder

▸ **getAppFolder**(`c`, `isRelativePath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `isRelativePath?` | `boolean` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:22

___

### getAppId

▸ **getAppId**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1167

___

### getAppLicense

▸ **getAppLicense**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1170

___

### getAppTemplateFolder

▸ **getAppTemplateFolder**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:23

___

### getAppTitle

▸ **getAppTitle**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1168

___

### getAppVersion

▸ **getAppVersion**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1174

___

### getAppVersionCode

▸ **getAppVersionCode**(`c`, `platform`): `string`

Retrieves the version code for the specified platform from the configuration.
If the platform is Android, the version code must be a positive integer.
If the version code is not found or is invalid, it falls back to a default value of '0'.
Otherwise version code is generated based on the version and version code format specified in the configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> | The RnvContext object. |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) | The RnvPlatform object. |

#### Returns

`string`

The version code as a string.

**`Throws`**

An error if the version code is not a positive integer for Android platforms.

#### Defined in

@rnv/core/lib/common.d.ts:1186

___

### getBuildFilePath

▸ **getBuildFilePath**(`c`, `platform`, `filePath`, `altTemplateFolder?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `filePath` | `string` |
| `altTemplateFolder?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1193

___

### getBuildsFolder

▸ **getBuildsFolder**(`c`, `platform`, `customPath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `customPath?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1189

___

### getConfigProp

▸ **getConfigProp**\<`T`\>(`c`, `platform`, `key`, `defaultVal?`): [`ConfigProp`](schema_types.md#configprop)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"id"`` \| ``"custom"`` \| ``"backgroundColor"`` \| ``"hidden"`` \| ``"title"`` \| ``"target"`` \| ``"description"`` \| ``"crypto"`` \| ``"environment"`` \| ``"env"`` \| ``"extend"`` \| ``"package"`` \| ``"projectName"`` \| ``"templateAndroid"`` \| ``"version"`` \| ``"templateXcode"`` \| ``"nextTranspileModules"`` \| ``"webpackConfig"`` \| ``"fontSources"`` \| ``"reactNativeEngine"`` \| ``"teamID"`` \| ``"provisioningProfiles"`` \| ``"pagesDir"`` \| ``"outputDir"`` \| ``"exportDir"`` \| ``"electronConfig"`` \| ``"BrowserWindow"`` \| ``"iconColor"`` \| ``"templateVSProject"`` \| ``"certificateProfile"`` \| ``"appName"`` \| ``"timestampBuildFiles"`` \| ``"devServerHost"`` \| ``"hostedShellHeaders"`` \| ``"enableAndroidX"`` \| ``"enableJetifier"`` \| ``"signingConfig"`` \| ``"minSdkVersion"`` \| ``"multipleAPKs"`` \| ``"aab"`` \| ``"extraGradleParams"`` \| ``"minifyEnabled"`` \| ``"targetSdkVersion"`` \| ``"compileSdkVersion"`` \| ``"kotlinVersion"`` \| ``"ndkVersion"`` \| ``"supportLibVersion"`` \| ``"googleServicesVersion"`` \| ``"gradleBuildToolsVersion"`` \| ``"gradleWrapperVersion"`` \| ``"excludedFeatures"`` \| ``"includedFeatures"`` \| ``"buildToolsVersion"`` \| ``"disableSigning"`` \| ``"storeFile"`` \| ``"keyAlias"`` \| ``"newArchEnabled"`` \| ``"ignoreWarnings"`` \| ``"ignoreLogs"`` \| ``"deploymentTarget"`` \| ``"orientationSupport"`` \| ``"excludedArchs"`` \| ``"urlScheme"`` \| ``"teamIdentifier"`` \| ``"scheme"`` \| ``"schemeTarget"`` \| ``"appleId"`` \| ``"provisioningStyle"`` \| ``"codeSignIdentity"`` \| ``"commandLineArguments"`` \| ``"provisionProfileSpecifier"`` \| ``"provisionProfileSpecifiers"`` \| ``"allowProvisioningUpdates"`` \| ``"codeSignIdentities"`` \| ``"systemCapabilities"`` \| ``"entitlements"`` \| ``"runScheme"`` \| ``"sdk"`` \| ``"testFlightId"`` \| ``"firebaseId"`` \| ``"exportOptions"`` \| ``"extendPlatform"`` \| ``"assetFolderPlatform"`` \| ``"engine"`` \| ``"entryFile"`` \| ``"bundleAssets"`` \| ``"enableSourceMaps"`` \| ``"bundleIsDev"`` \| ``"getJsBundleFile"`` \| ``"includedPermissions"`` \| ``"excludedPermissions"`` \| ``"idSuffix"`` \| ``"versionCode"`` \| ``"versionFormat"`` \| ``"versionCodeFormat"`` \| ``"versionCodeOffset"`` \| ``"author"`` \| ``"license"`` \| ``"includedFonts"`` \| ``"splashScreen"`` \| ``"assetSources"`` \| ``"includedPlugins"`` \| ``"excludedPlugins"`` \| ``"runtime"`` \| ``"extendsTemplate"`` \| ``"skipBootstrapCopy"`` \| ``"workspaceID"`` \| ``"projectVersion"`` \| ``"isMonorepo"`` \| ``"isTemplate"`` \| ``"defaults"`` \| ``"pipes"`` \| ``"templates"`` \| ``"currentTemplate"`` \| ``"paths"`` \| ``"permissions"`` \| ``"engines"`` \| ``"enableHookRebuild"`` \| ``"monoRoot"`` \| ``"tasks"`` \| ``"integrations"`` \| ``"skipAutoUpdate"`` \| ``"isNew"`` \| ``"storePassword"`` \| ``"keyPassword"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `key` | `T` |
| `defaultVal?` | [`ConfigProp`](schema_types.md#configprop)[`T`] |

#### Returns

[`ConfigProp`](schema_types.md#configprop)[`T`]

#### Defined in

@rnv/core/lib/common.d.ts:24

___

### getConfigPropArray

▸ **getConfigPropArray**\<`T`\>(`c`, `platform`, `key`): \{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"build"`` \| ``"run"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"id"`` \| ``"custom"`` \| ``"backgroundColor"`` \| ``"hidden"`` \| ``"title"`` \| ``"target"`` \| ``"description"`` \| ``"crypto"`` \| ``"environment"`` \| ``"env"`` \| ``"extend"`` \| ``"package"`` \| ``"projectName"`` \| ``"templateAndroid"`` \| ``"version"`` \| ``"templateXcode"`` \| ``"nextTranspileModules"`` \| ``"webpackConfig"`` \| ``"fontSources"`` \| ``"reactNativeEngine"`` \| ``"teamID"`` \| ``"provisioningProfiles"`` \| ``"pagesDir"`` \| ``"outputDir"`` \| ``"exportDir"`` \| ``"electronConfig"`` \| ``"BrowserWindow"`` \| ``"iconColor"`` \| ``"templateVSProject"`` \| ``"certificateProfile"`` \| ``"appName"`` \| ``"timestampBuildFiles"`` \| ``"devServerHost"`` \| ``"hostedShellHeaders"`` \| ``"enableAndroidX"`` \| ``"enableJetifier"`` \| ``"signingConfig"`` \| ``"minSdkVersion"`` \| ``"multipleAPKs"`` \| ``"aab"`` \| ``"extraGradleParams"`` \| ``"minifyEnabled"`` \| ``"targetSdkVersion"`` \| ``"compileSdkVersion"`` \| ``"kotlinVersion"`` \| ``"ndkVersion"`` \| ``"supportLibVersion"`` \| ``"googleServicesVersion"`` \| ``"gradleBuildToolsVersion"`` \| ``"gradleWrapperVersion"`` \| ``"excludedFeatures"`` \| ``"includedFeatures"`` \| ``"buildToolsVersion"`` \| ``"disableSigning"`` \| ``"storeFile"`` \| ``"keyAlias"`` \| ``"newArchEnabled"`` \| ``"ignoreWarnings"`` \| ``"ignoreLogs"`` \| ``"deploymentTarget"`` \| ``"orientationSupport"`` \| ``"excludedArchs"`` \| ``"urlScheme"`` \| ``"teamIdentifier"`` \| ``"scheme"`` \| ``"schemeTarget"`` \| ``"appleId"`` \| ``"provisioningStyle"`` \| ``"codeSignIdentity"`` \| ``"commandLineArguments"`` \| ``"provisionProfileSpecifier"`` \| ``"provisionProfileSpecifiers"`` \| ``"allowProvisioningUpdates"`` \| ``"codeSignIdentities"`` \| ``"systemCapabilities"`` \| ``"entitlements"`` \| ``"runScheme"`` \| ``"sdk"`` \| ``"testFlightId"`` \| ``"firebaseId"`` \| ``"exportOptions"`` \| ``"extendPlatform"`` \| ``"assetFolderPlatform"`` \| ``"engine"`` \| ``"entryFile"`` \| ``"bundleAssets"`` \| ``"enableSourceMaps"`` \| ``"bundleIsDev"`` \| ``"getJsBundleFile"`` \| ``"includedPermissions"`` \| ``"excludedPermissions"`` \| ``"idSuffix"`` \| ``"versionCode"`` \| ``"versionFormat"`` \| ``"versionCodeFormat"`` \| ``"versionCodeOffset"`` \| ``"author"`` \| ``"license"`` \| ``"includedFonts"`` \| ``"splashScreen"`` \| ``"assetSources"`` \| ``"includedPlugins"`` \| ``"excludedPlugins"`` \| ``"runtime"`` \| ``"extendsTemplate"`` \| ``"skipBootstrapCopy"`` \| ``"workspaceID"`` \| ``"projectVersion"`` \| ``"isMonorepo"`` \| ``"isTemplate"`` \| ``"defaults"`` \| ``"pipes"`` \| ``"templates"`` \| ``"currentTemplate"`` \| ``"paths"`` \| ``"permissions"`` \| ``"engines"`` \| ``"enableHookRebuild"`` \| ``"monoRoot"`` \| ``"tasks"`` \| ``"integrations"`` \| ``"skipAutoUpdate"`` \| ``"isNew"`` \| ``"storePassword"`` \| ``"keyPassword"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `key` | `T` |

#### Returns

\{ `crypto?`: \{ `isOptional?`: `boolean` ; `path`: `string`  } ; `currentTemplate`: `string` ; `custom?`: `any` ; `defaults?`: \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"build"`` \| ``"run"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  } ; `enableHookRebuild?`: `boolean` ; `engines?`: `Record`\<`string`, ``"source:rnv"``\> ; `env?`: `Record`\<`string`, `any`\> ; `extendsTemplate?`: `string` ; `integrations?`: `Record`\<`string`, {}\> ; `isMonorepo?`: `boolean` ; `isNew?`: `boolean` ; `isTemplate?`: `boolean` ; `monoRoot?`: `string` ; `paths?`: \{ `appConfigsDir?`: `string` ; `appConfigsDirs?`: `string`[] ; `platformAssetsDir?`: `string` ; `platformBuildsDir?`: `string` ; `platformTemplatesDirs?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `pluginTemplates?`: `Record`\<`string`, \{ `npm?`: `string` ; `path`: `string`  }\>  } ; `permissions?`: \{ `android?`: `Record`\<`string`, \{ `key`: `string` ; `security`: `string`  }\> ; `ios?`: `Record`\<`string`, \{ `desc`: `string`  }\>  } ; `pipes?`: `string`[] ; `projectName`: `string` ; `projectVersion`: `string` ; `runtime?`: `any` ; `skipAutoUpdate?`: `boolean` ; `tasks?`: \{ `install?`: \{ `platform?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, \{ `ignore?`: `boolean` ; `ignoreTasks?`: `string`[]  }\>\> ; `script`: `string`  }  } ; `templates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `workspaceID`: `string`  } & \{ `custom?`: `any` ; `extend?`: `string` ; `extendsTemplate?`: `string` ; `hidden?`: `boolean` ; `id?`: `string` ; `skipBootstrapCopy?`: `boolean`  } & \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } & \{ `BrowserWindow?`: \{ `height?`: `number` ; `webPreferences?`: \{ `devTools?`: `boolean`  } ; `width?`: `number`  } ; `aab?`: `boolean` ; `allowProvisioningUpdates?`: `boolean` ; `appName?`: `string` ; `appleId?`: `string` ; `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildToolsVersion?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `certificateProfile?`: `string` ; `codeSignIdentities?`: `Record`\<`string`, `string`\> ; `codeSignIdentity?`: `string` ; `commandLineArguments?`: `string`[] ; `compileSdkVersion?`: `number` ; `custom?`: `any` ; `deploymentTarget?`: `string` ; `description?`: `string` ; `devServerHost?`: `string` ; `disableSigning?`: `boolean` ; `electronConfig?`: `any` ; `enableAndroidX?`: `string` \| `boolean` ; `enableJetifier?`: `string` \| `boolean` ; `enableSourceMaps?`: `boolean` ; `engine?`: `string` ; `entitlements?`: `Record`\<`string`, `string`\> ; `entryFile?`: `string` ; `environment?`: `string` ; `excludedArchs?`: `string`[] ; `excludedFeatures?`: `string`[] ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `exportDir?`: `string` ; `exportOptions?`: \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } ; `extendPlatform?`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"`` ; `extraGradleParams?`: `string` ; `firebaseId?`: `string` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `googleServicesVersion?`: `string` ; `gradleBuildToolsVersion?`: `string` ; `gradleWrapperVersion?`: `string` ; `hostedShellHeaders?`: `string` ; `iconColor?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `ignoreLogs?`: `boolean` ; `ignoreWarnings?`: `boolean` ; `includedFeatures?`: `string`[] ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `keyAlias?`: `string` ; `kotlinVersion?`: `string` ; `license?`: `string` ; `minSdkVersion?`: `number` ; `minifyEnabled?`: `boolean` ; `multipleAPKs?`: `boolean` ; `ndkVersion?`: `string` ; `newArchEnabled?`: `boolean` ; `nextTranspileModules?`: `string`[] ; `orientationSupport?`: \{ `phone?`: `string`[] ; `tab?`: `string`[]  } ; `outputDir?`: `string` ; `package?`: `string` ; `pagesDir?`: `string` ; `provisionProfileSpecifier?`: `string` ; `provisionProfileSpecifiers?`: `Record`\<`string`, `string`\> ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `provisioningStyle?`: `string` ; `reactNativeEngine?`: ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` ; `runScheme?`: `string` ; `runtime?`: `any` ; `scheme?`: `string` ; `schemeTarget?`: `string` ; `sdk?`: `string` ; `signingConfig?`: `string` ; `splashScreen?`: `boolean` ; `storeFile?`: `string` ; `supportLibVersion?`: `string` ; `systemCapabilities?`: `Record`\<`string`, `boolean`\> ; `target?`: `string` ; `targetSdkVersion?`: `number` ; `teamID?`: `string` ; `teamIdentifier?`: `string` ; `templateAndroid?`: \{ `AndroidManifest_xml?`: \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  } ; `MainActivity_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  } ; `MainApplication_java?`: \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  } ; `SplashActivity_java?`: {} ; `app_build_gradle?`: \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  } ; `build_gradle?`: \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  } ; `colors_xml?`: {} ; `gradle_properties?`: `Record`\<`string`, `string` \| `number` \| `boolean`\> ; `gradle_wrapper_properties?`: {} ; `proguard_rules_pro?`: {} ; `settings_gradle?`: {} ; `strings_xml?`: {} ; `styles_xml?`: {}  } ; `templateVSProject?`: \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } ; `templateXcode?`: \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application`: \{ `applicationDidBecomeActive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `continue`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didConnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didDisconnectCarInterfaceController`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFailToRegisterForRemoteNotificationsWithError`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didFinishLaunchingWithOptions`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceive`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didReceiveRemoteNotification`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegister`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `didRegisterForRemoteNotificationsWithDeviceToken`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `open`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `supportedInterfaceOrientationsFor`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } ; `userNotificationCenter`: \{ `willPresent`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: {} ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: \{ `buildPhases?`: \{ `inputPaths`: `string`[] ; `shellPath`: `string` ; `shellScript`: `string`  }[] ; `buildSettings?`: `Record`\<`string`, `string`\> ; `frameworks?`: `string`[] ; `headerFiles?`: `string`[] ; `resourceFiles?`: `string`[] ; `sourceFiles?`: `string`[]  }  } ; `testFlightId?`: `string` ; `timestampBuildFiles?`: `string`[] ; `title?`: `string` ; `urlScheme?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string` ; `webpackConfig?`: \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  }  }[`T`][]

#### Defined in

@rnv/core/lib/common.d.ts:786

___

### getEntryFile

▸ **getEntryFile**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1171

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
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `obj` | `T` |
| `key` | `K` |

#### Returns

`T`[`K`]

#### Defined in

@rnv/core/lib/common.d.ts:1192

___

### getGetJsBundleFile

▸ **getGetJsBundleFile**(`c`, `platform`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1172

___

### getIP

▸ **getIP**(): `any`

#### Returns

`any`

#### Defined in

@rnv/core/lib/common.d.ts:1190

___

### getMonorepoRoot

▸ **getMonorepoRoot**(): `string`

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:1188

___

### getPlatformBuildDir

▸ **getPlatformBuildDir**(`c`, `isRelativePath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `isRelativePath?` | `boolean` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:16

___

### getPlatformOutputDir

▸ **getPlatformOutputDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:17

___

### getPlatformProjectDir

▸ **getPlatformProjectDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:18

___

### getPlatformServerDir

▸ **getPlatformServerDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:19

___

### getTemplateDir

▸ **getTemplateDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:20

___

### getTemplateProjectDir

▸ **getTemplateProjectDir**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string`

#### Defined in

@rnv/core/lib/common.d.ts:21

___

### getTimestampPathsConfig

▸ **getTimestampPathsConfig**(`c`, `platform`): [`TimestampPathsConfig`](system_types.md#timestamppathsconfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

[`TimestampPathsConfig`](system_types.md#timestamppathsconfig)

#### Defined in

@rnv/core/lib/common.d.ts:7

___

### isMonorepo

▸ **isMonorepo**(): `boolean`

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/common.d.ts:1187

___

### sanitizeColor

▸ **sanitizeColor**(`val`, `key`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `hex` | `any` |
| `rgb` | `any` |
| `rgbDecimal` | `any` |

#### Defined in

@rnv/core/lib/common.d.ts:9
