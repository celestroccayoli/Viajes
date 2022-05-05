import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AgendaScreen from '../screens/AgendaScreen';
import AgendaDetail from '../screens/AgendaDetail';



const RootStack = createNativeStackNavigator();

const AgendaStack = ({route}) => {
  return (
    <RootStack.Navigator initialRouteName='AgendaList' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="AgendaList" component={AgendaScreen} initialParams={{...route.params}}/>
      <RootStack.Screen name="Details" component={AgendaDetail}/>
    </RootStack.Navigator>
  )
}

export default AgendaStack