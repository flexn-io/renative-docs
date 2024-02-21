---
id: "schema_configFiles_local"
title: "Module: schema/configFiles/local"
sidebar_label: "schema/configFiles/local"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_RootLocalSchemaType

Ƭ **\_RootLocalSchemaType**: `z.infer`\<typeof [`RootLocalSchema`](schema_configFiles_local.md#rootlocalschema)\>

#### Defined in

@rnv/core/lib/schema/configFiles/local.d.ts:30

## Variables

### RootLocalSchema

• `Const` **RootLocalSchema**: `z.ZodObject`\<\{ `_meta`: `z.ZodOptional`\<`z.ZodObject`\<\{ `currentAppConfigId`: `z.ZodOptional`\<`z.ZodString`\> ; `requiresJetify`: `z.ZodOptional`\<`z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  }, \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  }\>\> ; `defaultTargets`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>\> ; `workspaceAppConfigsDir`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `_meta?`: \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } ; `defaultTargets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `workspaceAppConfigsDir?`: `string`  }, \{ `_meta?`: \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } ; `defaultTargets?`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `workspaceAppConfigsDir?`: `string`  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/local.d.ts:2
