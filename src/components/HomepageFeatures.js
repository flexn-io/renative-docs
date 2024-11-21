import React from 'react';
import styles from './HomepageFeatures.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import ThemedImage from '@theme/ThemedImage';

const FeatureList = [
    {
        title: 'Extendable by community plugins',
        icon: '/img/light/feature_icon1.svg',
        iconDark: '/img/dark/feature_icon1.svg',
        description: (
            <>
                ReNative supports standard community driven{' '}
                <span style={{ color: '#0A74E6' }}>react native plugins</span> you can use to enhance the functionality
                of your apps.
            </>
        ),
        children: (
            <div className={styles.plugin_grid}>
                <PluginItemComponent title="@flexn/create" codeSnippet="rnv plugin add @flexn/create   " />
                <PluginItemComponent title="@flexn/sdk" codeSnippet="rnv plugin add @flexn/sdk  " />
                <PluginItemComponent title="@lightningjs/cli" codeSnippet="rnv plugin add @lightningjs/cli  " />
                <PluginItemComponent title="@reach/router" codeSnippet="rnv plugin add @reach/router  " />
                <PluginItemComponent title="@react-navigation" codeSnippet="rnv plugin add @react-navigation  " />
                <PluginItemComponent title="@reduxjs/toolkit" codeSnippet="rnv plugin add @reduxjs/toolkit  " />
            </div>
        ),
        link: '/docs/plugins/overview',
    },
    {
        title: 'Scalable configurations',
        icon: '/img/light/feature_icon2.svg',
        iconDark: '/img/dark/feature_icon2.svg',
        description: (
            <>
                Tired of setting up and managing countless of various projects? You can go as simple as most{' '}
                <span style={{ color: '#0A74E6' }}>basic json config</span> file to get yourself up and running.
            </>
        ),
        link: '/docs/concepts/config',
        children: (
            <CodeBlock title="renative.json" language="json">
                {`{
  "platforms": {},
  "plugins": {}
}`}
            </CodeBlock>
        ),
    },
    {
        title: 'Powerful CLI',
        icon: '/img/light/feature_icon3.svg',
        iconDark: '/img/dark/feature_icon3.svg',
        description: (
            <>
                <span style={{ color: '#0A74E6' }}>rnv CLI</span> is your entry point and control centre to building
                multi-platform apps with just a few commands to learn.
            </>
        ),
        link: '/docs/api/cli',
        children: (
            <div>
                <CodeBlock language="jsx">{'rnv --help'}</CodeBlock>
            </div>
        ),
    },
    {
        title: 'Minimalistic runtime',
        icon: '/img/light/feature_icon4.svg',
        iconDark: '/img/dark/feature_icon4.svg',
        description: (
            <>
                ReNative runtime, an <span style={{ color: '#0A74E6' }}>NPM dependency</span>,{' '}
                <span style={{ color: '#0A74E6' }}>streamlines UI</span> and feature development for diverse platforms
                and devices.
            </>
        ),
        children: (
            <CodeBlock title="multi-platform.js" language="jsx">
                {`import { isPlatformTizen, isFactorTv, engine, platform } from "renative";\n\n<Text>{isFactorTv}</Text>; `}
            </CodeBlock>
        ),
        link: '/docs/api/runtime',
    },
    {
        title: 'Supercharged frameworks',
        icon: '/img/light/feature_icon5.svg',
        iconDark: '/img/dark/feature_icon5.svg',
        description: (
            <>
                ReNative supports popular front-end frameworks like <span style={{ color: '#0A74E6' }}>React</span>,{' '}
                <span style={{ color: '#0A74E6' }}>React Native</span>, <span style={{ color: '#0A74E6' }}>NextJS</span>
                , <span style={{ color: '#0A74E6' }}>Electron</span>
            </>
        ),
        link: '/docs/engines/engine-rn',
    },
    {
        title: 'Build hooks',
        icon: '/img/light/feature_icon6.svg',
        iconDark: '/img/dark/feature_icon6.svg',
        description: (
            <>
                Sometimes you need to extend CLI functionality with custom build scripts. ReNative{' '}
                <span style={{ color: '#0A74E6' }}>makes this easy</span> for you.
            </>
        ),
        children: (
            <CodeBlock title="/buildHooks/src/index.js" language="jsx">
                {`\nimport chalk from 'chalk';\n\nconst hooks = {    
        hello: c => \n      
              new Promise((resolve, reject) => {            
                      console.log(\`\\n$\{chalk.yellow('HELLO FROM BUILD HOOKS!')}\\n\`);
                      resolve();        
              })};\n
              const pipes = {};\n
              export { pipes, hooks };\n`}
            </CodeBlock>
        ),
        link: '/docs/guides/build_hooks',
    },
    {
        title: 'Powerful templates',
        icon: '/img/light/feature_icon7.svg',
        iconDark: '/img/dark/feature_icon7.svg',
        description: (
            <>
                ReNative allows you to <span style={{ color: '#0A74E6' }}>build</span> powerful multi-platform bootstrap
                templates.
            </>
        ),
        children: (
            <CodeBlock title="Terminal" language="jsx">
                {`rnv new
? What's your project Name? (folder will be created) hello-renative
? What workspace to use? rnv
? What template to use? @rnv/template-starter
? What @rnv/template-starter version to use? 1.6.0 (@latest)
? How to create config renative.json? Extend template (cleaner, overridable)
? What's your project Title? My Renative App
? What's your App ID? com.mycompany.hellorenative
? What's your project version? 0.1.0
? What platforms would you like to use? web, ios, android
? Do you want to set-up git in your new project? Yes`}
            </CodeBlock>
        ),
        link: '/docs/guides/templates',
    },
    {
        title: 'Integrations',
        icon: '/img/light/feature_icon8.svg',
        iconDark: '/img/dark/feature_icon8.svg',
        description: (
            <>
                ReNative supports integration for various services and{' '}
                <span style={{ color: '#0A74E6' }}>deployment infrastructures</span> for your apps.
            </>
        ),
        children: (
            <>
                <div className={clsx(styles.plugin_grid, styles.img_grid)}>
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo1.svg',
                            dark: '/img/dark/integration_logo1.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo2.svg',
                            dark: '/img/dark/integration_logo2.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo3.svg',
                            dark: '/img/dark/integration_logo3.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo4.svg',
                            dark: '/img/dark/integration_logo4.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo5.svg',
                            dark: '/img/dark/integration_logo5.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo6.svg',
                            dark: '/img/dark/integration_logo6.svg',
                        }}
                    />
                    <ThemedImage
                        className={styles.feature_img}
                        sources={{
                            light: '/img/light/integration_logo7.svg',
                            dark: '/img/dark/integration_logo7.svg',
                        }}
                    />
                </div>
                <div className={styles.main_paragraph}>Additionally you can build your own integrations with ease.</div>
            </>
        ),
        link: '/docs/integrations/aws',
    },
];

const YoutubeVideo = ({ youtubeId, title }) => (
    <div
        className="wrapper"
        style={{
            margin: 'auto',
        }}
    >
        <div
            style={{
                position: 'relative',
                paddingBottom: '56.25%' /* 16:9 */,
                height: 0,
            }}
        >
            <iframe
                title={title || 'video'}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                src={`https://www.youtube.com/embed/${youtubeId}`}
                frameBorder="0"
            />
        </div>
    </div>
);

function PluginItemComponent({ title, codeSnippet }) {
    return (
        <div className={styles.plugin_container}>
            <div>
                <p className={styles.plugin_title}>{title}</p>
                <CodeBlock language="jsx">{codeSnippet}</CodeBlock>
            </div>
        </div>
    );
}

function SectionItemComponent({ Svg, title, description, link, children, linkName = 'Learn more' }) {
    return (
        <div className={styles.feature_container}>
            <div className={styles.feature_title_container}>
                <img className={styles.feature_icon} src={Svg} />
                <h2 className={styles.feature_title}>{title}</h2>
            </div>
            {description && <p>{description}</p>}
            {children && <div className={styles.feature_child_container}>{children}</div>}
            <div className={styles.feature_link_container}>
                <a className={styles.feature_link} href={link}>
                    {linkName}
                    <img src="/img/link.svg" />
                </a>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    const { colorMode } = useColorMode();
    var hrStyle;
    if (colorMode === 'dark') hrStyle = 'lineDark';
    else hrStyle = 'lineLight';
    return (
        <>
            <div className={clsx('container', 'framework_container')}>
                <div>
                    <h2>Supported frameworks</h2>
                </div>
                <div className="framework_container_img_grid">
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/react_native.svg', dark: '/img/dark/react_native.svg' }}
                    />
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/lightningjs.svg', dark: '/img/dark/lightningjs.svg' }}
                    />
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/react.svg', dark: '/img/dark/react.svg' }}
                    />
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/windows.svg', dark: '/img/dark/windows.svg' }}
                    />
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/electron.svg', dark: '/img/dark/electron.svg' }}
                    />
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/nextjs.svg', dark: '/img/dark/nextjs.svg' }}
                    />
                </div>
            </div>
            <div className={clsx('container', styles.img_video_container)}>
                <div className={styles.img_video_container_in}>
                    <div className={styles.main_img_title}>
                        <h2>Bootstrap and build apps fast</h2>
                    </div>
                    <div className={styles.main_paragraph}>
                        ReNative allows developers to create multiplatform templates and reuse them to bootstrap full
                        E2E projects, freeing up time to focus on development
                    </div>
                    <div>
                        <CodeBlock language="jsx">{'rnv new'}</CodeBlock>
                    </div>
                    <div className={styles.feature_link_container}>
                        <a className={styles.feature_link} href={'/docs/overview/introduction'}>
                            Learn more
                            <img src="/img/link.svg" />
                        </a>
                    </div>
                </div>
                <div className={clsx(styles.img_video_container_in, styles.youtube_video)}>
                    <YoutubeVideo youtubeId="PLCJzCDSyDk" title="demo" />
                </div>
            </div>
            <hr className={hrStyle}></hr>
            <div className={clsx('container', styles.img_video_container)}>
                <ThemedImage
                    className={styles.main_img}
                    sources={{
                        light: '/img/light/rnv-light.svg',
                        dark: '/img/dark/rnv-dark.svg',
                    }}
                />
                <div className={styles.img_video_container_in}>
                    <div className={styles.main_img_title}>
                        <h2>Target any major platform</h2>
                    </div>
                    <div className={styles.main_paragraph}>
                        Run your project on one of 20 platforms with a single command
                    </div>
                    <div>
                        <CodeBlock language="jsx">{'rnv run -p <PLATFORM>'}</CodeBlock>
                    </div>
                    <div className={styles.feature_link_container}>
                        <a className={styles.feature_link} href={'/docs/platforms/android'}>
                            Explore more
                            <img src="/img/link.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className={hrStyle}></hr>
            <section className="container">
                <SectionItemComponent
                    key="0"
                    {...FeatureList[0]}
                    Svg={colorMode === 'dark' ? FeatureList[0].iconDark : FeatureList[0].icon}
                    linkName="Explore more"
                />
            </section>
            <hr className={hrStyle}></hr>
            <section className={clsx('container', styles.features_line)}>
                {FeatureList.slice(1, 3).map((props, idx) => {
                    const img = colorMode === 'dark' ? props.iconDark : props.icon;
                    return <SectionItemComponent key={idx} {...props} Svg={img} />;
                })}
            </section>
            <hr className={hrStyle}></hr>
            <section className="container">
                <div className={styles.features}>
                    {FeatureList.slice(3, -2).map((props, idx) => {
                        const img = colorMode === 'dark' ? props.iconDark : props.icon;
                        return <SectionItemComponent key={idx} {...props} Svg={img} />;
                    })}
                </div>
                <div className={clsx(styles.features_line, styles.bottom_element)}>
                    {FeatureList.slice(-2).map((props, idx) => {
                        const img = colorMode === 'dark' ? props.iconDark : props.icon;
                        return <SectionItemComponent key={idx} {...props} Svg={img} />;
                    })}
                </div>
            </section>
            <hr className={hrStyle}></hr>
            <div className={clsx('container', 'framework_container')}>
                <div>
                    <h2>Used by</h2>
                </div>
                <div className="framework_container_img_grid">
                    <ThemedImage
                        className="framework_img"
                        sources={{ light: '/img/light/usedby1.png', dark: '/img/dark/usedby1.png' }}
                    />
                </div>
            </div>
        </>
    );
}
