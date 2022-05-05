import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useEffect} from 'react'

import Amplify, { DataStore, Auth } from 'aws-amplify';
import awsConfig from './aws-exports'
import { Viaje, Participante } from './models';



//Amplify.configure(awsConfig)

const Viajes = () => {

    const loadData = async () => {
        try {
            const viajes = await DataStore.query(Viaje);
            const participantes = (await DataStore.query(Participante)).filter(p => p.viajeID === viajes[0].id);
            console.log("Posts retrieved successfully!", JSON.stringify(viajes, null, 2), JSON.stringify(participantes, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    useEffect(() => {
       const data = loadData();
       Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => console.log(user.attributes.email))
        .catch(err => console.log(err));
    
      return () => {
        //second
      }
    }, [])
    

  return (
    <View>
      <Text>Viajes</Text>
      <Pressable onPress={ () => Auth.signOut()} style={styles.button}><Text>Salir</Text></Pressable>
    </View>
  )
}

export default Viajes

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderColor: "blue",
        borderWidth: 1
    }
})