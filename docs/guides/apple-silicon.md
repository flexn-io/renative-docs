---
id: apple-silicon
title: Apple Silicon
sidebar_label: Apple Silicon
original_id: apple-silicon
---
import Image from '../../src/components/Image.js';




While ReNative works perfectly well on Apple's new ARM CPUs you should be aware of some limitations given by the current state of M1 support by the various SDKs that the each indivitual platforms use. Platforms not specified here are supposed to be working so if you encounter any issues please raise it on [GitHub](https://github.com/flexn-io/renative).

---
## AndroidTV, Android Wear

Running apps on physical devices or just building/exporting them are expected to work. Doing so you're only using `adb` and that has no dependencies on x86 CPUs.

For emulators, Google does not provide `arm64` images for TV or wear at the time of writing this article. You can always check Android Studio's AVD Manager if you can download `arm64` images for something other than phone. The phone image selection looks something like this. 

<img src="/img/android-studio-arch.png" />

---
## Tizen

Running apps on physical devices or just building/exporting them are expected to work. Doing so you're only using `sdb` and that has no dependencies on x86 CPUs.

Tizen emulators require [Intel HAXM](https://github.com/intel/haxm) installed but that's not possible to do on Apple Silicon.

---
## WebOS

Running apps on physical devices or just building/exporting them are expected to work.

WebOS emulators require VirtualBox to be installed but that's not possible to do on Apple Silicon. [More Info](https://discussions.apple.com/thread/253292128)


