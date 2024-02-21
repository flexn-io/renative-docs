---
id: "schema_platforms_fragments_templateAndroidBase"
title: "Module: schema/platforms/fragments/templateAndroidBase"
sidebar_label: "schema/platforms/fragments/templateAndroidBase"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_AndroidManifestType

Ƭ **\_AndroidManifestType**: `z.infer`\<typeof `AndroidManifest`\>

#### Defined in

@rnv/core/lib/schema/platforms/fragments/templateAndroidBase.d.ts:207

___

### \_ManifestChildType

Ƭ **\_ManifestChildType**: `z.infer`\<typeof `ManifestChildBase`\> & \{ `children?`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[]  }

#### Defined in

@rnv/core/lib/schema/platforms/fragments/templateAndroidBase.d.ts:15

___

### \_ManifestChildWithChildrenType

Ƭ **\_ManifestChildWithChildrenType**: `z.infer`\<typeof `ManifestChildWithChildren`\>

#### Defined in

@rnv/core/lib/schema/platforms/fragments/templateAndroidBase.d.ts:206

## Variables

### TemplateAndroidBaseFragment

• `Const` **TemplateAndroidBaseFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AndroidManifest_xml` | `z.ZodOptional`\<`z.ZodObject`\<\{ `android:name`: `z.ZodString` ; `android:required`: `z.ZodOptional`\<`z.ZodBoolean`\> ; `children`: `z.ZodArray`\<`z.ZodType`\<[`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype), `z.ZodTypeDef`, [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)\>, ``"many"``\> ; `package`: `z.ZodOptional`\<`z.ZodString`\> ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  }, \{ `android:name`: `string` ; `android:required?`: `boolean` ; `children`: [`_ManifestChildType`](schema_platforms_fragments_templateAndroidBase.md#_manifestchildtype)[] ; `package?`: `string` ; `tag`: `string`  }\>\> |
| `MainActivity_java` | `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `onCreate`: `z.ZodDefault`\<`z.ZodOptional`\<`z.ZodString`\>\> ; `resultMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate`: `string` ; `resultMethods?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `onCreate?`: `string` ; `resultMethods?`: `string`[]  }\>\> |
| `MainApplication_java` | `z.ZodOptional`\<`z.ZodObject`\<\{ `createMethods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `imports`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `methods`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packageParams`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `packages`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }, \{ `createMethods?`: `string`[] ; `imports?`: `string`[] ; `methods?`: `string`[] ; `packageParams?`: `string`[] ; `packages?`: `string`[]  }\>\> |
| `app_build_gradle` | `z.ZodOptional`\<`z.ZodObject`\<\{ `afterEvaluate`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `apply`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `buildTypes`: `z.ZodOptional`\<`z.ZodObject`\<\{ `debug`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\> ; `release`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `debug?`: `string`[] ; `release?`: `string`[]  }, \{ `debug?`: `string`[] ; `release?`: `string`[]  }\>\> ; `defaultConfig`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `implementation`: `z.ZodOptional`\<`z.ZodString`\> ; `implementations`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }, \{ `afterEvaluate?`: `string`[] ; `apply`: `string`[] ; `buildTypes?`: \{ `debug?`: `string`[] ; `release?`: `string`[]  } ; `defaultConfig`: `string`[] ; `implementation?`: `string` ; `implementations?`: `string`[]  }\>\> |
| `build_gradle` | `z.ZodOptional`\<`z.ZodObject`\<\{ `allprojects`: `z.ZodObject`\<\{ `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `buildscript`: `z.ZodObject`\<\{ `dependencies`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `repositories`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }, \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  }\> ; `dexOptions`: `z.ZodRecord`\<`z.ZodString`, `z.ZodBoolean`\> ; `injectAfterAll`: `z.ZodArray`\<`z.ZodString`, ``"many"``\> ; `plugins`: `z.ZodArray`\<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }, \{ `allprojects`: \{ `repositories`: `Record`\<`string`, `boolean`\>  } ; `buildscript`: \{ `dependencies`: `Record`\<`string`, `boolean`\> ; `repositories`: `Record`\<`string`, `boolean`\>  } ; `dexOptions`: `Record`\<`string`, `boolean`\> ; `injectAfterAll`: `string`[] ; `plugins`: `string`[]  }\>\> |
| `gradle_properties` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnion`\<[`z.ZodString`, `z.ZodBoolean`, `z.ZodNumber`]\>\>\> |
| `strings_xml` | `z.ZodOptional`\<`z.ZodObject`\<\{ `children`: `z.ZodOptional`\<`z.ZodArray`\<`z.ZodObject`\<\{ `child_value`: `z.ZodString` ; `name`: `z.ZodString` ; `tag`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }, \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }\>, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }, \{ `children?`: \{ `child_value`: `string` ; `name`: `string` ; `tag`: `string`  }[]  }\>\> |

#### Defined in

@rnv/core/lib/schema/platforms/fragments/templateAndroidBase.d.ts:38
