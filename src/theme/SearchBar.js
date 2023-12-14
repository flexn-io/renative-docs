export { default } from '@docusaurus/Noop';
import { autocomplete } from '@algolia/autocomplete-js';
import React, { createElement, Fragment, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import '@algolia/autocomplete-theme-classic';

export function Autocomplete(props) {
    const containerRef = useRef(null);
    const panelRootRef = useRef(null);
    const rootRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            return undefined;
        }

        const search = autocomplete({
            detachedMediaQuery: '',
            container: containerRef.current,
            renderer: { createElement, Fragment, render: () => { } },
            render({ children }, root) {
                if (!panelRootRef.current || rootRef.current !== root) {
                    rootRef.current = root;

                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }

                panelRootRef.current.render(children);
            },
            ...props,
        });

        return () => {
            search.destroy();
        };
    }, [props]);

    return <div ref={containerRef}/>;
}

export function ProductItem({ hit, components }) {
    return (
        <a href={hit.url} className="aa-ItemLink">
            <div className="aa-ItemContent">
                <div className="aa-ItemTitle">
                    <components.Highlight hit={hit} attribute="title" />
                </div>
                <div className="aa-ItemContentDescription">
                    <components.Highlight hit={hit} attribute="description" />
                </div>
            </div>
        </a>
    );
}
