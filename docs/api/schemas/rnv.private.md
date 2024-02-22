---
id: rnv.private
title: rnv.private Schema
sidebar_label: rnv.private
---


# rnv.private Schema Definition

The schema defines the following properties:

## `private` (object)

Special object which contains private info. this object should be used only in `renative.private.json` files and never commited to your repository. Private files usually reside in your workspace and are subject to crypto encryption if enabled. RNV will warn you if it finds private key in your regular `renative.json` file

## `platforms` (object)

Properties of the `platforms` object:

### `android` (object)

Properties of the `android` object:

#### `storePassword` (string)

> WARNING. this prop is sensitive and should not be stored in standard `renative.json` configs. use `renative.private.json` files instead!

storePassword for keystore file

#### `keyPassword` (string)

> WARNING. this prop is sensitive and should not be stored in standard `renative.json` configs. use `renative.private.json` files instead!

keyPassword for keystore file

#### `storeFile` (string)

Name of the store file in android project

#### `keyAlias` (string)

Key alias of the store file in android project

### `androidtv`

### `androidwear`

### `firetv`

### `ios` (object)

Properties of the `ios` object:

### `tvos`

### `tizen`

### `tizenmobile`

### `tizenwatch`

### `webos`

### `web`

### `webtv`

### `chromecast`

### `kaios`

### `macos`

### `linux`

### `windows`

### `xbox`