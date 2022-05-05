import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import createOpenLink from 'react-native-open-maps';
import { Ionicons, AntDesign } from '@expo/vector-icons'; 

const Demo2 = ({ route, navigation }) => {
  //console.log('route', route);
  const { id } = route.params;

  
  const openMap = () => {
    const mapa = {
      zoom: 18,
      provider: 'google',
      query: 'Cerrito 628',
    }
    createOpenLink(mapa);
  } 
  const openMapPath = () => {
    const mapa = {
      zoom: 18,
      provider: 'google',
      travelType: 'walk',
      end: 'Cerrito 628',
      navigate: false,
      mapType: 'standard'
    }
    createOpenLink(mapa);
  } 

  return (
    <ScrollView style={styles.container}>
            <Pressable onPress={openMap}>

      <Image source={{uri: "https://teatrocolon.org.ar/sites/default/files/styles/d8/public/2019-10/teatro-colon_exterior_001.jpg?itok=H4-VExa7"}} style={styles.image} />

        <Text style={styles.title}>Hotel The Capital Hilton</Text>
        <Text style={styles.subtitle}> <Ionicons name="md-location" size={24} color="#CB082D" /> 1501 Rhode Island Ave NW, Washington</Text>
        <Text style={styles.link}>Ver en Google <AntDesign name="arrowright" size={18} color="#CB082D" /></Text>
      </Pressable>
      <Pressable onPress={openMapPath}>
        <Text style={styles.link2}>Como llegar</Text>
      </Pressable>
    </ScrollView>
    
  )
}

export default Demo2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image:{
    height: 140,
    width: "100%"
},
title:{
    fontFamily: "foco-black",
    color: "#032D77",
    fontSize: 32,
    marginTop: 18,
    marginLeft: 8
},
subtitle:{
    color:"#6881AD",
    fontSize: 20,
    marginTop: 10
},
link:{
    color: "#616161",
    marginTop: 20,
    fontSize: 20,
    marginLeft: 8
},
link2:{
    color:"#6881AD",
    marginTop: 10,
    fontSize: 18,
    borderColor: "#6881AD",
    marginLeft: 8
}
})
