import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Participantes from '../screens/Participantes';
import UserDetail from '../screens/UserDetail';

const RootStack = createNativeStackNavigator();

const ParticipantesStack = ({route}) => {
  return (
    <RootStack.Navigator initialRouteName='ParticipantesList' screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="ParticipantesList" component={Participantes} initialParams={{...route.params}}/>
      <RootStack.Screen name="Detail" component={UserDetail}/>
    </RootStack.Navigator>
  )
}

export default ParticipantesStack