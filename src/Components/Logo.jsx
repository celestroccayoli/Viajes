import { View, Image, Dimensions } from 'react-native'
import React from 'react'

const logo = require('../../assets/logo_amcham.png');


const Logo = () => {
    const { width } = Dimensions.get("window");
    let newWidth = (width / 4) * 2;
  return (
    <View>
        <Image
            source={logo}
            style={{ backgroundColor: 'transparent', width: newWidth, height: newWidth, resizeMode: "contain" }}
        />
    </View>
  )
}

export default Logo