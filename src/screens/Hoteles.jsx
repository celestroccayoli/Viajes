import { ScrollView, View, Text, Pressable, StyleSheet, ActivityIndicator, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import createOpenLink from 'react-native-open-maps';
import { DataStore } from 'aws-amplify';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Picture from '../Components/Picture';
import { Hotel} from '../models'


const Hoteles = ({ route, navigation }) => {
  console.log('route', route);

  const { id, nombre, ubicacion, urlMapa  } = route.params; //
  const [hoteles, setHoteles] = useState(false)
  
  const openMap = (urlMapa) => {
    const mapa = {
      zoom: 18,
      provider: 'google',
      query: urlMapa,
    }
    createOpenLink(mapa);
  } 
  const openMapPath = () => {
    const mapa = {
      zoom: 18,
      provider: 'google',
      travelType: 'walk',
      end:  urlMapa,
      navigate: false,
      mapType: 'standard'
    }
    createOpenLink(mapa);
  } 
  useEffect(() => {
    const loadData = async () => {
        try {
            const all = await DataStore.query(Hotel);
            console.log(all);
            if (all.length>0) {
              setHoteles(all.filter(p => p.viajeID === id));
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

  if (!hoteles) return (
      <View style={[stylesLoading.container, stylesLoading.horizontal]}>
        <ActivityIndicator size="large" color="#003477" />
      </View>
    )
  return (
    <ScrollView style={styles.container}>
    {hoteles.map(p => (
      
      <Pressable key={p.id} onPress={() => openMap(p.ubicacion)}>    
        <View>
        {p.imagen && <Picture img={p.imagen} style={styles.image} />}
        </View>
        <Text style={styles.title}>{p.nombre}</Text>
        <Text style={styles.subtitle}><Ionicons name="md-location" size={24} color="#CB082D" />{p.ubicacion}</Text>
        <Text style={styles.link}>Ver en Google <AntDesign name="arrowright" size={18} color="#CB082D" /></Text>
        <View style={styles.separator}></View>
      </Pressable>
    ))}
    </ScrollView>
  )
}


export default Hoteles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image:{
    height: 140,
    width: "100%",
    borderBottomLeftRadius:40
  },
  title:{
      fontFamily: "foco-bold",
      color: "#032D77",
      fontSize: 28,
      marginTop: 18,
      marginLeft: 8
  },
  subtitle:{
      fontFamily: "foco-regular",
      color:"#6881AD",
      fontSize: 18,
      marginTop: 4
  },
  link:{
      fontFamily: "foco-regular",
      color: "#616161",
      marginTop: 20,
      fontSize: 20,
      marginLeft: 8
  },
  link2:{
      fontFamily: "foco-regular",
      color:"#6881AD",
      marginTop: 10,
      fontSize: 18,
      borderBottomColor:"#6881AD",
      marginLeft: 8

  },
  separator:{
      marginTop: 10,
      borderBottomColor: "#6686a3",
      borderBottomWidth: 1
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
