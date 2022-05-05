import { SafeAreaView, SectionList, ActivityIndicator, Button, View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { DataStore } from 'aws-amplify';
import {Participante, Institucion, TipoInstitucion} from '../models'
import Item from '../Components/Participante';


const Separator = () => (
    <View style={styles.separator} />
  );

const Participantes = ({ route, navigation }) => {
  

    const { id } = route.params;
    const [participantes, setParticipantes] = useState(false)
  
    console.log('route', route);

    useEffect(() => {
      const loadData = async () => {
          try {
              const tipos = Object.values(TipoInstitucion);
              const cats = await DataStore.query(Institucion);
              //console.log(tipos);
              if (cats.length>0) {
                const all = await DataStore.query(Participante);
                //console.log(cats);
                const data = [];
                tipos.forEach(t => {
                  const section = {
                    title: t,
                    data: []
                  };
                  const dataInst = cats.filter(c => c.viajeID === id && c.tipo===t);
                  dataInst.forEach((c) =>{
                    const personas = all.filter(p => p.viajeID===id && p.institucionID===c.id).map(p => ({...p, ...{institucion: c.nombre}}));
                    if(personas.length>0) section.data = section.data.concat(personas);
                  })
                  data.push(section);
                });

                setParticipantes(data);
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
    <SafeAreaView  style={styles.container}>
      <SectionList
        sections={participantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item p={item} navigation={navigation} />}
        renderSectionHeader={({ section: { title } }) => <View style={styles.separator}></View>}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  )
}

export default Participantes

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    header: {
      fontSize: 2,
      fontFamily:"foco-bold",
      textAlign:"right",
      height: 1,
    },
    card:{
        padding: 6,
        height: 124,
        marginBottom: 2,
        backgroundColor: '#EAEAEA',
        borderRadius:10,
    },
    title:{
        textAlign: "left",
        marginLeft: 100,
        marginTop: 15,
        color: "#032D77",
        fontSize: 12,
        fontFamily: "foco-bold",
    },
    subtitle:{
        color: "#616161",
        textAlign: "left",
        marginLeft: 110,
        marginRight: 50,
        marginTop: 15,
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
    image: {
      width: 60,
      height: 60,
      position: "absolute",
      top: 12,
      left: 12,
      borderRadius: 50
    },
    arrow:{
        backgroundColor: "#EAEAEA",
        padding: 6,
        borderRadius: 50
    },
    box: {
      padding: 2,
      // alignItems: "center",
      // position: "absolute",
      marginTop: 50,
      bottom: 60,
      left: -110,
  },
  separator: {
    borderBottomColor: "#D1E1E8",
    borderBottomWidth: 1,
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
    }
  })