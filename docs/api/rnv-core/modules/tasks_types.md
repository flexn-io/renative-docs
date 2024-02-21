---
id: "tasks_types"
title: "Module: tasks/types"
sidebar_label: "tasks/types"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### RnvTask

Ƭ **RnvTask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `fn?` | [`RnvTaskFn`](tasks_types.md#rnvtaskfn) |
| `fnHelp?` | [`RnvTaskFn`](tasks_types.md#rnvtaskfn) |
| `forceBuildHookRebuild?` | `boolean` |
| `isGlobalScope?` | `boolean` |
| `params` | [`RnvTaskParameter`](tasks_types.md#rnvtaskparameter)[] |
| `platforms` | `string`[] |
| `task` | `string` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:2

___

### RnvTaskFn

Ƭ **RnvTaskFn**: (`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md), `parentTask?`: `string`, `originTask?`: `string`) => `Promise`\<`any`\>

#### Type declaration

▸ (`c`, `parentTask?`, `originTask?`): `Promise`\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md) |
| `parentTask?` | `string` |
| `originTask?` | `string` |

##### Returns

`Promise`\<`any`\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:23

___

### RnvTaskMap

Ƭ **RnvTaskMap**: `Record`\<`string`, [`RnvTask`](tasks_types.md#rnvtask)\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:22

___

### RnvTaskParameter

Ƭ **RnvTaskParameter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `examples?` | `string`[] |
| `isRequired?` | `boolean` |
| `key?` | `string` |
| `options?` | `string`[] |
| `shortcut?` | `string` |
| `value?` | `string` |
| `variadic?` | `boolean` |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:12

___

### TaskItemMap

Ƭ **TaskItemMap**: `Record`\<`string`, \{ `desc?`: `string` ; `taskKey`: `string`  }\>

#### Defined in

@rnv/core/lib/tasks/types.d.ts:24

___

### TaskObj

Ƭ **TaskObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hasMultipleSubTasks?` | `boolean` |
| `key` | `string` |
| `taskInstance` | [`RnvTask`](tasks_types.md#rnvtask) |

#### Defined in

@rnv/core/lib/tasks/types.d.ts:28
