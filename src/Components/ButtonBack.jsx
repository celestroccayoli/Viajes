import * as React from 'react';
//import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";


    export default function ButtonBack({ route, navigation }) {

        return (
          <View style={styles.box}>
        <Button onPress={() => navigation.goBack()} title="Volver" color="#032D77" />
      </View>
          );
        }
      

        const styles = StyleSheet.create({
          box: {
            flex: 1,
            justifyContent: "flex-start",
            padding: 2,
            alignItems: "center",
            position: "absolute",
            bottom: 60,
            left: 50,
          }
        })
