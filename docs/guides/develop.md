---
id: develop
title: Develop ReNative
sidebar_label: Develop ReNative
original_id: develop
---

<!-- <img className="header-image" src="https://renative.org/img/ic_construction.png" width="50" height="50" /> -->

---
## Developing ReNative Locally

If you need full control over whole ReNative build you can clone and develop it locally

```
1) clone git@github.com:pavjacko/renative.git
2) cd renative
3) yarn bootstrap
4) yarn watch
```

At this point your global `rnv` command is linked directly into project above.

It's also best way to contribute back to RNV! :)


#### Windows development

Requirements: Python 2.7, Visual Studio installed or install `windows-build-tools`(https://www.npmjs.com/package/windows-build-tools). 
:::warning
**Please make sure you follow the package's instructions, especially running it in PowerShell as Administrator**
:::

---
## Testing your project with local RNV

In order to test standalone project with local renative navigate to root of your project and run

```
rnv link
```

All standard rnv commands within the project are now executed by your local renative instance

---
## Deployments

### Feature

Features (from `feat/xxx` branches):

npm tag `feat`

```
npm run deploy:feat
```

### Alpha

Canary Releases (from `develop` branch):

tag & version format: `0.31.0-canary.1`

npm tag: `next`

```
npm run deploy:canary
```

### Production

Production (from `release/xx` branches):

tag & version format: `0.31.0`

npm tag: `latest`

```
npm run deploy:prod
```

---
## Documentation

[Documentation for CLI](../api/cli.md)

[Documentation for RNV Node Library](../api/node/rnv-core/modules.md)

[Documentation for Config Descriptor](../api/schemas/rnv.project.md)

[Documentation for Runtime](../api/node/renative/modules.md)
