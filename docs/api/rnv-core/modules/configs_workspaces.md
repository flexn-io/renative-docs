---
id: "configs_workspaces"
title: "Module: configs/workspaces"
sidebar_label: "configs/workspaces"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### createWorkspace

▸ **createWorkspace**(`c`, `workspaceID`, `workspacePath`): `Promise`\<``true``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `workspaceID` | `string` |
| `workspacePath` | `string` |

#### Returns

`Promise`\<``true``\>

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:3

___

### getWorkspaceConnectionString

▸ **getWorkspaceConnectionString**(`obj?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `Object` |
| `obj.path` | `string` |
| `obj.remote?` | `Object` |
| `obj.remote.type` | `string` |
| `obj.remote.url` | `string` |

#### Returns

`any`

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:5

___

### getWorkspaceDirPath

▸ **getWorkspaceDirPath**(`c`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:4

___

### getWorkspaceOptions

▸ **getWorkspaceOptions**(`c`): [`PromptOptions`](api_types.md#promptoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

[`PromptOptions`](api_types.md#promptoptions)

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:6

___

### loadWorkspacesConfigSync

▸ **loadWorkspacesConfigSync**(): `void`

#### Returns

`void`

#### Defined in

@rnv/core/lib/configs/workspaces.d.ts:7
