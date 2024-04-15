import {
    writeFileSync,
    logHook,
    registerAllPlatformEngines,
    getRegisteredTasks,
    RnvTaskOptionPresets,
    RnvTask,
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

const toKebabCase = (string: string): string => {
    return string.trim().toLocaleLowerCase().split(' ').join('-');
};

export const generateDocsApiCli = async (c) => {
    logHook('generateDocsApiCli');

    registerAllPlatformEngines();

    const registeredTasks = getRegisteredTasks();

    const header = `---
id: cli
title: rnv Command-Line Interface
sidebar_label: rnv CLI
---
`;

    let content = '';

    content += `## Commands\n\n`;

    const printTaskDetails = (registeredTask: RnvTask) => {
        const { description, ownerID, dependsOn, task, options } = registeredTask;

        content += `${description}\n\n`;

        // Engines/Providers
        content += `Provided by: ${ownerID}\n\n`;

        // Depends On
        if (dependsOn?.length > 0) {
            content += `Depends On:\n`;
            const toDisplay: string[] = [];
            dependsOn?.forEach((task) => {
                toDisplay.push(`[\`${task}\`](#${toKebabCase(task)})`);
            });
            content += toDisplay.join(', ');
            content += `\n\n`;
        }

        // options
        if (options?.length > 0) {
            content += `\nAvailable Options:\n`;
            const toDisplay: string[] = [];
            options?.forEach((param) => {
                toDisplay.push(`[\`${param.key}\`](#${toKebabCase(param.key)})`);
            });
            content += toDisplay.join(', ');
            content += `\n\n`;
        }

        //Example
        content += `Example:\n\`\`\`bash\nnpx rnv ${task}\n\`\`\``;
        content += '\n\n';
    };

    Object.values(registeredTasks).forEach((registeredTask) => {
        content += `### ${registeredTask.task}\n\n`;

        printTaskDetails(registeredTask);
    });

    // CLI options
    content += `## Options\n\n`;
    RnvTaskOptionPresets.withAll().forEach((param) => {
        content += `### ${param.key}\n`;
        content += `${param.description}\n\n`;
        if (param.shortcut) content += `Shortcut: \`\`-${param.shortcut}\`\`\n\n`;
        const type = param.isValueType ? 'Value' : param.isVariadic ? 'Variadic' : 'Flag';
        content += `Type: ${type}${param.isRequired ? ', required' : ''}\n\n`;

        // Example
        if (param.examples) {
            content += `Examples:\n`;
            param.examples.forEach((example) => {
                content += `\`\`\`bash\nnpx rnv ${example}\n\`\`\`\n`;
            });
        }
    });

    writeFileSync(path.join(c.paths.project.dir, `/docs/api/cli.md`), header + content);
};
