import React from 'react';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'Extendable by community plugins',
    icon: '/img/feature_icon1.svg',
    description: (
      <>
        ReNative supports standard community driven <span style={{ color: '#0A74E6' }}>react native plugins</span> you can use to enhance
        the functionality of your apps.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Scalable configurations',
    icon: '/img/feature_icon2.svg',
    description: (
      <>
        Tired of setting up and managing countless of various projects? You can go
        as simple as most <span style={{ color: '#0A74E6' }}>basic json config</span> file to get yourself up and running.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Powerful CLI',
    icon: '/img/feature_icon3.svg',
    description: (
      <>
        <span style={{ color: '#0A74E6' }}>Customize</span> your website layout using <span style={{ color: '#0A74E6' }}>React</span>. Docusaurus allows you to extend it
        while keeping the same header and footer.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Minimalistic runtime',
    icon: '/img/feature_icon4.svg',
    description: (
      <>
        ReNative runtime, an <span style={{ color: '#0A74E6' }}>NPM dependency</span>, <span style={{ color: '#0A74E6' }}>streamlines UI</span> and feature development
        for diverse platforms and devices.
      </>
    ),
    code: (
      'import { isPlatformTizen, isFactorTv, engine, platform } from "renative";<Text>{isFactorTv}</Text>;'
    ),
    link: "/docs",
  },

  {
    title: 'Supercharged frameworks',
    icon: '/img/feature_icon5.svg',
    description: (
      <>
        ReNative supports popular front-end frameworks like <span style={{ color: '#0A74E6' }}>React</span>, <span style={{ color: '#0A74E6' }}>React Native</span>, <span style={{ color: '#0A74E6' }}>NextJS</span>, <span style={{ color: '#0A74E6' }}>Electron</span>
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Build hooks',
    icon: '/img/feature_icon6.svg',
    description: (
      <>
        Sometimes you need to extend CLI functionality with custom build scripts.
        ReNative <span style={{ color: '#0A74E6' }}>makes this easy</span> for you.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Powerful templates',
    icon: '/img/feature_icon7.svg',
    description: (
      <>
        ReNative allows you to <span style={{ color: '#0A74E6' }}>build</span> powerful multi-platform bootstrap templates.
      </>
    ),
    link: "/docs",
  },
  {
    title: 'Integrations',
    icon: '/img/feature_icon8.svg',
    description: (
      <>
        ReNative supports integration for various services and <span style={{ color: '#0A74E6' }}>deployment infrastructures</span> for your apps.
      </>
    ),
    link: "/docs",
  },
];

const YoutubeVideo = ({ youtubeId, title }) => (
  <div
    className="wrapper"
    style={{
      margin: 'auto',
      marginBottom: 50
    }}
  >
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%' /* 16:9 */,
        height: 0
      }}
    >
      <iframe
        title={title || 'video'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  </div>
);

function PluginItemComponent({ title, codeSnippet }) {
  return (
    <div className={styles.feature_container}>
      <div className={styles.feature_text}>
        <h2 className={styles.feature_title}>
          {title}
        </h2>
        <p>
          {codeSnippet}
        </p>
      </div>
    </div>
  );
}
function SectionItemComponent({ icon, title, description, link }) {
  return (
    <div className={styles.feature_container}>
      <div className={styles.feature_title_container}>
        <img className='link_img' src={icon} />
        <h2 className={styles.feature_title}>
          {title}
        </h2>
      </div>
      {description && (
        <p>
          {description}
        </p>
      )}
      <a className={styles.feature_link} href={link}>Learn more <img className='link_img' src='/img/link.svg' /></a>
    </div>
  );
}

export default function HomepageFeatures() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className={clsx("container", styles.img_video_container)} >
        <div className={styles.img_video_container_in}>
          <div className={styles.main_img_title}>
            <h2>Build react native app with ReNative framework</h2>
          </div>
          {colorMode === 'dark' ?
            <img className={styles.main_img} src='/img/dark/rnv-dark.svg' />
            :
            <img className={styles.main_img} src='/img/light/rnv-light.svg' />
          }
        </div>
        <div className={styles.img_video_container_in}>
          <YoutubeVideo youtubeId="PLCJzCDSyDk" title="demo" />
        </div>
      </div>

      <section className="container"  style={{padding: '0'}}>
        <div className={styles.features}>
          {FeatureList.map((props, idx) => {
            return <SectionItemComponent key={idx} {...props} />
          })}
        </div>
      </section>
    </>
  );
}
