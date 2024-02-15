import { writeFileSync, SUPPORTED_PLATFORMS, logHook, getRegisteredEngines } from '@rnv/core';
import path from 'path';

export const generateEngineTaks = async (c) => {
    logHook('generateEngineTaks');

    const engines = getRegisteredEngines(c);

    engines.forEach((engine) => {
        _generateEngineTaks(c, engine);
    });
};

const getSupportedPlatforms = (c, t) => (t.platforms.length
    ? t.platforms.map(v => `\`${v}\``).join(', ')
    : SUPPORTED_PLATFORMS.map(v => `\`${v}\``).join(', '));

const _generateEngineTaks = (c, engine) => {
    const { id, title } = engine.config;
    let output = `---
id: cli-${id}
title: ${title} CLI Reference
sidebar_label: ${title}
---


`;
    const { tasks } = engine;

    Object.values(tasks).forEach((t) => {
        output += `

---

This command reference applies if your platform uses engine \`${id}\`.

More info at [${title} Guide](${id}.md)

---

## ${t.task}

> ${t.description}

Supported Platforms:

${getSupportedPlatforms(c, t)}

Example:

\`\`\`bash
rnv ${t.task}
\`\`\`

Options:

${t.params.map((v) => {
        const option = v.shortcut ? `\`-${v.shortcut}\`, ` : '';
        return `${option}\`--${v.key}\` - ${v.description}`;
    }).join('\n\n')}


`;
    });


    output += 'test';

    writeFileSync(path.join(c.paths.project.dir, `/docs/api/${id}.md`), output);
};
