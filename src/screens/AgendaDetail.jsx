import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Markdown from '@flowchase/react-native-markdown-display';
import createOpenLink from 'react-native-open-maps';



const AgendaDetail = ({ route, navigation }) => {

  const { id, horaInicio, descripcion, imagen, titulo, fecha, ubicacion } = route.params.detail;

  const openMap = (urlMapa) => {
    const mapa = {
      zoom: 18,
      provider: 'google',
      query: urlMapa,
    }
    createOpenLink(mapa);
  } 
  return (
    <View style={styles.container} size="large" >
      {/* <Text>{JSON.stringify(route.params.detail)}</Text> */}
      {imagen && <View>
        <Image source={{ uri: imagen }} style={styles.image} />
      </View>}
      <View>
        <Text style={styles.title}>{titulo}</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}><FontAwesome name="calendar" size={30} color="#CB082D" /> {fecha}</Text>
          <Text style={styles.subtitle}><AntDesign name="clockcircle" size={20} color="#6881AD" /> {horaInicio} hs</Text>
        </View>
      </View>      
      <View style={styles.bio}>
        {descripcion && <Markdown style={ stylesMarkdown }>
            {descripcion}
        </Markdown>}
      </View>
      <Pressable key={id} onPress={() => openMap(ubicacion)}>   
        <Text style={styles.contact}>{ubicacion}</Text>
      </Pressable>
    </View>
  )
}

export default AgendaDetail

const stylesMarkdown = {
  body: {
      color: "#616161",
      fontFamily: "foco-regular",
      fontSize: 15,
      marginBottom: 140
  },
  strong: {
      fontFamily: "foco-bold",
  },
  paragraph: {
    color: "#616161"
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
    justifyContent: "space-between"
  },
  row:{
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    marginTop: 30,
    color: "#032D77",
    fontSize: 20,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#616161",
    textAlign: "left",
    fontSize: 18,
    marginTop: 10
  },
  bio: {
    color: "#616161",

  },
  contact: {
    color: "#CB082D",
    fontSize: 12,
    bottom: 40,
    fontWeight: "bold"
  },
  description: {
    marginBottom: 140,
    color: "#616161"
  },
  box: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 2,
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    left: 50,
  }
})