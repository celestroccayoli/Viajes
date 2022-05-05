import React, {useState, useEffect} from 'react'
import { ActivityIndicator, View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import * as Sharing from "expo-sharing"
import * as FileSystem from 'expo-file-system';
import { AntDesign } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import Markdown from '@flowchase/react-native-markdown-display';

import {Institucion, Presentacion} from '../models'

const Presentaciones = ({ navigation, route }) => {
     const { id } = route.params;
     const [presentaciones, setPresentaciones] = useState(false)
     useEffect(() => {
       const loadData = async () => {
           try {
               const all = await DataStore.query(Presentacion);
               const inst = await DataStore.query(Institucion);
               if (all.length>0) {
                 const data = all.filter(p => p.viajeID === id).map(p => ({...p, ...{institucion: inst.filter(i => i.id===p.institucionID)[0]}}))
                setPresentaciones(data);
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

    if (!presentaciones) return (
      <View style={[stylesLoading.container, stylesLoading.horizontal]}>
        <ActivityIndicator size="large" color="#003477" />
      </View>
    )

  const downloadAndShare = async (fileName, url) => {
    FileSystem.downloadAsync(
        url,
        FileSystem.cacheDirectory + fileName
      )
      .then(async({ uri }) => {
        await Sharing.shareAsync(uri);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const getFile = async (fileName) => {
    const result = await Storage.get(`archivos/${fileName}`, {
        level: "public"
    });
    /// PODRÍAMOS PONER UNA ALERTA DE SI QUIERE CONTINUAR o CHEQUEAR INTERNET
    downloadAndShare(fileName, result)
  }
    return (
      <ScrollView style={styles.container}>
            {presentaciones.map(p => (
              <View style={styles.card} key={p.id}>
                <Text style={styles.title}>{p.titulo}</Text>
                <Text style={styles.subtitle}>por: {p?.institucion?.nombre}</Text>
                <Markdown style={{paragraph: styles.description}}>
                  {p.descripcion}
                </Markdown>
                <Pressable style={styles.arrow} onPress={() => getFile(p.archivo) }>
                <AntDesign name="download" size={36} color="#CB082D" />
                </Pressable>
              </View>
            ))}
      </ScrollView>
    )
  }


export default Presentaciones

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
     card:{
        padding: 12,
        marginBottom: 20,
        backgroundColor: '#EAEAEA',
        borderRadius:10,
    },
  title:{
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
    color: "#032D77",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "foco-bold",
},
subtitle:{
    color: "#616161",
    textAlign: "left",
    marginLeft: 10,
    marginRight: 50,
    marginTop: 15,
    fontSize: 16,
    fontFamily: "foco-lt",
},
description: {
  marginTop: 8,
  color: "#616161",
  fontSize: 12,
  marginLeft: 10,
  fontFamily: "foco-lt",
},
arrow:{
  position: "absolute",
  right:10,
  bottom:0,
  padding: 8,
  borderRadius: 50,
  marginBottom:12
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
  }
})