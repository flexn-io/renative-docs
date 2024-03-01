---
id: rnv.plugin
title: rnv.plugin Schema
sidebar_label: rnv.plugin
---


# rnv.plugin Schema Definition

The schema defines the following properties:

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

## `pluginDependencies` (object)

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

## `android` (object)

Properties of the `android` object:

### `disabled` (boolean)

Marks plugin platform disabled

Default: `false`

### `forceLinking` (boolean)

Packages that cannot be autolinked yet can still be added to MainApplication PackageList dynamically by setting this to true

Default: `false`

### `path` (string)

Enables you to pass custom path to plugin. If undefined, the default `node_modules/[plugin-name]` will be used.

### `projectName` (string)

### `skipLinking` (boolean)

### `skipImplementation` (boolean)

### `implementation` (string)

### `package` (string)

### `templateAndroid` (object)

Properties of the `templateAndroid` object:

#### `gradle_properties` (object)

Overrides values in `gradle.properties` file of generated android based project

#### `build_gradle` (object)

Overrides values in `build.gradle` file of generated android based project

Properties of the `build_gradle` object:

##### `allprojects` (object, required)

Properties of the `allprojects` object:

###### `repositories` (object, required)

Customize repositories section of build.gradle

##### `plugins` (array, required)

The object is an array with all elements of the type `string`.

##### `buildscript` (object, required)

Properties of the `buildscript` object:

###### `repositories` (object, required)

###### `dependencies` (object, required)

##### `dexOptions` (object, required)

##### `injectAfterAll` (array, required)

The object is an array with all elements of the type `string`.

#### `app_build_gradle` (object)

Overrides values in `app/build.gradle` file of generated android based project

Properties of the `app_build_gradle` object:

##### `apply` (array, required)

The object is an array with all elements of the type `string`.

##### `defaultConfig` (array, required)

The object is an array with all elements of the type `string`.

##### `buildTypes` (object)

Properties of the `buildTypes` object:

###### `debug` (array)

The object is an array with all elements of the type `string`.

###### `release` (array)

The object is an array with all elements of the type `string`.

##### `afterEvaluate` (array)

The object is an array with all elements of the type `string`.

##### `implementations` (array)

The object is an array with all elements of the type `string`.

##### `implementation` (string)

#### `AndroidManifest_xml` (object)

Allows you to directly manipulate `AndroidManifest.xml` via json override mechanism
Injects / Overrides values in AndroidManifest.xml file of generated android based project
> IMPORTANT: always ensure that your object contains `tag` and `android:name` to target correct tag to merge into
 

Properties of the `AndroidManifest_xml` object:

##### `tag` (string, required)

##### `android:name` (string, required)

##### `android:required` (boolean)

##### `package` (string)

##### `children` (array, required)

The object is an array with all elements of the type `object`.

The array object has the following properties:

###### `tag` (, required)

###### `android:name` (, required)

###### `android:required`

###### `children` (array, required)

#### `strings_xml` (object)

Properties of the `strings_xml` object:

##### `children` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

###### `tag` (string, required)

###### `name` (string, required)

###### `child_value` (string, required)

#### `MainActivity_java` (object)

Properties of the `MainActivity_java` object:

##### `onCreate` (string)

Overrides super.onCreate method handler of MainActivity.java

Default: `"super.onCreate(savedInstanceState)"`

##### `imports` (array)

The object is an array with all elements of the type `string`.

##### `methods` (array)

The object is an array with all elements of the type `string`.

##### `createMethods` (array)

The object is an array with all elements of the type `string`.

##### `resultMethods` (array)

The object is an array with all elements of the type `string`.

#### `MainApplication_java` (object)

Allows you to configure behaviour of MainActivity

Properties of the `MainApplication_java` object:

##### `imports` (array)

The object is an array with all elements of the type `string`.

##### `methods` (array)

The object is an array with all elements of the type `string`.

##### `createMethods` (array)

The object is an array with all elements of the type `string`.

##### `packages` (array)

The object is an array with all elements of the type `string`.

##### `packageParams` (array)

The object is an array with all elements of the type `string`.

## `androidtv`

## `androidwear`

## `firetv`

## `ios` (object)

Properties of the `ios` object:

### `disabled`

### `forceLinking`

### `path`

### `git` (string)

Alternative git url for pod instead of version

### `commit` (string)

Alternative git commit reference string

### `version` (string)

Version of pod

### `podNames` (array)

The object is an array with all elements of the type `string`.

### `podName` (string)

### `staticFrameworks` (array)

The object is an array with all elements of the type `string`.

### `templateXcode` (object)

Properties of the `templateXcode` object:

#### `Podfile` (object)

Allows to manipulate Podfile

Properties of the `Podfile` object:

##### `injectLines` (array)

The object is an array with all elements of the type `string`.

##### `post_install` (array)

The object is an array with all elements of the type `string`.

##### `sources` (array)

Array of URLs that will be injected on top of the Podfile as sources

The object is an array with all elements of the type `string`.

##### `podDependencies` (array)

The object is an array with all elements of the type `string`.

##### `staticPods` (array)

The object is an array with all elements of the type `string`.

##### `header` (array)

Array of strings that will be injected on top of the Podfile

The object is an array with all elements of the type `string`.

#### `project_pbxproj` (object)

Properties of the `project_pbxproj` object:

##### `sourceFiles` (array)

The object is an array with all elements of the type `string`.

##### `resourceFiles` (array)

The object is an array with all elements of the type `string`.

##### `headerFiles` (array)

The object is an array with all elements of the type `string`.

##### `buildPhases` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

###### `shellPath` (string, required)

###### `shellScript` (string, required)

###### `inputPaths` (array, required)

The object is an array with all elements of the type `string`.

##### `frameworks` (array)

The object is an array with all elements of the type `string`.

##### `buildSettings` (object)

#### `AppDelegate_mm` (object)

Properties of the `AppDelegate_mm` object:

##### `appDelegateMethods` (object)

Properties of the `appDelegateMethods` object:

###### `application` (object, required)

Properties of the `application` object:

**`didFinishLaunchingWithOptions`** (array, required)

The elements of the array must match *at least one* of the following properties:

 (string)

 (object)

Properties of the `undefined` object:

**`order`** (number, required)

**`value`** (string, required)

**`weight`** (number, required)

**`applicationDidBecomeActive`** (array, required)

**`open`** (array, required)

**`supportedInterfaceOrientationsFor`** (array, required)

**`didReceiveRemoteNotification`** (array, required)

**`didFailToRegisterForRemoteNotificationsWithError`** (array, required)

**`didReceive`** (array, required)

**`didRegister`** (array, required)

**`didRegisterForRemoteNotificationsWithDeviceToken`** (array, required)

**`continue`** (array, required)

**`didConnectCarInterfaceController`** (array, required)

**`didDisconnectCarInterfaceController`** (array, required)

###### `userNotificationCenter` (object, required)

Properties of the `userNotificationCenter` object:

**`willPresent`** (array, required)

**`didReceiveNotificationResponse`** (array, required)

##### `appDelegateImports` (array)

The object is an array with all elements of the type `string`.

#### `AppDelegate_h` (object)

Properties of the `AppDelegate_h` object:

##### `appDelegateImports` (array)

The object is an array with all elements of the type `string`.

##### `appDelegateExtensions` (array)

The object is an array with all elements of the type `string`.

#### `Info_plist` (object)

Properties of the `Info_plist` object:

### `isStatic` (boolean)

### `buildType` (string, enum)

Build type of the pod

This element must be one of the following enum values:

* `dynamic`
* `static`

## `tvos`

## `tizen` (object)

Properties of the `tizen` object:

### `disabled`

### `forceLinking`

### `path`

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