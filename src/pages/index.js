import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Footer from '../components/Footer';
import CodeBlock from '@theme/CodeBlock';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                {/* <h1 className="hero__title">
                    {siteConfig.title}
                </h1> */}

                <p className={styles.h2}>
                    Currently <a href="https://github.com/flexn-io/renative/releases/tag/0.37.0">v0.37</a>
                    <img src='/img/link.svg'/>
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
                <p className={styles.h2}>
                    ReNative allows you to <b>bootstrap</b>, <b>develop</b> and <b>deploy</b> apps for mobile, web, TVs, desktops, consoles, wearables and more via a single development environment.
                </p>

                <div className='homepage-codeline'>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/overview/introduction"
                        >
                            Try it out
                        </Link>
                    </div>
                    <div>
                        <CodeBlock
                            language="jsx"
                            showLineNumbers>
                            {`$ npm install rnv -g`}
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
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
