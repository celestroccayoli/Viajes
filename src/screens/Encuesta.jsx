import React, {useCallback }from 'react'
import { View, Text, Button, Alert, StyleSheet, Linking } from 'react-native'
//import { Button } from 'react-native-web';


const encuestaURL = "https://es.surveymonkey.com/r/QR2VLP9i";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const link = await Linking.canOpenURL(url);

    if (link) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`No se encontró la URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} color="#009788"/>;
};

const Encuesta = ({ navigation, route }) => {
    console.log('route', route);
    return (
      <View style={styles.container}>
          <View  style={styles.card}>
            <View>
              <Text  style={styles.title}>Nos interesa saber tu opinión</Text>
              <Text  style={styles.subtitle}>Queremos que tengas la mejor experiencia Amcham.</Text>
              <Text  style={styles.subtitle}>Respondiendo a esta encuesta nos ayudás a que hagamos los ajustes necesarios para lograrlo.
              Solo te tomará 5 minutos</Text>
            </View>
            <View>
                <OpenURLButton url={encuestaURL} style={styles.btnText} color="#009788" >Responder</OpenURLButton>
            </View>
          </View>
      </View>
    )
  }


export default Encuesta

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
    height: "70%",
    borderRadius: 10,
    padding: 30, 
    justifyContent: "space-between"
  },
  title:{
    fontFamily: "foco-bold",
    color: "#032D77",
    fontSize: 30,
    marginBottom: 20
  },
  subtitle:{
    color:"#6881AD",
    fontSize: 20,
    fontFamily: "foco-lt",
  },
  link:{
   borderColor: "#009788",
   borderWidth: 2
  },
  btnText:{
    color:"#009788" 
  }
})