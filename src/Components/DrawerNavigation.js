import { createDrawerNavigator } from "@react-navigation/drawer";
import { Auth } from 'aws-amplify';
import { View, Button, Text, StyleSheet, Platform, Pressable } from 'react-native';

//Screen

// import DemoStack from "../stacks/DemoStack"
// import Demo2 from "../screens/Demo2"
import ParticipantesStack from "../stacks/ParticipantesStack";
import Hoteles from "../screens/Hoteles";
import AgendaStack from "../stacks/AgendaStack"
import Presentaciones from "../screens/Presentaciones";
import Informacion from "../screens/Informacion";
import Encuesta from "../screens/Encuesta";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();


export default function DrawerNavigator({ route, navigation }) {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const options = {
    headerTitle: Platform.OS === 'ios' ? props => <View style={styles.row}>
      <Text style={styles.title}>{props.children}</Text>
    </View> : false,
    headerRight: () => (
      <Pressable onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text style={styles.buttonText}>Volver</Text>
      </Pressable>
    ),
    headerStyle: {
      backgroundColor: '#003477',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'foco-regular'
    },
  }


  return (
    <Drawer.Navigator backBehavior="history" initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Participantes" component={ParticipantesStack} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Hoteles" component={Hoteles} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Agenda" component={AgendaStack} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Presentaciones" component={Presentaciones} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Información" component={Informacion} options={options} initialParams={{ ...route.params }} />
      <Drawer.Screen name="Encuesta" component={Encuesta} options={options} initialParams={{ ...route.params }} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
    alignItems: "center",
    marginLeft: -110
  },
  button: {
    marginRight: 30,
    padding: 5,
    borderRadius: 5
  },
  buttonText: {
    color: "#D1E1E8",
  },
  title: {
    color: "#fff",
    fontWeight: 'bold',
    fontFamily: 'foco-bold',
    fontSize: 22,
    textAlign: "center",
    marginLeft: 20
  }
});