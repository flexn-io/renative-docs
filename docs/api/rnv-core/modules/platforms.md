---
id: "platforms"
title: "Module: platforms"
sidebar_label: "platforms"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### cleanPlatformBuild

▸ **cleanPlatformBuild**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:9

___

### copySharedPlatforms

▸ **copySharedPlatforms**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:14

___

### createPlatformBuild

▸ **createPlatformBuild**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:10

___

### ejectPlatform

▸ **ejectPlatform**(`c`, `platform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:15

___

### generatePlatformChoices

▸ **generatePlatformChoices**(`c`): \{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

\{ `isConnected`: `boolean` ; `name`: `string` ; `value`: ``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``  }[]

#### Defined in

@rnv/core/lib/platforms/index.d.ts:4

___

### isPlatformActive

▸ **isPlatformActive**(`c`, `platform`, `resolve?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `resolve?` | () => `void` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:13

___

### isPlatformSupported

▸ **isPlatformSupported**(`c`, `isGlobalScope?`): `Promise`\<[`RnvPlatform`](types.md#rnvplatform)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `isGlobalScope?` | `boolean` |

#### Returns

`Promise`\<[`RnvPlatform`](types.md#rnvplatform)\>

#### Defined in

@rnv/core/lib/platforms/index.d.ts:11

___

### isPlatformSupportedSync

▸ **isPlatformSupportedSync**(`c`, `platform`, `resolve?`, `reject?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `resolve?` | () => `void` |
| `reject?` | (`e`: `string`) => `void` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:12

___

### logErrorPlatform

▸ **logErrorPlatform**(`c`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/platforms/index.d.ts:3
