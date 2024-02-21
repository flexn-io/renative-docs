---
id: "schema_configFiles_project"
title: "Module: schema/configFiles/project"
sidebar_label: "schema/configFiles/project"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_RootProjectBaseSchemaType

Ƭ **\_RootProjectBaseSchemaType**: `z.infer`\<typeof `RootProjectBaseSchema`\>

#### Defined in

@rnv/core/lib/schema/configFiles/project.d.ts:37766

___

### \_RootProjectSchemaType

Ƭ **\_RootProjectSchemaType**: `z.infer`\<typeof `RootProjectBaseSchema`\> & `z.infer`\<typeof `RootProjectCommonSchema`\> & `z.infer`\<typeof `RootProjectPlatformsSchema`\> & `z.infer`\<typeof `RootProjectPluginsSchema`\>

#### Defined in

@rnv/core/lib/schema/configFiles/project.d.ts:37767

## Variables

### DefaultsSchema

• `Const` **DefaultsSchema**: `z.ZodObject`\<\{ `defaultCommandSchemes`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"run"``, ``"export"``, ``"build"``]\>, `z.ZodString`\>\> ; `portOffset`: `z.ZodOptional`\<`z.ZodNumber`\> ; `ports`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodNumber`\>\> ; `supportedPlatforms`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, ``"many"``\>\> ; `targets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"build"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  }, \{ `defaultCommandSchemes?`: `Partial`\<`Record`\<``"run"`` \| ``"build"`` \| ``"export"``, `string`\>\> ; `portOffset?`: `number` ; `ports?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `number`\>\> ; `supportedPlatforms?`: (``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``)[] ; `targets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\>  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/project.d.ts:2

___

### EnginesSchema

• `Const` **EnginesSchema**: `z.ZodRecord`\<`z.ZodString`, `z.ZodLiteral`\<``"source:rnv"``\>\>

#### Defined in

@rnv/core/lib/schema/configFiles/project.d.ts:21

___

### RootProjectSchema

• `Const` **RootProjectSchema**: `AnyZodObject`

#### Defined in

@rnv/core/lib/schema/configFiles/project.d.ts:37765
