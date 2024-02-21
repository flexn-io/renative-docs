---
id: "schema_configFiles_private"
title: "Module: schema/configFiles/private"
sidebar_label: "schema/configFiles/private"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_MergedPlatformPrivateObjectType

Ƭ **\_MergedPlatformPrivateObjectType**: `z.infer`\<typeof `PlatformAndroid`\>

#### Defined in

@rnv/core/lib/schema/configFiles/private.d.ts:264

___

### \_RootPrivateSchemaType

Ƭ **\_RootPrivateSchemaType**: `z.infer`\<typeof [`RootPrivateSchema`](schema_configFiles_private.md#rootprivateschema)\>

#### Defined in

@rnv/core/lib/schema/configFiles/private.d.ts:263

## Variables

### RootPrivateSchema

• `Const` **RootPrivateSchema**: `z.ZodObject`\<\{ `platforms`: `z.ZodOptional`\<`z.ZodObject`\<\{ `android`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `androidtv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `androidwear`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `chromecast`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `firetv`: `z.ZodOptional`\<`z.ZodObject`\<\{ `keyAlias`: `z.ZodOptional`\<`z.ZodString`\> ; `keyPassword`: `z.ZodOptional`\<`z.ZodString`\> ; `storeFile`: `z.ZodOptional`\<`z.ZodString`\> ; `storePassword`: `z.ZodOptional`\<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }, \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  }\>\> ; `ios`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `kaios`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `linux`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `macos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizen`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizenmobile`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tizenwatch`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `tvos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `web`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `webos`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `webtv`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `windows`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\> ; `xbox`: `z.ZodOptional`\<`z.ZodObject`\<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  }, \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  }\>\> ; `private`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodAny`\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `platforms?`: \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } ; `private?`: `Record`\<`string`, `any`\>  }, \{ `platforms?`: \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } ; `private?`: `Record`\<`string`, `any`\>  }\>

#### Defined in

@rnv/core/lib/schema/configFiles/private.d.ts:18
