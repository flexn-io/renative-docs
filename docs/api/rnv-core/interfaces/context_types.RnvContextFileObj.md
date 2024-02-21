---
id: "context_types.RnvContextFileObj"
title: "Interface: RnvContextFileObj<T>"
sidebar_label: "RnvContextFileObj"
custom_edit_url: null
---

[context/types](../modules/context_types.md).RnvContextFileObj

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### config

• `Optional` **config**: `T`

#### Defined in

@rnv/core/lib/context/types.d.ts:158

___

### configLocal

• `Optional` **configLocal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_meta?` | \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } |
| `_meta.currentAppConfigId?` | `string` |
| `_meta.requiresJetify?` | `boolean` |
| `defaultTargets?` | `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> |
| `workspaceAppConfigsDir?` | `string` |

#### Defined in

@rnv/core/lib/context/types.d.ts:160

___

### configPrivate

• `Optional` **configPrivate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `platforms?` | \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } |
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
| `platforms.chromecast?` | {} |
| `platforms.firetv?` | \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } |
| `platforms.firetv.keyAlias?` | `string` |
| `platforms.firetv.keyPassword?` | `string` |
| `platforms.firetv.storeFile?` | `string` |
| `platforms.firetv.storePassword?` | `string` |
| `platforms.ios?` | {} |
| `platforms.kaios?` | {} |
| `platforms.linux?` | {} |
| `platforms.macos?` | {} |
| `platforms.tizen?` | {} |
| `platforms.tizenmobile?` | {} |
| `platforms.tizenwatch?` | {} |
| `platforms.tvos?` | {} |
| `platforms.web?` | {} |
| `platforms.webos?` | {} |
| `platforms.webtv?` | {} |
| `platforms.windows?` | {} |
| `platforms.xbox?` | {} |
| `private?` | `Record`\<`string`, `any`\> |

#### Defined in

@rnv/core/lib/context/types.d.ts:161

___

### config\_original

• `Optional` **config\_original**: `T`

#### Defined in

@rnv/core/lib/context/types.d.ts:159

___

### configs

• **configs**: `T`[]

#### Defined in

@rnv/core/lib/context/types.d.ts:162

___

### configsLocal

• **configsLocal**: \{ `_meta?`: \{ `currentAppConfigId?`: `string` ; `requiresJetify?`: `boolean`  } ; `defaultTargets?`: `Partial`\<`Record`\<``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``, `string`\>\> ; `workspaceAppConfigsDir?`: `string`  }[]

#### Defined in

@rnv/core/lib/context/types.d.ts:163

___

### configsPrivate

• **configsPrivate**: \{ `platforms?`: \{ `android?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidtv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `androidwear?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `chromecast?`: {} ; `firetv?`: \{ `keyAlias?`: `string` ; `keyPassword?`: `string` ; `storeFile?`: `string` ; `storePassword?`: `string`  } ; `ios?`: {} ; `kaios?`: {} ; `linux?`: {} ; `macos?`: {} ; `tizen?`: {} ; `tizenmobile?`: {} ; `tizenwatch?`: {} ; `tvos?`: {} ; `web?`: {} ; `webos?`: {} ; `webtv?`: {} ; `windows?`: {} ; `xbox?`: {}  } ; `private?`: `Record`\<`string`, `any`\>  }[]

#### Defined in

@rnv/core/lib/context/types.d.ts:164
