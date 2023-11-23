import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'Supercharged frameworks',
    svg: require('../../static/img/image1.svg').default,
    svgDark: require('../../static/img/dark/image1.svg').default,
    float: 'left',
    description: (
      <>
        ReNative supports popular front-end frameworks like <span style={{ color: '#0A74E6' }}>React</span>,
        <span style={{ color: '#0A74E6' }}> React Native</span>, <span style={{ color: '#0A74E6' }}> NextJS</span>, <span style={{ color: '#0A74E6' }}> Electron</span>
      </>
    ),
    link: "/docs/engines/engine-rn",
  },
  {
    title: 'Powerful templates',
    svg: require('../../static/img/image3.svg').default,
    svgDark: require('../../static/img/dark/image3.svg').default,
    float: 'left',
    description: (
      <>
        ReNative allows you to <span style={{ color: '#0A74E6' }}>build</span> powerful multi-platform bootstrap templates.
      </>
    ),
    link: "/docs/guides/templates",
  },
  {
    title: 'Integrations',
    svg: require('../../static/img/image4.svg').default,
    svgDark: require('../../static/img/dark/image4.svg').default,
    float: 'right',
    description: (
      <>
        ReNative supports integrations for various services and <span style={{ color: '#0A74E6' }}>deployment infrastructures</span> for your apps
      </>
    ),
    link: "/docs/integrations/aws",
  },

  {
    title: 'Extendable by community plugins',
    svg: require('../../static/img/image2.svg').default,
    svgDark: require('../../static/img/dark/image2.svg').default,
    float: 'right',
    description: (
      <>
        ReNative supports standard community driven <span style={{ color: '#0A74E6' }}>react native plugins</span> you can use to enhance the functionality of your apps
      </>
    ),
    link: "/docs/plugins/overview",
  },
  {
    title: 'Scalable configurations',
    svg: require('../../static/img/image5.svg').default,
    svgDark: require('../../static/img/dark/image5.svg').default,
    float: 'left',
    description: (
      <>
        Tired of setting up and managing countless of various projects?
        you can go as simple as most <span style={{ color: '#0A74E6' }}>basic json config</span> file to get yourself up and running
      </>
    ),
    link: "/docs/guides/advanced-configuration",
  },
  {
    title: 'Build hooks',
    svg: require('../../static/img/image6.svg').default,
    svgDark: require('../../static/img/dark/image6.svg').default,
    float: 'right',
    description: (
      <>
        Sometimes you need to extend CLI functionality with custom build scripts. ReNative <span style={{ color: '#0A74E6' }}>makes this easy</span> for you
      </>
    ),
    link: "/docs/guides/build_hooks",
  },
  {
    title: 'Minimalistic Runtime',
    svg: require('../../static/img/image7.svg').default,
    svgDark: require('../../static/img/dark/image7.svg').default,
    float: 'left',
    description: (
      <>
        ReNative runtime, <span style={{ color: '#0A74E6' }}>an NPM dependency, streamlines UI</span> and feature development for diverse platforms and devices.
      </>
    ),
    link: "/docs/guides/runtime",
  },
  {
    title: 'Powerful CLI',
    svg: require('../../static/img/image8.svg').default,
    svgDark: require('../../static/img/dark/image8.svg').default,
    float: 'right',
    description: (
      <>
        <span style={{ color: '#0A74E6' }}>Customize</span> your website layout using <span style={{ color: '#0A74E6' }}>React</span>. Docusaurus allows you to extend it while keeping the same header and footer.
      </>
    ),
    link: "/docs/guides/cli",
  },
];


function Feature({ Svg, title, description, link }) {
  return (
    <div className={styles.feature_container} onClick={() => window.location.href = link}>
      <div className={styles.feature_text}>
        <h2 className={styles.feature_title}>
          {title}
        </h2>
        {description && (
          <p>
            {description}
          </p>
        )}
      </div>

      <div className={styles.featuresSvg_container}>
        <Svg className={styles.featuresSvg} alt={title} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className="container">
        {colorMode === 'dark' ?
          <img className={styles.main_img} src='/img/dark/rnv-dark.svg' />
          :
          <img className={styles.main_img} src='/img/light/rnv-light.svg' />
        }
      </div>
      <h3 className={styles.feature_grid_title}>ReNative is</h3>
      <section className="container">
        <div className={styles.features}>
          {FeatureList.map((props, idx) => {
            const img = colorMode === 'dark' ? props.svgDark : props.svg;
            return <Feature key={idx} {...props} Svg={img} />
          })}
        </div>
      </section>
      <div className={styles.banner_container}>
        <div>
          <h3 className={styles.banner_title}>Start your next project here</h3>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/introduction"
          >
            Try it out
          </Link>
        </div>
        <div className={styles.banner_img}>
          {colorMode === 'dark' ?
            <img src='/img/dark/rocket_dark.svg' />
            :
            <img src='/img/light/rocket_light.svg' />
          }
        </div>
      </div>
    </>
  );
}
