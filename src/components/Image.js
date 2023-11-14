import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import {useColorMode} from '@docusaurus/theme-common';

const Image = ({ lightImage, darkImage, className, style, alt, width, height }) => {
  const {colorMode} = useColorMode();

  return (
    <img style={style} className={className} src={colorMode === 'dark' ? darkImage : lightImage} alt={alt} width={width} height={height} />
  )
}

export default Image;