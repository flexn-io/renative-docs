---
id: "tasks"
title: "Module: tasks"
sidebar_label: "tasks"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### executeEngineTask

▸ **executeEngineTask**(`c`, `task`, `parentTask?`, `originTask?`, `tasks?`, `isFirstTask?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | `string` |
| `parentTask?` | `string` |
| `originTask?` | `string` |
| `tasks?` | `Record`\<`string`, [`RnvTask`](tasks_types.md#rnvtask)\> |
| `isFirstTask?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:9

___

### executeOrSkipTask

▸ **executeOrSkipTask**(`c`, `task`, `parentTask`, `originTask?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | `string` |
| `parentTask` | `string` |
| `originTask?` | `string` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:7

___

### executeTask

▸ **executeTask**(`c`, `task`, `parentTask?`, `originTask?`, `isFirstTask?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | `string` |
| `parentTask?` | `string` |
| `originTask?` | `string` |
| `isFirstTask?` | `boolean` |

#### Returns

`Promise`\<`undefined`\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:6

___

### findSuitableTask

▸ **findSuitableTask**(`c`, `specificTask?`): `Promise`\<[`RnvTask`](tasks_types.md#rnvtask)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `specificTask?` | `string` |

#### Returns

`Promise`\<[`RnvTask`](tasks_types.md#rnvtask)\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:5

___

### initializeTask

▸ **initializeTask**(`c`, `task`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:4

___

### registerCustomTask

▸ **registerCustomTask**(`_c`, `task`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `task` | [`RnvTask`](tasks_types.md#rnvtask) |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/tasks/index.d.ts:3

___

### shouldSkipTask

▸ **shouldSkipTask**(`c`, `taskKey`, `originTaskKey?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `taskKey` | `string` |
| `originTaskKey?` | `string` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/tasks/index.d.ts:8
