---
id: "system_fs"
title: "Module: system/fs"
sidebar_label: "system/fs"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `arrayMerge` | (`destinationArray`: `string`[], `sourceArray`: `string`[]) => `string`[] |
| `cleanEmptyFoldersRecursively` | (`folder`: `string`) => `void` |
| `cleanFolder` | (`d`: `string`) => `Promise`\<`void`\> |
| `copyContentsIfNotExistsRecursiveSync` | (`src`: `string`, `dest`: `string`) => `void` |
| `copyFileSync` | (`source`: `string` \| `undefined`, `target`: `string` \| `undefined`, `skipOverride?`: `boolean`, `timestampPathsConfig?`: [`TimestampPathsConfig`](system_types.md#timestamppathsconfig)) => `void` |
| `copyFolderContentsRecursive` | (`source`: `string`, `target`: `string`, `convertSvg?`: `boolean`, `skipPaths?`: `boolean`) => `Promise`\<`void`\> |
| `copyFolderContentsRecursiveSync` | (`source`: `string` \| ``null`` \| `undefined`, `target`: `string` \| ``null`` \| `undefined`, `convertSvg?`: `boolean`, `skipPaths?`: `string`[], `skipOverride?`: `boolean`, `injectObject?`: [`OverridesOptions`](system_types.md#overridesoptions), `timestampPathsConfig?`: [`TimestampPathsConfig`](system_types.md#timestamppathsconfig), `c?`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `extFilter?`: `string`[]) => `void` |
| `copyFolderRecursiveSync` | (`source`: `string`, `target`: `string`, `convertSvg?`: `boolean`, `skipOverride?`: `boolean`, `injectObject?`: [`OverridesOptions`](system_types.md#overridesoptions), `timestampPathsConfig?`: [`TimestampPathsConfig`](system_types.md#timestamppathsconfig), `c?`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `extFilter?`: `string`[]) => `void` |
| `getDirectories` | (`source`: `string`) => `string`[] |
| `getFileListSync` | (`dir`: `fs.PathLike`) => `string`[] |
| `mergeObjects` | \<T1\>(`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `obj1`: `Partial`\<`T1`\>, `obj2`: `Partial`\<`T1`\>, `dynamicRefs?`: `boolean`, `replaceArrays?`: `boolean`) => `T1` |
| `mkdirSync` | (`dir`: `string`) => `void` |
| `readObjectSync` | \<T_1\>(`filePath?`: `string`, `sanitize?`: `boolean`, `c?`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>) => `T_1` \| ``null`` |
| `removeDir` | (`pth`: `string`, `callback`: () => `void`) => `void` |
| `removeDirs` | (`dirPaths`: `string`[]) => `Promise`\<`void`\> |
| `removeDirsSync` | (`dirPaths`: `string`[]) => `void` |
| `removeFilesSync` | (`filePaths`: `string`[]) => `void` |
| `replaceHomeFolder` | (`p`: `string`) => `string` |
| `resolvePackage` | (`text`: `string`) => `string` |
| `sanitizeDynamicRefs` | \<T\>(`c`: [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\>, `obj`: `T`) => `T` |
| `saveAsJs` | (`source`: `string`, `dest`: `string`) => `void` |
| `updateObjectSync` | (`filePath`: `string`, `updateObj`: `object`) => `object` |
| `writeFileSync` | (`filePath`: `string` \| `undefined`, `obj`: `string` \| `object`, `spaces?`: `number`, `addNewLine?`: `boolean`) => `string` \| `undefined` |

#### Defined in

@rnv/core/lib/system/fs.d.ts:54

## Functions

### arrayMerge

▸ **arrayMerge**(`destinationArray`, `sourceArray`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationArray` | `string`[] |
| `sourceArray` | `string`[] |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/system/fs.d.ts:41

___

### cleanEmptyFoldersRecursively

▸ **cleanEmptyFoldersRecursively**(`folder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `folder` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:51

___

### cleanFolder

▸ **cleanFolder**(`d`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/system/fs.d.ts:31

___

### copyContentsIfNotExistsRecursiveSync

▸ **copyContentsIfNotExistsRecursiveSync**(`src`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:53

___

### copyFileSync

▸ **copyFileSync**(`source`, `target`, `skipOverride?`, `timestampPathsConfig?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `skipOverride?` | `boolean` |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](system_types.md#timestamppathsconfig) |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:20

___

### copyFileWithInjectSync

▸ **copyFileWithInjectSync**(`source`, `target`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](system_types.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](system_types.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:23

___

### copyFolderContentsRecursive

▸ **copyFolderContentsRecursive**(`source`, `target`, `convertSvg?`, `skipPaths?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipPaths?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/system/fs.d.ts:27

___

### copyFolderContentsRecursiveSync

▸ **copyFolderContentsRecursiveSync**(`source`, `target`, `convertSvg?`, `skipPaths?`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`, `extFilter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipPaths?` | `string`[] |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](system_types.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](system_types.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `extFilter?` | `string`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:26

___

### copyFolderRecursiveSync

▸ **copyFolderRecursiveSync**(`source`, `target`, `convertSvg?`, `skipOverride?`, `injectObject?`, `timestampPathsConfig?`, `c?`, `extFilter?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `target` | `string` |
| `convertSvg?` | `boolean` |
| `skipOverride?` | `boolean` |
| `injectObject?` | [`OverridesOptions`](system_types.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](system_types.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `extFilter?` | `string`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:25

___

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |
| `decimals?` | `number` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:49

___

### fsChmodSync

▸ **fsChmodSync**(`dest`, `flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |
| `flag` | `Mode` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:12

___

### fsCopyFileSync

▸ **fsCopyFileSync**(`source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:7

___

### fsExistsSync

▸ **fsExistsSync**(`dest`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`boolean`

#### Defined in

@rnv/core/lib/system/fs.d.ts:8

___

### fsLstatSync

▸ **fsLstatSync**(`dest`): `Stats`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`Stats`

#### Defined in

@rnv/core/lib/system/fs.d.ts:10

___

### fsMkdirSync

▸ **fsMkdirSync**(`arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:15

___

### fsReadFile

▸ **fsReadFile**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | (`err`: `unknown`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:18

___

### fsReadFileSync

▸ **fsReadFileSync**(`dest`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`Buffer`

#### Defined in

@rnv/core/lib/system/fs.d.ts:11

___

### fsReaddir

▸ **fsReaddir**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | (`err`: `unknown`, `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:19

___

### fsReaddirSync

▸ **fsReaddirSync**(`dest`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `PathLike` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/system/fs.d.ts:9

___

### fsRenameSync

▸ **fsRenameSync**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | `PathLike` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:13

___

### fsStatSync

▸ **fsStatSync**(`arg1`): `Stats`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`Stats`

#### Defined in

@rnv/core/lib/system/fs.d.ts:14

___

### fsSymlinkSync

▸ **fsSymlinkSync**(`arg1`, `arg2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |
| `arg2` | `PathLike` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:17

___

### fsUnlinkSync

▸ **fsUnlinkSync**(`arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg1` | `PathLike` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:16

___

### fsWriteFileSync

▸ **fsWriteFileSync**(`dest`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `string` |
| `data` | `string` |
| `options?` | `WriteFileOptions` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:6

___

### getDirectories

▸ **getDirectories**(`source`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/system/fs.d.ts:50

___

### getFileListSync

▸ **getFileListSync**(`dir`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `PathLike` |

#### Returns

`string`[]

#### Defined in

@rnv/core/lib/system/fs.d.ts:47

___

### getRealPath

▸ **getRealPath**(`c`, `p`, `key?`, `original?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `p` | `string` |
| `key?` | `string` |
| `original?` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:40

___

### getRelativePath

▸ **getRelativePath**(`from`, `to`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:52

___

### invalidatePodsChecksum

▸ **invalidatePodsChecksum**(`c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:24

___

### loadFile

▸ **loadFile**\<`T`, `K`\>(`fileObj`, `pathObj`, `key`): ``false`` \| `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileObj` | `T` |
| `pathObj` | `Partial`\<`Record`\<`K`, `unknown`\>\> |
| `key` | `K` |

#### Returns

``false`` \| `T`[`K`]

#### Defined in

@rnv/core/lib/system/fs.d.ts:48

___

### mergeObjects

▸ **mergeObjects**\<`T1`\>(`c`, `obj1`, `obj2`, `dynamicRefs?`, `replaceArrays?`): `T1`

#### Type parameters

| Name |
| :------ |
| `T1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `obj1` | `Partial`\<`T1`\> |
| `obj2` | `Partial`\<`T1`\> |
| `dynamicRefs?` | `boolean` |
| `replaceArrays?` | `boolean` |

#### Returns

`T1`

#### Defined in

@rnv/core/lib/system/fs.d.ts:45

___

### mkdirSync

▸ **mkdirSync**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:30

___

### readCleanFile

▸ **readCleanFile**(`source`, `overrides?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `overrides?` | [`OverridesOptions`](system_types.md#overridesoptions) |

#### Returns

`Buffer`

#### Defined in

@rnv/core/lib/system/fs.d.ts:22

___

### readObjectSync

▸ **readObjectSync**\<`T`\>(`filePath?`, `sanitize?`, `c?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath?` | `string` |
| `sanitize?` | `boolean` |
| `c?` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`T`

#### Defined in

@rnv/core/lib/system/fs.d.ts:38

___

### removeDir

▸ **removeDir**(`pth`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pth` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:29

___

### removeDirSync

▸ **removeDirSync**(`_dir`, `_rmSelf?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_dir` | `string` |
| `_rmSelf?` | `boolean` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:35

___

### removeDirs

▸ **removeDirs**(`dirPaths`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPaths` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Defined in

@rnv/core/lib/system/fs.d.ts:34

___

### removeDirsSync

▸ **removeDirsSync**(`dirPaths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dirPaths` | `string`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:33

___

### removeFilesSync

▸ **removeFilesSync**(`filePaths`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePaths` | `string`[] |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:32

___

### replaceHomeFolder

▸ **replaceHomeFolder**(`p`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:46

___

### resolvePackage

▸ **resolvePackage**(`text`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:43

___

### sanitizeDynamicProps

▸ **sanitizeDynamicProps**\<`T`\>(`obj`, `propConfig`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `propConfig` | [`FileUtilsPropConfig`](system_types.md#fileutilspropconfig) |

#### Returns

`T`

#### Defined in

@rnv/core/lib/system/fs.d.ts:44

___

### sanitizeDynamicRefs

▸ **sanitizeDynamicRefs**\<`T`\>(`c`, `obj`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |
| `obj` | `T` |

#### Returns

`T`

#### Defined in

@rnv/core/lib/system/fs.d.ts:42

___

### saveAsJs

▸ **saveAsJs**(`source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:28

___

### updateObjectSync

▸ **updateObjectSync**(`filePath`, `updateObj`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `updateObj` | `object` |

#### Returns

`object`

#### Defined in

@rnv/core/lib/system/fs.d.ts:39

___

### writeCleanFile

▸ **writeCleanFile**(`source`, `destination`, `overrides?`, `timestampPathsConfig?`, `c?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `overrides?` | [`OverridesOptions`](system_types.md#overridesoptions) |
| `timestampPathsConfig?` | [`TimestampPathsConfig`](system_types.md#timestamppathsconfig) |
| `c?` | [`RnvContext`](../interfaces/context_types.RnvContext.md)\<`any`\> |

#### Returns

`void`

#### Defined in

@rnv/core/lib/system/fs.d.ts:21

___

### writeFileSync

▸ **writeFileSync**(`filePath`, `obj`, `spaces?`, `addNewLine?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `obj` | `string` \| `object` |
| `spaces?` | `number` |
| `addNewLine?` | `boolean` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:36

___

### writeObjectSync

▸ **writeObjectSync**(`filePath`, `obj`, `spaces`, `addNewLine?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `obj` | `string` \| `object` |
| `spaces` | `number` |
| `addNewLine?` | `boolean` |

#### Returns

`string`

#### Defined in

@rnv/core/lib/system/fs.d.ts:37
