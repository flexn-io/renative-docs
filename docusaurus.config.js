// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ReNative',
    tagline: 'Unified Development Platform',
    url: 'https://renative.org',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
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
                out: 'api/rnv-core',
                // watch: true,
                sidebar: {
                    categoryLabel: '@rnv/core',
                },
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'api-renative',
                entryPoints: ['node_modules/@rnv/renative/lib/index.d.ts'],
                tsconfig: './tsconfig.typedoc.json',
                out: 'api/renative',
                // watch: true,
                sidebar: {
                    categoryLabel: '@rnv/renative',
                },
            },
        ],
        [
            'docusaurus-plugin-typedoc',
            {
                id: 'api-rnv',
                entryPoints: ['node_modules/rnv/lib/index.d.ts'],
                tsconfig: './tsconfig.typedoc.json',
                out: 'api/rnv',
                // watch: true,
                sidebar: {
                    categoryLabel: 'rnv',
                },
            },
        ],
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
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                appId: 'FMYKKKF9Q8',
                apiKey: 'fd3bf87fce092e08e71378cf066734b2',
                indexName: 'renative_docs',
                placeholder: 'Search...',
            },
            navbar: {
                title: 'ReNative',
                hideOnScroll: false,
                logo: {
                    alt: 'Renative Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        position: 'left',
                        label: 'v0.37',
                        href: 'https://github.com/flexn-io/renative/releases/tag/0.37.0',
                    },
                    {
                        type: 'doc',
                        docId: 'overview/introduction',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        type: 'doc',
                        docId: 'api/renative',
                        position: 'left',
                        label: 'API',
                    },
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
                disableSwitch: true,
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
