import {
    writeFileSync,
    registerAllPlatformEngines,
    RnvContext,
    RnvEngine,
    RnvPlatformKey,
    RnvEnginePlatform,
} from '@rnv/core';
import path from 'path';
import fs from 'fs';

const cleanUrl = (v: string) => v.replace('@', '').replace('/', '');

export const updateMdFilesEngines = async (c: RnvContext) => {
    registerAllPlatformEngines();
    const engines = c.runtime.enginesById;

    Object.values(engines).forEach((engine) => {
        _generateEngineDoc(c, engine);
    });

    return true;
};

const _generateEngineDoc = (c: RnvContext, engine: RnvEngine) => {
    const docsPath = path.join(c.paths.project.dir, 'docs/engines');
    const docFilePath = path.join(docsPath, `${engine.config.name.replace('@rnv/', '')}.md`);
    const fileContent = fs.readFileSync(docFilePath).toString();

    let npmPackages = '';
    let extensions = '';

    const enginePlatforms = engine?.platforms;
    const engineConfigPlatforms = engine?.config.platforms;

    if (enginePlatforms) {
        Object.keys(enginePlatforms).forEach((v) => {
            const pKey = v as RnvPlatformKey;
            const engPlatform = enginePlatforms?.[pKey];
            if (engPlatform) {
                const npm = engineConfigPlatforms?.[pKey]?.npm;
                let output = '';
                if (npm) {
                    Object.keys(npm).forEach((npmDepKey) => {
                        output += `${v} (${npmDepKey})\n  - ${Object.keys(npm[npmDepKey])
                            .map((p) => `[${p}](https://www.npmjs.com/package/${p})`)
                            .join(', ')}\n`;
                    });
                }
                npmPackages += `${output}\n\n`;

                extensions += _getExtensionContent(pKey, engine);
            }
        });
    }

    let extraCntnt = 'N/A';
    let extraPlgns = {};
    if (engine.config) {
        if (engine.config.overview) {
            extraCntnt = engine.config.overview;
        }
        if (engine.config.plugins) {
            extraPlgns = engine.config.plugins;
        }
    }
    const extContent = `
## Overview

${extraCntnt}

## Supported Platforms

${Object.keys(enginePlatforms)
    .map((v) => `[${v}](platforms/${v}.md)`)
    .join(', ')}

## Required Plugins

${Object.keys(extraPlgns)
    .map((v) => `[${v}](../plugins/overview#${cleanUrl(v)})`)
    .join(', ')}

## Required NPM Packages

${npmPackages}

## Extensions

Extensions are shown in order of priority. The first extension in the list has highest priority.

${extensions}

`;

    const regEx = /<!--AUTO_GENERATED_START-->([\s\S]*?)<!--AUTO_GENERATED_END-->/g;
    const fixedFile = fileContent.replace(
        regEx,
        `<!--AUTO_GENERATED_START-->

${extContent}
<!--AUTO_GENERATED_END-->`
    );

    console.log('Writing Engine:', docFilePath);

    writeFileSync(docFilePath, fixedFile);
};

const _getExtensionContent = (platform: RnvPlatformKey, engine: RnvEngine) => {
    let out = '';
    let p: RnvEnginePlatform | undefined;
    if (engine?.platforms?.[platform]) {
        p = engine.platforms[platform];
    }

    out += `### ${platform}\n\n`;
    let extensions: string[] = [];
    if (p?.extensions) {
        extensions = p.extensions;
    }
    if (extensions) {
        //     out += `| Extension | Priority  |
        //   | --------- | :-------: |\n`;
        let i = 1;
        extensions.forEach((v) => {
            out += `\`${v}\`, `;
            i++;
        });
        out += '\n';
    }
    // if (extensions) {
    //     out += `| Extension | Priority  |
    //   | --------- | :-------: |\n`;
    //     let i = 1;
    //     extensions.forEach((v) => {
    //         out += `| \`${v}\` | ${i} |\n`;
    //         i++;
    //     });
    // }
    return out;
};
