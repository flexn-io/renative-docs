---
id: cli
title: rnv Command-Line Interface
sidebar_label: rnv CLI
---
## Commands

### crypto

#### decrypt

Decrypt encrypted project files into local `~/<wokspace>/<project>/..`

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto decrypt
```

#### encrypt

Encrypts secure files from `~/<wokspace>/<project>/..` to project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto encrypt
```

#### installCerts

Installs certificates into keychain (mac only)

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto installCerts
```

#### updateProfile

Update provisioning profile (mac only)

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto updateProfile
```

#### updateProfiles

Will attempt to update all provisioning profiles (mac only)

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto updateProfiles
```

#### installProfiles

Installs provisioning certificates found in your workspace (mac only)

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv crypto installProfiles
```

### platform

#### eject

Copy all platform files directly to project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv platform eject
```

#### connect

Connect platform template back to rnv

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv platform connect
```

#### list

List all available platforms

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv platform list
```

#### configure

Low-level task used by engines to prepare platformBuilds folder

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv platform configure
```

#### setup

Allows you to change supportedPlatforms for your project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv platform setup
```

### template

#### add

Install additional template to the project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv template add
```

#### apply

Reset project to specific template

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv template apply
```

#### list

Show list of available templates

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv template list
```

### plugin

#### add

Add selected plugin to the project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv plugin add
```

#### list

Show list of all available plugins

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv plugin list
```

#### update

Update specific plugin to latest supported version (rnv)

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv plugin update
```

### workspace

#### list

Show list of all available workspaces

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv workspace list
```

#### add

Add new workspace

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv workspace add
```

#### connect

Connect project with selected workspace

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv workspace connect
```

#### update

TODO: unused task

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv workspace update
```

#### configure

Preconfigures your current workspace defined via "workspaceID" prop in renative config file

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv workspace configure
```

### hooks

#### list

Get list of all available hooks

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv hooks list
```

#### run

Run specific build hook

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`exeMethod`](#exemethod)

Example:
```bash
npx rnv hooks run
```

#### pipes

Get the list of all available pipes

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv hooks pipes
```

### clean

Automatically removes all node_modules and lock in your project and its dependencies

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv clean
```

### status

Show current info about the project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv status
```

### config

Display RNV config

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv config
```

### help

Display generic help

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv help
```

### new

Create new ReNative project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv new
```

### install

Install package node_modules via yarn or npm

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv install
```

### project

#### configure

Configure current project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv project configure
```

#### upgrade

Upgrade or downgrade RNV dependencies in your ReNative project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv project upgrade
```

### app

#### configure

Configure project with specific appConfig

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv app configure
```

#### create

Create new app config

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv app create
```

### configureSoft

Configure system and project without recreating files (used for --only)

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv configureSoft
```

### kill

Kills all the processes related to this project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv kill
```

### doctor

Checks validity and config health of your project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv doctor
```

### target

#### list

List all available targets for specific platform

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv target list
```

#### launch

Launch specific target

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv target launch
```

### link

Links development version or renative with this project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv link
```

### unlink

Replaces rnv version in project with original node_modules version

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv unlink
```

### telemetry

#### status

Show current rnv telemetry status on your machine

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv telemetry status
```

#### enable

Enables rnv telemetry on your machine

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv telemetry enable
```

#### disable

Disables rnv telemetry on your machine

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv telemetry disable
```

### switch

Switch between different app configs in current project

Available in engines: [engine-core](engines/engine-core.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv switch
```

### run

Run your app on target device or emulator

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform), [`target`](#target), [`device`](#device), [`hosted`](#hosted), [`port`](#port), [`debug`](#debug), [`debugIp`](#debugip), [`skipTargetCheck`](#skiptargetcheck), [`host`](#host)

Example:
```bash
npx rnv run
```

### package

Package source files into bundle

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv package
```

### build

Build project binary

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv build
```

### configure

Configure current project

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv configure
```

### start

Starts bundler / server

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv start
```

### export

Export the app into deployable binary

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv export
```

### deploy

Deploy the binary via selected deployment intgeration or buld hook

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv deploy
```

### debug

Debug your app on target device or emulator

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md), [engine-rn-next](engines/engine-rn-next.md), [engine-rn-web](engines/engine-rn-web.md), [engine-rn-electron](engines/engine-rn-electron.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv debug
```

### eject

Eject current project app to self contained native project

Available in engines: [engine-rn](engines/engine-rn.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

Example:
```bash
npx rnv eject
```

### log

Attach logger to device or emulator and print out logs

Available in engines: [engine-rn](engines/engine-rn.md), [engine-rn-tvos](engines/engine-rn-tvos.md)


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

Example:
```bash
npx rnv log
```

## Options

### info
Show full debug Info

Shortcut: ``-i``

Value: ``value``

### printExec
Print exec commands in full

### updatePods
Force update dependencies (iOS only)

Shortcut: ``-u``

### platform
select specific Platform

Shortcut: ``-p``

Value: ``value``

### appConfigID
select specific app Config id

Shortcut: ``-c``

Value: ``value``

### target
select specific Target device/simulator

Shortcut: ``-t``

Value: ``value``

### projectName
select the name of the new project

Value: ``value``

### projectTemplate
select the template of new project

Value: ``value``

### templateVersion
select the template version

Value: ``value``

### title
select the title of the app

Value: ``value``

### id
select the id of the app

Value: ``value``

### appVersion
select the version of the app

Value: ``value``

### workspace
select the workspace for the new project

Value: ``value``

### template
select specific template

Shortcut: ``-T``

Value: ``value``

### device
select connected Device

Shortcut: ``-d``

Value: ``value``

### scheme
select build Scheme

Shortcut: ``-s``

Value: ``value``

### filter
Filter value

Shortcut: ``-f``

Value: ``value``

### list
return List of items related to command

Shortcut: ``-l``

### only
run Only top command (Skip dependencies)

Shortcut: ``-o``

### reset
also perform reset of platform build

Shortcut: ``-r``

### resetHard
also perform reset of platform platform and platform assets

Shortcut: ``-R``

### resetAssets
also perform reset of platform assets

Shortcut: ``-a``

### key
Pass the key/password

Shortcut: ``-k``

Value: ``value``

### blueprint
Blueprint for targets

Shortcut: ``-b``

Value: ``value``

### help
Displays help info for particular command

Shortcut: ``-h``

### host
custom Host ip

Shortcut: ``-H``

Value: ``value``

### exeMethod
eXecutable method in buildHooks

Shortcut: ``-x``

Value: ``value``

### port
custom Port

Shortcut: ``-P``

Value: ``value``

### debug
enable or disable remote debugger.

Shortcut: ``-D``

Value: ``value``

### global
Flag for setting a config value for all RNV projects

Shortcut: ``-G``

### engine
engine to be used (next)

Shortcut: ``-e``

Value: ``value``

### debugIp
(optional) overwrite the ip to which the remote debugger will connect

Value: ``value``

### ci
CI/CD flag so it wont ask questions

### mono
Monochrome console output without chalk

### skipNotifications
Skip sending any integrated notifications

### keychain
Name of the keychain

Value: ``value``

### provisioningStyle
Set provisioningStyle (Automatic | Manual)

Value: ``value``

### codeSignIdentity
Set codeSignIdentity (ie iPhone Distribution)

Value: ``value``

### provisionProfileSpecifier
Name of provisionProfile

Value: ``value``

### hosted
Run in a hosted environment (skip budleAssets)

### hooks
Force rebuild hooks

### maxErrorLength
Specify how many characters each error should display. Default 200

Value: ``number``

### skipTargetCheck
Skip Android target check, just display the raw adb devices to choose from

### analyzer
Enable real-time bundle analyzer

### xcodebuildArgs
pass down custom xcodebuild arguments

Value: ``value``

### xcodebuildArchiveArgs
pass down custom xcodebuild arguments

Value: ``value``

### xcodebuildExportArgs
pass down custom xcodebuild arguments

Value: ``value``

### skipDependencyCheck
Skips auto update of npm dependencies if mismatch found

### skipRnvCheck
Skips auto update of rnv dependencies if mismatch found

### configName
Use custom name for ./renative.json. (applies only at root level)

Value: ``value``

### sourceAppConfigID
name of source appConfig folder to copy from

Value: ``value``

### hostIp
Custom IP override

Value: ``value``

### unlinked
Force engines to be loaded from node_modules rather than locally

### yes
Default all prompts to yes

### gitEnabled
Enable git in your newly created project

Value: ``value``

### npxMode
Ensures you can use local npx rnv version after the command is done

### json
Outputs the result as json

### packageManager
Set specific package manager to use

Value: ``value``

### skipTasks
List tasks which you want to skip during rnv execution

Value: ``value``

### answer
Pass in answers to prompts

Value: ``value``

### resetAdb
Forces to reset android adb

### telemetryDebug
If you have telemetry enabled, will print out exactly what is being collected into the console

