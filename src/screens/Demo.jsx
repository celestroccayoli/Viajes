import { ActivityIndicator, View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'

import { DataStore } from 'aws-amplify';
import {Participante} from '../models'

const Demo = ({ route, navigation }) => {
    const { id } = route.params;
    const [participantes, setParticipantes] = useState(false)
  
    console.log('route', route);

    useEffect(() => {
      const loadData = async () => {
          try {
              const all = await DataStore.query(Participante);
              console.log(all);
              if (all.length>0) {
                setParticipantes(all.filter(p => p.viajeID === id));
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

    const onPress = (detail) => {

    }

    if (!participantes) return (
        <View style={[stylesLoading.container, stylesLoading.horizontal]}>
          <ActivityIndicator size="large" color="#003477" />
        </View>
      )
  return (
    <View style={styles.container}>
      <Text>{id} ID del viaje</Text>
      <View>
          {participantes.map(p => 
          (<Pressable key={p.id} onPress={
            ()=> navigation.navigate('Details', { detail: p })
          }>
            <Text>{p.nombre} {p.apellido}</Text>
            <Image source={{uri: p.imagen}} style={styles.image} />
            <Text>{"Ver detalle =>"}</Text>
            </Pressable>)
          )}
      </View> 
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    item: {
      width: '50%', // is 50% of container width
      padding: 10,
      marginBottom: 10,
      textAlign: "center"
    },
    icon: {
      borderRadius: 50,
      width: 100,
      height: 100,
      backgroundColor: "#fff",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      marginTop: 10,
      marginBottom: 10,
      textAlign: "center"
    },
    image: {
      width: 100,
      height: 100,
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