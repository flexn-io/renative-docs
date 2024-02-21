---
id: rnv.engine
title: rnv.engine Schema
sidebar_label: rnv.engine
---


# rnv.engine Schema Definition

The schema defines the following properties:

## `custom`

Object used to extend your renative with custom props. This allows renative json schema to be validated

## `id` (string, required)

ID of engine

## `engineExtension` (string, required)

Engine extension ised by rnv during compilation

## `extends` (string)

ID of engine to extend. Not being used yet

## `overview` (string, required)

Overview description of engine

## `plugins` (object)

List of required plugins for this engine to work properly

## `npm` (object)

Npm dependencies required for this plugin to work

Properties of the `npm` object:

### `dependencies` (object)

### `devDependencies`

### `peerDependencies`

### `optionalDependencies`

## `platforms` (object)