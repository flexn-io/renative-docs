import { writeFileSync, logHook, registerAllPlatformEngines, getAllSuitableTasks, PARAMS } from '@rnv/core';
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

    content += `## Commands\n\n`;

    const printTaskDetails = (tsk, cmd, param?) => {
        content += param ? `#### ${param}\n\n` : '';

        content += `${tsk.description}\n\n`;

        // Engines/Providers
        if (tsk.providers?.length) {
            const provs = tsk.providers.map((v) => `[${v}](engines/${v}.md)`);

            content += `Available in engines: ${provs.join(', ')}\n\n`;
        }

        // options
        content += `\nAvailable Options:\n`;
        const toDisplay = [];
        tsk.params?.forEach((param) => {
            toDisplay.push(`[\`${param.key}\`](#${param.key.toLowerCase()})`);
        });
        content += toDisplay.join(', ');
        content += `\n\n`;

        //Example
        let exCmd = param ? `${cmd} ${param}` : cmd;
        content += `Example:\n\`\`\`bash\nnpx rnv ${exCmd}\n\`\`\``;
        content += '\n\n';
    };

    Object.keys(tasksGroupedByCommand).forEach((command) => {
        content += `### ${command}\n\n`;

        const subCommandsOrTask = tasksGroupedByCommand[command];

        if (subCommandsOrTask.command) {
            // it's a task
            printTaskDetails(subCommandsOrTask, command);
        } else {
            Object.keys(subCommandsOrTask).forEach((subCommand) => {
                const task = subCommandsOrTask[subCommand];
                printTaskDetails(task, command, task.subCommand);
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
