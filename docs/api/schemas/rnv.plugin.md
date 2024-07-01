---
id: rnv.plugin
title: rnv.plugin Schema
sidebar_label: renative.plugin.json
---


# rnv.plugin Schema Definition

The schema defines the following properties:

## `supportedPlatforms` (array)

Array list of platforms for which the current plugin is supported

The object is an array with all elements of the type `string`.

## `disabled` (boolean)

Marks plugin disabled

Default: `false`

## `props` (object)

Custom props passed to plugin

## `version` (string)

Version of plugin. Typically package version

## `deprecated` (string)

Marks your plugin deprecated with warning showing in the console during rnv commands

## `source` (string)

Will define custom scope for your plugin config to extend from.

NOTE: custom scopes can be defined via paths.pluginTemplates.[CUSTOM_SCOPE].{}

## `disableNpm` (boolean)

Will skip including plugin in package.json and installing it via npm/yarn etc

## `skipMerge` (boolean)

Will not attempt to merge with existing plugin configuration (ie. coming form renative pluginTemplates)

NOTE: if set to `true` you need to configure your plugin object fully

## `npm` (object)

Object of npm dependencies of this plugin. These will be injected into package.json

## `pluginDependencies`

List of other Renative plugins this plugin depends on

## `webpackConfig` (object)

Allows you to configure webpack bahaviour per each individual plugin

Properties of the `webpackConfig` object:

### `modulePaths`

### `moduleAliases`

### `nextTranspileModules` (array)

The object is an array with all elements of the type `string`.

## `disablePluginTemplateOverrides` (boolean)

Disables plugin overrides for selected plugin

## `fontSources` (array)

The object is an array with all elements of the type `string`.

## `android`

## `androidtv`

## `androidwear`

## `firetv`

## `ios`

## `tvos`

## `tizen`

## `tizenmobile`

## `tizenwatch`

## `webos`

## `web`

## `webtv`

## `chromecast`

## `kaios`

## `macos`

## `linux`

## `windows`

## `xbox`

## `custom`

Object used to extend your renative with custom props. This allows renative json schema to be validated