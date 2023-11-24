import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Footer from '../components/Footer';
import CodeBlock from '@theme/CodeBlock';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container" style={{padding: '0'}}>
                <p className={clsx(styles.h2, styles.version_link)}>
                    Currently <a className='link' href="https://github.com/flexn-io/renative/releases/tag/0.37.0"  target="_blank">v0.37<img className='link_img' src='/img/link.svg' /></a>
                </p>
                <div className="container-in">
                    <span className="hero__title">
                        {'Unified'}
                    </span>
                    <span className="hero__title hero__title_alt">
                        {'Development'}
                    </span>
                    <span className="hero__title">
                        {'Platform'}
                    </span>
                </div>
                <p className={clsx(styles.h2, styles.description)}>
                    ReNative allows you to <b>bootstrap</b>, <b>develop</b> and <b>deploy</b> apps for mobile, web, TVs, desktops, consoles, wearables and more via a single development environment.
                </p>

                <div className='homepage-codeline'>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg homepage_button"
                            to="/docs/overview/introduction"
                        >
                            Try it out
                        </Link>
                    </div>
                    <div>
                        <CodeBlock
                            language="jsx">
                            {`npm install rnv -g    `}
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title={`Unified Development Platform`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
            <Footer />
        </Layout>
    );
}
