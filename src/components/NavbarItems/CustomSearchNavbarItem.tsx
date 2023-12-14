/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Autocomplete, ProductItem } from '../../theme/SearchBar';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';

const appId = 'FMYKKKF9Q8';
const apiKey = 'fd3bf87fce092e08e71378cf066734b2';
const searchClient = algoliasearch(appId, apiKey);

// used to dogfood custom navbar elements are possible
// see https://github.com/facebook/docusaurus/issues/7227
export default function CustomSearchNavbarItem(props: {
  mobile?: boolean;
}): JSX.Element | null {
  return (
    <Autocomplete
                    openOnFocus={true}
                    getSources={({ query }) => [
                        {
                            sourceId: 'products',
                            getItems() {
                                return getAlgoliaResults({
                                    searchClient,
                                    queries: [
                                        {
                                            indexName: 'renative_docs',
                                            query,
                                        },
                                    ],
                                });
                            },
                            templates: {
                                item({ item, components }) {
                                    return <ProductItem hit={item} components={components} />;
                                },
                            },
                        },
                    ]}
                />
  );
}