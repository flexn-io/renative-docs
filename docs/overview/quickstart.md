---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
original_id: quickstart
sidebar_position: 0
---

---
## Install rnv

```bash
npm install rnv -g
```

---
## Create new app

<table>
  <tr>
    <th>
    <img src="https://renative.org/img/cli_app_create1.gif" />
    </th>
  </tr>
</table>

```bash
rnv new
```

Follow steps in the terminal

---
## Run first app

Run your first `ios` app

```bash
rnv run -p ios
```

Run your first `android` app

```bash
rnv run -p android
```

Run your first `web` app

```bash
rnv run -p web
```

... and so on

All app code is located in `./src` directory

---
## NPX

:::info
It is recommended that after initial project setup you start using `npx rnv ...` prefix instead of `rnv ...`

This ensures that every project uses correct version of `rnv` to avoid potential compatibility issues

make sure you have npx installed globally via `npm install npx -g`
:::