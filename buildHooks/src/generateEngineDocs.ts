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
    // console.log('tasks', tasks);
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
title: rnv Command-Line Interface
sidebar_label: rnv CLI
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
                content += `Example:\n\`\`\`bash\nnpx rnv ${command} ${task.subCommand}\n\`\`\``;
                content += '\n\n';

                // options
                content += `\nAvailable Options:\n`;
                const toDisplay = [];
                task.params?.forEach((param) => {
                    toDisplay.push(`[\`${param.key}\`](#${param.key.toLowerCase()})`);
                });
                content += toDisplay.join(', ');
                content += `\n\n`;
            });
        }
    });

    // CLI options
    content += `## Options\n\n`;
    PARAMS.withAll().forEach((param) => {
        content += `### ${param.key}\n`;
        content += `${param.description}\n\n`;
        // content += `Required: ${param.isRequired ? 'Yes' : 'No'}\n\n`;
        if (param.shortcut) content += `Shortcut: \`\`-${param.shortcut}\`\`\n\n`;
        if (param.value) content += `Value: \`\`${param.value}\`\`\n\n`;
    });

    writeFileSync(path.join(c.paths.project.dir, `/docs/api/tasks.md`), header + content);
};
