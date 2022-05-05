import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, Text, Image, StyleSheet } from 'react-native'
import { DataStore } from 'aws-amplify';
import Markdown from '@flowchase/react-native-markdown-display';
import { Informacion } from '../models' 

const InfoScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [informacion, setInfo] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const all = await DataStore.query(Informacion);
        //console.log(all);
        if (all.length > 0) {
          setInfo(all.filter(p => p.Viaje.id === id));
        }
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    }
    loadData();
    return () => {
      //second
    }
  }, [])
  if (!informacion) return (
    <View style={[stylesLoading.container, stylesLoading.horizontal]}>
      <ActivityIndicator size="large" color="#003477" />
    </View>
  )
  return (
    <View style={styles.container}>
          {informacion.map(info => (
              <View style={styles.card} key={info.id}>
                <Image source={ require('../../assets/info_header.jpg') } style={styles.image} />
                <Text style={styles.title}>
                  {info.titulo}
                </Text>
                <Text style={styles.subtitle}>
                  {info.subtitulo}
                </Text>
                <View style={styles.description}>
                <Markdown style={{paragraph: styles.description}}>
                  {info.descripcion}
                </Markdown>
                </View>
              </View>
          ))}
    </View>
  )
}


export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 2,
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    left: 50,
  },
  card: {
    backgroundColor: "#EAEAEA",
    height: "90%",
    borderRadius: 10,
    padding: 24,
  },
  title: {
    fontFamily: "foco-bold",
    color: "#032D77",
    fontSize: 32,
    marginBottom: 22
  },
  subtitle: {
    color: "#6881AD",
    fontSize: 20,
    fontFamily: "foco-lt",
  },
  description: {
    marginTop: "12%",
    color: "#616161",
    fontSize: 18,
    fontFamily: "foco-lt",
  },
  image:{
    height: 100,
    width: "100%",
    borderBottomLeftRadius:40
  },
})

const stylesLoading = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
})