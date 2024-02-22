---
id: "RnvApi"
title: "Interface: RnvApi"
sidebar_label: "RnvApi"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### analytics

• **analytics**: [`RnvContextAnalytics`](../modules.md#rnvcontextanalytics)

#### Defined in

@rnv/core/lib/api/types.d.ts:14

___

### doResolve

• **doResolve**: [`DoResolveFn`](../modules.md#doresolvefn)

#### Defined in

@rnv/core/lib/api/types.d.ts:21

___

### fsExistsSync

• **fsExistsSync**: (`path`: `PathLike`) => `boolean`

#### Type declaration

▸ (`path`): `boolean`

Returns `true` if the path exists, `false` otherwise.

For detailed information, see the documentation of the asynchronous version of
this API: exists.

`fs.exists()` is deprecated, but `fs.existsSync()` is not. The `callback`parameter to `fs.exists()` accepts parameters that are inconsistent with other
Node.js callbacks. `fs.existsSync()` does not use a callback.

```js
import { existsSync } from 'node:fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.');
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |

##### Returns

`boolean`

**`Since`**

v0.1.21

#### Defined in

@rnv/core/lib/api/types.d.ts:16

___

### fsReadFileSync

• **fsReadFileSync**: (`dest`: `PathLike`) => `Buffer`

#### Type declaration

▸ (`dest`): `Buffer`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

##### Returns

`Buffer`

#### Defined in

@rnv/core/lib/api/types.d.ts:17

___

### fsReaddirSync

• **fsReaddirSync**: (`dest`: `PathLike`) => `string`[]

#### Type declaration

▸ (`dest`): `string`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

##### Returns

`string`[]

#### Defined in

@rnv/core/lib/api/types.d.ts:18

___

### fsWriteFileSync

• **fsWriteFileSync**: (`dest`: `string`, `data`: `string`, `options?`: `WriteFileOptions`) => `void`

#### Type declaration

▸ (`dest`, `data`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `string` |
| `data` | `string` |
| `options?` | `WriteFileOptions` |

##### Returns

`void`

#### Defined in

@rnv/core/lib/api/types.d.ts:19

___

### getConfigProp

• **getConfigProp**: [`GetConfigPropFn`](../modules.md#getconfigpropfn)

#### Defined in

@rnv/core/lib/api/types.d.ts:22

___

### isDefault

• **isDefault**: `boolean`

#### Defined in

@rnv/core/lib/api/types.d.ts:11

___

### logger

• **logger**: [`RnvApiLogger`](../modules.md#rnvapilogger)

#### Defined in

@rnv/core/lib/api/types.d.ts:15

___

### path

• **path**: `PlatformPath`

#### Defined in

@rnv/core/lib/api/types.d.ts:20

___

### prompt

• **prompt**: [`RnvApiPrompt`](../modules.md#rnvapiprompt)

#### Defined in

@rnv/core/lib/api/types.d.ts:13

___

### spinner

• **spinner**: [`RnvApiSpinner`](../modules.md#rnvapispinner)

#### Defined in

@rnv/core/lib/api/types.d.ts:12
