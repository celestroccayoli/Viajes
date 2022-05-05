import React from 'react'
import Svg, { Path, Text, TSpan } from 'react-native-svg';

const Encuestas = ({width="50%", height="50%"}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox={`0 0 1000 1000`}>
      <Path fill="#b71930" d="M482 30v142a18 18 0 1 0 36 0V30a18 18 0 0 0-36 0M77 327a18 18 0 0 0-15 34l130 57a18 18 0 0 0 15-33zm846 0-130 58a18 18 0 1 0 15 33l130-57a18 18 0 1 0-15-34"/>
      <Path fill="#264e7a" d="M484 988h32c26 0 48-1 48-27v-15H436v15c0 26 22 27 48 27"/>
      <Path fill="#517195" d="M500 677a190 190 0 1 1 0-380 190 190 0 0 1 0 380m108 118c0 3-3 6-7 6H399c-4 0-7-3-7-6v-11c0-3 3-6 7-6h202c4 0 7 3 7 6zm0 54c0 3-3 6-7 6H399c-4 0-7-3-7-6v-11c0-3 3-6 7-6h202c4 0 7 3 7 6zm0 53c0 4-3 6-7 6H399c-4 0-7-2-7-6v-10c0-4 3-6 7-6h202c4 0 7 2 7 6zm172-410c0-157-126-285-280-285a283 283 0 0 0-280 285c0 112 63 208 155 255l-1 5v145c0 26 21 47 47 47h15v2h128v-2h15c26 0 47-21 47-47V752l-1-5c92-47 155-143 155-255"/>
      <Path fill="#5a6e7e" d="M662 487a161 161 0 0 1-162 162 161 161 0 0 1-114-276 161 161 0 0 1 228 0c29 29 48 69 48 114m-339 0a177 177 0 1 0 354 0 177 177 0 0 0-354 0"/>
      <Path fill="#fff" d="M323 487a177 177 0 1 0 354 0 177 177 0 0 0-354 0"/>
      <Path fill="#5a6e7e" d="M514 469Z"/>
      <Text fill="#003477" font-family="Foco" font-size="20.2" font-weight="400" style="-inkscape-font-specification:Foco-Regular" transform="translate(446 591) scale(15.6132)">
        <TSpan x="0" y="0">?</TSpan>
      </Text>
    </Svg>
  )
}

export default Encuestas