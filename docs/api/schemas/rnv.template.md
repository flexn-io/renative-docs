---
id: rnv.template
title: rnv.template Schema
sidebar_label: renative.template.json (Template Config)
---


# rnv.template Schema Definition

The schema defines the following properties:

## `defaults` (object)

Default system config for this project

Properties of the `defaults` object:

### `ports` (object)

Allows you to assign custom port per each supported platform specific to this project. this is useful if you foten switch between multiple projects and do not want to experience constant port conflicts

### `supportedPlatforms` (array)

Array list of all supported platforms in current project

The object is an array with all elements of the type `string`.

### `portOffset` (number)

Offset each port default value by increment

### `defaultCommandSchemes` (object)

List of default schemes for each rnv command. This is useful if you want to avoid specifying `-s ...` every time your run rnv command. bu default rnv uses `-s debug`. NOTE: you can only use schemes you defined in `buildSchemes`

### `targets` (object)

Override of default targets specific to this project

## `engines` (object)

List of engines available in this project

## `templateConfig` (object)

Used in `renative.template.json` allows you to define template behaviour.

Properties of the `templateConfig` object:

### `includedPaths` (array)

Defines list of all file/dir paths you want to include in template

The object is an array with all elements of the type `string`.

### `bootstrapQuestions` (array, required)

Defines list of custom bootstrap questions

The object is an array with all elements of the type `object`.

The array object has the following properties:

#### `options` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

##### `title` (string, required)

##### `value` (object, required)

Properties of the `value` object:

#### `configProp` (object)

Properties of the `configProp` object:

##### `prop` (string, required)

##### `key` (string, required)

#### `type` (string, required)

#### `title` (string, required)

### `packageTemplate` (object)

Properties of the `packageTemplate` object:

#### `dependencies` (object)

#### `devDependencies`

#### `peerDependencies`

#### `optionalDependencies`

#### `name` (string)

#### `version` (string)