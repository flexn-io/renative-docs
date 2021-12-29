import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const FeatureList = [
  {
    title: 'Any device',
    svg: require('../../static/img/image0.svg').default,
    svgDark: require('../../static/img/dark/image0.svg').default,
    float: 'top',
    imageWidth: 800,
  },
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
    title: 'powerful CLI',
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
  const { isDarkTheme } = useThemeContext();
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {isDarkTheme ? <LinesvgDark className={styles.linesvg} alt={title} /> : <Linesvg className={styles.linesvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {title}
        </h3>
        <div className="feature-wrapper">
            {description ? (
                <p className="feature-wrapper-text">
                    {description}
                </p>
            ) : null}

            <div className="feature-wrapper-image">
                <Svg className="featuresSvg" alt={title} />
            </div>
        </div>
      </div>
    </div>
  );
}

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

export default function HomepageFeatures() {
  const { isDarkTheme } = useThemeContext();
  return (
    <section className={styles.features}>
      <div className="container">
      <YoutubeVideo youtubeId="PLCJzCDSyDk" title="demo" />
        {FeatureList.map((props, idx) => {
          const img = isDarkTheme ? props.svgDark : props.svg;
          return <Feature key={idx} {...props} Svg={img} />
        })}
      </div>
    </section>
  );
}
