import React from "react";
import useThemeContext from '@theme/hooks/useThemeContext';
import Youtube from '../../static/img/youtube.svg';
import Twitter from '../../static/img/twitter.svg';
import Facebook from '../../static/img/facebook.svg';
import Instagram from '../../static/img/instagram.svg';
import Linkedin from '../../static/img/linkedin.svg';
import Github from '../../static/img/github.svg';
import Flexn from '../../static/img/light/logo.svg'
import FlexnDark from '../../static/img/dark/logo.svg'

const SocialLinks = () => <>
    <div className="social-links">
          <a href="https://www.youtube.com/channel/UCv2GG80orsKHKJVxlBY78tw" className="social-link" target="_blank">
            <Youtube />
          </a>
          <a href="https://www.instagram.com/flexn_io/" className="social-link" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/flexn.co" className="social-link" target="_blank">
            <Facebook />
          </a>
          <a href="https://twitter.com/flexn_io" className="social-link" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/flexn-io" className="social-link" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/company/flexn" className="social-link" target="_blank">
            <Linkedin />
          </a>
      </div>
</>

export default function Footer() {
  const { isDarkTheme } = useThemeContext();
  const FlexnLogo = isDarkTheme ? FlexnDark : Flexn;
  return (
    <div className="footer">
      <div className="logo-container">
        <div className="logo-wrapper">
          <FlexnLogo className="footer-logo" />
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} Flexn B.V. All rights reserved.
        </div>
      </div>
      <div className="footer-container">
        <div className="container-title">Docs</div>
        <a className="footer-link">Getting started</a>
        <a className="footer-link">Platforms</a>
        <a className="footer-link">Guides</a>
      </div>
      <div className="footer-container">
        <div className="container-title">Community</div>
        <a className="footer-link">Chat</a>
        <a className="footer-link">Twitter</a>
        <a className="footer-link">Contributors</a>
      </div>
      <div className="footer-container">
        <div className="container-title">Follow us</div>
        <SocialLinks />
      </div>
    </div>
  );
}
