import React from "react";
import useThemeContext from '@theme/hooks/useThemeContext';
import DarkMode from '../../static/img/dark/icon.svg';
import LightMode from '../../static/img/light/icon.svg';
import Logo from '../../static/img/light/logo.svg'
import LogoDark from '../../static/img/dark/logo.svg'

const ThemeModes = () => {
  const { setLightTheme, setDarkTheme, isDarkTheme } = useThemeContext();
  let darkThemeClasses = 'theme-mode'
  let lightThemeClasses = 'theme-mode'
  if (isDarkTheme) {
    darkThemeClasses += ' theme-mode-active'
  } else {
    lightThemeClasses += ' theme-mode-active'
  }
  return (
    <>
      <div className="theme-modes">
        <div className={lightThemeClasses} onClick={() => setLightTheme()}>
          <LightMode />
        </div>
        <div className={darkThemeClasses} onClick={() => setDarkTheme()}>
          <DarkMode />
        </div>
      </div>
    </>)
}

export default function Footer() {
  const { isDarkTheme } = useThemeContext();
  const LogoLogo = isDarkTheme ? LogoDark : Logo;
  return (
    <div className="footer">
      <div className="logo-container">
        <div className="logo-wrapper">
          <LogoLogo className="footer-logo" />
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} ReNative Org
        </div>
      </div>
      <div className="footer-container">
        <div className="container-title">Docs</div>
        <a href="/docs/overview/introduction" className="footer-link">Getting started</a>
        <a href="/docs/platforms/overview" className="footer-link">Platforms</a>
        <a href="/docs/guides/cli" className="footer-link">Guides</a>
      </div>
      <div className="footer-container">
        <div className="container-title">Community</div>
        <a href="https://github.com/flexn-io/renative/discussions" className="footer-link">Chat</a>
        <a href="https://twitter.com/renative" className="footer-link">Twitter</a>
        <a href="https://github.com/flexn-io/renative/graphs/contributors" className="footer-link">Contributors</a>
      </div>
      <div className="footer-container">
        <div className="container-title">About Flexn</div>
        <a href="https://github.com/flexn-io/renative/discussions" className="footer-link">Website</a>
        <a href="https://github.com/flexn-io/renative" className="footer-link">Github</a>
        <a href="https://twitter.com/renative" className="footer-link">Twitter</a>
      </div>
      <div className="footer-container">
        <ThemeModes />
      </div>
    </div>
  );
}
