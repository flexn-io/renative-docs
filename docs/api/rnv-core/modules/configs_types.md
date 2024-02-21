---
id: "configs_types"
title: "Module: configs/types"
sidebar_label: "configs/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### NpmDepKey

Ƭ **NpmDepKey**: ``"dependencies"`` \| ``"devDependencies"`` \| ``"peerDependencies"``

#### Defined in

@rnv/core/lib/configs/types.d.ts:15

___

### NpmPackageFile

Ƭ **NpmPackageFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `author?` | `string` |
| `dependencies?` | `Record`\<`string`, `string`\> |
| `description?` | `string` |
| `devDependencies?` | `Record`\<`string`, `string`\> |
| `license?` | `string` |
| `main?` | `string` |
| `name?` | `string` |
| `optionalDependencies?` | `Record`\<`string`, `string`\> |
| `peerDependencies?` | `Record`\<`string`, `string`\> |
| `resolutions?` | `Record`\<`string`, `string`\> |
| `version?` | `string` |

#### Defined in

@rnv/core/lib/configs/types.d.ts:1

___

### NpmPackageFileKey

Ƭ **NpmPackageFileKey**: keyof [`NpmPackageFile`](configs_types.md#npmpackagefile)

#### Defined in

@rnv/core/lib/configs/types.d.ts:14
