---
id: "schema_common"
title: "Module: schema/common"
sidebar_label: "schema/common"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_CommonSchemaType

Ƭ **\_CommonSchemaType**: `z.infer`\<typeof [`CommonSchema`](schema_common.md#commonschema)\>

#### Defined in

@rnv/core/lib/schema/common/index.d.ts:261

## Variables

### CommonSchema

• `Const` **CommonSchema**: `z.ZodObject`\<\{ `assetSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `author`: `z.ZodOptional`\<`z.ZodString`\> ; `backgroundColor`: `z.ZodOptional`\<`z.ZodString`\> ; `buildSchemes`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `assetFolderPlatform`: `z.ZodOptional`\<`z.ZodString`\> ; `assetSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `author`: `z.ZodOptional`\<`z.ZodString`\> ; `backgroundColor`: `z.ZodOptional`\<`z.ZodString`\> ; `bundleAssets`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `bundleIsDev`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `custom`: `z.ZodOptional`\<`z.ZodAny`\> ; `description`: `z.ZodOptional`\<`z.ZodString`\> ; `enableSourceMaps`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `enabled`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `engine`: `z.ZodOptional`\<`z.ZodString`\> ; `entryFile`: `z.ZodOptional`\<`z.ZodDefault`\<`z.ZodString`\>\> ; `excludedPermissions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `excludedPlugins`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `extendPlatform`: `z.ZodOptional`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>\> ; `fontSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `getJsBundleFile`: `z.ZodOptional`\<`z.ZodString`\> ; `id`: `z.ZodOptional`\<`z.ZodString`\> ; `idSuffix`: `z.ZodOptional`\<`z.ZodString`\> ; `includedFonts`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `includedPermissions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `includedPlugins`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `license`: `z.ZodOptional`\<`z.ZodString`\> ; `runtime`: `z.ZodOptional`\<`z.ZodAny`\> ; `splashScreen`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `title`: `z.ZodOptional`\<`z.ZodString`\> ; `version`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCode`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCodeFormat`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCodeOffset`: `z.ZodOptional`\<`z.ZodNumber`\> ; `versionFormat`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `custom?`: `any` ; `description?`: `string` ; `enableSourceMaps?`: `boolean` ; `enabled?`: `boolean` ; `engine?`: `string` ; `entryFile?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `extendPlatform?`: ``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"`` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }, \{ `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `custom?`: `any` ; `description?`: `string` ; `enableSourceMaps?`: `boolean` ; `enabled?`: `boolean` ; `engine?`: `string` ; `entryFile?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `extendPlatform?`: ``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"`` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }\>\>\> ; `custom`: `z.ZodOptional`\<`z.ZodAny`\> ; `description`: `z.ZodOptional`\<`z.ZodString`\> ; `excludedPermissions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `excludedPlugins`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `fontSources`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `id`: `z.ZodOptional`\<`z.ZodString`\> ; `idSuffix`: `z.ZodOptional`\<`z.ZodString`\> ; `includedFonts`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `includedPermissions`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `includedPlugins`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `license`: `z.ZodOptional`\<`z.ZodString`\> ; `runtime`: `z.ZodOptional`\<`z.ZodAny`\> ; `splashScreen`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `title`: `z.ZodOptional`\<`z.ZodString`\> ; `version`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCode`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCodeFormat`: `z.ZodOptional`\<`z.ZodString`\> ; `versionCodeOffset`: `z.ZodOptional`\<`z.ZodNumber`\> ; `versionFormat`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildSchemes?`: `Record`\<`string`, \{ `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `custom?`: `any` ; `description?`: `string` ; `enableSourceMaps?`: `boolean` ; `enabled?`: `boolean` ; `engine?`: `string` ; `entryFile?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `extendPlatform?`: ``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"`` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }\> ; `custom?`: `any` ; `description?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `fontSources?`: `string`[] ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }, \{ `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `buildSchemes?`: `Record`\<`string`, \{ `assetFolderPlatform?`: `string` ; `assetSources?`: `string`[] ; `author?`: `string` ; `backgroundColor?`: `string` ; `bundleAssets?`: `boolean` ; `bundleIsDev?`: `boolean` ; `custom?`: `any` ; `description?`: `string` ; `enableSourceMaps?`: `boolean` ; `enabled?`: `boolean` ; `engine?`: `string` ; `entryFile?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `extendPlatform?`: ``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"`` ; `fontSources?`: `string`[] ; `getJsBundleFile?`: `string` ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }\> ; `custom?`: `any` ; `description?`: `string` ; `excludedPermissions?`: `string`[] ; `excludedPlugins?`: `string`[] ; `fontSources?`: `string`[] ; `id?`: `string` ; `idSuffix?`: `string` ; `includedFonts?`: `string`[] ; `includedPermissions?`: `string`[] ; `includedPlugins?`: `string`[] ; `license?`: `string` ; `runtime?`: `any` ; `splashScreen?`: `boolean` ; `title?`: `string` ; `version?`: `string` ; `versionCode?`: `string` ; `versionCodeFormat?`: `string` ; `versionCodeOffset?`: `number` ; `versionFormat?`: `string`  }\>

#### Defined in

@rnv/core/lib/schema/common/index.d.ts:28

___

### CommonSchemaFragment

• `Const` **CommonSchemaFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assetSources` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `author` | `z.ZodOptional`\<`z.ZodString`\> |
| `backgroundColor` | `z.ZodOptional`\<`z.ZodString`\> |
| `custom` | `z.ZodOptional`\<`z.ZodAny`\> |
| `description` | `z.ZodOptional`\<`z.ZodString`\> |
| `excludedPermissions` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `excludedPlugins` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `fontSources` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `id` | `z.ZodOptional`\<`z.ZodString`\> |
| `idSuffix` | `z.ZodOptional`\<`z.ZodString`\> |
| `includedFonts` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `includedPermissions` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `includedPlugins` | `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> |
| `license` | `z.ZodOptional`\<`z.ZodString`\> |
| `runtime` | `z.ZodOptional`\<`z.ZodAny`\> |
| `splashScreen` | `z.ZodOptional`\<`z.ZodBoolean`\> |
| `title` | `z.ZodOptional`\<`z.ZodString`\> |
| `version` | `z.ZodOptional`\<`z.ZodString`\> |
| `versionCode` | `z.ZodOptional`\<`z.ZodString`\> |
| `versionCodeFormat` | `z.ZodOptional`\<`z.ZodString`\> |
| `versionCodeOffset` | `z.ZodOptional`\<`z.ZodNumber`\> |
| `versionFormat` | `z.ZodOptional`\<`z.ZodString`\> |

#### Defined in

@rnv/core/lib/schema/common/index.d.ts:4

___

### License

• `Const` **License**: `z.ZodString`

#### Defined in

@rnv/core/lib/schema/common/index.d.ts:3

___

### SplashScreen

• `Const` **SplashScreen**: `z.ZodBoolean`

#### Defined in

@rnv/core/lib/schema/common/index.d.ts:2
