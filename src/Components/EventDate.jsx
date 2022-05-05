import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EventDate = ({fecha, show}) => {

  if (!show) return <View style={styles.dateHide}></View>

  const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
  const d = new Date(fecha);
  console.log(show, fecha, d.getDay());
  return (
    <View style={styles.date}>
        <Text style={styles.day}>{days[d.getDay()]}</Text>
        <Text style={styles.num}>{d.getDate()}</Text>
    </View>
  )
}

export default EventDate

const styles = StyleSheet.create({
    dateHide: {
      width: 60,
      height: 60,
      marginRight: 10
  },
    date: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor:"#d1e1e8",
        alignItems:"center",
        padding: 10,
        marginRight: 10
    },
    day: {
      color: "#032d77",
      textAlign: "center",
      fontFamily:"foco-lt",
      fontSize: 16
    },
    num: {
      color: "#032d77",
      textAlign: "center",
      fontFamily:"foco-bold",
      fontSize: 18
    }
})