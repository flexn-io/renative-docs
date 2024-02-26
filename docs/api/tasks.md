---
id: tasks
title: rnv Command-Line Interface
sidebar_label: rnv CLI
---
## crypto

### decrypt

Decrypt encrypted project files into local `~/<wokspace>/<project>/..`

Provider: engine-core

Example:
```bash
npx rnv crypto decrypt
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### encrypt

Encrypts secure files from `~/<wokspace>/<project>/..` to project

Provider: engine-core

Example:
```bash
npx rnv crypto encrypt
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### installCerts

Installs certificates into keychain (mac only)

Provider: engine-rn

Example:
```bash
npx rnv crypto installCerts
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### updateProfile

Update provisioning profile (mac only)

Provider: engine-rn

Example:
```bash
npx rnv crypto updateProfile
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### updateProfiles

Will attempt to update all provisioning profiles (mac only)

Provider: engine-rn

Example:
```bash
npx rnv crypto updateProfiles
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### installProfiles

Installs provisioning certificates found in your workspace (mac only)

Provider: engine-rn

Example:
```bash
npx rnv crypto installProfiles
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## platform

### eject

Copy all platform files directly to project

Provider: engine-core

Example:
```bash
npx rnv platform eject
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### connect

Connect platform template back to rnv

Provider: engine-core

Example:
```bash
npx rnv platform connect
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### list

List all available platforms

Provider: engine-core

Example:
```bash
npx rnv platform list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### configure

Low-level task used by engines to prepare platformBuilds folder

Provider: engine-core

Example:
```bash
npx rnv platform configure
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### setup

Allows you to change supportedPlatforms for your project

Provider: engine-core

Example:
```bash
npx rnv platform setup
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## template

### add

Install additional template to the project

Provider: engine-core

Example:
```bash
npx rnv template add
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### apply

Reset project to specific template

Provider: engine-core

Example:
```bash
npx rnv template apply
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### list

Show list of available templates

Provider: engine-core

Example:
```bash
npx rnv template list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## plugin

### add

Add selected plugin to the project

Provider: engine-core

Example:
```bash
npx rnv plugin add
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### list

Show list of all available plugins

Provider: engine-core

Example:
```bash
npx rnv plugin list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### update

Update specific plugin to latest supported version (rnv)

Provider: engine-core

Example:
```bash
npx rnv plugin update
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## workspace

### list

Show list of all available workspaces

Provider: engine-core

Example:
```bash
npx rnv workspace list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### add

Add new workspace

Provider: engine-core

Example:
```bash
npx rnv workspace add
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### connect

Connect project with selected workspace

Provider: engine-core

Example:
```bash
npx rnv workspace connect
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### update

TODO: unused task

Provider: engine-core

Example:
```bash
npx rnv workspace update
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### configure

Preconfigures your current workspace defined via "workspaceID" prop in renative config file

Provider: engine-core

Example:
```bash
npx rnv workspace configure
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## hooks

### list

Get list of all available hooks

Provider: engine-core

Example:
```bash
npx rnv hooks list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### run

Run specific build hook

Provider: engine-core

Example:
```bash
npx rnv hooks run
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`exeMethod`](#exemethod)

### pipes

Get the list of all available pipes

Provider: engine-core

Example:
```bash
npx rnv hooks pipes
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## clean

Automatically removes all node_modules and lock in your project and its dependencies

Example:

```bash
npx rnv clean
```

## status

Show current info about the project

Example:

```bash
npx rnv status
```

## config

Display RNV config

Example:

```bash
npx rnv config
```

## help

Display generic help

Example:

```bash
npx rnv help
```

## new

Create new ReNative project

Example:

```bash
npx rnv new
```

## install

Install package node_modules via yarn or npm

Example:

```bash
npx rnv install
```

## project

### configure

Configure current project

Provider: engine-core

Example:
```bash
npx rnv project configure
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### upgrade

Upgrade or downgrade RNV dependencies in your ReNative project

Provider: engine-core

Example:
```bash
npx rnv project upgrade
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## app

### configure

Configure project with specific appConfig

Provider: engine-core

Example:
```bash
npx rnv app configure
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only), [`reset`](#reset), [`resetHard`](#resethard), [`engine`](#engine), [`resetAssets`](#resetassets), [`appConfigID`](#appconfigid), [`scheme`](#scheme), [`platform`](#platform)

### create

Create new app config

Provider: engine-core

Example:
```bash
npx rnv app create
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## configureSoft

Configure system and project without recreating files (used for --only)

Example:

```bash
npx rnv configureSoft
```

## kill

Kills all the processes related to this project

Example:

```bash
npx rnv kill
```

## doctor

Checks validity and config health of your project

Example:

```bash
npx rnv doctor
```

## target

### list

List all available targets for specific platform

Provider: engine-core

Example:
```bash
npx rnv target list
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### launch

Launch specific target

Provider: engine-core

Example:
```bash
npx rnv target launch
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## link

Links development version or renative with this project

Example:

```bash
npx rnv link
```

## unlink

Replaces rnv version in project with original node_modules version

Example:

```bash
npx rnv unlink
```

## telemetry

### status

Show current rnv telemetry status on your machine

Provider: engine-core

Example:
```bash
npx rnv telemetry status
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### enable

Enables rnv telemetry on your machine

Provider: engine-core

Example:
```bash
npx rnv telemetry enable
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

### disable

Disables rnv telemetry on your machine

Provider: engine-core

Example:
```bash
npx rnv telemetry disable
```


Available Options:
[`info`](#info), [`ci`](#ci), [`mono`](#mono), [`maxErrorLength`](#maxerrorlength), [`only`](#only)

## switch

Switch between different app configs in current project

Example:

```bash
npx rnv switch
```

## run

Run your app on target device or emulator

Example:

```bash
npx rnv run
```

## package

Package source files into bundle

Example:

```bash
npx rnv package
```

## build

Build project binary

Example:

```bash
npx rnv build
```

## configure

Configure current project

Example:

```bash
npx rnv configure
```

## start

Starts bundler / server

Example:

```bash
npx rnv start
```

## export

Export the app into deployable binary

Example:

```bash
npx rnv export
```

## deploy

Deploy the binary via selected deployment intgeration or buld hook

Example:

```bash
npx rnv deploy
```

## debug

Debug your app on target device or emulator

Example:

```bash
npx rnv debug
```

## eject

Eject current project app to self contained native project

Example:

```bash
npx rnv eject
```

## log

Attach logger to device or emulator and print out logs

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

