import React, { useCallback, useRef, useState } from 'react';
import { DocSearchButton, useDocSearchKeyboardEvents } from '@docsearch/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { createPortal } from 'react-dom';
import translations from '@theme/SearchTranslations';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch';

const searchClient = algoliasearch('FMYKKKF9Q8', 'fd3bf87fce092e08e71378cf066734b2');

let DocSearchModal = null;
function Hit({ hit }) {
  const sections_arr = Array.from(hit.sections)
  sections_arr.forEach((item) => console.log(item.name))
  return (
    <>
    {sections_arr.forEach((item) => (
      <div className='search_item' onClick={() => window.location.href=hit.url}>
        <p>{item.name}</p>
      </div>
    ))}
    </>
  );
}
function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [initialQuery, setInitialQuery] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }
    return Promise.all([
      import('@docsearch/react/modal'),
      import('@docsearch/react/style'),
      import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      searchContainer.current = document.createElement('div');
      document.body.insertBefore(
        searchContainer.current,
        document.body.firstChild,
      );
      setIsOpen(true);
    });
  }, [importDocSearchModalIfNeeded, setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
    searchContainer.current?.remove();
  }, [setIsOpen]);
  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
      });
    },
    [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery],
  );
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });
  return (
    <>
      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={onOpen}
        ref={searchButtonRef}
        translations={translations.button}
      />
      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <div className='search_container_shadow'>
            <div className='search_container'>
              <InstantSearch searchClient={searchClient} indexName="renative_docs">
                <SearchBox  className='search_box'/>
                <p style={{color: '#565656'}}>Renative documentation</p>
                <Hits hitComponent={Hit} />
              </InstantSearch>
            </div>
          </div>,
          searchContainer.current,
        )}
    </>
  );
}
export default function SearchBar() {
  const { siteConfig } = useDocusaurusContext();
  return <DocSearch {...siteConfig.themeConfig.algolia} />;
}
