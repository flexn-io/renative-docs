---
id: rnv.template
title: rnv.template Schema
sidebar_label: renative.template.json (Template Config)
---


# rnv.template Schema Definition

The schema defines the following properties:

## `templateConfig` (object)

Used in `renative.template.json` allows you to define template behaviour.

Properties of the `templateConfig` object:

### `name` (string)

### `version` (string)

### `disabled` (boolean)

### `includedPaths` (array)

Defines list of all file/dir paths you want to include in template

The elements of the array must match *at least one* of the following properties:

### (string)

### (object)

Properties of the object:

#### `paths` (array, required)

The object is an array with all elements of the type `string`.

#### `engines` (array)

The object is an array with all elements of the type `string`.

#### `platforms` (array)

Array list of all supported platforms in current project

The object is an array with all elements of the type `string`.

### `renative_json` (object)

Properties of the `renative_json` object:

#### `$schema` (string)

#### `extendsTemplate` (string)

### `package_json` (object)

Properties of the `package_json` object:

#### `dependencies` (object)

#### `devDependencies` (object)

#### `peerDependencies` (object)

#### `optionalDependencies` (object)

#### `name` (string)

#### `version` (string)

#### `browserslist`

## `bootstrapConfig` (object)

Properties of the `bootstrapConfig` object:

### `bootstrapQuestions` (array)

Defines list of custom bootstrap questions

The object is an array with all elements of the type `object`.

The array object has the following properties:

#### `options` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

##### `title` (string, required)

##### `value` (, required)

#### `configProp` (object)

Properties of the `configProp` object:

##### `prop` (string, required)

##### `key` (string, required)

#### `type` (string, required)

#### `title` (string, required)

#### `onConfirm` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

##### `action` (string, required)

##### `prop` (string)

##### `path` (string, required)

### `rnvNewPatchDependencies` (object)

### `configModifiers` (object)

Properties of the `configModifiers` object:

#### `engines` (array, required)

The object is an array with all elements of the type `object`.

The array object has the following properties:

##### `name` (string, required)

##### `supportedPlatforms` (array, required)

Array list of all supported platforms in current project

The object is an array with all elements of the type `string`.

##### `nullifyIfFalse` (boolean)

### `defaultSelectedPlatforms` (array)

Array list of all supported platforms in current project

The object is an array with all elements of the type `string`.