import { generatePlugins } from './genReferencePlugins';
import { updateMdFilesPlatforms } from './genReferencePlatforms';
import { updateMdFilesEngines } from './genReferenceEngines';
import { generateDocsApiCli } from './genApiCli';
import { generateSchema } from './genApiSchema';
import { RnvContext } from '@rnv/core';

const hooks = {
    generateDocs: async (c: RnvContext) => {
        await generatePlugins(c);
        await updateMdFilesPlatforms(c);
        await updateMdFilesEngines(c);
        await generateDocsApiCli(c);
        await generateSchema();
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
    generateDocsApiCli,
    // generateDocsApiBuildConfig,
    // generateDocsApiJsonConfig
};

const pipes = {};

export { pipes, hooks };
