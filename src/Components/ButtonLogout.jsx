import { StyleSheet, Pressable, View, Text } from 'react-native'
import React from 'react'
import { AntDesign }  from "@expo/vector-icons"

const ButtonLogout = ({signOut}) => {
  return (
    <Pressable onPress={signOut} style={styles.btn}>
      <Text style={styles.btnText}>Salir</Text>
      <AntDesign name="logout" size={20} color="#FFFFFF" />
    </Pressable>
  )
}

export default ButtonLogout

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection:"row"
    },
    btnText: {
        color: "#fff",
        marginHorizontal: 10,
        fontFamily: "foco-regular",
        fontSize: 20
    }
})