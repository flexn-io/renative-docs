/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    docsSidebar: [
        { type: 'category', label: 'Getting Started', items: [{ type: 'autogenerated', dirName: 'overview' }] },
        { type: 'category', label: 'Guides', items: [{ type: 'autogenerated', dirName: 'guides' }] },
        { type: 'category', label: 'Platforms', items: [{ type: 'autogenerated', dirName: 'platforms' }] },
        { type: 'category', label: 'Engines', items: [{ type: 'autogenerated', dirName: 'engines' }] },
        { type: 'doc', 'id': 'templates/overview' },
        { type: 'doc', 'id': 'plugins/overview' },
        { type: 'category', label: 'Integrations', items: [{ type: 'autogenerated', dirName: 'integrations' }] },
        { type: 'category', label: 'Upgrades', items: [{ type: 'autogenerated', dirName: 'upgrades' }] },
        { label: 'Release Notes', type: 'link', href: 'https://github.com/flexn-io/renative/releases' }
    ],
    apiSidebar: [
        { type: 'autogenerated', dirName: 'api' },
    ]

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
