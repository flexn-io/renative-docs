---
id: "schema_configFiles_workspace"
title: "Module: schema/configFiles/workspace"
sidebar_label: "schema/configFiles/workspace"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_RootWorkspaceSchemaType

Ƭ **\_RootWorkspaceSchemaType**: `z.infer`\<typeof [`RootWorkspaceSchema`](schema_configFiles_workspace.md#rootworkspaceschema)\>

#### Defined in

@rnv/core/lib/schema/configFiles/workspace.d.ts:51

## Variables

### RootWorkspaceSchema

• `Const` **RootWorkspaceSchema**: `z.ZodObject`\<\{ `appConfigsPath`: `z.ZodOptional`\<`z.ZodString`\> ; `defaultTargets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\> ; `disableTelemetry`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `projectTemplates`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\>\> ; `sdks`: `z.ZodOptional`\<`z.ZodObject`\<\{ `ANDROID_NDK`: `z.ZodOptional`\<`z.ZodString`\> ; `ANDROID_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `KAIOS_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `TIZEN_SDK`: `z.ZodOptional`\<`z.ZodString`\> ; `WEBOS_SDK`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }, \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `appConfigsPath?`: `string` ; `defaultTargets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `disableTelemetry?`: `boolean` ; `projectTemplates?`: `Record`\<`string`, {}\> ; `sdks?`: \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }  }, \{ `appConfigsPath?`: `string` ; `defaultTargets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `disableTelemetry?`: `boolean` ; `projectTemplates?`: `Record`\<`string`, {}\> ; `sdks?`: \{ `ANDROID_NDK?`: `string` ; `ANDROID_SDK?`: `string` ; `KAIOS_SDK?`: `string` ; `TIZEN_SDK?`: `string` ; `WEBOS_SDK?`: `string`  }  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/workspace.d.ts:2
