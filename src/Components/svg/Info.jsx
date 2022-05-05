import React from 'react'
import Svg, { G, Ellipse, Path } from 'react-native-svg';

const Info = ({width="50%", height="50%"}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox={`0 0 1000 1000`}>
    <G transform="translate(-151.78179 -421.80567) scale(6.20745)">
      <Ellipse ry="37.278717" rx="37.904972" cy="148.5" cx="105" fill="#6881ad"/>
      <G fill="#1b2f77">
        <Ellipse ry="6.8571644" rx="6.7080956" cy="127.28384" cx="105.03693" transform="translate(-.03692627 -.03620577)"/>
        <G transform="translate(0 -.03620577)">
          <Path d="M98.59034 143.03944h12.819316v27.26004H98.59034z"/>
          <Ellipse ry="6.4638424" rx="6.3985734" cy="142.91768" cx="105"/>
          <Ellipse ry="6.4803801" rx="6.4149437" cy="170.16536" cx="105"/>
        </G>
      </G>
    </G>
  </Svg>
  )
}

export default Info