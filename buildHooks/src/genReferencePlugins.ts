import { doResolve, readObjectSync, fsExistsSync, writeFileSync, RnvPlatforms, RnvPlatformKey } from '@rnv/core';
import merge from 'deepmerge';
import path from 'path';

export const generatePlugins = async (c) => {
    let out = `---
id: overview
title: Plugins Overview
sidebar_label: Plugins
---
`;
    const flexnPluginsPath = doResolve('@flexn/plugins');
    if (!flexnPluginsPath) {
        return;
    }
    if (!fsExistsSync(flexnPluginsPath)) {
        return Promise.reject(`RNV Cannot find installed package: '@flexn/plugins`);
    }
    const flexnPluginTemplatesPath = path.join(flexnPluginsPath, 'pluginTemplates/renative.plugins.json');

    const flexnPluginTemplates = readObjectSync(flexnPluginTemplatesPath);
    const rnvPluginTemplates = readObjectSync(c.paths.rnv.pluginTemplates.config);

    if (!flexnPluginTemplates || !rnvPluginTemplates) {
        return;
    }

    const temps = merge<any>(flexnPluginTemplates, rnvPluginTemplates);

    const ptk = Object.keys(temps.pluginTemplates).sort();

    ptk.forEach((key) => {
        const plugin = temps.pluginTemplates[key];
        const npm = plugin.version ? `Npm: https://www.npmjs.com/package/${key}` : '';
        const version = plugin.version ? `Version: \`${plugin.version}\`` : '';
        const platforms = Object.keys(plugin)
            .map((v) => (RnvPlatforms.includes(v as RnvPlatformKey) ? v : null))
            .filter((v) => v);
        const supPlats = platforms.length ? platforms : RnvPlatforms;
        const deprecated = plugin.deprecated ? `> ${plugin.deprecated}` : '';
        const props = plugin.props ? `Props: ${Object.keys(plugin.props).map((v) => `\`${v}\``)}` : '';

        out += `\n\n## ${key}
${deprecated}

${version}

Platforms: ${supPlats.map((v) => `\`${v}\``)}

${props}

${npm}

Installation:

\`\`\`
npx rnv plugin add ${key}
\`\`\`
`;
    });

    out = out.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || '';

    writeFileSync(path.join(c.paths.project.dir, 'docs/plugins/overview.md'), out);
};
