import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from '../screens/Demo';
import DemoDetalle from '../screens/DemoDetalle';
import Participantes from '../components/svg/Participantes';


const RootStack = createNativeStackNavigator();

const DemoStack = ({route}) => {
  return (
    <RootStack.Navigator initialRouteName='Demo' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Demo" component={Demo} initialParams={{...route.params}}/>
      <RootStack.Screen name="Details" component={DemoDetalle}/>
    </RootStack.Navigator>
  )
}

export default DemoStack