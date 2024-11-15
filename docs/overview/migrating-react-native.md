---
id: migrating_react_native
title: Migrating react-native project to ReNative
sidebar_label: Migrating react-native
original_id: migrating_react_native
---

ReNative supports react-native projects pretty much out of the box in terms of your application code

Due to variety of possibilities / complexity fo react-native projects (ie plugins, custom build scripts and so on) there might be some extra work required to reconnect existing plugins

---

## Migration Guide

1. Install rnv
2. Create new project `rnv new` (pick @rnv/template-starter)
3. Follow rest of the steps of installation.
4. After first `rnv run ...` check out the codebase.

### ReNative Project Folder Structure
For more information about the project structure, please visit this <a href="/docs/overview/architecture#build-process">link</a>.

The `src/` folder contains the source content for your application. The initial structure of the `src/` folder includes the following subfolders:

-   `app`: This folder contains the main files for your application.
-   `entry`: This folder allows you to configure the launch settings of your app. It is intended for advanced configuration and customization.
-   `pages`: This folder enables you to create individual pages for your application.

:::info
You are not restricted to the three specified folders. Within the `src/` directory, you have the flexibility to create your own folders to organize styles, components, and any other necessary resources.
:::

If you also installed some react native plugins in your project make sure to move them to `./renative.json` config file under `plugins` object. 

Renative uses standard react native plugins so plugin names will stay same!

For example:

```
"plugins": {
    "react-native": "0.73.4"
}
```
In the `./renative.json` configuration file, you have the option to add additional plugin configurations. For more information, please visit this  <a href="/docs/concepts/plugins#custom-plugin-support">link</a>.

### Issues that could be encountered

#### Resolving `requestAnimationFrame` Error in `react-native-reanimated`
##### Error
```
ReferenceError: requestAnimationFrame is not defined
```
##### Solution
This error in `react-native-reanimated` has been addressed in [this pull request (PR)](https://github.com/software-mansion/react-native-reanimated/pull/4665).
##### Fix Steps
To resolve this issue, ensure you update `react-native-reanimated` to version 3.5.0 or higher.

---
#### Resolving Module Parse Error for `react-native/Libraries/NewAppScreen`

##### Error
```
Module parse failed for react-native/Libraries/NewAppScreen
```

##### Solution
To fix this error, you need to remove or replace the `Colors` import from `react-native/Libraries/NewAppScreen` with an alternative.

##### Steps
1. **Remove the `Colors` import** from `react-native/Libraries/NewAppScreen` in your code.
2. **Replace it with an alternative** color import or define your own color scheme to use in its place.

By following these steps, you should be able to resolve the module parse error and continue with your project.

---




if you have any issues you can always raise a question or a bug in https://github.com/pavjacko/renative/issues
