---
id: "templates"
title: "Module: templates"
sidebar_label: "templates"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### applyTemplate

▸ **applyTemplate**(`c`, `selectedTemplate?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `selectedTemplate?` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/templates/index.d.ts:8

___

### configureEntryPoint

▸ **configureEntryPoint**(`c`, `platform`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platform` | [`RnvPlatform`](types.md#rnvplatform) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/templates/index.d.ts:5

___

### configureTemplateFiles

▸ **configureTemplateFiles**(`c`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/templates/index.d.ts:4

___

### getInstalledTemplateOptions

▸ **getInstalledTemplateOptions**(`c`): [`PromptOptions`](api_types.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

[`PromptOptions`](api_types.md#promptoptions)

#### Defined in

@rnv/core/lib/templates/index.d.ts:6

___

### isTemplateInstalled

▸ **isTemplateInstalled**(`c`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`string` \| ``false``

#### Defined in

@rnv/core/lib/templates/index.d.ts:7
