---
id: "schema_shared"
title: "Module: schema/shared"
sidebar_label: "schema/shared"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### \_PlatformsKeysType

Ƭ **\_PlatformsKeysType**: `z.infer`\<typeof [`PlatformsKeys`](schema_shared.md#platformskeys)\>

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:4

## Variables

### BuildSchemeFragment

• `Const` **BuildSchemeFragment**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `z.ZodOptional`\<`z.ZodString`\> |
| `enabled` | `z.ZodOptional`\<`z.ZodBoolean`\> |

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:10

___

### BundleId

• `Const` **BundleId**: `z.ZodString`

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:9

___

### DefaultTargets

• `Const` **DefaultTargets**: `z.ZodRecord`\<`z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>, `z.ZodString`\>

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:8

___

### Ext

• `Const` **Ext**: `z.ZodAny`

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:6

___

### ExtendTemplate

• `Const` **ExtendTemplate**: `z.ZodString`

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:7

___

### HexColor

• `Const` **HexColor**: `z.ZodString`

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:5

___

### PlatformsKeys

• `Const` **PlatformsKeys**: `z.ZodEnum`\<[``"ios"``, ``"android"``, ``"firetv"``, ``"androidtv"``, ``"androidwear"``, ``"web"``, ``"webtv"``, ``"tizen"``, ``"tizenmobile"``, ``"tvos"``, ``"webos"``, ``"macos"``, ``"windows"``, ``"linux"``, ``"tizenwatch"``, ``"kaios"``, ``"chromecast"``, ``"xbox"``]\>

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:3

___

### Runtime

• `Const` **Runtime**: `z.ZodAny`

#### Defined in

@rnv/core/lib/schema/shared/index.d.ts:2
