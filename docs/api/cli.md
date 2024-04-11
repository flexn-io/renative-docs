---
id: cli
title: rnv Command-Line Interface
sidebar_label: rnv CLI
---
## Commands

### telemetry status

Show current rnv telemetry status on your machine

Provided by: @rnv/sdk-telemetry

Example:
```bash
npx rnv telemetry status
```

### telemetry enable

Enables rnv telemetry on your machine

Provided by: @rnv/sdk-telemetry

Example:
```bash
npx rnv telemetry enable
```

### telemetry disable

Disables rnv telemetry on your machine

Provided by: @rnv/sdk-telemetry

Example:
```bash
npx rnv telemetry disable
```

### crypto decrypt

Decrypt encrypted project files into local `~/<wokspace>/<project>/..`

Provided by: @rnv/engine-core


Available Options:
[`key`](#key)

Example:
```bash
npx rnv crypto decrypt
```

### crypto encrypt

Encrypts secure files from `~/<wokspace>/<project>/..` to project

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)


Available Options:
[`key`](#key)

Example:
```bash
npx rnv crypto encrypt
```

### platform eject

Copy all platform files directly to project

Provided by: @rnv/engine-core

Example:
```bash
npx rnv platform eject
```

### platform connect

Connect platform template back to rnv

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv platform connect
```

### platform list

List all available platforms

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv platform list
```

### platform configure

Low-level task used by engines to prepare platformBuilds folder

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv platform configure
```

### project platforms

Allows you to change supportedPlatforms for your project

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv project platforms
```

### template apply

Reapply template (if configured) to current project

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv template apply
```

### plugin add

Add selected plugin to the project

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv plugin add
```

### plugin list

Show list of all available plugins

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv plugin list
```

### plugin update

Update specific plugin to latest supported version (rnv)

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv plugin update
```

### workspace list

Show list of all available workspaces

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv workspace list
```

### workspace add

Add new workspace

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv workspace add
```

### workspace connect

Connect project with selected workspace

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv workspace connect
```

### hooks list

Get list of all available hooks

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv hooks list
```

### hooks run

Run specific build hook

Provided by: @rnv/engine-core


Available Options:
[`exeMethod`](#exemethod)

Example:
```bash
npx rnv hooks run
```

### hooks pipes

Get the list of all available pipes

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv hooks pipes
```

### clean

Automatically removes all node_modules and lock in your project and its dependencies

Provided by: @rnv/engine-core

Example:
```bash
npx rnv clean
```

### status

Show current info about the project

Provided by: @rnv/engine-core

Example:
```bash
npx rnv status
```

### config

Display RNV config

Provided by: @rnv/engine-core

Depends On:
[`configureSoft`](#configuresoft)

Example:
```bash
npx rnv config
```

### help

Display generic help

Provided by: @rnv/engine-core

Example:
```bash
npx rnv help
```

### new

Create new ReNative project

Provided by: @rnv/engine-core


Available Options:
[`gitEnabled`](#gitenabled), [`answer`](#answer), [`workspace`](#workspace), [`template`](#template), [`projectName`](#projectname), [`projectTemplate`](#projecttemplate), [`templateVersion`](#templateversion), [`title`](#title), [`appVersion`](#appversion), [`id`](#id)

Example:
```bash
npx rnv new
```

### project configure

Configure current project

Provided by: @rnv/engine-core

Example:
```bash
npx rnv project configure
```

### project upgrade

Upgrade or downgrade RNV dependencies in your ReNative project

Provided by: @rnv/engine-core

Example:
```bash
npx rnv project upgrade
```

### app configure

Configure project with specific appConfig

Provided by: @rnv/engine-core


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv app configure
```

### app create

Create new app config

Provided by: @rnv/engine-core


Available Options:
[`sourceAppConfigID`](#sourceappconfigid)

Example:
```bash
npx rnv app create
```

### workspace configure

Preconfigures your current workspace defined via "workspaceID" prop in renative config file

Provided by: @rnv/engine-core

Example:
```bash
npx rnv workspace configure
```

### configureSoft

Configure system and project without recreating files (used for --only)

Provided by: @rnv/engine-core

Example:
```bash
npx rnv configureSoft
```

### kill

Kills all the processes related to this project

Provided by: @rnv/engine-core

Example:
```bash
npx rnv kill
```

### doctor

Checks validity and config health of your project

Provided by: @rnv/engine-core

Depends On:
[`app configure`](#app-configure)

Example:
```bash
npx rnv doctor
```

### link

Links development version or renative with this project

Provided by: @rnv/engine-core


Available Options:
[`dir`](#dir)

Example:
```bash
npx rnv link
```

### unlink

Replaces rnv version in project with original node_modules version

Provided by: @rnv/engine-core

Example:
```bash
npx rnv unlink
```

### app switch

Switch between different app configs in current project

Provided by: @rnv/engine-core

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv app switch
```

### target launch

Launch specific target

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### sdk configure

Configures sdks

Provided by: @rnv/engine-rn

Example:
```bash
npx rnv sdk configure
```

### log

Attach logger to device or emulator and print out logs

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)

Example:
```bash
npx rnv log
```

### package

Package source files into bundle

Provided by: @rnv/engine-rn

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv package
```

### configure

Configure current project

Provided by: @rnv/engine-rn

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv configure
```

### run

Run your rn app on target device or emulator

Provided by: @rnv/engine-rn

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn

Depends On:
[`package`](#package)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv build
```

### target launch

Launch specific ios target

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### crypto installCerts

Installs certificates into keychain (mac only)

Provided by: @rnv/engine-rn

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto installCerts
```

### crypto updateProfile

Update provisioning profile (mac only)

Provided by: @rnv/engine-rn

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto updateProfile
```

### crypto updateProfiles

Will attempt to update all provisioning profiles (mac only)

Provided by: @rnv/engine-rn

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto updateProfiles
```

### crypto installProfiles

Installs provisioning certificates found in your workspace (mac only)

Provided by: @rnv/engine-rn

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto installProfiles
```

### log

Attach logger to device or emulator and print out logs

Provided by: @rnv/engine-rn

Depends On:
[`workspace configure`](#workspace-configure)

Example:
```bash
npx rnv log
```

### export

Export the app into deployable binary

Provided by: @rnv/engine-rn

Depends On:
[`build`](#build)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv export
```

### package

Package source files into bundle

Provided by: @rnv/engine-rn

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv package
```

### configure

Configure current project

Provided by: @rnv/engine-rn

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv configure
```

### run

Run your rn app on target device or emulator

Provided by: @rnv/engine-rn

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn

Depends On:
[`package`](#package)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity), [`xcodebuildArgs`](#xcodebuildargs)

Example:
```bash
npx rnv build
```

### start

Starts react-native bundler

Provided by: @rnv/engine-rn

Depends On:
[`configureSoft`](#configuresoft)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv start
```

### run

Run your app in browser

Provided by: @rnv/engine-rn-next

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn-next

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv build
```

### configure

Configure current project

Provided by: @rnv/engine-rn-next

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv configure
```

### start

Starts bundler / server

Provided by: @rnv/engine-rn-next

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv start
```

### export

Export the app into deployable binary

Provided by: @rnv/engine-rn-next

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv export
```

### run

Run your app in browser

Provided by: @rnv/engine-rn-web

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn-web

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv build
```

### configure

Configure current project

Provided by: @rnv/engine-rn-web

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv configure
```

### start

Starts bundler / server

Provided by: @rnv/engine-rn-web

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv start
```

### debug

Debug your app on target device or emulator

Provided by: @rnv/engine-rn-web

Example:
```bash
npx rnv debug
```

### target launch

Launch specific target

Provided by: @rnv/engine-rn-web

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn-web

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### sdk configure

Configures sdks

Provided by: @rnv/engine-rn-web

Example:
```bash
npx rnv sdk configure
```

### target launch

Launch specific target

Provided by: @rnv/engine-rn-web

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn-web

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### sdk configure

Configures sdks

Provided by: @rnv/engine-rn-web

Example:
```bash
npx rnv sdk configure
```

### target launch

Launch specific target

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### sdk configure

Configures sdks

Provided by: @rnv/engine-rn-tvos

Example:
```bash
npx rnv sdk configure
```

### log

Attach logger to device or emulator and print out logs

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)

Example:
```bash
npx rnv log
```

### package

Package source files into bundle

Provided by: @rnv/engine-rn-tvos

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv package
```

### configure

Configure current project

Provided by: @rnv/engine-rn-tvos

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv configure
```

### run

Run your rn app on target device or emulator

Provided by: @rnv/engine-rn-tvos

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn-tvos

Depends On:
[`package`](#package)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv build
```

### target launch

Launch specific ios target

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target launch
```

### target list

List all available targets for specific platform

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)


Available Options:
[`target`](#target)

Example:
```bash
npx rnv target list
```

### crypto installCerts

Installs certificates into keychain (mac only)

Provided by: @rnv/engine-rn-tvos

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto installCerts
```

### crypto updateProfile

Update provisioning profile (mac only)

Provided by: @rnv/engine-rn-tvos

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto updateProfile
```

### crypto updateProfiles

Will attempt to update all provisioning profiles (mac only)

Provided by: @rnv/engine-rn-tvos

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto updateProfiles
```

### crypto installProfiles

Installs provisioning certificates found in your workspace (mac only)

Provided by: @rnv/engine-rn-tvos

Depends On:
[`project configure`](#project-configure)

Example:
```bash
npx rnv crypto installProfiles
```

### log

Attach logger to device or emulator and print out logs

Provided by: @rnv/engine-rn-tvos

Depends On:
[`workspace configure`](#workspace-configure)

Example:
```bash
npx rnv log
```

### export

Export the app into deployable binary

Provided by: @rnv/engine-rn-tvos

Depends On:
[`build`](#build)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv export
```

### package

Package source files into bundle

Provided by: @rnv/engine-rn-tvos

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv package
```

### configure

Configure current project

Provided by: @rnv/engine-rn-tvos

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity)

Example:
```bash
npx rnv configure
```

### run

Run your rn app on target device or emulator

Provided by: @rnv/engine-rn-tvos

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn-tvos

Depends On:
[`package`](#package)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`provisioningStyle`](#provisioningstyle), [`provisionProfileSpecifier`](#provisionprofilespecifier), [`codeSignIdentity`](#codesignidentity), [`xcodebuildArgs`](#xcodebuildargs)

Example:
```bash
npx rnv build
```

### start

Starts react-native bundler

Provided by: @rnv/engine-rn-tvos

Depends On:
[`configureSoft`](#configuresoft)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv start
```

### run

Run your electron app on your machine

Provided by: @rnv/engine-rn-electron

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### build

Build project binary

Provided by: @rnv/engine-rn-electron

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv build
```

### configure

Configure current project

Provided by: @rnv/engine-rn-electron

Depends On:
[`platform configure`](#platform-configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv configure
```

### start

Starts bundler / server

Provided by: @rnv/engine-rn-electron

Depends On:
[`configure`](#configure)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv start
```

### export

Export the app into deployable binary

Provided by: @rnv/engine-rn-electron

Depends On:
[`build`](#build)


Available Options:
[`reset`](#reset), [`resetHard`](#resethard), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`packageManager`](#packagemanager)

Example:
```bash
npx rnv export
```

## Options

### help
Displays help info for particular command

Shortcut: ``-h``

Type: Flag

### info
Show full debug Info

Shortcut: ``-i``

Type: Value

### printExec
Print exec commands in full

Type: Flag

### platform
select specific Platform

Shortcut: ``-p``

Type: Value

### skipTasks
List tasks which you want to skip during rnv execution

Type: Value, required

Examples:
```bash
npx rnv --skipTasks "configure,export"
```
```bash
npx rnv --skipTasks deploy
```
### only
run Only top command (Skip dependencies)

Shortcut: ``-o``

Type: Flag

### ci
CI/CD flag so it wont ask questions

Type: Flag

### mono
Monochrome console output without chalk

Type: Flag

### maxErrorLength
Specify how many characters each error should display. Default 200

Type: Value, required

### json
Outputs the result as json

Type: Flag

### yes
Default all prompts to yes

Type: Flag

### telemetryDebug
If you have telemetry enabled, will print out exactly what is being collected into the console

Type: Flag

### packageManager
Set specific package manager to use

Type: Value, required

Examples:
```bash
npx rnv --packageManager yarn
```
```bash
npx rnv --packageManager npm
```
### npxMode
Ensures you can use local npx rnv version after the command is done

Type: Flag

### unlinked
Force engines to be loaded from node_modules rather than locally

Type: Flag

### configName
Use custom name for ./renative.json. (applies only at root level)

Type: Value, required

### skipDependencyCheck
Skips auto update of npm dependencies if mismatch found

Type: Flag

### appConfigID
select specific app Config id

Shortcut: ``-c``

Type: Value

### skipRnvCheck
Skips auto update of rnv dependencies if mismatch found

Type: Flag

### scheme
select build Scheme

Shortcut: ``-s``

Type: Value

### engine
engine to be used ie "engine-rn"

Shortcut: ``-e``

Type: Value, required

### exeMethod
eXecutable method in buildHooks

Shortcut: ``-x``

Type: Value

### reset
also perform reset of platform build

Shortcut: ``-r``

Type: Flag

### resetHard
also perform reset of platform platform and platform assets

Shortcut: ``-R``

Type: Flag

### resetAssets
also perform reset of platform assets

Shortcut: ``-a``

Type: Flag

### hooks
Force rebuild hooks

Type: Flag

### hostIp
Custom IP override

Type: Value, required

### target
select specific Target device/simulator

Shortcut: ``-t``

Type: Value

### host
custom Host ip

Shortcut: ``-H``

Type: Value, required

### port
custom Port

Shortcut: ``-P``

Type: Value, required

### hosted
Run in a hosted environment (skip budleAssets)

Type: Flag

### debugIp
(optional) overwrite the ip to which the remote debugger will connect

Type: Value, required

### debug
enable or disable remote debugger.

Shortcut: ``-D``

Type: Value

Examples:
```bash
npx rnv --debug weinre //run remote debug with weinre as preference
```
```bash
npx rnv --debug chii //run remote debug with chii as preference
```
```bash
npx rnv --debug false //force disable remote debug
```
```bash
npx rnv --debug //run remote debug with default preference (chii)
```
### skipTargetCheck
Skip Android target check, just display the raw adb devices to choose from

Type: Flag

### filter
Filter value

Shortcut: ``-f``

Type: Value, required

### device
select connected Device

Shortcut: ``-d``

Type: Value

### resetAdb
Forces to reset android adb

Type: Flag

