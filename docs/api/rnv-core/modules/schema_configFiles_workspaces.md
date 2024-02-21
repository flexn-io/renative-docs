---
id: "schema_configFiles_workspaces"
title: "Module: schema/configFiles/workspaces"
sidebar_label: "schema/configFiles/workspaces"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_RootWorkspacesSchemaType

Ƭ **\_RootWorkspacesSchemaType**: `z.infer`\<typeof [`RootWorkspacesSchema`](schema_configFiles_workspaces.md#rootworkspacesschema)\>

#### Defined in

@rnv/core/lib/schema/configFiles/workspaces.d.ts:45

## Variables

### RootWorkspacesSchema

• `Const` **RootWorkspacesSchema**: `z.ZodObject`\<\{ `workspaces`: `z.ZodRecord`\<`z.ZodString`, `z.ZodObject`\<\{ `path`: `z.ZodString` ; `remote`: `z.ZodOptional`\<`z.ZodObject`\<\{ `type`: `z.ZodString` ; `url`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `type`: `string` ; `url`: `string`  }, \{ `type`: `string` ; `url`: `string`  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `path`: `string` ; `remote?`: \{ `type`: `string` ; `url`: `string`  }  }, \{ `path`: `string` ; `remote?`: \{ `type`: `string` ; `url`: `string`  }  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `workspaces`: `Record`\<`string`, \{ `path`: `string` ; `remote?`: \{ `type`: `string` ; `url`: `string`  }  }\>  }, \{ `workspaces`: `Record`\<`string`, \{ `path`: `string` ; `remote?`: \{ `type`: `string` ; `url`: `string`  }  }\>  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/workspaces.d.ts:2
