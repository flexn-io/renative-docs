import { generatePlugins } from './genReferencePlugins';
import { updateMdFilesPlatforms } from './genReferencePlatforms';
import { updateMdFilesEngines } from './genReferenceEngines';
import { generateDocsApiCli } from './genApiCli';
import { generateSchema } from './genApiSchema';

const hooks = {
    generateDocs: async (c) => {
        await generatePlugins(c);
        await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        await generateDocsApiCli(c);
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
