---
id: rnv.plugins
title: rnv.plugins Schema
sidebar_label: rnv.plugins
---


# rnv.plugins Schema Definition

The schema defines the following properties:

## `custom`

Object used to extend your renative with custom props. This allows renative json schema to be validated

## `pluginTemplates` (object, required)

Define all plugins available to be merged with project plugins

## `disableRnvDefaultOverrides` (boolean)

Disables default rnv scope plugin overrides and merges. Useful if you want to test entirely clean plugin template list