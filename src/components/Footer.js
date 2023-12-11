import React from "react";
import Logo from '../../static/img/light/logo.svg'
import LogoDark from '../../static/img/dark/logo.svg'
import {useColorMode} from '@docusaurus/theme-common';

export default function Footer() {
  const {colorMode} = useColorMode();
  const LogoLogo = colorMode === 'dark' ? LogoDark : Logo;
  return (
    <div className="footer">
      <div className="logo-container">
        <div>
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
        <a href="https://github.com/flexn-io/renative/discussions" className="footer-link">Project Chat</a>
        <a href="https://twitter.com/renative" className="footer-link">X (Twitter)</a>
        <a href="https://github.com/flexn-io/renative/graphs/contributors" className="footer-link">Contributors</a>
      </div>
      <div className="footer-container">
        <div className="container-title">About Flexn</div>
        <a href="https://www.flexn.io/" className="footer-link"target="_blank">Website<img src='/img/link.svg' /></a>
        <a href="https://github.com/flexn-io" className="footer-link"target="_blank">Github<img src='/img/link.svg' /></a>
        <a href="https://twitter.com/flexn_io" className="footer-link"target="_blank">X (Twitter)<img src='/img/link.svg' /></a>
      </div>
    </div>
  );
}
