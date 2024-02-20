import { generatePlugins } from './generatePlugins';
import { updateMdFilesPlatforms } from './updateMdFilesPlatforms';
import { updateMdFilesEngines } from './updateMdFilesEngines';
import { generateEngineTaks } from './generateEngineDocs';
import { generateSchema } from './generateDocsApiConfig';

const hooks = {
    generateDocs: async (c) => {
        await generatePlugins(c);
        await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        await generateEngineTaks(c);
        await generateSchema(c);
    },
    prePublish: async (c) => {
        await generatePlugins(c);
        // await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        // await generateEngineTaks(c);
        // await generateDocsApiJsonConfig(c);
        // await generateDocsApiBuildConfig(c);
        return true;
    },
    updateMdFilesEngines,
    generateEngineTaks,
    // generateDocsApiBuildConfig,
    // generateDocsApiJsonConfig
};

const pipes = {};

export { pipes, hooks };
