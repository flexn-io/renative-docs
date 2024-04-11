---
id: "modules"
title: "@rnv/core"
sidebar_label: "@rnv/core (Node)"
sidebar_position: 0.5
custom_edit_url: null
---

## Type Aliases

### AsyncCallback

Ƭ **AsyncCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/types.d.ts:3

___

### BuildConfigKey

Ƭ **BuildConfigKey**: keyof [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)

#### Defined in

@rnv/core/lib/schema/types.d.ts:89

___

### CommonBuildSchemeKey

Ƭ **CommonBuildSchemeKey**: keyof [`ConfigCommonBuildSchemeSchema`](modules.md#configcommonbuildschemeschema)

#### Defined in

@rnv/core/lib/schema/types.d.ts:42

___

### CommonPropKey

Ƭ **CommonPropKey**: keyof [`ConfigCommonSchemaFragment`](modules.md#configcommonschemafragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:40

___

### ConfigAndroidManifest

Ƭ **ConfigAndroidManifest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`ConfigAndroidManifestChildType`](modules.md#configandroidmanifestchildtype)[] |
| `package?` | `string` |
| `tag` | `string` |
| `xmlns:android?` | `string` |
| `xmlns:tools?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:57

___

### ConfigAndroidManifestChildType

Ƭ **ConfigAndroidManifestChildType**: `z.infer`\<typeof `zodManifestChildBase`\> & \{ `children?`: [`ConfigAndroidManifestChildType`](modules.md#configandroidmanifestchildtype)[]  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:54

___

### ConfigAndroidManifestNode

Ƭ **ConfigAndroidManifestNode**: [`ConfigAndroidManifestChildType`](modules.md#configandroidmanifestchildtype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:53

___

### ConfigAndroidResources

Ƭ **ConfigAndroidResources**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`ConfigAndroidResourcesChildType`](modules.md#configandroidresourceschildtype)[] |
| `name?` | `string` |
| `parent?` | `string` |
| `tag` | `string` |
| `value?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:59

___

### ConfigAndroidResourcesChildType

Ƭ **ConfigAndroidResourcesChildType**: `z.infer`\<typeof `zodResourcesChildBase`\> & \{ `children?`: [`ConfigAndroidResourcesChildType`](modules.md#configandroidresourceschildtype)[]  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:61

___

### ConfigAndroidResourcesNode

Ƭ **ConfigAndroidResourcesNode**: [`ConfigAndroidResourcesChildType`](modules.md#configandroidresourceschildtype)

#### Defined in

@rnv/core/lib/schema/types.d.ts:60

___

### ConfigAppDelegateMethod

Ƭ **ConfigAppDelegateMethod**: `ConfigTemplateXcodeAppDelegateMethod`[`number`]

#### Defined in

@rnv/core/lib/schema/types.d.ts:65

___

### ConfigBuildSchemeFragment

Ƭ **ConfigBuildSchemeFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `enabled?` | `boolean` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:37

___

### ConfigCommonBuildSchemeSchema

Ƭ **ConfigCommonBuildSchemeSchema**: `Partial`\<[`ConfigCommonSchemaFragment`](modules.md#configcommonschemafragment) & [`ConfigBuildSchemeFragment`](modules.md#configbuildschemefragment) & [`ConfigPlatformBaseFragment`](modules.md#configplatformbasefragment)\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:41

___

### ConfigCommonSchema

Ƭ **ConfigCommonSchema**: `Partial`\<[`ConfigCommonSchemaFragment`](modules.md#configcommonschemafragment)\> & \{ `buildSchemes?`: `Record`\<`string`, [`ConfigCommonBuildSchemeSchema`](modules.md#configcommonbuildschemeschema)\>  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:43

___

### ConfigCommonSchemaFragment

Ƭ **ConfigCommonSchemaFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetSources?` | `string`[] |
| `author?` | `string` |
| `backgroundColor?` | `string` |
| `custom?` | `any` |
| `description?` | `string` |
| `excludedPermissions?` | `string`[] |
| `excludedPlugins?` | `string`[] |
| `fontSources?` | `string`[] |
| `id?` | `string` |
| `idSuffix?` | `string` |
| `includedFonts?` | `string`[] |
| `includedPermissions?` | `string`[] |
| `includedPlugins?` | `string`[] |
| `license?` | `string` |
| `runtime?` | `any` |
| `splashScreen?` | `boolean` |
| `title?` | `string` |
| `version?` | `string` |
| `versionCode?` | `string` |
| `versionCodeFormat?` | `string` |
| `versionCodeOffset?` | `number` |
| `versionFormat?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:39

___

### ConfigFileApp

Ƭ **ConfigFileApp**: [`ConfigRootAppBaseFragment`](modules.md#configrootappbasefragment) & \{ `common?`: [`ConfigCommonSchema`](modules.md#configcommonschema) ; `platforms?`: [`ConfigPlatformsSchema`](modules.md#configplatformsschema) ; `plugins?`: [`ConfigPluginsSchema`](modules.md#configpluginsschema)  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:80

___

### ConfigFileBuildConfig

Ƭ **ConfigFileBuildConfig**: [`ConfigFileTemplates`](modules.md#configfiletemplates) & [`ConfigFileWorkspace`](modules.md#configfileworkspace) & `RootPluginsMerged` & [`ConfigFileProject`](modules.md#configfileproject) & [`ConfigFileLocal`](modules.md#configfilelocal) & [`ConfigRootAppBaseFragment`](modules.md#configrootappbasefragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:88

___

### ConfigFileEngine

Ƭ **ConfigFileEngine**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `custom?` | `any` |
| `engineExtension?` | `string` |
| `id?` | `string` |
| `npm?` | \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  } |
| `npm.dependencies?` | `Record`\<`string`, `string`\> |
| `npm.devDependencies?` | `Record`\<`string`, `string`\> |
| `npm.optionalDependencies?` | `Record`\<`string`, `string`\> |
| `npm.peerDependencies?` | `Record`\<`string`, `string`\> |
| `overview?` | `string` |
| `packageName?` | `string` |
| `platforms?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\> |
| `plugins?` | `Record`\<`string`, `string`\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:93

___

### ConfigFileIntegration

Ƭ **ConfigFileIntegration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `packageName?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:94

___

### ConfigFileLocal

Ƭ **ConfigFileLocal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_meta?` | \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } |
| `_meta.currentAppConfigId?` | `string` |
| `_meta.requiresJetify?` | `boolean` |
| `defaultTargets?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``, `string`\>\> |
| `workspaceAppConfigsDir?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:95

___

### ConfigFileOverrides

Ƭ **ConfigFileOverrides**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `overrides?` | `Record`\<`string`, `Record`\<`string`, `string`\>\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:96

___

### ConfigFilePlugin

Ƭ **ConfigFilePlugin**: [`ConfigPluginSchema`](modules.md#configpluginschema) & `z.infer`\<typeof `zodPluginFragment`\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:105

___

### ConfigFilePrivate

Ƭ **ConfigFilePrivate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `platforms?` | \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: `any` ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: `any` ; `kaios?`: `any` ; `linux?`: `any` ; `macos?`: `any` ; `tizen?`: `any` ; `tizenmobile?`: `any` ; `tizenwatch?`: `any` ; `tvos?`: `any` ; `web?`: `any` ; `webos?`: `any` ; `webtv?`: `any` ; `windows?`: `any` ; `xbox?`: `any`  } |
| `platforms.android?` | \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } |
| `platforms.android.keyAlias?` | `string` |
| `platforms.android.keyPassword?` | `string` |
| `platforms.android.storeFile?` | `string` |
| `platforms.android.storePassword?` | `string` |
| `platforms.androidtv?` | \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } |
| `platforms.androidtv.keyAlias?` | `string` |
| `platforms.androidtv.keyPassword?` | `string` |
| `platforms.androidtv.storeFile?` | `string` |
| `platforms.androidtv.storePassword?` | `string` |
| `platforms.androidwear?` | \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } |
| `platforms.androidwear.keyAlias?` | `string` |
| `platforms.androidwear.keyPassword?` | `string` |
| `platforms.androidwear.storeFile?` | `string` |
| `platforms.androidwear.storePassword?` | `string` |
| `platforms.chromecast?` | `any` |
| `platforms.firetv?` | \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } |
| `platforms.firetv.keyAlias?` | `string` |
| `platforms.firetv.keyPassword?` | `string` |
| `platforms.firetv.storeFile?` | `string` |
| `platforms.firetv.storePassword?` | `string` |
| `platforms.ios?` | `any` |
| `platforms.kaios?` | `any` |
| `platforms.linux?` | `any` |
| `platforms.macos?` | `any` |
| `platforms.tizen?` | `any` |
| `platforms.tizenmobile?` | `any` |
| `platforms.tizenwatch?` | `any` |
| `platforms.tvos?` | `any` |
| `platforms.web?` | `any` |
| `platforms.webos?` | `any` |
| `platforms.webtv?` | `any` |
| `platforms.windows?` | `any` |
| `platforms.xbox?` | `any` |
| `private?` | `Record`\<`string`, `any`\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:107

___

### ConfigFileProject

Ƭ **ConfigFileProject**: [`ConfigRootProjectBaseFragment`](modules.md#configrootprojectbasefragment) & \{ `common?`: [`ConfigCommonSchema`](modules.md#configcommonschema) ; `platforms?`: [`ConfigPlatformsSchema`](modules.md#configplatformsschema) ; `plugins?`: [`ConfigPluginsSchema`](modules.md#configpluginsschema)  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:112

___

### ConfigFileRenative

Ƭ **ConfigFileRenative**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `app` | [`ConfigFileApp`](modules.md#configfileapp) |
| `engine` | [`ConfigFileEngine`](modules.md#configfileengine) |
| `integration` | [`ConfigFileIntegration`](modules.md#configfileintegration) |
| `local` | [`ConfigFileLocal`](modules.md#configfilelocal) |
| `overrides` | [`ConfigFileOverrides`](modules.md#configfileoverrides) |
| `plugin` | [`ConfigFilePlugin`](modules.md#configfileplugin) |
| `private` | [`ConfigFilePrivate`](modules.md#configfileprivate) |
| `project` | [`ConfigFileProject`](modules.md#configfileproject) |
| `templateIntegrations` | [`ConfigFileTemplates`](modules.md#configfiletemplates) |
| `templatePlugins` | [`ConfigFileTemplates`](modules.md#configfiletemplates) |
| `templateProject` | [`ConfigFileTemplate`](modules.md#configfiletemplate) |
| `templateProjects` | [`ConfigFileTemplates`](modules.md#configfiletemplates) |
| `workspace` | [`ConfigFileWorkspace`](modules.md#configfileworkspace) |
| `workspaces` | [`ConfigFileWorkspaces`](modules.md#configfileworkspaces) |

#### Defined in

@rnv/core/lib/schema/types.d.ts:125

___

### ConfigFileRuntime

Ƭ **ConfigFileRuntime**: `Object`

#### Defined in

@rnv/core/lib/schema/types.d.ts:141

___

### ConfigFileTemplate

Ƭ **ConfigFileTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bootstrapConfig?` | `ConfigTemplateBootstrapConfig` |
| `templateConfig?` | [`ConfigTemplateConfigFragment`](modules.md#configtemplateconfigfragment) |

#### Defined in

@rnv/core/lib/schema/types.d.ts:118

___

### ConfigFileTemplates

Ƭ **ConfigFileTemplates**: `Object`

#### Defined in

@rnv/core/lib/schema/types.d.ts:122

___

### ConfigFileWorkspace

Ƭ **ConfigFileWorkspace**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfigsPath?` | `string` |
| `defaultTargets?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``, `string`\>\> |
| `disableTelemetry?` | `boolean` |
| `projectTemplates?` | `Record`\<`string`, \{ `description?`: `string` ; `localPath?`: `string` ; `packageName?`: `string`  }\> |
| `sdks?` | \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  } |
| `sdks.ANDROID_NDK?` | `string` |
| `sdks.ANDROID_SDK?` | `string` |
| `sdks.KAIOS_SDK?` | `string` |
| `sdks.TIZEN_SDK?` | `string` |
| `sdks.WEBOS_SDK?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:123

___

### ConfigFileWorkspaces

Ƭ **ConfigFileWorkspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `workspaces` | `Record`\<`string`, \{ `path`: `string` ; `remote?`: \{ `type`: `string` ; `url`: `string`  }  }\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:124

___

### ConfigPlatformAndroidFragment

Ƭ **ConfigPlatformAndroidFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aab?` | `boolean` |
| `buildToolsVersion?` | `string` |
| `compileSdkVersion?` | `number` |
| `disableSigning?` | `boolean` |
| `enableAndroidX?` | `string` \| `boolean` |
| `enableJetifier?` | `string` \| `boolean` |
| `excludedFeatures?` | `string`[] |
| `extraGradleParams?` | `string` |
| `flipperEnabled?` | `boolean` |
| `googleServicesVersion?` | `string` |
| `gradleBuildToolsVersion?` | `string` |
| `gradleWrapperVersion?` | `string` |
| `includedFeatures?` | `string`[] |
| `keyAlias?` | `string` |
| `kotlinVersion?` | `string` |
| `minSdkVersion?` | `number` |
| `minifyEnabled?` | `boolean` |
| `multipleAPKs?` | `boolean` |
| `ndkVersion?` | `string` |
| `newArchEnabled?` | `boolean` |
| `signingConfig?` | `string` |
| `storeFile?` | `string` |
| `supportLibVersion?` | `string` |
| `targetSdkVersion?` | `number` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:46

___

### ConfigPlatformBaseFragment

Ƭ **ConfigPlatformBaseFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetFolderPlatform?` | `string` |
| `bundleAssets?` | `boolean` |
| `bundleIsDev?` | `boolean` |
| `enableSourceMaps?` | `boolean` |
| `engine?` | `string` |
| `entryFile?` | `string` |
| `extendPlatform?` | ``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"`` |
| `getJsBundleFile?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:47

___

### ConfigPlatformBuildSchemeSchema

Ƭ **ConfigPlatformBuildSchemeSchema**: [`ConfigCommonSchemaFragment`](modules.md#configcommonschemafragment) & [`ConfigBuildSchemeFragment`](modules.md#configbuildschemefragment) & [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:73

___

### ConfigPlatformElectronFragment

Ƭ **ConfigPlatformElectronFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BrowserWindow?` | \{ `height?`: `number` ; `webPreferences?`: \{ `devTools`: `boolean`  } ; `width?`: `number`  } |
| `BrowserWindow.height?` | `number` |
| `BrowserWindow.webPreferences?` | \{ `devTools`: `boolean`  } |
| `BrowserWindow.webPreferences.devTools` | `boolean` |
| `BrowserWindow.width?` | `number` |
| `electronConfig?` | `any` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:48

___

### ConfigPlatformLightningFragment

Ƭ **ConfigPlatformLightningFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:50

___

### ConfigPlatformNextJsFragment

Ƭ **ConfigPlatformNextJsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exportDir?` | `string` |
| `nextTranspileModules?` | `string`[] |
| `outputDir?` | `string` |
| `pagesDir?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:51

___

### ConfigPlatformReactNativeFragment

Ƭ **ConfigPlatformReactNativeFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reactNativeEngine?` | ``"jsc"`` \| ``"v8-android"`` \| ``"v8-android-nointl"`` \| ``"v8-android-jit"`` \| ``"v8-android-jit-nointl"`` \| ``"hermes"`` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:52

___

### ConfigPlatformSchema

Ƭ **ConfigPlatformSchema**: [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment) & \{ `buildSchemes?`: `Record`\<`string`, [`ConfigPlatformBuildSchemeSchema`](modules.md#configplatformbuildschemeschema)\>  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:75

___

### ConfigPlatformSchemaFragment

Ƭ **ConfigPlatformSchemaFragment**: [`ConfigCommonSchemaFragment`](modules.md#configcommonschemafragment) & [`ConfigPlatformBaseFragment`](modules.md#configplatformbasefragment) & [`ConfigPlatformiOSFragment`](modules.md#configplatformiosfragment) & [`ConfigPlatformAndroidFragment`](modules.md#configplatformandroidfragment) & [`ConfigPrivatePlatformAndroid`](modules.md#configprivateplatformandroid) & [`ConfigPlatformWebFragment`](modules.md#configplatformwebfragment) & [`ConfigPlatformTizenFragment`](modules.md#configplatformtizenfragment) & [`ConfigPlatformWindowsFragment`](modules.md#configplatformwindowsfragment) & [`ConfigPlatformWebOSFragment`](modules.md#configplatformwebosfragment) & [`ConfigPlatformLightningFragment`](modules.md#configplatformlightningfragment) & [`ConfigPlatformReactNativeFragment`](modules.md#configplatformreactnativefragment) & [`ConfigPlatformWebpackFragment`](modules.md#configplatformwebpackfragment) & [`ConfigPlatformElectronFragment`](modules.md#configplatformelectronfragment) & [`ConfigPlatformNextJsFragment`](modules.md#configplatformnextjsfragment) & [`ConfigTemplateAndroidFragment`](modules.md#configtemplateandroidfragment) & [`ConfigTemplateXcodeFragment`](modules.md#configtemplatexcodefragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:71

___

### ConfigPlatformTizenFragment

Ƭ **ConfigPlatformTizenFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appName?` | `string` |
| `certificateProfile?` | `string` |
| `package?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:66

___

### ConfigPlatformWebFragment

Ƭ **ConfigPlatformWebFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `devServerHost?` | `string` |
| `environment?` | `string` |
| `timestampBuildFiles?` | `string`[] |

#### Defined in

@rnv/core/lib/schema/types.d.ts:67

___

### ConfigPlatformWebOSFragment

Ƭ **ConfigPlatformWebOSFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `iconColor?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:68

___

### ConfigPlatformWebpackFragment

Ƭ **ConfigPlatformWebpackFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `webpackConfig?` | \{ `customScripts?`: `string`[] ; `publicUrl?`: `string`  } |
| `webpackConfig.customScripts?` | `string`[] |
| `webpackConfig.publicUrl?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:69

___

### ConfigPlatformWindowsFragment

Ƭ **ConfigPlatformWindowsFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `templateVSProject?` | \{ `additionalMetroOptions?`: `Record`\<`string`, `any`\> ; `appPath?`: `string` ; `arch?`: `string` ; `autolink?`: `boolean` ; `build?`: `boolean` ; `buildLogDirectory?`: `string` ; `bundle?`: `boolean` ; `devPort?`: `string` ; `device?`: `boolean` ; `directDebugging?`: `boolean` ; `emulator?`: `boolean` ; `experimentalNuGetDependency?`: `boolean` ; `info?`: `boolean` ; `language?`: `string` ; `launch?`: `boolean` ; `logging?`: `boolean` ; `msbuildprops?`: `string` ; `nuGetTestFeed?`: `string` ; `nuGetTestVersion?`: `string` ; `overwrite?`: `boolean` ; `packageExtension?`: `string` ; `packager?`: `boolean` ; `proj?`: `string` ; `reactNativeEngine?`: `string` ; `release?`: `boolean` ; `remoteDebugging?`: `boolean` ; `root?`: `string` ; `singleproc?`: `boolean` ; `sln?`: `string` ; `target?`: `string` ; `telemetry?`: `boolean` ; `useWinUI3?`: `boolean`  } |
| `templateVSProject.additionalMetroOptions?` | `Record`\<`string`, `any`\> |
| `templateVSProject.appPath?` | `string` |
| `templateVSProject.arch?` | `string` |
| `templateVSProject.autolink?` | `boolean` |
| `templateVSProject.build?` | `boolean` |
| `templateVSProject.buildLogDirectory?` | `string` |
| `templateVSProject.bundle?` | `boolean` |
| `templateVSProject.devPort?` | `string` |
| `templateVSProject.device?` | `boolean` |
| `templateVSProject.directDebugging?` | `boolean` |
| `templateVSProject.emulator?` | `boolean` |
| `templateVSProject.experimentalNuGetDependency?` | `boolean` |
| `templateVSProject.info?` | `boolean` |
| `templateVSProject.language?` | `string` |
| `templateVSProject.launch?` | `boolean` |
| `templateVSProject.logging?` | `boolean` |
| `templateVSProject.msbuildprops?` | `string` |
| `templateVSProject.nuGetTestFeed?` | `string` |
| `templateVSProject.nuGetTestVersion?` | `string` |
| `templateVSProject.overwrite?` | `boolean` |
| `templateVSProject.packageExtension?` | `string` |
| `templateVSProject.packager?` | `boolean` |
| `templateVSProject.proj?` | `string` |
| `templateVSProject.reactNativeEngine?` | `string` |
| `templateVSProject.release?` | `boolean` |
| `templateVSProject.remoteDebugging?` | `boolean` |
| `templateVSProject.root?` | `string` |
| `templateVSProject.singleproc?` | `boolean` |
| `templateVSProject.sln?` | `string` |
| `templateVSProject.target?` | `string` |
| `templateVSProject.telemetry?` | `boolean` |
| `templateVSProject.useWinUI3?` | `boolean` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:70

___

### ConfigPlatformiOSFragment

Ƭ **ConfigPlatformiOSFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowProvisioningUpdates?` | `boolean` |
| `appleId?` | `string` |
| `codeSignIdentities?` | `Record`\<`string`, `string`\> |
| `codeSignIdentity?` | `string` |
| `commandLineArguments?` | `string`[] |
| `deploymentTarget?` | `string` |
| `entitlements?` | `Record`\<`string`, `string`\> |
| `excludedArchs?` | `string`[] |
| `exportOptions?` | \{ `compileBitcode?`: `boolean` ; `method?`: `string` ; `provisioningProfiles?`: `Record`\<`string`, `string`\> ; `signingCertificate?`: `string` ; `signingStyle?`: `string` ; `teamID?`: `string` ; `uploadBitcode?`: `boolean` ; `uploadSymbols?`: `boolean`  } |
| `exportOptions.compileBitcode?` | `boolean` |
| `exportOptions.method?` | `string` |
| `exportOptions.provisioningProfiles?` | `Record`\<`string`, `string`\> |
| `exportOptions.signingCertificate?` | `string` |
| `exportOptions.signingStyle?` | `string` |
| `exportOptions.teamID?` | `string` |
| `exportOptions.uploadBitcode?` | `boolean` |
| `exportOptions.uploadSymbols?` | `boolean` |
| `firebaseId?` | `string` |
| `ignoreLogs?` | `boolean` |
| `ignoreWarnings?` | `boolean` |
| `newArchEnabled?` | `boolean` |
| `orientationSupport?` | \{ `phone?`: `string`[] ; `tab?`: `string`[]  } |
| `orientationSupport.phone?` | `string`[] |
| `orientationSupport.tab?` | `string`[] |
| `provisionProfileSpecifier?` | `string` |
| `provisionProfileSpecifiers?` | `Record`\<`string`, `string`\> |
| `provisioningProfiles?` | `Record`\<`string`, `string`\> |
| `provisioningStyle?` | `string` |
| `runScheme?` | `string` |
| `scheme?` | `string` |
| `schemeTarget?` | `string` |
| `sdk?` | `string` |
| `systemCapabilities?` | `Record`\<`string`, `boolean`\> |
| `teamID?` | `string` |
| `teamIdentifier?` | `string` |
| `testFlightId?` | `string` |
| `urlScheme?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:49

___

### ConfigPlatformsSchema

Ƭ **ConfigPlatformsSchema**: `Partial`\<`Record`\<[`RnvPlatformKey`](modules.md#rnvplatformkey), [`ConfigPlatformSchema`](modules.md#configplatformschema)\>\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:78

___

### ConfigPluginBaseFragment

Ƭ **ConfigPluginBaseFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deprecated?` | `string` |
| `disableNpm?` | `boolean` |
| `disablePluginTemplateOverrides?` | `boolean` |
| `disabled?` | `boolean` |
| `fontSources?` | `string`[] |
| `npm?` | `Record`\<`string`, `string`\> |
| `pluginDependencies?` | `Record`\<`string`, `string`\> |
| `props?` | `Record`\<`string`, `string`\> |
| `skipMerge?` | `boolean` |
| `source?` | `string` |
| `supportedPlatforms?` | (``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``)[] |
| `version?` | `string` |
| `webpackConfig?` | \{ `moduleAliases?`: `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> ; `modulePaths?`: `boolean` \| `string`[] ; `nextTranspileModules?`: `string`[]  } |
| `webpackConfig.moduleAliases?` | `boolean` \| `Record`\<`string`, `string` \| \{ `projectPath`: `string`  }\> |
| `webpackConfig.modulePaths?` | `boolean` \| `string`[] |
| `webpackConfig.nextTranspileModules?` | `string`[] |

#### Defined in

@rnv/core/lib/schema/types.d.ts:97

___

### ConfigPluginPlatformAndroidFragment

Ƭ **ConfigPluginPlatformAndroidFragment**: `Partial`\<`z.infer`\<typeof `zodPluginPlatformAndroidFragment`\>\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:98

___

### ConfigPluginPlatformBaseFragment

Ƭ **ConfigPluginPlatformBaseFragment**: `Partial`\<`z.infer`\<typeof `zodPluginPlatformBaseFragment`\>\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:99

___

### ConfigPluginPlatformSchema

Ƭ **ConfigPluginPlatformSchema**: [`ConfigPluginPlatformBaseFragment`](modules.md#configpluginplatformbasefragment) & [`ConfigPluginPlatformAndroidFragment`](modules.md#configpluginplatformandroidfragment) & [`ConfigPluginPlatformiOSFragment`](modules.md#configpluginplatformiosfragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:101

___

### ConfigPluginPlatformiOSFragment

Ƭ **ConfigPluginPlatformiOSFragment**: `Partial`\<`z.infer`\<typeof `zodPluginPlatformiOSFragment`\>\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:100

___

### ConfigPluginPlatformsSchema

Ƭ **ConfigPluginPlatformsSchema**: `Record`\<[`RnvPlatformKey`](modules.md#rnvplatformkey), [`ConfigPluginPlatformSchema`](modules.md#configpluginplatformschema)\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:102

___

### ConfigPluginSchema

Ƭ **ConfigPluginSchema**: [`ConfigPluginBaseFragment`](modules.md#configpluginbasefragment) & `Partial`\<[`ConfigPluginPlatformsSchema`](modules.md#configpluginplatformsschema)\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:103

___

### ConfigPluginsSchema

Ƭ **ConfigPluginsSchema**: `Record`\<`string`, [`ConfigPluginSchema`](modules.md#configpluginschema) \| `string`\>

#### Defined in

@rnv/core/lib/schema/types.d.ts:104

___

### ConfigPrivatePlatformAndroid

Ƭ **ConfigPrivatePlatformAndroid**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `keyAlias?` | `string` |
| `keyPassword?` | `string` |
| `storeFile?` | `string` |
| `storePassword?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:106

___

### ConfigProjectPaths

Ƭ **ConfigProjectPaths**: `Required`\<[`ConfigRootProjectBaseFragment`](modules.md#configrootprojectbasefragment)\>[``"paths"``]

#### Defined in

@rnv/core/lib/schema/types.d.ts:111

___

### ConfigProp

Ƭ **ConfigProp**: [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:142

___

### ConfigPropKey

Ƭ **ConfigPropKey**: keyof [`ConfigProp`](modules.md#configprop)

#### Defined in

@rnv/core/lib/schema/types.d.ts:143

___

### ConfigPropKeyMerged

Ƭ **ConfigPropKeyMerged**\<`T`\>: keyof [`ConfigPropMerged`](modules.md#configpropmerged)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:145

___

### ConfigPropMerged

Ƭ **ConfigPropMerged**\<`T`\>: [`ConfigProp`](modules.md#configprop) & `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:144

___

### ConfigPropRootKeyMerged

Ƭ **ConfigPropRootKeyMerged**\<`T`\>: keyof [`ConfigPropRootMerged`](modules.md#configproprootmerged)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:91

___

### ConfigPropRootMerged

Ƭ **ConfigPropRootMerged**\<`T`\>: [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig) & `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:90

___

### ConfigRootAppBaseFragment

Ƭ **ConfigRootAppBaseFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `custom?` | `any` |
| `extend?` | `string` |
| `extendsTemplate?` | `string` |
| `hidden?` | `boolean` |
| `id?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:79

___

### ConfigRootProjectBaseFragment

Ƭ **ConfigRootProjectBaseFragment**: `z.infer`\<typeof `zodRootProjectBaseFragment`\> & \{ `templateConfig?`: [`ConfigTemplateConfigFragment`](modules.md#configtemplateconfigfragment)  }

#### Defined in

@rnv/core/lib/schema/types.d.ts:108

___

### ConfigTemplateAndroidFragment

Ƭ **ConfigTemplateAndroidFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `templateAndroid?` | `ConfigTemplateAndroidBase` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:58

___

### ConfigTemplateConfigFragment

Ƭ **ConfigTemplateConfigFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disabled?` | `boolean` |
| `includedPaths?` | (`string` \| \{ `engines?`: `string`[] ; `paths`: `string`[] ; `platforms?`: (``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``)[]  })[] |
| `name?` | `string` |
| `package_json?` | \{ `browserslist?`: `any` ; `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `name?`: `string` ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\> ; `version?`: `string`  } |
| `package_json.browserslist?` | `any` |
| `package_json.dependencies?` | `Record`\<`string`, `string`\> |
| `package_json.devDependencies?` | `Record`\<`string`, `string`\> |
| `package_json.name?` | `string` |
| `package_json.optionalDependencies?` | `Record`\<`string`, `string`\> |
| `package_json.peerDependencies?` | `Record`\<`string`, `string`\> |
| `package_json.version?` | `string` |
| `renative_json?` | \{ `$schema?`: `string` ; `extendsTemplate?`: `string`  } |
| `renative_json.$schema?` | `string` |
| `renative_json.extendsTemplate?` | `string` |
| `version?` | `string` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:38

___

### ConfigTemplateXcodeFragment

Ƭ **ConfigTemplateXcodeFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `templateXcode?` | \{ `AppDelegate_h?`: \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } ; `AppDelegate_mm?`: \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application?`: `ConfigTemplateXcodeApplication` ; `userNotificationCenter?`: \{ `didReceiveNotificationResponse?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `willPresent?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } ; `Info_plist?`: `Record`\<`string`, `string`\> ; `Podfile?`: \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } ; `project_pbxproj?`: `ConfigTemplateXcodeProjectPbxproj`  } |
| `templateXcode.AppDelegate_h?` | \{ `appDelegateExtensions?`: `string`[] ; `appDelegateImports?`: `string`[]  } |
| `templateXcode.AppDelegate_h.appDelegateExtensions?` | `string`[] |
| `templateXcode.AppDelegate_h.appDelegateImports?` | `string`[] |
| `templateXcode.AppDelegate_mm?` | \{ `appDelegateImports?`: `string`[] ; `appDelegateMethods?`: \{ `application?`: `ConfigTemplateXcodeApplication` ; `userNotificationCenter?`: \{ `didReceiveNotificationResponse?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `willPresent?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  }  } |
| `templateXcode.AppDelegate_mm.appDelegateImports?` | `string`[] |
| `templateXcode.AppDelegate_mm.appDelegateMethods?` | \{ `application?`: `ConfigTemplateXcodeApplication` ; `userNotificationCenter?`: \{ `didReceiveNotificationResponse?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `willPresent?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  }  } |
| `templateXcode.AppDelegate_mm.appDelegateMethods.application?` | `ConfigTemplateXcodeApplication` |
| `templateXcode.AppDelegate_mm.appDelegateMethods.userNotificationCenter?` | \{ `didReceiveNotificationResponse?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] ; `willPresent?`: (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[]  } |
| `templateXcode.AppDelegate_mm.appDelegateMethods.userNotificationCenter.didReceiveNotificationResponse?` | (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] |
| `templateXcode.AppDelegate_mm.appDelegateMethods.userNotificationCenter.willPresent?` | (`string` \| \{ `order`: `number` ; `value`: `string` ; `weight`: `number`  })[] |
| `templateXcode.Info_plist?` | `Record`\<`string`, `string`\> |
| `templateXcode.Podfile?` | \{ `header?`: `string`[] ; `injectLines?`: `string`[] ; `podDependencies?`: `string`[] ; `post_install?`: `string`[] ; `sources?`: `string`[] ; `staticPods?`: `string`[]  } |
| `templateXcode.Podfile.header?` | `string`[] |
| `templateXcode.Podfile.injectLines?` | `string`[] |
| `templateXcode.Podfile.podDependencies?` | `string`[] |
| `templateXcode.Podfile.post_install?` | `string`[] |
| `templateXcode.Podfile.sources?` | `string`[] |
| `templateXcode.Podfile.staticPods?` | `string`[] |
| `templateXcode.project_pbxproj?` | `ConfigTemplateXcodeProjectPbxproj` |

#### Defined in

@rnv/core/lib/schema/types.d.ts:64

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

@rnv/core/lib/context/types.d.ts:13

___

### CreateRnvEngineOpts

Ƭ **CreateRnvEngineOpts**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileEngine`](modules.md#configfileengine) |
| `originalTemplatePlatformProjectDir?` | `string` |
| `originalTemplatePlatformsDir?` | `string` |
| `outputDirName?` | `string` |
| `platforms` | [`RnvEnginePlatforms`](modules.md#rnvengineplatforms) |
| `projectDirName?` | `string` |
| `rootPath?` | `string` |
| `runtimeExtraProps?` | `Record`\<`string`, `string`\> |
| `serverDirName?` | `string` |
| `tasks` | `ReadonlyArray`\<[`RnvTask`](modules.md#rnvtask)\<`OKey`\>\> |

#### Defined in

@rnv/core/lib/engines/types.d.ts:6

___

### CreateRnvIntegrationOpts

Ƭ **CreateRnvIntegrationOpts**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileIntegration`](modules.md#configfileintegration) |
| `tasks` | `ReadonlyArray`\<[`RnvTask`](modules.md#rnvtask)\<`OKey`\>\> |

#### Defined in

@rnv/core/lib/integrations/types.d.ts:4

___

### CreateRnvSdkOpts

Ƭ **CreateRnvSdkOpts**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tasks` | `ReadonlyArray`\<[`RnvTask`](modules.md#rnvtask)\<`OKey`\>\> |

#### Defined in

@rnv/core/lib/sdks/types.d.ts:3

___

### CreateRnvTaskOpt

Ƭ **CreateRnvTaskOpt**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeDependsOn?` | [`RnvTaskFn`](modules.md#rnvtaskfn) |
| `dependsOn?` | `string`[] |
| `description` | `string` |
| `fn?` | [`RnvTaskFn`](modules.md#rnvtaskfn)\<`OKey`\> |
| `fnHelp?` | [`RnvTaskHelpFn`](modules.md#rnvtaskhelpfn) |
| `forceBuildHookRebuild?` | `boolean` |
| `ignoreEngines?` | `boolean` |
| `isGlobalScope?` | `boolean` |
| `isPriorityOrder?` | `boolean` |
| `isPrivate?` | `boolean` |
| `options?` | `ReadonlyArray`\<[`RnvTaskOption`](modules.md#rnvtaskoption)\<`OKey`\>\> |
| `platforms?` | [`RnvPlatformKey`](modules.md#rnvplatformkey)[] |
| `task` | `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:3

___

### DependencyMutation

Ƭ **DependencyMutation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `name` | `string` |
| `original?` | \{ `version`: `string`  } |
| `original.version` | `string` |
| `source` | `string` |
| `targetPath?` | `string` |
| `type` | [`NpmDepKey`](modules.md#npmdepkey) |
| `updated` | \{ `version`: `string`  } |
| `updated.version` | `string` |

#### Defined in

@rnv/core/lib/projects/types.d.ts:4

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

@rnv/core/lib/system/types.d.ts:1

___

### Env

Ƭ **Env**: `Record`\<`string`, `any`\>

#### Defined in

@rnv/core/lib/types.d.ts:8

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

@rnv/core/lib/system/types.d.ts:27

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

@rnv/core/lib/system/types.d.ts:8

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

@rnv/core/lib/system/types.d.ts:37

___

### GetConfigPropFn

Ƭ **GetConfigPropFn**\<`T`\>: `T` extends [`ConfigPropKey`](modules.md#configpropkey) ? \<T\>(`key`: `T`, `defaultVal?`: [`ConfigProp`](modules.md#configprop)[`T`], `obj?`: `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\>) => [`ConfigProp`](modules.md#configprop)[`T`] \| `undefined` : \<T\>(`key`: `string`, `defaultVal?`: `T`, `obj?`: `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\>) => `T` \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ConfigPropKey`](modules.md#configpropkey) |

#### Defined in

@rnv/core/lib/api/types.d.ts:119

___

### GetConfigPropVal

Ƭ **GetConfigPropVal**\<`T`, `K`\>: [`ConfigPropMerged`](modules.md#configpropmerged)\<`T`\>[`K`] \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`ConfigPropKeyMerged`](modules.md#configpropkeymerged)\<`T`\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:146

___

### GetConfigRootPropVal

Ƭ **GetConfigRootPropVal**\<`T`, `K`\>: [`ConfigPropRootMerged`](modules.md#configproprootmerged)\<`T`\>[`K`] \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends [`ConfigPropRootKeyMerged`](modules.md#configproprootkeymerged)\<`T`\> |

#### Defined in

@rnv/core/lib/schema/types.d.ts:92

___

### GetContextType

Ƭ **GetContextType**\<`Type`\>: () => [`GetReturnType`](modules.md#getreturntype)\<`Type`\>

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Type declaration

▸ (): [`GetReturnType`](modules.md#getreturntype)\<`Type`\>

##### Returns

[`GetReturnType`](modules.md#getreturntype)\<`Type`\>

#### Defined in

@rnv/core/lib/context/types.d.ts:303

___

### GetReturnType

Ƭ **GetReturnType**\<`Type`\>: `Type` extends (...`args`: `never`[]) => infer Return ? `Return` : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

@rnv/core/lib/context/types.d.ts:302

___

### NpmDepKey

Ƭ **NpmDepKey**: ``"dependencies"`` \| ``"devDependencies"`` \| ``"peerDependencies"`` \| ``"optionalDependencies"`` \| ``"resolutions"``

#### Defined in

@rnv/core/lib/configs/types.d.ts:15

___

### NpmPackageFile

Ƭ **NpmPackageFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author?` | `string` |
| `dependencies?` | `Record`\<`string`, `string`\> |
| `description?` | `string` |
| `devDependencies?` | `Record`\<`string`, `string`\> |
| `license?` | `string` |
| `main?` | `string` |
| `name?` | `string` |
| `optionalDependencies?` | `Record`\<`string`, `string`\> |
| `peerDependencies?` | `Record`\<`string`, `string`\> |
| `resolutions?` | `Record`\<`string`, `string`\> |
| `version?` | `string` |

#### Defined in

@rnv/core/lib/configs/types.d.ts:1

___

### NpmPackageFileKey

Ƭ **NpmPackageFileKey**: keyof [`NpmPackageFile`](modules.md#npmpackagefile)

#### Defined in

@rnv/core/lib/configs/types.d.ts:14

___

### OverridesOptions

Ƭ **OverridesOptions**: \{ `override`: `string` \| `number` \| `undefined` ; `pattern`: `string`  }[]

#### Defined in

@rnv/core/lib/system/types.d.ts:28

___

### ParamKeys

Ƭ **ParamKeys**\<`ExtraKeys`\>: `Partial`\<`Record`\<[`ProgramOptionsKey`](modules.md#programoptionskey) \| `ExtraKeys`, `ParamType`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ExtraKeys` | extends `string` = [`ProgramOptionsKey`](modules.md#programoptionskey) |

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:205

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

@rnv/core/lib/projects/types.d.ts:2

___

### PlatPropKey

Ƭ **PlatPropKey**: keyof [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment)

#### Defined in

@rnv/core/lib/schema/types.d.ts:72

___

### PlatformBuildSchemeKey

Ƭ **PlatformBuildSchemeKey**: keyof [`ConfigPlatformBuildSchemeSchema`](modules.md#configplatformbuildschemeschema)

#### Defined in

@rnv/core/lib/schema/types.d.ts:74

___

### PluginCallback

Ƭ **PluginCallback**: (`plugin`: [`RnvPlugin`](modules.md#rnvplugin), `pluginPlat`: [`ConfigPluginPlatformSchema`](modules.md#configpluginplatformschema), `key`: `string`) => `void`

#### Type declaration

▸ (`plugin`, `pluginPlat`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `plugin` | [`RnvPlugin`](modules.md#rnvplugin) |
| `pluginPlat` | [`ConfigPluginPlatformSchema`](modules.md#configpluginplatformschema) |
| `key` | `string` |

##### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/types.d.ts:2

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

@rnv/core/lib/plugins/types.d.ts:3

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

@rnv/core/lib/plugins/types.d.ts:9

___

### ProgramOptionsKey

Ƭ **ProgramOptionsKey**: keyof typeof `_RnvTaskOptions`

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:202

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

@rnv/core/lib/api/types.d.ts:93

___

### PromptParams

Ƭ **PromptParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices?` | (\{ `name`: `string` ; `value`: `any`  } \| `string`)[] |
| `default?` | `any` |
| `initialValue?` | `string` |
| `logMessage?` | `string` |
| `loop?` | `boolean` |
| `message?` | `string` |
| `name?` | `string` |
| `pageSize?` | `number` |
| `source?` | (`answersSoFar`: `any`, `input`: `string` \| `undefined`) => `Promise`\<`any`\> |
| `type` | `string` |
| `validate?` | (`i`: `string`) => `string` \| `boolean` |
| `warningMessage?` | `string` |

#### Defined in

@rnv/core/lib/api/types.d.ts:101

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

@rnv/core/lib/api/types.d.ts:118

___

### RenativeConfigVersion

Ƭ **RenativeConfigVersion**: `string` \| \{ `version`: `string`  }

#### Defined in

@rnv/core/lib/types.d.ts:4

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

@rnv/core/lib/system/types.d.ts:2

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

@rnv/core/lib/api/types.d.ts:10

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

@rnv/core/lib/api/types.d.ts:49

___

### RnvApiChalkFn

Ƭ **RnvApiChalkFn**: (`v`: `any`) => `any` & [`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

@rnv/core/lib/api/types.d.ts:62

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
| `logDebug` | (...`args`: `any`[]) => `void` |
| `logDefault` | (`task`: `string`, `customChalk?`: `any`) => `void` |
| `logError` | (`e`: `Error` \| `string` \| `unknown`, `opts?`: \{ `skipAnalytics`: `boolean`  }) => `void` |
| `logExitTask` | (`task`: `string`, `customChalk?`: (`s`: `string`) => `string`) => `void` |
| `logHook` | (`hook`: `string`, `msg?`: `string`) => `void` |
| `logInfo` | (`msg`: `string`) => `void` |
| `logInitTask` | (`task`: `string`, `customChalk?`: `string` \| (`s`: `string`) => `string`) => `void` |
| `logInitialize` | () => `void` |
| `logRaw` | (...`args`: `string`[]) => `void` |
| `logSuccess` | (`msg`: `string`) => `void` |
| `logSummary` | (`opts?`: \{ `header`: `string`  }) => `void` |
| `logTask` | (`task`: `string`, `customChalk?`: `any`) => `void` |
| `logToSummary` | (`v`: `string`, `sanitizePaths?`: () => `string`) => `void` |
| `logWarning` | (`msg`: `string` \| `boolean` \| `unknown`) => `void` |
| `logWelcome` | () => `void` |
| `printArrIntoBox` | (`arr`: `string`[], `prefix?`: `string`) => `string` |
| `printBoxEnd` | () => `string` |
| `printBoxStart` | (`str`: `string`, `str2?`: `string`) => `string` |
| `printIntoBox` | (`str`: `string`) => `string` |

#### Defined in

@rnv/core/lib/api/types.d.ts:63

___

### RnvApiPrompt

Ƭ **RnvApiPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generateOptions` | (`inputData`: `any`, `isMultiChoice?`: `boolean`, `mapping?`: `any`, `renderMethod?`: [`PromptRenderFn`](modules.md#promptrenderfn)) => [`PromptOptions`](modules.md#promptoptions) |
| `inquirerPrompt` | (`options`: [`PromptParams`](modules.md#promptparams)) => `Promise`\<`any`\> |
| `inquirerSeparator` | (`text?`: `string`) => `any` |

#### Defined in

@rnv/core/lib/api/types.d.ts:32

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

@rnv/core/lib/api/types.d.ts:24

___

### RnvCLI

Ƭ **RnvCLI**: `Record`\<`string`, `object`\>

#### Defined in

@rnv/core/lib/system/types.d.ts:36

___

### RnvContext

Ƭ **RnvContext**\<`Payload`, `ExtraOptionKeys`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Payload` | `any` |
| `ExtraOptionKeys` | extends `string` = [`ProgramOptionsKey`](modules.md#programoptionskey) |

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
| `engineConfigs` | [`ConfigFileEngine`](modules.md#configfileengine)[] | - |
| `files` | [`RnvContextFiles`](modules.md#rnvcontextfiles) | - |
| `injectableConfigProps` | `Record`\<`string`, [`ConfigProp`](modules.md#configprop)[[`ConfigPropKey`](modules.md#configpropkey)]\> | - |
| `isBuildHooksReady` | `boolean` | - |
| `isDefault` | `boolean` | - |
| `isSystemLinux` | `boolean` | - |
| `isSystemMac` | `boolean` | - |
| `isSystemWin` | `boolean` | - |
| `logging` | \{ `containsError`: `boolean` ; `containsWarning`: `boolean` ; `logMessages`: `string`[]  } | - |
| `logging.containsError` | `boolean` | - |
| `logging.containsWarning` | `boolean` | - |
| `logging.logMessages` | `string`[] | - |
| `mutations` | \{ `pendingMutations`: [`DependencyMutation`](modules.md#dependencymutation)[]  } | - |
| `mutations.pendingMutations` | [`DependencyMutation`](modules.md#dependencymutation)[] | - |
| `paths` | [`RnvContextPaths`](modules.md#rnvcontextpaths) | - |
| `payload` | `Payload` | Extra payload object used by 3rd party (ie @rnv/sdk-apple) to decorate context with extra typed information |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) | - |
| `process` | `NodeJS.Process` | - |
| `program` | [`RnvContextProgram`](modules.md#rnvcontextprogram)\<`ExtraOptionKeys`\> | - |
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

@rnv/core/lib/context/types.d.ts:31

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

@rnv/core/lib/api/types.d.ts:37

___

### RnvContextBuildConfig

Ƭ **RnvContextBuildConfig**: `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\> & \{ `_meta?`: \{ `currentAppConfigId`: `string`  } ; `_refs?`: `Record`\<`string`, `string`\>  }

#### Defined in

@rnv/core/lib/context/types.d.ts:85

___

### RnvContextFileKey

Ƭ **RnvContextFileKey**: ``"config"`` \| ``"configLocal"`` \| ``"configPrivate"``

#### Defined in

@rnv/core/lib/context/types.d.ts:301

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

@rnv/core/lib/context/types.d.ts:169

___

### RnvContextFiles

Ƭ **RnvContextFiles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfig` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileApp`](modules.md#configfileapp)\> |
| `dotRnv` | \{ `config`: [`ConfigFileWorkspace`](modules.md#configfileworkspace) ; `configWorkspaces?`: [`ConfigFileWorkspaces`](modules.md#configfileworkspaces)  } |
| `dotRnv.config` | [`ConfigFileWorkspace`](modules.md#configfileworkspace) |
| `dotRnv.configWorkspaces?` | [`ConfigFileWorkspaces`](modules.md#configfileworkspaces) |
| `project` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileProject`](modules.md#configfileproject)\> & \{ `assets`: \{ `config?`: [`ConfigFileRuntime`](modules.md#configfileruntime)  } ; `builds`: `Record`\<`string`, [`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\> ; `package`: [`NpmPackageFile`](modules.md#npmpackagefile)  } |
| `rnv` | \{ `package`: [`NpmPackageFile`](modules.md#npmpackagefile)  } |
| `rnv.package` | [`NpmPackageFile`](modules.md#npmpackagefile) |
| `rnvConfigTemplates` | \{ `config?`: [`ConfigFileTemplates`](modules.md#configfiletemplates) ; `package?`: [`NpmPackageFile`](modules.md#npmpackagefile)  } |
| `rnvConfigTemplates.config?` | [`ConfigFileTemplates`](modules.md#configfiletemplates) |
| `rnvConfigTemplates.package?` | [`NpmPackageFile`](modules.md#npmpackagefile) |
| `rnvCore` | \{ `package`: [`NpmPackageFile`](modules.md#npmpackagefile)  } |
| `rnvCore.package` | [`NpmPackageFile`](modules.md#npmpackagefile) |
| `scopedConfigTemplates` | `Record`\<`string`, [`ConfigFileTemplates`](modules.md#configfiletemplates)\> |
| `workspace` | [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileWorkspace`](modules.md#configfileworkspace)\> & \{ `appConfig`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileApp`](modules.md#configfileapp)\> ; `project`: [`RnvContextFileObj`](modules.md#rnvcontextfileobj)\<[`ConfigFileProject`](modules.md#configfileproject)\>  } |

#### Defined in

@rnv/core/lib/context/types.d.ts:140

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

@rnv/core/lib/context/types.d.ts:277

___

### RnvContextPaths

Ƭ **RnvContextPaths**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IS_LINKED` | `boolean` |
| `IS_NPX_MODE` | `boolean` |
| `appConfig` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) |
| `appConfigBase` | `string` |
| `buildHooks` | \{ `dir`: `string` ; `dist`: \{ `dir`: `string` ; `index`: `string`  } ; `src`: \{ `dir`: `string` ; `index`: `string` ; `indexTs`: `string`  } ; `tsconfig`: `string`  } |
| `buildHooks.dir` | `string` |
| `buildHooks.dist` | \{ `dir`: `string` ; `index`: `string`  } |
| `buildHooks.dist.dir` | `string` |
| `buildHooks.dist.index` | `string` |
| `buildHooks.src` | \{ `dir`: `string` ; `index`: `string` ; `indexTs`: `string`  } |
| `buildHooks.src.dir` | `string` |
| `buildHooks.src.index` | `string` |
| `buildHooks.src.indexTs` | `string` |
| `buildHooks.tsconfig` | `string` |
| `dotRnv` | \{ `config`: `string` ; `configWorkspaces`: `string` ; `dir`: `string`  } |
| `dotRnv.config` | `string` |
| `dotRnv.configWorkspaces` | `string` |
| `dotRnv.dir` | `string` |
| `project` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfigBase`: \{ `dir`: `string` ; `fontsDir`: `string` ; `fontsDirs`: `string`[] ; `pluginsDir`: `string`  } ; `appConfigsDirNames`: `string`[] ; `appConfigsDirs`: `string`[] ; `assets`: \{ `config`: `string` ; `dir`: `string` ; `runtimeDir`: `string`  } ; `babelConfig?`: `string` ; `builds`: \{ `config`: `string` ; `dir`: `string`  } ; `dir`: `string` ; `dotRnvDir`: `string` ; `fontSourceDirs?`: `string`[] ; `nodeModulesDir`: `string` ; `package?`: `string` ; `platformTemplatesDirs`: `Record`\<`string`, `string`\> ; `srcDir?`: `string`  } |
| `rnv` | \{ `dir`: `string` ; `package`: `string`  } |
| `rnv.dir` | `string` |
| `rnv.package` | `string` |
| `rnvConfigTemplates` | \{ `config`: `string` ; `dir`: `string` ; `package`: `string` ; `pluginTemplatesDir`: `string`  } |
| `rnvConfigTemplates.config` | `string` |
| `rnvConfigTemplates.dir` | `string` |
| `rnvConfigTemplates.package` | `string` |
| `rnvConfigTemplates.pluginTemplatesDir` | `string` |
| `rnvCore` | \{ `dir`: `string` ; `package`: `string` ; `templateFilesDir`: `string`  } |
| `rnvCore.dir` | `string` |
| `rnvCore.package` | `string` |
| `rnvCore.templateFilesDir` | `string` |
| `scopedConfigTemplates` | \{ `configs`: `Record`\<`string`, `string`\> ; `pluginTemplatesDirs`: `Record`\<`string`, `string`\>  } |
| `scopedConfigTemplates.configs` | `Record`\<`string`, `string`\> |
| `scopedConfigTemplates.pluginTemplatesDirs` | `Record`\<`string`, `string`\> |
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
| `user` | \{ `currentDir`: `string` ; `homeDir`: `string`  } |
| `user.currentDir` | `string` |
| `user.homeDir` | `string` |
| `workspace` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfig`: [`RnvContextPathObj`](modules.md#rnvcontextpathobj) ; `project`: [`RnvContextPathObj`](modules.md#rnvcontextpathobj) & \{ `appConfigBase`: \{ `dir`: `string`  } ; `assets`: `string` ; `builds`: `string`  }  } |

#### Defined in

@rnv/core/lib/context/types.d.ts:178

___

### RnvContextPlatform

Ƭ **RnvContextPlatform**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `engine?` | [`RnvEngine`](modules.md#rnvengine) |
| `isConnected` | `boolean` |
| `isValid?` | `boolean` |
| `platform` | [`RnvPlatformKey`](modules.md#rnvplatformkey) |
| `port?` | `number` |

#### Defined in

@rnv/core/lib/context/types.d.ts:294

___

### RnvContextProgram

Ƭ **RnvContextProgram**\<`ExtraKeys`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ExtraKeys` | extends `string` = `never` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowUnknownOption` | (`p`: `boolean`) => `void` |
| `args?` | `string`[] |
| `isHelpInvoked?` | `boolean` |
| `option?` | (`cmd`: `string`, `desc`: `string`) => `void` |
| `opts` | () => `CamelCasedProperties`\<[`ParamKeys`](modules.md#paramkeys)\<`ExtraKeys`\>\> |
| `outputHelp` | () => `void` |
| `parse?` | (`arg`: `string`[]) => `void` |
| `rawArgs?` | `string`[] |
| `showHelpAfterError` | () => `void` |

#### Defined in

@rnv/core/lib/context/types.d.ts:20

___

### RnvContextRuntime

Ƭ **RnvContextRuntime**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_platformBuildsSuffix?` | `string` |
| `_skipNativeDepResolutions` | `boolean` |
| `_skipPluginScopeWarnings` | `boolean` |
| `appConfigDir?` | `string` |
| `appDir?` | `string` |
| `appId?` | `string` |
| `availablePlatforms` | [`RnvPlatformKey`](modules.md#rnvplatformkey)[] |
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
| `hasAllEnginesRegistered` | `boolean` |
| `hosted` | `boolean` |
| `integrationsByIndex` | [`RnvIntegration`](modules.md#rnvintegration)[] |
| `isTargetTrue` | `boolean` |
| `isWSConfirmed` | `boolean` |
| `localhost?` | `string` |
| `missingEnginePlugins` | `Record`\<`string`, `string`\> |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `platformBuildsProjectPath?` | `string` |
| `pluginVersions` | `Record`\<`string`, `string`\> |
| `plugins` | `Record`\<`string`, [`RnvPlugin`](modules.md#rnvplugin)\> |
| `port` | `number` |
| `requiresBootstrap` | `boolean` |
| `rnvVersionProject?` | `string` |
| `rnvVersionRunner?` | `string` |
| `runtimeExtraProps` | `Record`\<`string`, `string`\> |
| `scheme?` | `string` |
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

@rnv/core/lib/context/types.d.ts:91

___

### RnvEngine

Ƭ **RnvEngine**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileEngine`](modules.md#configfileengine) |
| `getContext` | () => [`RnvContext`](modules.md#rnvcontext)\<`any`, `OKey`\> |
| `originalTemplatePlatformProjectDir?` | `string` |
| `originalTemplatePlatformsDir?` | `string` |
| `outputDirName?` | `string` |
| `platforms` | [`RnvEnginePlatforms`](modules.md#rnvengineplatforms) |
| `projectDirName` | `string` |
| `rootPath?` | `string` |
| `runtimeExtraProps` | `Record`\<`string`, `string`\> |
| `serverDirName` | `string` |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap)\<`OKey`\> |

#### Defined in

@rnv/core/lib/engines/types.d.ts:18

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

@rnv/core/lib/engines/types.d.ts:41

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

@rnv/core/lib/engines/types.d.ts:31

___

### RnvEnginePlatforms

Ƭ **RnvEnginePlatforms**: `Partial`\<`Record`\<[`RnvPlatformKey`](modules.md#rnvplatformkey), [`RnvEnginePlatform`](modules.md#rnvengineplatform)\>\>

#### Defined in

@rnv/core/lib/engines/types.d.ts:5

___

### RnvEngineTemplate

Ƭ **RnvEngineTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `packageName?` | `string` |

#### Defined in

@rnv/core/lib/engines/types.d.ts:36

___

### RnvEngineTemplateMap

Ƭ **RnvEngineTemplateMap**: `Record`\<`string`, [`RnvEngineTemplate`](modules.md#rnvenginetemplate)\>

#### Defined in

@rnv/core/lib/engines/types.d.ts:40

___

### RnvEnvContext

Ƭ **RnvEnvContext**: `Record`\<`string`, `string` \| `number` \| `string`[] \| `undefined` \| `boolean`\>

#### Defined in

@rnv/core/lib/env/types.d.ts:1

___

### RnvEnvContextOptions

Ƭ **RnvEnvContextOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exludeEnvKeys?` | `string`[] |
| `includedEnvKeys?` | `string`[] |

#### Defined in

@rnv/core/lib/env/types.d.ts:2

___

### RnvError

Ƭ **RnvError**: `any`

#### Defined in

@rnv/core/lib/types.d.ts:7

___

### RnvIntegration

Ƭ **RnvIntegration**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config` | [`ConfigFileIntegration`](modules.md#configfileintegration) |
| `getContext` | () => [`RnvContext`](modules.md#rnvcontext)\<`any`, `OKey`\> |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap)\<`OKey`\> |

#### Defined in

@rnv/core/lib/integrations/types.d.ts:8

___

### RnvPlatform

Ƭ **RnvPlatform**: [`RnvPlatformKey`](modules.md#rnvplatformkey) \| ``null``

#### Defined in

@rnv/core/lib/types.d.ts:3

___

### RnvPlatformKey

Ƭ **RnvPlatformKey**: keyof typeof [`RnvPlatformName`](modules.md#rnvplatformname)

#### Defined in

@rnv/core/lib/types.d.ts:2

___

### RnvPlugin

Ƭ **RnvPlugin**: [`ConfigPluginSchema`](modules.md#configpluginschema) & \{ `_id?`: `string` ; `_scopes?`: `string`[] ; `config?`: [`ConfigFilePlugin`](modules.md#configfileplugin) ; `packageName?`: `string` ; `scope?`: `string`  }

#### Defined in

@rnv/core/lib/plugins/types.d.ts:19

___

### RnvPluginScope

Ƭ **RnvPluginScope**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `npmVersion?` | `string` |
| `scope` | `string` |

#### Defined in

@rnv/core/lib/plugins/types.d.ts:15

___

### RnvSdk

Ƭ **RnvSdk**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getContext` | () => [`RnvContext`](modules.md#rnvcontext)\<`any`, `OKey`\> |
| `tasks` | `ReadonlyArray`\<[`RnvTask`](modules.md#rnvtask)\<`OKey`\>\> |

#### Defined in

@rnv/core/lib/sdks/types.d.ts:6

___

### RnvTask

Ƭ **RnvTask**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `beforeDependsOn?` | [`RnvTaskFn`](modules.md#rnvtaskfn) |
| `dependsOn?` | `string`[] |
| `description` | `string` |
| `fn?` | [`RnvTaskFn`](modules.md#rnvtaskfn)\<`OKey`\> |
| `fnHelp?` | [`RnvTaskHelpFn`](modules.md#rnvtaskhelpfn) |
| `forceBuildHookRebuild?` | `boolean` |
| `ignoreEngines?` | `boolean` |
| `isGlobalScope?` | `boolean` |
| `isPriorityOrder?` | `boolean` |
| `isPrivate?` | `boolean` |
| `key` | `string` |
| `options?` | `ReadonlyArray`\<[`RnvTaskOption`](modules.md#rnvtaskoption)\<`OKey`\>\> |
| `ownerID?` | `string` |
| `platforms?` | [`RnvPlatformKey`](modules.md#rnvplatformkey)[] |
| `task` | `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:18

___

### RnvTaskFn

Ƭ **RnvTaskFn**\<`OKey`\>: (`opts`: \{ `ctx`: [`RnvContext`](modules.md#rnvcontext)\<`any`, `OKey`\> ; `originTaskName`: `string` \| `undefined` ; `parentTaskName`: `string` \| `undefined` ; `shouldSkip`: `boolean` ; `taskName`: `string`  }) => `Promise`\<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

▸ (`opts`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.ctx` | [`RnvContext`](modules.md#rnvcontext)\<`any`, `OKey`\> |
| `opts.originTaskName` | `string` \| `undefined` |
| `opts.parentTaskName` | `string` \| `undefined` |
| `opts.shouldSkip` | `boolean` |
| `opts.taskName` | `string` |

##### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:62

___

### RnvTaskHelpFn

Ƭ **RnvTaskHelpFn**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:69

___

### RnvTaskMap

Ƭ **RnvTaskMap**\<`OKey`\>: `Record`\<`string`, [`RnvTask`](modules.md#rnvtask)\<`OKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:61

___

### RnvTaskOption

Ƭ **RnvTaskOption**\<`OKey`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `examples?` | `string`[] |
| `isRequired?` | `boolean` |
| `isValueType?` | `boolean` |
| `isVariadic?` | `boolean` |
| `key` | `OKey` |
| `shortcut?` | `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:52

___

### RuntimePropKey

Ƭ **RuntimePropKey**: keyof [`RnvContextRuntime`](modules.md#rnvcontextruntime)

#### Defined in

@rnv/core/lib/context/types.d.ts:139

___

### TaskItemMap

Ƭ **TaskItemMap**: `Record`\<`string`, \{ `desc?`: `string` ; `taskKey`: `string`  }\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:70

___

### TaskObj

Ƭ **TaskObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `taskInstance` | [`RnvTask`](modules.md#rnvtask) |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:74

___

### TaskPromptOption

Ƭ **TaskPromptOption**: `Object`

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
| `params?` | [`RnvTaskOption`](modules.md#rnvtaskoption)[] |
| `providers` | `string`[] |
| `subCommand?` | `string` |
| `subTasks?` | [`TaskPromptOption`](modules.md#taskpromptoption)[] |
| `value` | \{ `subTsks?`: [`TaskPromptOption`](modules.md#taskpromptoption)[] ; `taskName`: `string`  } |
| `value.subTsks?` | [`TaskPromptOption`](modules.md#taskpromptoption)[] |
| `value.taskName` | `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:35

___

### TimestampPathsConfig

Ƭ **TimestampPathsConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `paths` | `string`[] |
| `timestamp` | `number` |

#### Defined in

@rnv/core/lib/system/types.d.ts:32

## Variables

### CoreEnvVars

• `Const` **CoreEnvVars**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BASE` | () => [`RnvEnvContext`](modules.md#rnvenvcontext) |
| `RNV_EXTENSIONS` | () => \{ `RNV_EXTENSIONS`: `string`[]  } |

#### Defined in

@rnv/core/lib/env/index.d.ts:2

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

@rnv/core/lib/schema/defaults.d.ts:1

___

### DEFAULT\_TASK\_DESCRIPTIONS

• `Const` **DEFAULT\_TASK\_DESCRIPTIONS**: `Record`\<`string`, `string`\>

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:2

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

@rnv/core/lib/system/exec.d.ts:3

___

### RnvFileName

• `Const` **RnvFileName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `package` | ``"package.json"`` |
| `renative` | ``"renative.json"`` |
| `renativeBuild` | ``"renative.build.json"`` |
| `renativeEngine` | ``"renative.engine.json"`` |
| `renativeLocal` | ``"renative.local.json"`` |
| `renativePlatforms` | ``"renative.platforms.json"`` |
| `renativePrivate` | ``"renative.private.json"`` |
| `renativeRuntime` | ``"renative.runtime.json"`` |
| `renativeTemplate` | ``"renative.template.json"`` |
| `renativeTemplates` | ``"renative.templates.json"`` |
| `renativeWorkspaces` | ``"renative.workspaces.json"`` |

#### Defined in

@rnv/core/lib/enums/fileName.d.ts:1

___

### RnvFolderName

• `Const` **RnvFolderName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `UP` | ``".."`` |
| `buildHooks` | ``"buildHooks"`` |
| `dotRnv` | ``".rnv"`` |
| `nodeModules` | ``"node_modules"`` |
| `npmCache` | ``"npm_cache"`` |
| `platformAssets` | ``"platformAssets"`` |
| `platformBuilds` | ``"platformBuilds"`` |
| `secrets` | ``"secrets"`` |
| `templateFiles` | ``"templateFiles"`` |
| `templateOverrides` | ``"templateOverrides"`` |

#### Defined in

@rnv/core/lib/enums/folderName.d.ts:1

___

### RnvPlatformName

• `Const` **RnvPlatformName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `android` | ``"android"`` |
| `androidtv` | ``"androidtv"`` |
| `androidwear` | ``"androidwear"`` |
| `chromecast` | ``"chromecast"`` |
| `firetv` | ``"firetv"`` |
| `ios` | ``"ios"`` |
| `kaios` | ``"kaios"`` |
| `linux` | ``"linux"`` |
| `macos` | ``"macos"`` |
| `tizen` | ``"tizen"`` |
| `tizenmobile` | ``"tizenmobile"`` |
| `tizenwatch` | ``"tizenwatch"`` |
| `tvos` | ``"tvos"`` |
| `web` | ``"web"`` |
| `webos` | ``"webos"`` |
| `webtv` | ``"webtv"`` |
| `windows` | ``"windows"`` |
| `xbox` | ``"xbox"`` |

#### Defined in

@rnv/core/lib/enums/platformName.d.ts:1

___

### RnvPlatforms

• `Const` **RnvPlatforms**: readonly [``"web"``, ``"ios"``, ``"android"``, ``"androidtv"``, ``"firetv"``, ``"tvos"``, ``"macos"``, ``"linux"``, ``"windows"``, ``"tizen"``, ``"webos"``, ``"chromecast"``, ``"kaios"``, ``"webtv"``, ``"androidwear"``, ``"tizenwatch"``, ``"tizenmobile"``, ``"xbox"``]

#### Defined in

@rnv/core/lib/enums/platformName.d.ts:21

___

### RnvTaskCoreOptionPresets

• `Const` **RnvTaskCoreOptionPresets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `withCore` | (`arr?`: [`RnvTaskOption`](modules.md#rnvtaskoption)[]) => [`RnvTaskOption`](modules.md#rnvtaskoption)[] |

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:206

___

### RnvTaskName

• `Const` **RnvTaskName**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appConfigure` | ``"app configure"`` |
| `appCreate` | ``"app create"`` |
| `appSwitch` | ``"app switch"`` |
| `build` | ``"build"`` |
| `clean` | ``"clean"`` |
| `config` | ``"config"`` |
| `configure` | ``"configure"`` |
| `configureSoft` | ``"configureSoft"`` |
| `cryptoDecrypt` | ``"crypto decrypt"`` |
| `cryptoEncrypt` | ``"crypto encrypt"`` |
| `cryptoInstallCerts` | ``"crypto installCerts"`` |
| `cryptoInstallProfile` | ``"crypto installProfile"`` |
| `cryptoInstallProfiles` | ``"crypto installProfiles"`` |
| `cryptoUpdateProfile` | ``"crypto updateProfile"`` |
| `cryptoUpdateProfiles` | ``"crypto updateProfiles"`` |
| `debug` | ``"debug"`` |
| `deploy` | ``"deploy"`` |
| `doctor` | ``"doctor"`` |
| `eject` | ``"eject"`` |
| `export` | ``"export"`` |
| `help` | ``"help"`` |
| `hooksList` | ``"hooks list"`` |
| `hooksPipes` | ``"hooks pipes"`` |
| `hooksRun` | ``"hooks run"`` |
| `info` | ``"info"`` |
| `kill` | ``"kill"`` |
| `link` | ``"link"`` |
| `log` | ``"log"`` |
| `new` | ``"new"`` |
| `package` | ``"package"`` |
| `pkg` | ``"pkg"`` |
| `platformConfigure` | ``"platform configure"`` |
| `platformConnect` | ``"platform connect"`` |
| `platformEject` | ``"platform eject"`` |
| `platformList` | ``"platform list"`` |
| `pluginAdd` | ``"plugin add"`` |
| `pluginList` | ``"plugin list"`` |
| `pluginUpdate` | ``"plugin update"`` |
| `projectConfigure` | ``"project configure"`` |
| `projectPlatforms` | ``"project platforms"`` |
| `projectUpgrade` | ``"project upgrade"`` |
| `publish` | ``"publish"`` |
| `run` | ``"run"`` |
| `sdkConfigure` | ``"sdk configure"`` |
| `start` | ``"start"`` |
| `status` | ``"status"`` |
| `switch` | ``"switch"`` |
| `target` | ``"target"`` |
| `targetLaunch` | ``"target launch"`` |
| `targetList` | ``"target list"`` |
| `telemetryDisable` | ``"telemetry disable"`` |
| `telemetryEnable` | ``"telemetry enable"`` |
| `telemetryStatus` | ``"telemetry status"`` |
| `templateAdd` | ``"template add"`` |
| `templateApply` | ``"template apply"`` |
| `templateList` | ``"template list"`` |
| `unlink` | ``"unlink"`` |
| `workspaceAdd` | ``"workspace add"`` |
| `workspaceConfigure` | ``"workspace configure"`` |
| `workspaceConnect` | ``"workspace connect"`` |
| `workspaceList` | ``"workspace list"`` |
| `workspaceUpdate` | ``"workspace update"`` |

#### Defined in

@rnv/core/lib/enums/taskName.d.ts:1

___

### RnvTaskOptionPresets

• `Const` **RnvTaskOptionPresets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `all` | `string`[] |
| `withAll` | (`arr?`: [`RnvTaskOption`](modules.md#rnvtaskoption)[]) => [`RnvTaskOption`](modules.md#rnvtaskoption)[] |
| `withConfigure` | (`arr?`: [`RnvTaskOption`](modules.md#rnvtaskoption)[]) => [`RnvTaskOption`](modules.md#rnvtaskoption)[] |
| `withRun` | (`arr?`: [`RnvTaskOption`](modules.md#rnvtaskoption)[]) => [`RnvTaskOption`](modules.md#rnvtaskoption)[] |

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:209

___

### RnvTaskOptions

• `Const` **RnvTaskOptions**: `Record`\<``"filter"`` \| ``"engine"`` \| ``"scheme"`` \| ``"target"`` \| ``"debug"`` \| ``"device"`` \| ``"info"`` \| ``"platform"`` \| ``"help"`` \| ``"only"`` \| ``"ci"`` \| ``"mono"`` \| ``"json"`` \| ``"yes"`` \| ``"unlinked"`` \| ``"reset"`` \| ``"hooks"`` \| ``"host"`` \| ``"port"`` \| ``"hosted"`` \| ``"printExec"`` \| ``"skipTasks"`` \| ``"maxErrorLength"`` \| ``"telemetryDebug"`` \| ``"packageManager"`` \| ``"npxMode"`` \| ``"configName"`` \| ``"skipDependencyCheck"`` \| ``"appConfigID"`` \| ``"skipRnvCheck"`` \| ``"exeMethod"`` \| ``"resetHard"`` \| ``"resetAssets"`` \| ``"hostIp"`` \| ``"debugIp"`` \| ``"skipTargetCheck"`` \| ``"resetAdb"``, [`RnvTaskOption`](modules.md#rnvtaskoption)\>

#### Defined in

@rnv/core/lib/tasks/constants.d.ts:203

___

### ZodFileSchema

• `Const` **ZodFileSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `zodConfigFileApp` | `AnyZodObject` |
| `zodConfigFileEngine` | `ZodObject` |
| `zodConfigFileIntegration` | `ZodObject` |
| `zodConfigFileLocal` | `ZodObject` |
| `zodConfigFileOverrides` | `ZodObject` |
| `zodConfigFilePlugin` | `AnyZodObject` |
| `zodConfigFilePrivate` | `ZodObject` |
| `zodConfigFileProject` | `AnyZodObject` |
| `zodConfigFileRoot` | `AnyZodObject` |
| `zodConfigFileRuntime` | `ZodObject` |
| `zodConfigFileTemplate` | `AnyZodObject` |
| `zodConfigFileTemplates` | `AnyZodObject` |
| `zodConfigFileWorkspace` | `ZodObject` |
| `zodConfigFileWorkspaces` | `ZodObject` |

#### Defined in

@rnv/core/lib/schema/index.d.ts:22

___

### ZodSharedSchema

• `Const` **ZodSharedSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_base` | typeof `_base` |
| `_common` | typeof `_common` |
| `_pAndroid` | typeof `_pAndroid` |
| `_pBase` | typeof `_pBase` |
| `_pIos` | typeof `_pIos` |
| `_platforms` | typeof `_platforms` |
| `_platformsFragmentsAndroid` | typeof `_platformsFragmentsAndroid` |
| `_platformsFragmentsBase` | typeof `_platformsFragmentsBase` |
| `_platformsFragmentsElectron` | typeof `_platformsFragmentsElectron` |
| `_platformsFragmentsIos` | typeof `_platformsFragmentsIos` |
| `_platformsFragmentsLightning` | typeof `_platformsFragmentsLightning` |
| `_platformsFragmentsNextJs` | typeof `_platformsFragmentsNextJs` |
| `_platformsFragmentsReactNative` | typeof `_platformsFragmentsReactNative` |
| `_platformsFragmentsTemplateAndroid` | typeof `_platformsFragmentsTemplateAndroid` |
| `_platformsFragmentsTemplateXcode` | typeof `_platformsFragmentsTemplateXcode` |
| `_platformsFragmentsTizen` | typeof `_platformsFragmentsTizen` |
| `_platformsFragmentsWeb` | typeof `_platformsFragmentsWeb` |
| `_platformsFragmentsWebos` | typeof `_platformsFragmentsWebos` |
| `_platformsFragmentsWindows` | typeof `_platformsFragmentsWindows` |
| `_plugins` | typeof `_plugins` |
| `_shared` | typeof `_shared` |

#### Defined in

@rnv/core/lib/schema/index.d.ts:533

___

### isSystemLinux

• `Const` **isSystemLinux**: `boolean`

#### Defined in

@rnv/core/lib/system/is.d.ts:2

___

### isSystemMac

• `Const` **isSystemMac**: `boolean`

#### Defined in

@rnv/core/lib/system/is.d.ts:1

___

### isSystemWin

• `Const` **isSystemWin**: `boolean`

#### Defined in

@rnv/core/lib/system/is.d.ts:3

___

### openCommand

• `Const` **openCommand**: `string`

#### Defined in

@rnv/core/lib/system/exec.d.ts:45

## Functions

### applyTemplate

▸ **applyTemplate**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/templates/index.d.ts:3

___

### areNodeModulesInstalled

▸ **areNodeModulesInstalled**(): `boolean`

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/projects/npm.d.ts:3

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

@rnv/core/lib/system/fs.d.ts:40

___

### buildHooks

▸ **buildHooks**(): `Promise`\<``true``\>

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/buildHooks/index.d.ts:2

___

### chalk

▸ **chalk**(): [`RnvApiChalk`](modules.md#rnvapichalk)

#### Returns

[`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

@rnv/core/lib/logger/index.d.ts:2

___

### checkAndCreateProjectPackage

▸ **checkAndCreateProjectPackage**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/package.d.ts:3

___

### checkAndMigrateProject

▸ **checkAndMigrateProject**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/migrator/index.d.ts:1

___

### checkForPluginDependencies

▸ **checkForPluginDependencies**(`postInjectHandler?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `postInjectHandler?` | [`AsyncCallback`](modules.md#asynccallback) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:11

___

### checkIfProjectAndNodeModulesExists

▸ **checkIfProjectAndNodeModulesExists**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:1

___

### checkNpxIsInstalled

▸ **checkNpxIsInstalled**(): `Promise`\<``true``\>

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:2

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

@rnv/core/lib/system/fs.d.ts:50

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

@rnv/core/lib/system/fs.d.ts:30

___

### cleanNodeModules

▸ **cleanNodeModules**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:7

___

### cleanPlaformAssets

▸ **cleanPlaformAssets**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/assets.d.ts:5

___

### cleanPlatformBuild

▸ **cleanPlatformBuild**(`platform`, `cleanAllPlatforms?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `cleanAllPlatforms?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:7

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

@rnv/core/lib/system/exec.d.ts:43

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

@rnv/core/lib/system/exec.d.ts:44

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

@rnv/core/lib/engines/index.d.ts:9

___

### configurePlugins

▸ **configurePlugins**(): `Promise`\<``true``\>

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:6

___

### configureRuntimeDefaults

▸ **configureRuntimeDefaults**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/context/runtime.d.ts:1

___

### configureTemplateFiles

▸ **configureTemplateFiles**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/templates/index.d.ts:1

___

### copyAssetsFolder

▸ **copyAssetsFolder**(`subPath?`, `customFn?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subPath?` | `string` |
| `customFn?` | (`c`: [`RnvContext`](modules.md#rnvcontext), `platform`: [`RnvPlatform`](modules.md#rnvplatform)) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/assets.d.ts:4

___

### copyBuildsFolder

▸ **copyBuildsFolder**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/appConfig.d.ts:1

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

@rnv/core/lib/system/fs.d.ts:52

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

@rnv/core/lib/system/fs.d.ts:20

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

@rnv/core/lib/system/fs.d.ts:23

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

@rnv/core/lib/system/fs.d.ts:26

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

@rnv/core/lib/system/fs.d.ts:25

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

@rnv/core/lib/system/fs.d.ts:24

___

### copyRuntimeAssets

▸ **copyRuntimeAssets**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/assets.d.ts:3

___

### copySharedPlatforms

▸ **copySharedPlatforms**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:10

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

@rnv/core/lib/plugins/index.d.ts:13

___

### createDependencyMutation

▸ **createDependencyMutation**(`opts`): [`DependencyMutation`](modules.md#dependencymutation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DependencyMutation`](modules.md#dependencymutation) |

#### Returns

[`DependencyMutation`](modules.md#dependencymutation)

#### Defined in

@rnv/core/lib/projects/mutations.d.ts:2

___

### createPlatformBuild

▸ **createPlatformBuild**(`platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:8

___

### createRnvApi

▸ **createRnvApi**(`_api?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_api?` | `Object` |
| `_api.analytics` | [`RnvContextAnalytics`](modules.md#rnvcontextanalytics) |
| `_api.doResolve` | [`DoResolveFn`](modules.md#doresolvefn) |
| `_api.getConfigProp` | \<T\>(`key`: `T`, `defaultVal?`: [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment)[`T`], `obj?`: `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\>) => [`ConfigPlatformSchemaFragment`](modules.md#configplatformschemafragment)[`T`] |
| `_api.logger` | [`RnvApiLogger`](modules.md#rnvapilogger) |
| `_api.prompt` | [`RnvApiPrompt`](modules.md#rnvapiprompt) |
| `_api.spinner` | [`RnvApiSpinner`](modules.md#rnvapispinner) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/api/index.d.ts:3

___

### createRnvContext

▸ **createRnvContext**(`ctxOpts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctxOpts?` | [`CreateContextOptions`](modules.md#createcontextoptions) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/context/index.d.ts:3

___

### createRnvEngine

▸ **createRnvEngine**\<`OKey`\>(`opts`): [`RnvEngine`](modules.md#rnvengine)\<`OKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateRnvEngineOpts`](modules.md#creaternvengineopts)\<`OKey`\> |

#### Returns

[`RnvEngine`](modules.md#rnvengine)\<`OKey`\>

#### Defined in

@rnv/core/lib/engines/creator.d.ts:2

___

### createRnvIntegration

▸ **createRnvIntegration**\<`OKey`\>(`opts`): [`RnvIntegration`](modules.md#rnvintegration)\<`OKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateRnvIntegrationOpts`](modules.md#creaternvintegrationopts)\<`OKey`\> |

#### Returns

[`RnvIntegration`](modules.md#rnvintegration)\<`OKey`\>

#### Defined in

@rnv/core/lib/integrations/creator.d.ts:2

___

### createRnvSDK

▸ **createRnvSDK**\<`OKey`\>(`opts`): [`RnvSdk`](modules.md#rnvsdk)\<`OKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CreateRnvSdkOpts`](modules.md#creaternvsdkopts)\<`OKey`\> |

#### Returns

[`RnvSdk`](modules.md#rnvsdk)\<`OKey`\>

#### Defined in

@rnv/core/lib/sdks/creator.d.ts:2

___

### createTask

▸ **createTask**\<`OKey`\>(`task`): [`RnvTask`](modules.md#rnvtask)\<`OKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`CreateRnvTaskOpt`](modules.md#creaternvtaskopt)\<`OKey`\> |

#### Returns

[`RnvTask`](modules.md#rnvtask)\<`OKey`\>

#### Defined in

@rnv/core/lib/tasks/creators.d.ts:2

___

### createTaskOptionsMap

▸ **createTaskOptionsMap**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/tasks/creators.d.ts:3

___

### createWorkspace

▸ **createWorkspace**(`workspaceID`, `workspacePath`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `workspaceID` | `string` |
| `workspacePath` | `string` |

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:3

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

@rnv/core/lib/system/resolve.d.ts:18

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

@rnv/core/lib/system/resolve.d.ts:19

___

### ejectPlatform

▸ **ejectPlatform**(`platform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:11

___

### execCLI

▸ **execCLI**(`cli`, `command`, `opts?`): `Promise`\<`string`\>

Execute CLI command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cli` | `string` | the cli to be executed |
| `command` | `string` | the command to be executed |
| `opts?` | [`ExecOptions`](modules.md#execoptions) | the options for the command |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:20

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

@rnv/core/lib/system/exec.d.ts:31

___

### executeAsync

▸ **executeAsync**(`cmd`, `opts?`): `Promise`\<`string`\>

Execute a plain command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | `string` \| `string`[] | - |
| `opts?` | [`ExecOptions`](modules.md#execoptions) | the options for the command |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:30

___

### executePipe

▸ **executePipe**(`key`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/buildHooks/index.d.ts:1

___

### executeRnvCore

▸ **executeRnvCore**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/runner.d.ts:2

___

### executeTask

▸ **executeTask**(`opts`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.alternativeTaskInOnlyMode?` | `string` |
| `opts.isFirstTask?` | `boolean` |
| `opts.isOptional?` | `boolean` |
| `opts.originTaskName?` | `string` |
| `opts.parentTaskName?` | `string` |
| `opts.skipInOnlyMode?` | `boolean` |
| `opts.taskName` | `string` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

@rnv/core/lib/tasks/taskExecutors.d.ts:2

___

### executeTelnet

▸ **executeTelnet**(`port`, `command`): `Promise`\<`string`\>

Connect to a local telnet server and execute a command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `port` | `string` | where do you want me to connect to? |
| `command` | `string` | the command to be executed once I'm connected |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:41

___

### exitRnvCore

▸ **exitRnvCore**(`code`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/runner.d.ts:1

___

### extractSingleExecutableTask

▸ **extractSingleExecutableTask**(`suitableTasks`, `taskName`): `Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `suitableTasks` | [`RnvTask`](modules.md#rnvtask)[] |
| `taskName` | `string` |

#### Returns

`Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Defined in

@rnv/core/lib/tasks/taskFinder.d.ts:7

___

### findSuitableTask

▸ **findSuitableTask**(): `Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Returns

`Promise`\<[`RnvTask`](modules.md#rnvtask)\>

#### Defined in

@rnv/core/lib/tasks/taskFinder.d.ts:2

___

### findTasksByTaskName

▸ **findTasksByTaskName**(`taskName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskName` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `available` | [`RnvTask`](modules.md#rnvtask)\<`string`\>[] |
| `match` | [`RnvTask`](modules.md#rnvtask)[] |

#### Defined in

@rnv/core/lib/tasks/taskFinder.d.ts:3

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

@rnv/core/lib/formatter/index.d.ts:2

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

@rnv/core/lib/formatter/index.d.ts:3

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

@rnv/core/lib/system/fs.d.ts:48

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

@rnv/core/lib/system/fs.d.ts:12

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

@rnv/core/lib/system/fs.d.ts:7

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

@rnv/core/lib/system/fs.d.ts:8

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

@rnv/core/lib/system/fs.d.ts:10

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

@rnv/core/lib/system/fs.d.ts:15

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

@rnv/core/lib/system/fs.d.ts:18

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

@rnv/core/lib/system/fs.d.ts:11

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

@rnv/core/lib/system/fs.d.ts:19

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

@rnv/core/lib/system/fs.d.ts:9

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

@rnv/core/lib/system/fs.d.ts:13

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

@rnv/core/lib/system/fs.d.ts:14

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

@rnv/core/lib/system/fs.d.ts:17

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

@rnv/core/lib/system/fs.d.ts:16

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

@rnv/core/lib/system/fs.d.ts:6

___

### generateBuildConfig

▸ **generateBuildConfig**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/buildConfig.d.ts:1

___

### generateContextDefaults

▸ **generateContextDefaults**(): [`RnvContext`](modules.md#rnvcontext)

#### Returns

[`RnvContext`](modules.md#rnvcontext)

#### Defined in

@rnv/core/lib/context/defaults.d.ts:8

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

@rnv/core/lib/context/index.d.ts:2

___

### generateDefaultChalk

▸ **generateDefaultChalk**(): [`RnvApiChalk`](modules.md#rnvapichalk)

#### Returns

[`RnvApiChalk`](modules.md#rnvapichalk)

#### Defined in

@rnv/core/lib/logger/defaults.d.ts:2

___

### generateEngineExtensions

▸ **generateEngineExtensions**(`exts`, `config`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `exts` | `string`[] |
| `config` | `Object` |
| `config.custom?` | `any` |
| `config.engineExtension?` | `string` |
| `config.id?` | `string` |
| `config.npm?` | `Object` |
| `config.npm.dependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.devDependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.optionalDependencies?` | `Record`\<`string`, `string`\> |
| `config.npm.peerDependencies?` | `Record`\<`string`, `string`\> |
| `config.overview?` | `string` |
| `config.packageName?` | `string` |
| `config.platforms?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``, \{ `engine?`: `string` ; `npm?`: \{ `dependencies?`: `Record`\<`string`, `string`\> ; `devDependencies?`: `Record`\<`string`, `string`\> ; `optionalDependencies?`: `Record`\<`string`, `string`\> ; `peerDependencies?`: `Record`\<`string`, `string`\>  }  }\>\> |
| `config.plugins?` | `Record`\<`string`, `string`\> |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:8

___

### generateLocalConfig

▸ **generateLocalConfig**(`resetAppId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resetAppId?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/configLocal.d.ts:1

___

### generateLocalJsonSchemas

▸ **generateLocalJsonSchemas**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/schema/schemaManager.d.ts:1

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

@rnv/core/lib/api/index.d.ts:13

___

### generatePlatformAssetsRuntimeConfig

▸ **generatePlatformAssetsRuntimeConfig**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/configs/platformAssets.d.ts:1

___

### generatePlatformChoices

▸ **generatePlatformChoices**(): \{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``  }[]

#### Returns

\{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``  }[]

#### Defined in

@rnv/core/lib/platforms/index.d.ts:2

___

### generatePlatformTemplatePaths

▸ **generatePlatformTemplatePaths**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:7

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

@rnv/core/lib/context/defaults.d.ts:3

___

### generateRnvConfigPathObj

▸ **generateRnvConfigPathObj**(): [`RnvContextPathObj`](modules.md#rnvcontextpathobj)

#### Returns

[`RnvContextPathObj`](modules.md#rnvcontextpathobj)

#### Defined in

@rnv/core/lib/context/defaults.d.ts:2

___

### generateRnvTaskMap

▸ **generateRnvTaskMap**\<`OKey`\>(`taskArr`, `config`): [`RnvTaskMap`](modules.md#rnvtaskmap)\<`OKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OKey` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskArr` | readonly [`RnvTask`](modules.md#rnvtask)\<`OKey`\>[] |
| `config` | `Object` |
| `config.name?` | `string` |
| `config.packageName?` | `string` |

#### Returns

[`RnvTaskMap`](modules.md#rnvtaskmap)\<`OKey`\>

#### Defined in

@rnv/core/lib/tasks/taskHelpers.d.ts:4

___

### generateStringFromTaskOption

▸ **generateStringFromTaskOption**(`opt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opt` | [`RnvTaskOption`](modules.md#rnvtaskoption) |

#### Returns

`string`

#### Defined in

@rnv/core/lib/tasks/taskHelpers.d.ts:8

___

### getApi

▸ **getApi**(): [`RnvApi`](modules.md#rnvapi)

#### Returns

[`RnvApi`](modules.md#rnvapi)

#### Defined in

@rnv/core/lib/api/provider.d.ts:2

___

### getAppConfigBuildsFolder

▸ **getAppConfigBuildsFolder**(`customPath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `customPath?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:9

___

### getAppFolder

▸ **getAppFolder**(`isRelativePath?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRelativePath?` | `boolean` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:7

___

### getConfigProp

▸ **getConfigProp**\<`T`, `K`\>(`key`, `obj?`): [`GetConfigPropVal`](modules.md#getconfigpropval)\<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `obj?` | `Partial`\<[`ConfigFileBuildConfig`](modules.md#configfilebuildconfig)\> |

#### Returns

[`GetConfigPropVal`](modules.md#getconfigpropval)\<`T`, `K`\>

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:4

___

### getConfigRootProp

▸ **getConfigRootProp**\<`T`, `K`\>(`key`): [`GetConfigRootPropVal`](modules.md#getconfigrootpropval)\<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

[`GetConfigRootPropVal`](modules.md#getconfigrootpropval)\<`T`, `K`\>

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:3

___

### getContext

▸ **getContext**\<`C`, `T`\>(): [`RnvContext`](modules.md#rnvcontext)\<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | `any` |
| `T` | extends `string` = ``"filter"`` \| ``"platform"`` \| ``"port"`` \| ``"reset"`` \| ``"target"`` \| ``"host"`` \| ``"json"`` \| ``"unlinked"`` \| ``"engine"`` \| ``"scheme"`` \| ``"debug"`` \| ``"device"`` \| ``"info"`` \| ``"help"`` \| ``"only"`` \| ``"ci"`` \| ``"mono"`` \| ``"yes"`` \| ``"hooks"`` \| ``"hosted"`` \| ``"printExec"`` \| ``"skipTasks"`` \| ``"maxErrorLength"`` \| ``"telemetryDebug"`` \| ``"packageManager"`` \| ``"npxMode"`` \| ``"configName"`` \| ``"skipDependencyCheck"`` \| ``"appConfigID"`` \| ``"skipRnvCheck"`` \| ``"exeMethod"`` \| ``"resetHard"`` \| ``"resetAssets"`` \| ``"hostIp"`` \| ``"debugIp"`` \| ``"skipTargetCheck"`` \| ``"resetAdb"`` |

#### Returns

[`RnvContext`](modules.md#rnvcontext)\<`C`, `T`\>

#### Defined in

@rnv/core/lib/context/provider.d.ts:2

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

@rnv/core/lib/logger/index.d.ts:5

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

@rnv/core/lib/system/fs.d.ts:49

___

### getEngineRunnerByOwnerID

▸ **getEngineRunnerByOwnerID**(`task`): [`RnvEngine`](modules.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`RnvTask`](modules.md#rnvtask) |

#### Returns

[`RnvEngine`](modules.md#rnvengine)

#### Defined in

@rnv/core/lib/engines/index.d.ts:17

___

### getEngineRunnerByPlatform

▸ **getEngineRunnerByPlatform**(`platform`, `ignoreMissingError?`): [`RnvEngine`](modules.md#rnvengine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |
| `ignoreMissingError?` | `boolean` |

#### Returns

[`RnvEngine`](modules.md#rnvengine)

#### Defined in

@rnv/core/lib/engines/index.d.ts:16

___

### getEngineTemplateByPlatform

▸ **getEngineTemplateByPlatform**(`platform`): [`RnvEngineTemplate`](modules.md#rnvenginetemplate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

[`RnvEngineTemplate`](modules.md#rnvenginetemplate)

#### Defined in

@rnv/core/lib/configs/engines.d.ts:3

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

@rnv/core/lib/system/fs.d.ts:46

___

### getFlavouredProp

▸ **getFlavouredProp**\<`T`, `K`\>(`obj`, `key`): `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `key` | `K` |

#### Returns

`T`[`K`]

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:5

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

@rnv/core/lib/plugins/index.d.ts:16

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

@rnv/core/lib/plugins/index.d.ts:5

___

### getPlatformProjectDir

▸ **getPlatformProjectDir**(): `string`

#### Returns

`string`

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:8

___

### getRealPath

▸ **getRealPath**(`p`, `key?`, `original?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |
| `key?` | `string` |
| `original?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:39

___

### getRegisteredEngines

▸ **getRegisteredEngines**(): [`RnvEngine`](modules.md#rnvengine)[]

#### Returns

[`RnvEngine`](modules.md#rnvengine)[]

#### Defined in

@rnv/core/lib/engines/index.d.ts:18

___

### getRegisteredTasks

▸ **getRegisteredTasks**(): [`RnvTaskMap`](modules.md#rnvtaskmap)

#### Returns

[`RnvTaskMap`](modules.md#rnvtaskmap)

#### Defined in

@rnv/core/lib/tasks/taskRegistry.d.ts:3

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

@rnv/core/lib/system/fs.d.ts:51

___

### getTaskNameFromCommand

▸ **getTaskNameFromCommand**(): `string`

#### Returns

`string`

#### Defined in

@rnv/core/lib/tasks/taskHelpers.d.ts:3

___

### getTimestampPathsConfig

▸ **getTimestampPathsConfig**(): [`TimestampPathsConfig`](modules.md#timestamppathsconfig)

#### Returns

[`TimestampPathsConfig`](modules.md#timestamppathsconfig)

#### Defined in

@rnv/core/lib/context/contextProps.d.ts:6

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

@rnv/core/lib/configs/workspaces.d.ts:5

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

@rnv/core/lib/configs/workspaces.d.ts:4

___

### getWorkspaceOptions

▸ **getWorkspaceOptions**(): [`PromptOptions`](modules.md#promptoptions)

#### Returns

[`PromptOptions`](modules.md#promptoptions)

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:6

___

### handleMutations

▸ **handleMutations**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/mutations.d.ts:3

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

@rnv/core/lib/plugins/index.d.ts:15

___

### initializeTask

▸ **initializeTask**(`taskInstance`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskInstance` | [`RnvTask`](modules.md#rnvtask) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/tasks/taskExecutors.d.ts:11

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

@rnv/core/lib/api/index.d.ts:11

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

@rnv/core/lib/api/index.d.ts:12

___

### installEngines

▸ **installEngines**(`failOnMissingDeps?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `failOnMissingDeps?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:14

___

### installPackageDependencies

▸ **installPackageDependencies**(`failOnError?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `failOnError?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:6

___

### isInfoEnabled

▸ **isInfoEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/logger/index.d.ts:17

___

### isPlatformActive

▸ **isPlatformActive**(`resolve?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolve?` | () => `void` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:9

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

@rnv/core/lib/system/resolve.d.ts:20

___

### isTemplateInstalled

▸ **isTemplateInstalled**(): `string` \| ``false``

#### Returns

`string` \| ``false``

#### Defined in

@rnv/core/lib/templates/index.d.ts:2

___

### isYarnInstalled

▸ **isYarnInstalled**(): `string` \| ``true``

#### Returns

`string` \| ``true``

#### Defined in

@rnv/core/lib/projects/npm.d.ts:5

___

### listAndSelectNpmVersion

▸ **listAndSelectNpmVersion**(`npmPackage`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `npmPackage` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:4

___

### listAppConfigsFoldersSync

▸ **listAppConfigsFoldersSync**(`ignoreHiddenConfigs`, `appConfigsDirPath?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreHiddenConfigs` | `boolean` |
| `appConfigsDirPath?` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/configs/appConfigs.d.ts:1

___

### loadDefaultConfigTemplates

▸ **loadDefaultConfigTemplates**(): `Promise`\<`undefined`\>

#### Returns

`Promise`\<`undefined`\>

#### Defined in

@rnv/core/lib/configs/index.d.ts:3

___

### loadEnginePackageDeps

▸ **loadEnginePackageDeps**(`engineConfigs`): `Promise`\<``true`` \| ``0``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `engineConfigs` | [`RnvEngineInstallConfig`](modules.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<``true`` \| ``0``\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:13

___

### loadEnginePluginDeps

▸ **loadEnginePluginDeps**(`engineConfigs`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `engineConfigs` | [`RnvEngineInstallConfig`](modules.md#rnvengineinstallconfig)[] |

#### Returns

`Promise`\<`number`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:12

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

@rnv/core/lib/system/fs.d.ts:47

___

### loadFileExtended

▸ **loadFileExtended**(`fileObj`, `pathObj`, `key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileObj` | `Record`\<`string`, `any`\> |
| `pathObj` | [`RnvContextPathObj`](modules.md#rnvcontextpathobj) |
| `key` | [`RnvContextFileKey`](modules.md#rnvcontextfilekey) |

#### Returns

`any`

#### Defined in

@rnv/core/lib/configs/index.d.ts:2

___

### loadIntegrations

▸ **loadIntegrations**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/integrations/index.d.ts:1

___

### loadPluginTemplates

▸ **loadPluginTemplates**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:9

___

### loadWorkspacesConfigSync

▸ **loadWorkspacesConfigSync**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:7

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

@rnv/core/lib/logger/index.d.ts:4

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

@rnv/core/lib/logger/index.d.ts:21

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

@rnv/core/lib/logger/index.d.ts:16

___

### logDefault

▸ **logDefault**(`task`, `customChalk?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `string` |
| `customChalk?` | `any` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:10

___

### logError

▸ **logError**(`e`, `opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |
| `opts?` | `Object` |
| `opts.skipAnalytics` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:19

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

@rnv/core/lib/logger/index.d.ts:12

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

@rnv/core/lib/logger/index.d.ts:13

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

@rnv/core/lib/logger/index.d.ts:15

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

@rnv/core/lib/logger/index.d.ts:11

___

### logInitialize

▸ **logInitialize**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:20

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

@rnv/core/lib/logger/index.d.ts:7

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

@rnv/core/lib/logger/index.d.ts:18

___

### logSummary

▸ **logSummary**(`opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Object` |
| `opts.header` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:8

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

@rnv/core/lib/logger/index.d.ts:9

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

@rnv/core/lib/logger/index.d.ts:6

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

@rnv/core/lib/logger/index.d.ts:14

___

### logWelcome

▸ **logWelcome**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/logger/index.d.ts:3

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

@rnv/core/lib/system/fs.d.ts:44

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

@rnv/core/lib/system/fs.d.ts:29

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

▸ **overrideTemplatePlugins**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:12

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

@rnv/core/lib/system/exec.d.ts:42

___

### parseFonts

▸ **parseFonts**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ParseFontsCallback`](modules.md#parsefontscallback) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/projects/fonts.d.ts:2

___

### parsePlugins

▸ **parsePlugins**(`pluginCallback`, `ignorePlatformObjectCheck?`, `includeDisabledOrExcludedPlugins?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginCallback` | [`PluginCallback`](modules.md#plugincallback) |
| `ignorePlatformObjectCheck?` | `boolean` |
| `includeDisabledOrExcludedPlugins?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/plugins/index.d.ts:8

___

### parseRenativeConfigs

▸ **parseRenativeConfigs**(): `Promise`\<`undefined`\>

#### Returns

`Promise`\<`undefined`\>

#### Defined in

@rnv/core/lib/configs/index.d.ts:4

___

### populateContextPaths

▸ **populateContextPaths**(`c`, `RNV_HOME_DIR`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `RNV_HOME_DIR` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/context/index.d.ts:4

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

@rnv/core/lib/logger/index.d.ts:23

___

### printBoxEnd

▸ **printBoxEnd**(): `string`

#### Returns

`string`

#### Defined in

@rnv/core/lib/logger/index.d.ts:25

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

@rnv/core/lib/logger/index.d.ts:24

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

@rnv/core/lib/logger/index.d.ts:22

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

@rnv/core/lib/system/fs.d.ts:22

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

@rnv/core/lib/system/fs.d.ts:37

___

### registerAllPlatformEngines

▸ **registerAllPlatformEngines**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:11

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

@rnv/core/lib/engines/index.d.ts:6

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

@rnv/core/lib/engines/index.d.ts:7

___

### registerMissingPlatformEngines

▸ **registerMissingPlatformEngines**(`taskInstance?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskInstance?` | [`RnvTask`](modules.md#rnvtask) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:10

___

### registerPlatformEngine

▸ **registerPlatformEngine**(`platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `platform` | `boolean` \| [`RnvPlatform`](modules.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/engines/index.d.ts:15

___

### registerRnvTasks

▸ **registerRnvTasks**(`tasks`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | [`RnvTaskMap`](modules.md#rnvtaskmap) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/tasks/taskRegistry.d.ts:2

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

@rnv/core/lib/system/fs.d.ts:28

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

@rnv/core/lib/system/fs.d.ts:34

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

@rnv/core/lib/system/fs.d.ts:33

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

@rnv/core/lib/system/fs.d.ts:32

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

@rnv/core/lib/system/fs.d.ts:31

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

@rnv/core/lib/system/fs.d.ts:45

___

### resolveEngineDependencies

▸ **resolveEngineDependencies**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/engines/dependencyResolver.d.ts:1

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

@rnv/core/lib/system/fs.d.ts:42

___

### resolvePluginDependants

▸ **resolvePluginDependants**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:7

___

### resolveRelativePackage

▸ **resolveRelativePackage**(`c`, `v`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](modules.md#rnvcontext) |
| `v` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/projects/utils.d.ts:2

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

@rnv/core/lib/system/fs.d.ts:43

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

@rnv/core/lib/system/fs.d.ts:41

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

@rnv/core/lib/plugins/index.d.ts:14

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

@rnv/core/lib/system/fs.d.ts:27

___

### selectPlatformIfRequired

▸ **selectPlatformIfRequired**(`knownTaskInstance?`, `registerEngineIfPlatformSelected?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `knownTaskInstance?` | [`RnvTask`](modules.md#rnvtask)\<`string`\> |
| `registerEngineIfPlatformSelected?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/tasks/taskHelpers.d.ts:2

___

### shouldSkipTask

▸ **shouldSkipTask**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `taskName` | `string` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/tasks/taskHelpers.d.ts:9

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

@rnv/core/lib/system/fs.d.ts:38

___

### updatePackage

▸ **updatePackage**(`override`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `override` | `Partial`\<[`NpmPackageFile`](modules.md#npmpackagefile)\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/projects/package.d.ts:2

___

### updateProjectPlatforms

▸ **updateProjectPlatforms**(`platforms`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `platforms` | (``"android"`` \| ``"linux"`` \| ``"web"`` \| ``"ios"`` \| ``"androidtv"`` \| ``"firetv"`` \| ``"tvos"`` \| ``"macos"`` \| ``"windows"`` \| ``"tizen"`` \| ``"webos"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"webtv"`` \| ``"androidwear"`` \| ``"tizenwatch"`` \| ``"tizenmobile"`` \| ``"xbox"``)[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:6

___

### updateRenativeConfigs

▸ **updateRenativeConfigs**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/plugins/index.d.ts:27

___

### upgradeDependencies

▸ **upgradeDependencies**(`packageFile`, `packagesPath`, `configFile`, `configPath`, `version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageFile` | [`NpmPackageFile`](modules.md#npmpackagefile) |
| `packagesPath` | `string` |
| `configFile` | [`ConfigFileProject`](modules.md#configfileproject) |
| `configPath` | `string` |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:5

___

### upgradeProjectDependencies

▸ **upgradeProjectDependencies**(`version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:4

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

@rnv/core/lib/schema/validators.d.ts:1

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

@rnv/core/lib/projects/version.d.ts:2

___

### waitForExecCLI

▸ **waitForExecCLI**(`cli`, `command`, `callback`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cli` | `string` |
| `command` | `string` |
| `callback` | (`resp`: `string` \| ``true``) => `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/system/exec.d.ts:46

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

@rnv/core/lib/system/fs.d.ts:21

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

@rnv/core/lib/system/fs.d.ts:35

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

@rnv/core/lib/system/fs.d.ts:36

___

### writeRenativeConfigFile

▸ **writeRenativeConfigFile**(`configPath`, `configData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configPath` | `string` |
| `configData` | `string` \| `object` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/utils.d.ts:1
