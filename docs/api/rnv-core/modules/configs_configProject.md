---
id: "configs_configProject"
title: "Module: configs/configProject"
sidebar_label: "configs/configProject"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### generatePlatformTemplatePaths

▸ **generatePlatformTemplatePaths**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:8

___

### updateProjectPlatforms

▸ **updateProjectPlatforms**(`c`, `platforms`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `platforms` | (``"android"`` \| ``"linux"`` \| ``"androidtv"`` \| ``"androidwear"`` \| ``"firetv"`` \| ``"ios"`` \| ``"tvos"`` \| ``"tizen"`` \| ``"tizenmobile"`` \| ``"tizenwatch"`` \| ``"webos"`` \| ``"web"`` \| ``"webtv"`` \| ``"chromecast"`` \| ``"kaios"`` \| ``"macos"`` \| ``"windows"`` \| ``"xbox"``)[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:7

___

### upgradeDependencies

▸ **upgradeDependencies**(`packageFile`, `packagesPath`, `configFile`, `configPath`, `version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `packageFile` | [`NpmPackageFile`](configs_types.md#npmpackagefile) |
| `packagesPath` | `string` |
| `configFile` | [`_RootProjectSchemaType`](schema_configFiles_project.md#_rootprojectschematype) |
| `configPath` | `string` |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:6

___

### upgradeProjectDependencies

▸ **upgradeProjectDependencies**(`c`, `version`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `version` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/configs/configProject.d.ts:5
