import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'


const DemoDetalle = ({ route, navigation }) => {
  const { nombre, apellido, email, imagen, cargo, institucion, bio } = route.params.detail;

  return (
    <View style={styles.container} size="large" >
      {/* <Text>{JSON.stringify(route.params.detail)}</Text> */}
      <View>
        <Image source={{ uri: imagen }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title}>{nombre} {apellido}</Text>
      </View>
      <View>
        <Text></Text>
      </View>
      <View>
        <Text style={ styles.subtitle}>{cargo} en {institucion}</Text>
      </View>
      <View  style={styles.bio}>
        <Text style={styles.description}>{bio}</Text>
        <Text style={styles.contact}>{email}</Text>
        </View>
    <View style={styles.box}>
           <Button onPress={() => navigation.goBack()} title="Volver" color="#032D77"/>
      </View>
    </View>
  )
}

export default DemoDetalle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 12,
    borderRadius: 50,
    marginLeft:20
  },
    title:{
        textAlign: "left",
        marginLeft: 140,
        marginTop: 30,
        color: "#032D77",
        fontSize: 20,
        fontWeight: "bold"
    },
    subtitle:{
        color: "#616161",
        textAlign: "left",
        marginLeft: 140,
        fontSize: 18
    },
    bio: {
      padding: 24,
      color: "#616161",
      marginTop: 40
  },
  contact: {
    color: "#CB082D",
    fontSize: 12, 
    position: "absolute",
    bottom: 40,
    right: 50,
    fontWeight: "bold"
},
description:{
  marginBottom: 140,
  color: "#616161"
},
box:{
  flex: 1,
  justifyContent: "flex-start",
  padding: 2,
  alignItems: "center",
  position: "absolute",
  bottom: 60,
  left: 50,
}
})