import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Presentaciones = ({width="50%", height="50%"}) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox={`0 0 1000 1000`}>
      <Path fill="#c54759" d="M268 242h237v27H268zm0-69h464v27H268zm0-69h464v27H268zm252 264h256c30 0 54-22 54-48V60c0-27-24-48-54-48H224c-30 0-54 21-54 48v260c0 26 24 48 54 48h222l-7 81z"/>
      <Path fill="#517195" d="M247 618a149 149 0 1 0 297 0 149 149 0 0 0-297 0"/>
      <Path fill="#264e7a" d="M310 781c-78 0-140 62-140 139v68h452v-68c0-77-63-139-140-139z"/>
      <Path fill="#cbd5df" d="M268 131h464v-27H268zm0 69h464v-27H268zm0 69h237v-27H268z"/>
    </Svg>
  )
}

export default Presentaciones