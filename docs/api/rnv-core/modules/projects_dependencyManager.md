---
id: "projects_dependencyManager"
title: "Module: projects/dependencyManager"
sidebar_label: "projects/dependencyManager"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### checkIfProjectAndNodeModulesExists

▸ **checkIfProjectAndNodeModulesExists**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/dependencyManager.d.ts:3

___

### checkRequiredPackage

▸ **checkRequiredPackage**(`c`, `pkg`, `version`, `type`, `skipAsking?`, `skipInstall?`, `skipVersionCheck?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `pkg` | `string` |
| `version` | `string` |
| `type` | [`NpmDepKey`](configs_types.md#npmdepkey) |
| `skipAsking?` | `boolean` |
| `skipInstall?` | `boolean` |
| `skipVersionCheck?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/projects/dependencyManager.d.ts:4

___

### injectPlatformDependencies

▸ **injectPlatformDependencies**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/projects/dependencyManager.d.ts:5
