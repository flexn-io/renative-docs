---
id: cli-engine-rn-tvos
title: Engine Rn Tvos CLI Reference
sidebar_label: Engine Rn Tvos
---




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## run

> Run your app on target device or emulator

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv run
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform

`-t`, `--target` - select specific Target device/simulator

`-d`, `--device` - select connected Device

`--hosted` - Run in a hosted environment (skip budleAssets)

`-P`, `--port` - custom Port

`-D`, `--debug` - enable or disable remote debugger.

`--debugIp` - (optional) overwrite the ip to which the remote debugger will connect

`--skipTargetCheck` - Skip Android target check, just display the raw adb devices to choose from

`-H`, `--host` - custom Host ip




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## package

> Package source files into bundle

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv package
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## build

> Build project binary

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv build
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## configure

> Configure current project

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv configure
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## start

> Starts bundler / server

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv start
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## export

> Export the app into deployable binary

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv export
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## deploy

> Deploy the binary via selected deployment intgeration or buld hook

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv deploy
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)

`-r`, `--reset` - also perform reset of platform build

`-R`, `--resetHard` - also perform reset of platform platform and platform assets

`-e`, `--engine` - engine to be used (next)

`-a`, `--resetAssets` - also perform reset of platform assets

`-c`, `--appConfigID` - select specific app Config id

`-s`, `--scheme` - select build Scheme

`-p`, `--platform` - select specific Platform




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## debug

> Debug your app on target device or emulator

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
rnv debug
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## crypto installCerts

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
rnv crypto installCerts
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## crypto updateProfile

> Update provisioning profile

Supported Platforms:

`tvos`

Example:

```bash
rnv crypto updateProfile
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## crypto updateProfiles

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
rnv crypto updateProfiles
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## crypto installProfiles

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
rnv crypto installProfiles
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)




---

This command reference applies if your platform uses engine `engine-rn-tvos`.

More info at [Engine Rn Tvos Guide](cli-engine-rn-tvos.md)

---

## log

> Attach logger to device or emulator and print out logs

Supported Platforms:

`tvos`, `androidtv`, `firetv`

Example:

```bash
rnv log
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)


test