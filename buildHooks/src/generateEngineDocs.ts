import {
    writeFileSync,
    SUPPORTED_PLATFORMS,
    logHook,
    registerAllPlatformEngines,
    getAllSuitableTasks,
    PARAMS,
} from '@rnv/core';
import path from 'path';

const kebabToTitleCase = (string: string): string => {
    return string
        .split('-')
        .map((word) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        })
        .join(' ');
};

export const generateEngineTaks = async (c) => {
    logHook('generateEngineTaks');

    registerAllPlatformEngines(c);

    const tasks = getAllSuitableTasks(c);
    const tasksGroupedByCommand = Object.values(tasks).reduce((acc, task: any) => {
        if (!acc[task.command]) {
            acc[task.command] = {};
        }
        if (task.subCommand) {
            acc[task.command][task.subCommand] = task;
        } else {
            acc[task.command] = task;
        }
        return acc;
    }, {});

    const header = `---
id: tasks
title: RNV CLI Tasks Reference
sidebar_label: RNV CLI Tasks Reference
---
`;

    let content = '';

    Object.keys(tasksGroupedByCommand).forEach((command) => {
        content += `## ${command}\n\n`;

        const subCommandsOrTask = tasksGroupedByCommand[command];

        if (subCommandsOrTask.command) {
            // it's a task
            content += `${subCommandsOrTask.description}\n\n`;
            content += `Example:\n\n\`\`\`bash\nnpx rnv ${command}\n\`\`\`\n\n`;
        } else {
            Object.keys(subCommandsOrTask).forEach((subCommand) => {
                const task = subCommandsOrTask[subCommand];
                content += `### ${task.subCommand}\n\n`;
                content += `${task.description}\n\n`;
                task.provider && (content += `Provider: ${task.provider}\n\n`);
                content += `Example:\n\n\`\`\`bash\nnpx rnv ${command} ${task.subCommand}\n\`\`\`\n\n`;
            });
        }
    });

    // CLI options
    // | Syntax      | Description |
    // | ----------- | ----------- |
    content += `# Options\n\n`;
    content += '| Option | Shorthand | Description |\n';
    content += '| ------ | --------- | ----------- |\n';
    PARAMS.withAll().forEach((param) => {
        let argument = '';
        if (param.value) {
            argument = param.isRequired ? ` <${param.value}>` : ` [${param.value}]`;
        }
        content += `| \`--${param.key}${argument}\` | ${param.shortcut ? `\`-${param.shortcut}\`` : ''} | ${
            param.description
        } |\n`;
    });

    writeFileSync(path.join(c.paths.project.dir, `/docs/api/tasks.md`), header + content);
};

const _generateEngineTaks = (c, engine) => {
    const { id } = engine.config;
    const title = kebabToTitleCase(id);
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

More info at [${title} Guide](cli-${id}.md)

---

## ${t.task}

> ${t.description}

Supported Platforms:

${getSupportedPlatforms(c, t)}

Example:

\`\`\`bash
npx rnv ${t.task}
\`\`\`

Options:

${t.params
    .map((v) => {
        const option = v.shortcut ? `\`-${v.shortcut}\`, ` : '';
        return `${option}\`--${v.key}\` - ${v.description}`;
    })
    .join('\n\n')}


`;
    });

    output += 'test';

    writeFileSync(path.join(c.paths.project.dir, `/docs/api/cli-${id}.md`), output);
};
