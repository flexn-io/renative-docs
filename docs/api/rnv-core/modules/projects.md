---
id: "projects"
title: "Module: projects"
sidebar_label: "projects"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### checkAndBootstrapIfRequired

▸ **checkAndBootstrapIfRequired**(`c`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:4

___

### checkAndCreateGitignore

▸ **checkAndCreateGitignore**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:5

___

### cleanPlaformAssets

▸ **cleanPlaformAssets**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:12

___

### configureFonts

▸ **configureFonts**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:6

___

### copyAssetsFolder

▸ **copyAssetsFolder**(`c`, `platform`, `subPath?`, `customFn?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |
| `subPath?` | `string` |
| `customFn?` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `platform`: [`RnvPlatform`](types.md#rnvplatform)) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:9

___

### copyBuildsFolder

▸ **copyBuildsFolder**(`c`, `platform`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:10

___

### copyRuntimeAssets

▸ **copyRuntimeAssets**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:7

___

### parseFonts

▸ **parseFonts**(`c`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `callback` | [`ParseFontsCallback`](projects_types.md#parsefontscallback) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/projects/index.d.ts:8

___

### versionCheck

▸ **versionCheck**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/index.d.ts:11
