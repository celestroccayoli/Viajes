import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Participantes = ({width="50%", height="50%"}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox={`0 0 1000 1000`}>
      <Path fill="#264e7a" d="m468 725-32-58ZM338 593A264 264 0 0 0 74 856v128h852V856c0-145-118-263-264-263Z"/>
      <Path fill="#517195" d="M740 274a258 258 0 1 1-515 0 258 258 0 0 1 515 0"/>
    </Svg>
  )
}

export default Participantes