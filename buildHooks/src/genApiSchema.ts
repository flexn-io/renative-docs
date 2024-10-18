import { ZodFileSchema, getContext, logSuccess } from '@rnv/core';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';

const { zodConfigFileApp, zodConfigFileProject, zodConfigFileTemplate, zodConfigFilePlugin, zodConfigFileIntegration } =
    ZodFileSchema;

export const generateSchema = async () => {
    _generateSchemaFile({
        schema: zodConfigFileProject,
        schemaId: 'rnv.project',
        sideBarTitle: 'renative.json (Project Config)',
    });
    _generateSchemaFile({ schema: zodConfigFileApp, schemaId: 'rnv.app', sideBarTitle: 'renative.json (App Config)' });
    // _generateSchemaFile({ schema: RootLocalSchema, schemaId: 'rnv.local' });
    // _generateSchemaFile({ schema: RootEngineSchema, schemaId: 'rnv.engine' });
    // _generateSchemaFile({ schema: RootGlobalSchema, schemaId: 'rnv.global' });
    // _generateSchemaFile({ schema: RootPluginsSchema, schemaId: 'rnv.plugins' });
    _generateSchemaFile({
        schema: zodConfigFileTemplate,
        schemaId: 'rnv.template',
        sideBarTitle: 'renative.template.json (Template Config)',
    });
    // _generateSchemaFile({ schema: RootPrivateSchema, schemaId: 'rnv.private' });
    _generateSchemaFile({ schema: zodConfigFilePlugin, schemaId: 'rnv.plugin', sideBarTitle: 'renative.plugin.json' });
    // _generateSchemaFile({ schema: RootTemplatesSchema, schemaId: 'rnv.templates' });
    _generateSchemaFile({
        schema: zodConfigFileIntegration,
        schemaId: 'rnv.integration',
        sideBarTitle: 'renative.integration.json',
    });

    // add _category_ file
    const categoryContent = `label: "Config Descriptors"`;
    const ctx = getContext();
    const destFolder = path.join(ctx.paths.project.dir, `docs/api/schemas`);
    const destPath = path.join(destFolder, `_category_.yml`);
    fs.writeFileSync(destPath, categoryContent);

    logSuccess('Sucessfully exported all schemas');
};

const _generateSchemaFile = (opts: { schema: z.ZodObject<any>; schemaId: string; sideBarTitle: string }) => {
    const { schema, schemaId, sideBarTitle } = opts;
    const ctx = getContext();
    const jsonSchema: any = zodToJsonSchema(schema);
    jsonSchema['$schema'] = 'http://json-schema.org/draft-04/schema#';

    const resolvedSchema = resolveRefsInSchema({ ...jsonSchema });
    const destFolder = path.join(ctx.paths.project.dir, `docs/api/schemas`);
    if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true });
    }
    const destPath = path.join(destFolder, `${schemaId}.md`);
    fs.writeFileSync(destPath, generate(resolvedSchema, schemaId, sideBarTitle));
};

const generateElementTitle = (
    hashtags: string,
    elementName: string | undefined,
    elementType: string,
    isRequired: boolean,
    isEnum: boolean,
    example: string
) => {
    const tooManyHashtags = hashtags.length > 6;
    const text = [tooManyHashtags ? '' : hashtags];

    if (elementName) {
        if (tooManyHashtags) {
            text.push('**`' + elementName + '`**');
        } else {
            text.push(' `' + elementName + '`');
        }
    }
    if (elementType || isRequired) {
        text.push(' (');
        if (elementType) {
            text.push(elementType);
        }
        if (isEnum) {
            text.push(', enum');
        }
        if (isRequired) {
            text.push(', required');
        }
        text.push(')');
    }
    if (example) {
        text.push(' eg: `' + example + '`');
    }
    return text.join('');
};

const generatePropertyRestrictions = (schema: unknown) => {
    const generate = generateSinglePropertyRestriction(schema);
    return [
        generate('minimum', 'Minimum'),
        generate('maximum', 'Maximum'),
        generate('pattern', 'Regex pattern'),
        generate('minItems', 'Minimum items'),
        generate('uniqueItems', 'Unique items'),
    ]
        .filter((text) => {
            return text;
        })
        .join('\n');
};

const generateSinglePropertyRestriction = (schema) => {
    return (key: string, text: string) => {
        if (schema[key]) {
            return '* ' + text + ': `' + schema[key] + '`';
        } else {
            return null;
        }
    };
};

const generateSchemaSectionText = (
    hashtags: string,
    name: string | undefined,
    isRequired: boolean,
    schema: any,
    subSchemas: any
) => {
    const schemaType = getActualType(schema, subSchemas);

    let text: string[] = [
        generateElementTitle(hashtags, name, schemaType, isRequired, schema.enum, schema.example),
        schema.description,
    ];

    if (schemaType === 'object') {
        if (schema.properties) {
            text.push('Properties of the' + (name ? ' `' + name + '`' : '') + ' object:');
            generatePropertySection(hashtags, schema, subSchemas).forEach((section) => {
                text = text.concat(section);
            });
        }
        if (schema.additionalProperties.properties) {
            text.push('Properties of the' + (name ? ' `' + name + '`' : '') + ' object:');
            generatePropertySection(hashtags, schema.additionalProperties, subSchemas).forEach((section) => {
                text = text.concat(section);
            });
        }
    } else if (schemaType === 'array') {
        let itemsType = schema.items && schema.items.type;

        if (!itemsType && schema.items['$ref']) {
            itemsType = getActualType(schema.items, subSchemas);
        }

        if (itemsType && name) {
            text.push('The object is an array with all elements of the type `' + itemsType + '`.');
        } else if (itemsType) {
            text.push('The schema defines an array with all elements of the type `' + itemsType + '`.');
        } else {
            let validationItems = [];

            if (schema.items.allOf) {
                text.push('The elements of the array must match *all* of the following properties:');
                validationItems = schema.items.allOf;
            } else if (schema.items.anyOf) {
                text.push('The elements of the array must match *at least one* of the following properties:');
                validationItems = schema.items.anyOf;
            } else if (schema.items.oneOf) {
                text.push('The elements of the array must match *exactly one* of the following properties:');
                validationItems = schema.items.oneOf;
            } else if (schema.items.not) {
                text.push('The elements of the array must *not* match the following properties:');
                validationItems = schema.items.not;
            }

            if (validationItems.length > 0) {
                validationItems.forEach((item: any) => {
                    text = text.concat(generateSchemaSectionText(hashtags, item.title || '', false, item, subSchemas));
                });
            }
        }

        if (itemsType === 'object') {
            text.push('The array object has the following properties:');
            generatePropertySection(hashtags, schema.items, subSchemas).forEach((section) => {
                text = text.concat(section);
            });
        }
    } else if (schema.oneOf) {
        text.push('The object must be one of the following types:');
        text.push(
            schema.oneOf
                .map((oneOf) => {
                    return '* `' + subSchemas[oneOf['$ref']] + '`';
                })
                .join('\n')
        );
    }

    if (schema.enum) {
        text.push('This element must be one of the following enum values:');
        text.push(
            schema.enum
                .map((enumItem) => {
                    return '* `' + enumItem + '`';
                })
                .join('\n')
        );
    }

    if (schema.default !== undefined) {
        if (schema.default === null || ['boolean', 'number', 'string'].indexOf(typeof schema.default) !== -1) {
            text.push('Default: `' + JSON.stringify(schema.default) + '`');
        } else {
            text.push('Default:');
            text.push('```\n' + JSON.stringify(schema.default, null, 2) + '\n```');
        }
    }

    const restrictions = generatePropertyRestrictions(schema);

    if (restrictions) {
        text.push('*Constraints:*');
        text.push(restrictions);
    }

    return text;
};

const generatePropertySection = (hashtags: string, schema: any, subSchemas: unknown) => {
    if (schema.properties) {
        return Object.keys(schema.properties).map((propertyKey) => {
            const propertyIsRequired = schema.required && schema.required.indexOf(propertyKey) >= 0;
            return generateSchemaSectionText(
                hashtags + '#',
                propertyKey,
                propertyIsRequired,
                schema.properties[propertyKey],
                subSchemas
            );
        });
    } else if (schema.oneOf) {
        const oneOfList = schema.oneOf
            .map((innerSchema: unknown) => {
                return '* `' + getActualType(innerSchema, subSchemas) + '`';
            })
            .join('\n');
        return ['This property must be one of the following types:', oneOfList];
    } else {
        return [];
    }
};

const getActualType = (schema: any, subSchemas: any) => {
    if (schema.type) {
        return schema.type;
    } else if (schema['$ref'] && subSchemas[schema['$ref']]) {
        return subSchemas[schema['$ref']];
    } else {
        return undefined;
    }
};

const generate = (schema: any, id: string, sidebarLabel: string) => {
    const subSchemaTypes = Object.keys(schema.definitions || {}).reduce((map, subSchemaTypeName) => {
        map['#/definitions/' + subSchemaTypeName] = subSchemaTypeName;
        return map;
    }, {});

    const header = `---
id: ${id}
title: ${id} Schema
sidebar_label: ${sidebarLabel}
---
`;

    let text: string[] = [header, `# ${id} Schema Definition`];
    let hashtags = '#';

    if (schema.title) {
        hashtags += '#';
        text.push(hashtags + ' ' + schema.title);
    }

    if (schema.type === 'object') {
        if (schema.description) {
            text.push(schema.description);
        }
        text.push('The schema defines the following properties:');
        generatePropertySection(hashtags, schema, subSchemaTypes).forEach((section) => {
            text = text.concat(section);
        });
    } else {
        text = text.concat(generateSchemaSectionText('#' + hashtags, undefined, false, schema, subSchemaTypes));
    }
    return text
        .filter((line) => {
            return !!line;
        })
        .join('\n\n');
};

const resolveRefsInSchema = (schema: any): any => {
    const resolveJsonRefs = (schema: any, ref: string): any => {
        const pointer = ref.replace(/^#\//, '').split('/');
        return pointer.reduce((acc, key) => acc && acc[key], schema);
    };

    const resolveRefs = (currentSchema: any, depth = 0): any => {
        if (currentSchema.$ref) {
            const resolvedSchema = resolveJsonRefs(schema, currentSchema.$ref);

            return resolveRefs(resolvedSchema, depth);
        }

        if (currentSchema.type === 'object' && currentSchema.properties) {
            const newProperties = {};
            Object.keys(currentSchema.properties).forEach((key) => {
                newProperties[key] = resolveRefs(currentSchema.properties[key], depth);
            });
            return { ...currentSchema, properties: newProperties };
        }

        if (currentSchema.additionalProperties && typeof currentSchema.additionalProperties === 'object') {
            const resolvedAdditionalProperties = resolveRefs(currentSchema.additionalProperties, depth);
            return { ...currentSchema, additionalProperties: resolvedAdditionalProperties };
        }

        if (currentSchema.type === 'array' && currentSchema.items) {
            if (depth > 0) {
                return currentSchema;
            }
            // depth <= recursion limit for `items` field to avoid circular refs (children)
            const resolvedItems = resolveRefs(currentSchema.items, depth + 1);

            return { ...currentSchema, items: resolvedItems };
        }
        if (Array.isArray(currentSchema.anyOf)) {
            return {
                ...currentSchema,
                anyOf: currentSchema.anyOf.map((subSchema: any) => {
                    return resolveRefs(subSchema, depth);
                }),
            };
        }
        return currentSchema;
    };

    return resolveRefs(schema);
};
