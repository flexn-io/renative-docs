// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ReNative",
  tagline: "Unified Development Platform",
  url: "https://renative.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "flexn-io", // Usually your GitHub org/user name.
  projectName: "renative-docs", // Usually your repo name.
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-V5GWQ4WYWK",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "RDMUFOXXVC",
        apiKey: "56cceb616493dc70a043d8d4c36c0589",
        indexName: "renative",
      },
      navbar: {
        title: "ReNative",
        hideOnScroll: false,
        logo: {
          alt: "Renative Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "v0.37",
            href: "https://github.com/flexn-io/renative/releases/tag/0.37.0",
          },
          {
            type: "doc",
            docId: "overview/introduction",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "api/renative",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/flexn-io/renative",
            position: "right",
            className: "navbar_icon_link header-github-link",
            title: "GitHub",
            "aria-label": "GitHub",
          },
          {
            href: "https://twitter.com/renative",
            position: "right",
            className: "navbar_icon_link header-twitter-link",
            title: "X(Twitter)",
            "aria-label": "X(Twitter)",
          },
          {
            href: "https://www.youtube.com/@renative",
            position: "right",
            className: "navbar_icon_link header-youtube-link",
            title: "Youtube",
            "aria-label": "Youtube",
          },
          {
            to: '/docs/overview/quickstart',
            label: 'Get started',
            position: 'right',
            className: 'button button--secondary navbar_button padding--sm'
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      image: "img/logo.svg",
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
    }),
};

module.exports = config;
