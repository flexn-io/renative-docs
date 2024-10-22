// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ReNative',
    tagline: 'Unified Development Platform',
    url: process.env.BASE_URL || 'https://renative.org',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    customFields: {
        ALGOLIA_INDEX: process.env.ALGOLIA_INDEX || 'renative_docsearch',
        ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID || 'FMYKKKF9Q8',
        ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY || 'fd3bf87fce092e08e71378cf066734b2',
    },
    trailingSlash: false,
    organizationName: 'flexn-io', // Usually your GitHub org/user name.
    projectName: 'renative-docs', // Usually your repo name.
    themes: ['docusaurus-json-schema-plugin'],
    plugins: [
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-V5GWQ4WYWK',
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            // Plugin / TypeDoc options
            {
                id: 'api-core',
                entryPoints: ['node_modules/@rnv/core/lib/index.d.ts'],
                tsconfig: './tsconfig.typedoc.json',
                out: 'api/node/rnv-core',

                frontmatter: {
                    sidebar_label: '@rnv/core (Node)',
                },
                plugin: ['typedoc-plugin-zod'],
                // watch: true,
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'api-renative',
                entryPoints: ['node_modules/@rnv/renative/lib/index.d.ts'],
                tsconfig: './tsconfig.typedoc.json',
                out: 'api/node/renative',
                // watch: true,
                frontmatter: {
                    sidebar_label: '@rnv/renative (Node)',
                },
            },
        ],
        // [
        //     'docusaurus-plugin-typedoc',
        //     {
        //         id: 'api-rnv',
        //         entryPoints: ['node_modules/rnv/lib/index.d.ts'],
        //         tsconfig: './tsconfig.typedoc.json',
        //         out: 'api/node/rnv',
        //         // watch: true,

        //         frontmatter: {
        //             sidebar_label: 'rnv (Node)',
        //         },
        //     },
        // ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    ignorePatterns: ['/markdown-page'],
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                // title: 'ReNative',
                hideOnScroll: false,
                // logo: {
                //     alt: 'Renative Logo',
                //     src: 'img/logo.svg',
                // },
                items: [
                    // {
                    //     position: 'left',
                    //     label: 'v0.37',
                    //     href: 'https://github.com/flexn-io/renative/releases/tag/0.37.0',
                    // },
                    // {
                    //     type: 'doc',
                    //     docId: 'overview/introduction',
                    //     position: 'left',
                    //     label: 'Docs',
                    // },
                    // {
                    //     type: 'doc',
                    //     docId: 'api/node/rnv-core/modules',
                    //     position: 'left',
                    //     label: 'API',
                    // },
                    // {
                    //     type: 'custom-search-navbar-item',
                    //     position: 'right',
                    // },
                    // {
                    //     to: '/docs/overview/quickstart',
                    //     label: 'Get started',
                    //     position: 'right',
                    //     className: 'button button--secondary navbar_button padding--sm',
                    // },

                    // {
                    //     href: 'https://www.flexn.io/',
                    //     position: 'left',
                    //     className: 'navbar_logo header-flexn-link',
                    //     title: 'Flexn',
                    //     'aria-label': 'Flexn',
                    // },
                    // {
                    //     href: '/',
                    //     position: 'left',
                    //     className: 'navbar_logo header-separator-link',
                    //     title: 'Separator',
                    //     'aria-label': 'Separator',
                    // },
                    {
                        href: '/',
                        position: 'left',
                        className: 'navbar_logo header-renative-link',
                        title: 'Renative',
                        'aria-label': 'Renative',
                    },
                    {
                        position: 'left',
                        label: 'v1.4',
                        href: 'https://github.com/flexn-io/renative/releases/tag/1.4.0',
                    },
                    {
                        type: 'doc',
                        docId: 'overview/introduction',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        type: 'doc',
                        docId: 'templates/overview',
                        position: 'left',
                        label: 'References',
                    },
                    {
                        type: 'doc',
                        docId: 'api/cli',
                        position: 'left',
                        label: 'API',
                    },
                    // {
                    //     type: 'doc',
                    //     docId: 'api/node/rnv-core/modules',
                    //     position: 'left',
                    //     label: 'Marketplace',
                    // },
                    // {
                    //     position: 'left',
                    //     label: 'Enterprise',
                    //     href: 'https://www.flexn.io',
                    // },
                    {
                        type: 'custom-search-navbar-item',
                        position: 'right',
                    },
                    {
                        to: '/docs/overview/quickstart',
                        label: 'Get started',
                        position: 'right',
                        className: 'button button--secondary navbar_button padding--sm',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
            },
            image: 'img/logo.svg',
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                defaultLanguage: 'javascript',
            },
        }),
};

module.exports = config;
