import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import Picture from './Picture';

const Participante = ({p, navigation}) => {
  return (
    <Pressable  onPress={
        ()=> navigation.navigate('Detail', { detail: p })
        } style={styles.card}>
            <Picture img={p.imagen64 ? `data:image/jpg;base64,${p.imagen64}` : p.imagen} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{p.nombre} {p.apellido}</Text>
                <Text style={styles.subtitle}>{p.cargo} en {p.institucion}</Text>
            </View>
            <View style={styles.arrow}><AntDesign name="arrowright" size={20} color="#032D77" /></View>
        </Pressable>
  )
}

export default Participante

const styles = StyleSheet.create({
    card:{
        marginVertical: 10,
        paddingVertical: 6,
        paddingHorizontal: 10,
        /*backgroundColor: '#EAEAEA',*/
        borderRadius:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        alignContent:"center",
    },
    content: {
        width:"70%",
        minHeight: 80,
        justifyContent:"space-evenly",
        paddingVertical: 5
    },
    title:{
        textAlign: "left",
        color: "#032D77",
        fontSize: 22,
        fontFamily: "foco-bold",
    },
    subtitle:{
        color: "#616161",
        textAlign: "left",
        fontSize: 14,
        fontFamily: "foco-lt",
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
    arrow:{
        backgroundColor: "#EAEAEA",
        borderRadius: 50,
        padding:4
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
    }
})