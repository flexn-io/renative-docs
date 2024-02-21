---
id: "schema_configFiles_templates"
title: "Module: schema/configFiles/templates"
sidebar_label: "schema/configFiles/templates"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_RootTemplatesSchemaType

Ƭ **\_RootTemplatesSchemaType**: `z.infer`\<typeof [`RootTemplatesSchema`](schema_configFiles_templates.md#roottemplatesschema)\>

#### Defined in

@rnv/core/lib/schema/configFiles/templates.d.ts:68

## Variables

### RootTemplatesSchema

• `Const` **RootTemplatesSchema**: `z.ZodObject`\<\{ `engineTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `id`: `z.ZodString` ; `key`: `z.ZodOptional`\<`z.ZodString`\> ; `version`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\>\> ; `integrationTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `version`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `version`: `string`  }, \{ `version`: `string`  }\>\> ; `platformTemplates`: `z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodObject`\<\{ `engine`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `engine`: `string`  }, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `description`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `description`: `string`  }, \{ `description`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `engineTemplates`: `Record`\<`string`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\> ; `integrationTemplates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `platformTemplates`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `Record`\<`string`, \{ `description`: `string`  }\>  }, \{ `engineTemplates`: `Record`\<`string`, \{ `id`: `string` ; `key?`: `string` ; `version`: `string`  }\> ; `integrationTemplates`: `Record`\<`string`, \{ `version`: `string`  }\> ; `platformTemplates`: `Partial`\<`Record`\<``"android"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"linux"`` \| ``"windows"`` \| ``"xbox"``, \{ `engine`: `string`  }\>\> ; `projectTemplates`: `Record`\<`string`, \{ `description`: `string`  }\>  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/templates.d.ts:2
