---
id: tasks
title: RNV CLI Tasks Reference
sidebar_label: RNV CLI Tasks Reference
---

## crypto

### decrypt

Decrypt encrypted project files into local `~/<wokspace>/<project>/..`

Provider: engine-core

Example:

```bash
npx rnv crypto decrypt
```

### encrypt

Encrypts secure files from `~/<wokspace>/<project>/..` to project

Provider: engine-core

Example:

```bash
npx rnv crypto encrypt
```

### installCerts

Installs certificates into keychain (mac only)

Provider: engine-rn

Example:

```bash
npx rnv crypto installCerts
```

### updateProfile

Update provisioning profile (mac only)

Provider: engine-rn

Example:

```bash
npx rnv crypto updateProfile
```

### updateProfiles

Will attempt to update all provisioning profiles (mac only)

Provider: engine-rn

Example:

```bash
npx rnv crypto updateProfiles
```

### installProfiles

Installs provisioning certificates found in your workspace (mac only)

Provider: engine-rn

Example:

```bash
npx rnv crypto installProfiles
```

## platform

### eject

Copy all platform files directly to project

Provider: engine-core

Example:

```bash
npx rnv platform eject
```

### connect

Connect platform template back to rnv

Provider: engine-core

Example:

```bash
npx rnv platform connect
```

### list

List all available platforms

Provider: engine-core

Example:

```bash
npx rnv platform list
```

### configure

Low-level task used by engines to prepare platformBuilds folder

Provider: engine-core

Example:

```bash
npx rnv platform configure
```

### setup

Allows you to change supportedPlatforms for your project

Provider: engine-core

Example:

```bash
npx rnv platform setup
```

## template

### add

Install additional template to the project

Provider: engine-core

Example:

```bash
npx rnv template add
```

### apply

Reset project to specific template

Provider: engine-core

Example:

```bash
npx rnv template apply
```

### list

Show list of available templates

Provider: engine-core

Example:

```bash
npx rnv template list
```

## plugin

### add

Add selected plugin to the project

Provider: engine-core

Example:

```bash
npx rnv plugin add
```

### list

Show list of all available plugins

Provider: engine-core

Example:

```bash
npx rnv plugin list
```

### update

Update specific plugin to latest supported version (rnv)

Provider: engine-core

Example:

```bash
npx rnv plugin update
```

## workspace

### list

Show list of all available workspaces

Provider: engine-core

Example:

```bash
npx rnv workspace list
```

### add

Add new workspace

Provider: engine-core

Example:

```bash
npx rnv workspace add
```

### connect

Connect project with selected workspace

Provider: engine-core

Example:

```bash
npx rnv workspace connect
```

### update

TODO: unused task

Provider: engine-core

Example:

```bash
npx rnv workspace update
```

### configure

Preconfigures your current workspace defined via "workspaceID" prop in renative config file

Provider: engine-core

Example:

```bash
npx rnv workspace configure
```

## hooks

### list

Get list of all available hooks

Provider: engine-core

Example:

```bash
npx rnv hooks list
```

### run

Run specific build hook

Provider: engine-core

Example:

```bash
npx rnv hooks run
```

### pipes

Get the list of all available pipes

Provider: engine-core

Example:

```bash
npx rnv hooks pipes
```

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

### upgrade

Upgrade or downgrade RNV dependencies in your ReNative project

Provider: engine-core

Example:

```bash
npx rnv project upgrade
```

## app

### configure

Configure project with specific appConfig

Provider: engine-core

Example:

```bash
npx rnv app configure
```

### create

Create new app config

Provider: engine-core

Example:

```bash
npx rnv app create
```

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

### launch

Launch specific target

Provider: engine-core

Example:

```bash
npx rnv target launch
```

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

### enable

Enables rnv telemetry on your machine

Provider: engine-core

Example:

```bash
npx rnv telemetry enable
```

### disable

Disables rnv telemetry on your machine

Provider: engine-core

Example:

```bash
npx rnv telemetry disable
```

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

## CLI Options

| Option                                | Shorthand | Description                                                                                    |
| ------------------------------------- | --------- | ---------------------------------------------------------------------------------------------- | ------- |
| `--info [value]`                      | `-i`      | Show full debug Info                                                                           |
| `--printExec`                         |           | Print exec commands in full                                                                    |
| `--updatePods`                        | `-u`      | Force update dependencies (iOS only)                                                           |
| `--platform [value]`                  | `-p`      | select specific Platform                                                                       |
| `--appConfigID [value]`               | `-c`      | select specific app Config id                                                                  |
| `--target [value]`                    | `-t`      | select specific Target device/simulator                                                        |
| `--projectName [value]`               |           | select the name of the new project                                                             |
| `--projectTemplate [value]`           |           | select the template of new project                                                             |
| `--templateVersion [value]`           |           | select the template version                                                                    |
| `--title [value]`                     |           | select the title of the app                                                                    |
| `--id [value]`                        |           | select the id of the app                                                                       |
| `--appVersion [value]`                |           | select the version of the app                                                                  |
| `--workspace [value]`                 |           | select the workspace for the new project                                                       |
| `--template <value>`                  | `-T`      | select specific template                                                                       |
| `--device [value]`                    | `-d`      | select connected Device                                                                        |
| `--scheme [value]`                    | `-s`      | select build Scheme                                                                            |
| `--filter <value>`                    | `-f`      | Filter value                                                                                   |
| `--list`                              | `-l`      | return List of items related to command                                                        |
| `--only`                              | `-o`      | run Only top command (Skip dependencies)                                                       |
| `--reset`                             | `-r`      | also perform reset of platform build                                                           |
| `--resetHard`                         | `-R`      | also perform reset of platform platform and platform assets                                    |
| `--resetAssets`                       | `-a`      | also perform reset of platform assets                                                          |
| `--key <value>`                       | `-k`      | Pass the key/password                                                                          |
| `--blueprint [value]`                 | `-b`      | Blueprint for targets                                                                          |
| `--help`                              | `-h`      | Displays help info for particular command                                                      |
| `--host <value>`                      | `-H`      | custom Host ip                                                                                 |
| `--exeMethod [value]`                 | `-x`      | eXecutable method in buildHooks                                                                |
| `--port <value>`                      | `-P`      | custom Port                                                                                    |
| `--debug [value]`                     | `-D`      | enable or disable remote debugger.                                                             |
| `--global`                            | `-G`      | Flag for setting a config value for all RNV projects                                           |
| `--engine <value>`                    | `-e`      | engine to be used (next)                                                                       |
| `--debugIp <value>`                   |           | (optional) overwrite the ip to which the remote debugger will connect                          |
| `--ci`                                |           | CI/CD flag so it wont ask questions                                                            |
| `--mono`                              |           | Monochrome console output without chalk                                                        |
| `--skipNotifications`                 |           | Skip sending any integrated notifications                                                      |
| `--keychain <value>`                  |           | Name of the keychain                                                                           |
| `--provisioningStyle <value>`         |           | Set provisioningStyle (Automatic                                                               | Manual) |
| `--codeSignIdentity <value>`          |           | Set codeSignIdentity (ie iPhone Distribution)                                                  |
| `--provisionProfileSpecifier <value>` |           | Name of provisionProfile                                                                       |
| `--hosted`                            |           | Run in a hosted environment (skip budleAssets)                                                 |
| `--hooks`                             |           | Force rebuild hooks                                                                            |
| `--maxErrorLength <number>`           |           | Specify how many characters each error should display. Default 200                             |
| `--skipTargetCheck`                   |           | Skip Android target check, just display the raw adb devices to choose from                     |
| `--analyzer`                          |           | Enable real-time bundle analyzer                                                               |
| `--xcodebuildArgs <value>`            |           | pass down custom xcodebuild arguments                                                          |
| `--xcodebuildArchiveArgs <value>`     |           | pass down custom xcodebuild arguments                                                          |
| `--xcodebuildExportArgs <value>`      |           | pass down custom xcodebuild arguments                                                          |
| `--skipDependencyCheck`               |           | Skips auto update of npm dependencies if mismatch found                                        |
| `--skipRnvCheck`                      |           | Skips auto update of rnv dependencies if mismatch found                                        |
| `--configName <value>`                |           | Use custom name for ./renative.json. (applies only at root level)                              |
| `--sourceAppConfigID <value>`         |           | name of source appConfig folder to copy from                                                   |
| `--hostIp <value>`                    |           | Custom IP override                                                                             |
| `--unlinked`                          |           | Force engines to be loaded from node_modules rather than locally                               |
| `--yes`                               |           | Default all prompts to yes                                                                     |
| `--gitEnabled [value]`                |           | Enable git in your newly created project                                                       |
| `--npxMode`                           |           | Ensures you can use local npx rnv version after the command is done                            |
| `--json`                              |           | Outputs the result as json                                                                     |
| `--packageManager <value>`            |           | Set specific package manager to use                                                            |
| `--skipTasks <value>`                 |           | List tasks which you want to skip during rnv execution                                         |
| `--answer [value]`                    |           | Pass in answers to prompts                                                                     |
| `--resetAdb`                          |           | Forces to reset android adb                                                                    |
| `--telemetryDebug`                    |           | If you have telemetry enabled, will print out exactly what is being collected into the console |
