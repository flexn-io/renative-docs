import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const Image = ({ lightImage, darkImage, className, style, alt, width, height }) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <img style={style} className={className} src={isDarkTheme ? darkImage : lightImage} alt={alt} width={width} height={height} />
  )
}

export default Image;