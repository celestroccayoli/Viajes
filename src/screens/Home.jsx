import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View, Text, Pressable, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { DataStore } from 'aws-amplify';
import { Viaje } from '../models';
import Participantes from "../Components/svg/Participantes"
import Agenda from "../Components/svg/Agenda"
import Presentaciones from "../Components/svg/Presentaciones"
import Hoteles from "../Components/svg/Hoteles"
import Encuestas from '../Components/svg/Encuestas';
//import Mapas from '../components/svg/Mapas';
import Info from '../Components/svg/Info';

const Home = ({ navigation }) => {
  const [viajeId, setViajeId] = useState(false)
  
  useEffect(() => {
    const loadData = async () => {
        try {
            const viajes = await DataStore.query(Viaje, v => v.activo("eq", true)); // SOLO VIAJES ACTIVOS
            if (viajes.length>0) {
              setViajeId(viajes[0].id); // ASIGNA EL PRIMERO
            }
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      if (!viajeId) loadData();
    }, 5000)

    loadData();
    return () => {
      return () => clearInterval(intervalId);
    }
  }, [])
  
  if (!viajeId) return (
    <View style={[stylesLoading.container, stylesLoading.horizontal]}>
      <ActivityIndicator size="large" color="#003477" />
    </View>
  )

  return (
    <View style={styles.container}>
      <Pressable 
      onPress={
        ()=> navigation.navigate('Viaje', {screen: 'Participantes', id: viajeId })
      }
      style={styles.item}
      >
        <View style={styles.icon}>
          <Participantes width='100%' height='60%'/>
        </View>
        <View><Text  style={styles.title}>Participantes</Text></View>
      </Pressable>
      <Pressable 
        onPress={
          ()=> navigation.navigate('Viaje', { screen: 'Agenda', id: viajeId })
        }
        style={styles.item}
      >
        <View style={styles.icon}>
          <Agenda  width='100%' height='60%'/>
        </View>
        <View><Text style={styles.title}>Agenda</Text></View>
      </Pressable>
      <Pressable 
      onPress={
        ()=> navigation.navigate('Viaje', { screen: 'Presentaciones', id: viajeId })
      }
      style={styles.item}
      >
        <View style={styles.icon}>
          <Presentaciones  width='100%' height='60%'/>
        </View>
        <View><Text  style={styles.title}>Presentaciones</Text></View>
      </Pressable>
      <Pressable 
        onPress={
          ()=> navigation.navigate('Viaje', { screen: 'Hoteles', id: viajeId })
        }
        style={styles.item}
      >
        <View style={styles.icon}>
          <Hoteles width='100%' height='60%'/>
        </View>
        <View><Text  style={styles.title}>Hoteles</Text></View>
      </Pressable>
      <Pressable 
      onPress={
        ()=> navigation.navigate('Viaje', { screen: 'Encuesta', id: viajeId})
      }
      style={styles.item}
      >
        <View style={styles.icon}>
          <Encuestas  width='100%' height='60%'/>
        </View>
        <View><Text  style={styles.title}>Encuesta</Text></View>
      </Pressable>
      <Pressable 
        onPress={()=> navigation.navigate('Viaje', { screen: 'Información', id: viajeId })}
        style={styles.item}
      >
        <View style={styles.icon}>
          <Info width='120%' height='120%'/>
        </View>
        <View><Text  style={styles.title}>Información</Text></View>
      </Pressable>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
    textAlign: "center",
    fontFamily: "foco-regular",
    fontSize: 18,
    color: '#003477'
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