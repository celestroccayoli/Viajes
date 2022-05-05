import { StyleSheet, Text, View, Button } from 'react-native';
import { AmplifyTheme, Greetings, Loading, ForgotPassword, RequireNewPassword, SignIn, withAuthenticator } from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {I18n, Amplify, Auth } from 'aws-amplify';
import awsConfig from './src/aws-exports'

//components
import DrawerNavigator from "./src/Components/DrawerNavigation"
import Logo from './src/Components/Logo';

//screens
import Home from "./src/screens/Home.jsx"
import NoSignUp from "./src/screens/NoSignUp"

//stacks
import ParticipantesStack from './src/stacks/ParticipantesStack';
import AgendaStack from './src/stacks/AgendaStack';
import Informacion from './src/screens/Informacion';
import Encuesta from './src/screens/Encuesta';
import PresentacionesScreen from "./src/screens/Presentaciones.jsx"
import Hoteles from './src/screens/Hoteles';
import ButtonLogout from './src/Components/ButtonLogout';
const Stack = createNativeStackNavigator();

Amplify.configure(awsConfig)

Amplify.configure({...awsConfig, ...{
  Analytics: {
    disabled: true
  }
}})

const MyContainer= Object.assign({}, AmplifyTheme.container, { backgroundColor: '#f7f7f7' });
const MySection = Object.assign({}, AmplifyTheme.section, { width: "90%" });
const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, { });
const MySectionHeaderText = Object.assign({}, AmplifyTheme.sectionHeaderText, { textAlign: 'center', fontFamily: 'foco-regular' });
const MySectionFooterLink = Object.assign({}, AmplifyTheme.sectionFooterLink, { color: '#003477', fontFamily: 'foco-lt' });
const MySectionFooterLinkDisabled = Object.assign({}, AmplifyTheme.sectionFooterLinkDisabled, { color: 'black', fontFamily: 'foco-lt' });
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#003477', borderRadius: 25,  width: '50%', alignSelf: "center", padding: 8 });
const MyButtonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, { backgroundColor: '#8da4bf', borderRadius: 25, width: '50%', alignSelf: "center", padding: 8 });
const MyInput = Object.assign({}, AmplifyTheme.input, { backgroundColor: 'white', borderWidth: 0, borderRadius: 25, padding: 8, paddingLeft: 16, paddingRight: 16 });
const MyInputLabel = Object.assign({}, AmplifyTheme.inputLabel, { fontFamily: 'foco-regular', color:'#606060' });
const MyTheme = Object.assign(
  {}, 
  AmplifyTheme,
  { 
    container: MyContainer,
    section: MySection,
    sectionHeader: MySectionHeader,
    sectionHeaderText: MySectionHeaderText,    
    button: MyButton,
    buttonDisabled: MyButtonDisabled,
    input: MyInput,
    inputLabel: MyInputLabel,
    sectionFooterLink: MySectionFooterLink,
    sectionFooterLinkDisabled: MySectionFooterLinkDisabled,
  }
);

const authScreenLabels = {
  es: {
      'Reset your password': 'Recuperar Clave',
      'Username': 'E-mail',
      'Enter your username': 'Ingrese su e-mail',
      'Sign In' : 'INGRESAR',
      'Loading...' : 'Ingresando...',
      'Send' : 'Enviar',
      'Please Sign In / Sign Up' : ' ',
      'Forgot Password' : '¿Olvido su Clave?',
      'Username cannot be empty' : 'E-mail no puede estar vació',
      'Start of structure or map found where not expected' : 'Se produjo un error'
  }
};

I18n.setLanguage('es');
I18n.putVocabularies(authScreenLabels);

function AppWithAuth() {
  async function signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }

  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">      
          <Stack.Screen name="Home" component={Home} options={{
          //headerShown: false, // Ocultar el HEADER
          headerTitle: props => <View></View>,
          headerRight: () => (
            <ButtonLogout signOut={signOut} />
          ),
          headerStyle: {
            backgroundColor: '#003477',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Viaje" component={DrawerNavigator} options={{ headerShown: false }}/>
          {/*<Stack.Screen name="MainStack" component={MainStack} options={{ headerShown: false }}/>*/}
        </Stack.Navigator>
    </NavigationContainer>
  );
}
function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Participantes" component={ParticipantesStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Presentaciones" component={PresentacionesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Hoteles" component={Hoteles} options={{ headerShown: false }}/>
      <Stack.Screen name="Información" component={Informacion} options={{ headerShown: false }}/>
      <Stack.Screen name="Agenda" component={AgendaStack} options={{ headerShown: false }}/>
      <Stack.Screen name="Encuesta" component={Encuesta} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default withAuthenticator(
  AppWithAuth,
  false,
  [
    <Logo width='60%' height='50%' />,
    <Greetings 
      inGreeting={(username) => 'Hello ' + username}
      outGreeting="Please sign in..."
    />,
    <SignIn />,
    <NoSignUp override={'SignUp'}/>,
    <RequireNewPassword />,
    <ForgotPassword/>,
    <Loading/>
  ], 
  null, 
  MyTheme
);
