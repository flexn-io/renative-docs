---
id: "doctor"
title: "Module: doctor"
sidebar_label: "doctor"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fixPackageJson` | (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `pkgPath`: `string`) => `Promise`\<`void`\> |
| `fixPackageObject` | (`pp`: `Record`\<`string`, `unknown`\>) => `Record`\<`string`, `unknown`\> |

#### Defined in

@rnv/core/lib/doctor/index.d.ts:5

## Functions

### fixPackageJson

▸ **fixPackageJson**(`c`, `pkgPath`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `pkgPath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/doctor/index.d.ts:2

___

### fixPackageObject

▸ **fixPackageObject**(`pp`): `Record`\<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pp` | `Record`\<`string`, `unknown`\> |

#### Returns

`Record`\<`string`, `unknown`\>

#### Defined in

@rnv/core/lib/doctor/index.d.ts:3
