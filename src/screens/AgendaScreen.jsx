import { ActivityIndicator, View, Text, Button, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

import { DataStore } from 'aws-amplify';
import { Actividad} from '../models'
import EventDate from "../Components/EventDate"


const AgendaScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [actividades, setActividades] = useState(false)
    //const [hoy, setHoy] = useState("")
    let hoy = "";

    useEffect(() => {
      const loadData = async () => {
          try {
              const all = await DataStore.query(Actividad);
              //console.log('Actividad', all);
              if (all.length>0) {
                const currents = all.filter(p => p.viajeID === id);
                currents.sort(function(a, b){
                    const aa = Date.parse(a.fecha + 'T' + a.horaInicio);
                    const bb = Date.parse(b.fecha + 'T' + b.horaInicio);
                    return aa - bb 
                });
                setActividades(currents);
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

    if (!actividades) return (
        <View style={[stylesLoading.container, stylesLoading.horizontal]}>
          <ActivityIndicator size="large" color="#003477" />
        </View>
      )
  return (
    <ScrollView style={styles.container}>
      <View>
          {actividades.map(p => {
            let verFecha = false;
            if (hoy!==p.fecha) {
              verFecha = true;
              hoy = p.fecha;
            }
            return (
              <View key={p.id} style={styles.row}>
                <EventDate fecha={p.fecha} show={verFecha} />
                <Pressable 
                  onPress={
                    ()=> navigation.navigate('Details', { detail: p })
                  }
                  style={styles.card}
                >
                  <Text style={styles.hora}>{p.horaInicio} hs</Text>
                  <View style={styles.text}>
                    <Text style={styles.title}>{p.titulo}</Text>
                    <Text style={styles.subtitle}>{p.descripcion}</Text>
                  </View>
                </Pressable>
            </View>
            )
          })}
      </View> 
      <View style={styles.box}>
        <Button onPress={() => navigation.goBack()} title="Volver" color="#032D77" />
      </View>
    </ScrollView>
  )
}

export default AgendaScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly"
    },  
    card:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: '#EAEAEA',
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 10,
      width: '80%'
    },
    hora:{
      color: '#CB082D',
      fontWeight: 'bold',
      fontFamily: "foco-bold",
      width: "30%"
    },
    text: {
      width: "70%"
    },
    title:{
      fontFamily: "foco-regular",
      color: '#032D77',
      fontSize: 14,
      marginTop: 4,
      marginBottom:4
    },
    subtitle:{
      fontFamily: "foco-regular",
      color: '#616161'
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
    image: {
      width: 100,
      height: 100,
    },
    box: {
      justifyContent: "flex-start",
      padding: 2,
      alignItems: "flex-start",
      marginBottom: 60,
      marginLeft: 50,
    }
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