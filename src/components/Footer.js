import React from "react";
import useThemeContext from '@theme/hooks/useThemeContext';
import Youtube from '../../static/img/youtube.svg';
import Twitter from '../../static/img/twitter.svg';
import Github from '../../static/img/github.svg';
import Logo from '../../static/img/light/logo.svg'
import LogoDark from '../../static/img/dark/logo.svg'

const SocialLinks = () => <>
    <div className="social-links">
          <a href="https://www.youtube.com/channel/UCD1OyGZZY2PG0mpmq6CUaRQ" className="social-link" target="_blank">
            <Youtube />
          </a>
          <a href="https://twitter.com/renative" className="social-link" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/flexn-io/renative" className="social-link" target="_blank">
            <Github />
          </a>
      </div>
</>

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
          © {new Date().getFullYear()} ReNative Org
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
        <div className="container-title">Follow us</div>
        <SocialLinks />
      </div>
    </div>
  );
}
