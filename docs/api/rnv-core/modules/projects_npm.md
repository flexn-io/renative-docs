---
id: "projects_npm"
title: "Module: projects/npm"
sidebar_label: "projects/npm"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### areNodeModulesInstalled

▸ **areNodeModulesInstalled**(): `boolean`

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/projects/npm.d.ts:3

___

### checkNpxIsInstalled

▸ **checkNpxIsInstalled**(): `Promise`\<``true``\>

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:2

___

### cleanNodeModules

▸ **cleanNodeModules**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:8

___

### installPackageDependencies

▸ **installPackageDependencies**(`c`, `failOnError?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `failOnError?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:6

___

### isYarnInstalled

▸ **isYarnInstalled**(): `string` \| ``true``

#### Returns

`string` \| ``true``

#### Defined in

@rnv/core/lib/projects/npm.d.ts:5

___

### jetifyIfRequired

▸ **jetifyIfRequired**(`c`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:7

___

### listAndSelectNpmVersion

▸ **listAndSelectNpmVersion**(`c`, `npmPackage`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `npmPackage` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/projects/npm.d.ts:4
