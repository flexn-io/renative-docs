---
id: "modules"
title: "rnv"
sidebar_label: "rnv (Node)"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### executeRnv

▸ **executeRnv**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `cmd` | `string` |
| › `logger` | `RnvApiLogger` |
| › `process` | `Process` |
| › `program` | `RnvContextProgram` |
| › `prompt` | `RnvApiPrompt` |
| › `spinner` | `RnvApiSpinner` |
| › `subCmd` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

runner.d.ts:7

___

### withDefaultRNVBabel

▸ **withDefaultRNVBabel**(`cnf`): `BabelConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `BabelConfig` |

#### Returns

`BabelConfig`

#### Defined in

adapter/index.d.ts:2

___

### withRNVBabel

▸ **withRNVBabel**(`cnf`): (`api`: `BabelApi`) => `BabelConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `BabelConfig` |

#### Returns

`fn`

▸ (`api`): `BabelConfig`

##### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `BabelApi` |

##### Returns

`BabelConfig`

#### Defined in

adapter/index.d.ts:3

___

### withRNVMetro

▸ **withRNVMetro**(`cnf`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `unknown` |

#### Returns

`any`

#### Defined in

adapter/index.d.ts:4

___

### withRNVRNConfig

▸ **withRNVRNConfig**(`cnf`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cnf` | `unknown` |

#### Returns

`any`

#### Defined in

adapter/index.d.ts:5
