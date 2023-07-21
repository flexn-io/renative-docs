import { generatePlugins } from './generatePlugins';
import { updateMdFilesPlatforms } from './updateMdFilesPlatforms';
import { updateMdFilesEngines } from './updateMdFilesEngines';
import { generateChangelog, generateCombinedChangelog } from './changelog';
import { generateEngineTaks } from './generateEngineDocs';
import { generateDocsApiJsonConfig, generateDocsApiBuildConfig } from './generateDocsApiConfig';

const hooks = {
    generateDocs: async (c) => {
        await generatePlugins(c);
        await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        await generateChangelog(c);
        await generateEngineTaks(c);
        // await generateDocsApiJsonConfig(c);
        // await generateDocsApiBuildConfig(c);
        // await generateCombinedChangelog(c);
    },
    prePublish: async (c) => {
        await generatePlugins(c);
        // await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        // await generateChangelog(c);
        // await generateEngineTaks(c);
        await generateDocsApiJsonConfig(c);
        await generateDocsApiBuildConfig(c);
        // await generateCombinedChangelog(c);
        return true;
    },
    generateChangelog,
    generateCombinedChangelog,
    updateMdFilesEngines,
    generateEngineTaks,
    generateDocsApiBuildConfig,
    generateDocsApiJsonConfig
};

const pipes = {};


export { pipes, hooks };
