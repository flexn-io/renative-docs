import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const FeatureList = [
  {
    title: 'Supercharged frameworks',
    svg: require('../../static/img/image1.svg').default,
    svgDark: require('../../static/img/dark/image1.svg').default,
    float: 'left',
    description: (
      <>
        ReNative Supports popular front-end frameworks like <a href="https://reactjs.org/">React</a>,
        <a href="https://reactnative.dev/">React Native</a>, <a href="https://nextjs.org/">NextJS</a>, <a href="https://www.electronjs.org/">Electron</a>

      </>
    ),
  },
  {
    title: 'Powerful templates',
    svg: require('../../static/img/image3.svg').default,
    svgDark: require('../../static/img/dark/image3.svg').default,
    float: 'left',
    description: (
      <>
        ReNative allows you to build powerful multi-platform bootstrap templates.
      </>
    ),
  },
  {
    title: 'Integrations',
    svg: require('../../static/img/image4.svg').default,
    svgDark: require('../../static/img/dark/image4.svg').default,
    float: 'right',
    description: (
      <>
        ReNative supports integrations for various services and deployment infrastructures for your apps
      </>
    ),
  },

  {
    title: 'Extendable by community plugins',
    svg: require('../../static/img/image2.svg').default,
    svgDark: require('../../static/img/dark/image2.svg').default,
    float: 'right',
    description: (
      <>
        ReNative supports standard community driven react-native plugins you can use to enhance the functionality of your apps
      </>
    ),
  },
  {
    title: 'Scalable configurations',
    svg: require('../../static/img/image5.svg').default,
    svgDark: require('../../static/img/dark/image5.svg').default,
    float: 'left',
    description: (
      <>
        Tired of setting up and managing countless of various projects?
        you can go as simple as most basic json config file to get yourself up and running
      </>
    ),
  },
  {
    title: 'Build hooks',
    svg: require('../../static/img/image6.svg').default,
    svgDark: require('../../static/img/dark/image6.svg').default,
    float: 'right',
    description: (
      <>
        Sometimes you need to extend CLI functionality with custom build scripts. ReNative makes this easy for you
      </>
    ),
  },
  {
    title: 'Minimalistic Runtime',
    svg: require('../../static/img/image7.svg').default,
    svgDark: require('../../static/img/dark/image7.svg').default,
    float: 'left',
    description: (
      <>
        ReNative runtime is an NPM dependency to help abstract away some of the complexities of building UI interfaces and features for large number of target platforms and devices
      </>
    ),
  },
  {
    title: 'Powerful CLI',
    svg: require('../../static/img/image8.svg').default,
    svgDark: require('../../static/img/dark/image8.svg').default,
    float: 'right',
    description: (
      <>
        One CLI to do it all. RNV is your entry point and control centre to building multi-platform apps with just a few commands to learn.
      </>
    ),
  },
];

const Linesvg = require('../../static/img/line.svg').default;
const LinesvgDark = require('../../static/img/dark/line.svg').default;


function Feature({ Svg, title, description, float, imageWidth = 400 }) {
  return (
    <div className={styles.feature_container}>
      <div className="text--center">
        <h2>
          {title}
        </h2>
        {description ? (
          <p>
            {description}
          </p>
        ) : null}
      </div>

      <div className={styles.featuresSvg_container}>
        <Svg className={styles.featuresSvg} alt={title} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const { isDarkTheme } = useThemeContext();
  return (
    <>
      {/* TODO: change gif to json */}
      {isDarkTheme ?
        <img className='main_img' src='/img/dark/rnv-dark.gif' />
        :
        <img className='main_img' src='/img/light/rnv-light.gif' />
      }
      <h3 className="text--center">RNV is</h3>
      <section className="container">
        <div className={styles.features}>
          {FeatureList.map((props, idx) => {
            const img = isDarkTheme ? props.svgDark : props.svg;
            return <Feature key={idx} {...props} Svg={img} />
          })}
        </div>
      </section>
    </>
  );
}
