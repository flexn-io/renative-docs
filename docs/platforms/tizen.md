---
id: tizen
title: Tizen TV Platform
sidebar_label: Tizen TV
original_id: tizen
---

<table>
  <tr>
  <td>
    <img src="https://img.shields.io/badge/Mac-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/Windows-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/Linux-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/HostMode-yes-brightgreen.svg" />
  </td>
  </tr>
</table>

<img className="platform-image" src="/img/rnv_tizen.gif" height="250"/>


- Latest Tizen project
- Support for Tizen 5.0, 4.0, 3.0

---
## File Extension Support

<!--EXTENSION_SUPPORT_START-->

Extenstions are defined via engines. Engines with tizen support: 
- [@rnv/engine-rn-web](../engines/engine-rn-web#extensions)

<!--EXTENSION_SUPPORT_END-->

---
## Requirements

- [Tizen SDK](https://developer.tizen.org/ko/development/tizen-studio/configurable-sdk) `5.0`
- Make sure your CPU supports virtualization. Otherwise Tizen emulator might not start.
- If you are deploying to a TV, follow this guide to set your TV in developer mode [Link](https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device)

---
## Project Configuration

| Feature          | Version |
| ---------------- | :-----: |
| Tizen Studio     |  `2.5`  |
| Tizen SDK        |  `5.0`  |
| react-native-web | `0.9.9` |
| Babel Core       | `7.1.2` |

---
## Emulator

Make sure you have at least 1 TV VM setup

<table>
  <tr>
    <th>
    <img src="/img/tizen4.png" />
    </th>
  </tr>
</table>

```
rnv target launch -p tizen -t T-samsung-5.0-x86
```

---
## Run

```
rnv run -p tizen
```

##### Run on Device

```
rnv run -p tizen -d
```

_Before you run on a physical device, make sure you have enabled `Dev Mode` and you set your IP correctly, otherwise the connection will fail. For more informations about `Dev Mode` consult https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device_

##### Run in Browser

```
rnv run -p tizen --hosted
```

---
## Advanced

##### Clean and Re-build platform project

```
rnv run -p tizen -r
```

##### Launch with specific Tizen simulator:

```
rnv run -p tizen -t T-samsung-5.0-x86
```

##### Launch on a specific Tizen device

```
rnv run -p tizen -d -t <IP>
```

##### Export production .wgt

```
rnv build -p tizen -s release
```

_Before you run on a physical device, make sure you have enabled `Dev Mode` and you set your IP correctly, otherwise the connection will fail. For more informations about `Dev Mode` consult https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device_

---
## App Config

[see: Web based config](../api/schemas/rnv.project.md)

---
## Known issues

#### Tizen 3.0 devices

Issue: The React Native component TouchableOpacity is non-functional on devices that are running Tizen TV version 3.0.

Details:

- The onPress event of TouchableOpacity does not respond when the button is pressed.
- The keydown event is not triggered upon pressing the button, while the keyup event operates as expected.

Recommendation: To achieve similar button functionality, it is necessary to create a custom button component specifically designed for Tizen TV devices.

