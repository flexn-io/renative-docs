/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Autocomplete, Footer, ProductItem } from '../../theme/SearchBar';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';

const appId = 'FMYKKKF9Q8';
const apiKey = 'fd3bf87fce092e08e71378cf066734b2';
const searchClient = algoliasearch(appId, apiKey);

// see https://github.com/facebook/docusaurus/issues/7227
export default function CustomSearchNavbarItem(props: { className?: string }): JSX.Element | null {
    return (
        <Autocomplete
            openOnFocus={true}
            placeholder="Search..."
            className={props.className}
            getSources={({ query }) => [
                {
                    sourceId: 'products',
                    getItems() {
                        return getAlgoliaResults({
                            searchClient,
                            queries: [
                                {
                                    indexName: process.env.ALGOLIA_INDEX || 'renative_docsearch',
                                    query,
                                },
                            ],
                        });
                    },
                    getItemUrl({ item }) {
                        return item.url;
                    },
                    templates: {
                        item({ item, components }) {
                            return <ProductItem hit={item} components={components} />;
                        },
                        noResults() {
                            return (
                                <div style={{ margin: 'auto', height: '113px', width: '204px' }}>
                                    <span className="no_results">No results found for </span>
                                    <strong>"{query}"</strong>
                                </div>
                            );
                        },
                    },
                },
            ]}
        />
    );
}
