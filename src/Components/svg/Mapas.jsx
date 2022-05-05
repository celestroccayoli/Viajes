import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Mapas = ({width="50%", height="50%"}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox={`0 0 1000 1000`}>
      <Path fill="#cc092e" d="m706 804 1 2 102 132c2 3 7 5 11 5h108l9-1-75-195-154 55-2 2m-29 9L316 941l1 2h460L677 813M265 674l7 11 141 182c5 7 9 7 16 5l344-123 79-28-14-39c-2-6-6-8-12-8H622c-7 0-11 3-14 8l-94 128c-10 14-18 14-28 0l-94-128c-4-6-8-8-15-8h-82zM63 943h159a54583 54583 0 0 0 160-55l8-3-1-3-156-203c-2-2-7-4-10-4l-47-1c-8 0-12 2-14 10L90 872l-27 71m568-296h207c11 0 17 4 21 14l109 285c6 18 1 25-18 25H49c-18 0-23-8-17-24l109-286c4-10 10-14 21-14h208l-10-17c-37-63-70-128-92-198-15-47-25-95-25-144a258 258 0 0 1 513-25c5 58-6 114-23 168-23 72-57 139-96 204l-6 12"/>
      <Path fill="#fff" d="M265 674h112c7 0 11 2 15 8l93 128c11 14 19 14 29 0l94-128c3-5 7-8 14-8h204c6 0 10 2 12 8l14 39-79 28-344 123c-7 2-11 2-16-5L272 685l-7-11"/>
      <Path fill="#cc092e" d="m706 804 2-2 154-55 75 195-9 1H820c-4 0-9-2-11-5L707 806l-1-2"/>
      <Path fill="#d0d5d8" d="M499 403a117 117 0 1 1 2-234 117 117 0 0 1-2 234"/>
    </Svg>
  )
}

export default Mapas