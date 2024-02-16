
---
id: rnv.global
title: rnv.global Schema
sidebar_label: rnv.global
---


# rnv.global Schema Definition

The schema defines the following properties:

## `defaultTargets` (object)

Define targets to be used when -t is not set on any project run

## `sdks` (object)

Define your sdk configurations

Properties of the `sdks` object:

### `ANDROID_SDK` (string)

### `ANDROID_NDK` (string)

### `TIZEN_SDK` (string)

### `WEBOS_SDK` (string)

### `KAIOS_SDK` (string)

## `projectTemplates` (object)

## `disableTelemetry` (boolean)

Opt-out from renative telemetry program. More info at https://renative.org/telemetry

## `appConfigsPath` (string)

Enables you to define custom global appConfigs location that every project will automatically use