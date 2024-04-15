/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export default function CustomSearchNavbarItem(): JSX.Element {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();

    const indexName = customFields.ALGOLIA_INDEX as string;
    const appId = customFields.ALGOLIA_APP_ID as string;
    const searchKey = customFields.ALGOLIA_SEARCH_KEY as string;

    return (
        <DocSearch
            maxResultsPerGroup={7}
            placeholder="Search..."
            appId={appId}
            indexName={indexName}
            apiKey={searchKey}
        />
    );
}
