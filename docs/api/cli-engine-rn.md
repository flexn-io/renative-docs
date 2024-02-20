---
id: cli-engine-rn
title: Engine Rn CLI Reference
sidebar_label: Engine Rn
---



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## run

> Run your app on target device or emulator

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv run
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## package

> Package source files into bundle

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv package
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## build

> Build project binary

Supported Platforms:

`ios`, `android`, `androidtv`, `androidwear`, `macos`

Example:

```bash
npx rnv build
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## configure

> Configure current project

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv configure
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## start

> Starts bundler / server

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv start
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## export

> Export the app into deployable binary

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv export
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## deploy

> Deploy the binary via selected deployment intgeration or buld hook

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv deploy
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## debug

> Debug your app on target device or emulator

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
npx rnv debug
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## eject

> Eject current project app to self contained native project

Supported Platforms:

`ios`, `macos`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv eject
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

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## crypto installCerts

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
npx rnv crypto installCerts
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## crypto updateProfile

> Update provisioning profile

Supported Platforms:

`ios`

Example:

```bash
npx rnv crypto updateProfile
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## crypto updateProfiles

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
npx rnv crypto updateProfiles
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## crypto installProfiles

> 

Supported Platforms:

`ios`, `android`, `firetv`, `androidtv`, `androidwear`, `web`, `webtv`, `tizen`, `tizenmobile`, `tvos`, `webos`, `macos`, `windows`, `linux`, `tizenwatch`, `kaios`, `chromecast`, `xbox`

Example:

```bash
npx rnv crypto installProfiles
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)



---

This command reference applies if your platform uses engine `engine-rn`.

More info at [Engine Rn Guide](cli-engine-rn.md)

---

## log

> Attach logger to device or emulator and print out logs

Supported Platforms:

`ios`, `android`, `androidtv`, `firetv`, `androidwear`

Example:

```bash
npx rnv log
```

Options:

`-i`, `--info` - Show full debug Info

`--ci` - CI/CD flag so it wont ask questions

`--mono` - Monochrome console output without chalk

`--maxErrorLength` - Specify how many characters each error should display. Default 200

`-o`, `--only` - run Only top command (Skip dependencies)


test