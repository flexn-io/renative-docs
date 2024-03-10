import { generatePlugins } from './genReferencePlugins';
import { updateMdFilesPlatforms } from './genReferencePlatforms';
import { updateMdFilesEngines } from './genReferenceEngines';
import { generateDocsApiCli } from './genApiCli';
import { generateSchema } from './genApiSchema';
import { RnvContext } from '@rnv/core';

const generateDocs = async (c: RnvContext) => {
    await generatePlugins(c);
    await updateMdFilesPlatforms(c);
    await updateMdFilesEngines(c);
    await generateDocsApiCli(c);
    await generateSchema();
    return true;
};

const hooks = {
    generateDocs,
    prePublish: async (c) => {
        await generateDocs(c);
        // Any other pre-publish
        return true;
    },
};

const pipes = {};

export { pipes, hooks };
