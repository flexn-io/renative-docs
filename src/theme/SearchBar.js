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

                // panelRootRef.current.render(children);
                panelRootRef.current.render(
                    <>
                    {children}
                    <Footer/>
                    </>
                );
            },
            ...props,
        });

        return () => {
            search.destroy();
        };
    }, [props]);

    return <div ref={containerRef} />;
}

export function ProductItem({ hit, components }) {
    return (
        <a href={hit.url} className="aa-ItemLink" style={{marginBottom: '10px'}}>
            <div className="aa-ItemContent">
                <div className="aa-ItemTitle search_result_title_container">
                    <img src='/img/page_icon.svg' />
                    <components.Highlight hit={hit._highlightResult.title} attribute="value" />
                </div>
                <div className="aa-ItemContentDescription">
                    <components.Highlight hit={hit} attribute="description" />
                </div>
                {hit._highlightResult.sections.map(section => (
                    (section.name.matchLevel != 'none' || section.content.matchLevel != 'none') &&
                    <div key={section.name.value} style={{ paddingLeft: '25px' }}>
                        <div className="aa-ItemTitle search_result_title_container">
                            <img src='/img/section_icon.svg' />
                            <components.Highlight hit={section.name} attribute="value" />
                        </div>
                        <div className="aa-ItemContentDescription">
                            <components.Highlight hit={section.content} attribute="value" />
                        </div>
                    </div>
                ))}
            </div>
        </a>
    );
}

export function Footer() {
    return (
        <div className='search_footer'>
            <div className='search_footer_item'>
            <span>Search by</span>
            </div>
            <div className='search_footer_item'>
                <a href='https://www.algolia.com/developers/?utm_medium=referral&utm_content=powered_by&utm_source=renative.com&utm_campaign=autocomplete'>
                    <img className='algolia_logo' src='/img/algolia_logo.svg' />
                </a>
            </div>
        </div>
    )
}