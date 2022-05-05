import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

import {Amplify } from 'aws-amplify';
import awsConfig from './src/aws-exports'

import AppWithAuth from "./AppWithAuth.jsx"

Amplify.configure(awsConfig)

Amplify.configure({...awsConfig, ...{
  Analytics: {
    disabled: true
  }
}})

LogBox.ignoreLogs(['Setting a timer']);

//Amplify.DataStore.clear()

const fetchFonts = () => {
  return Font.loadAsync({               // <- add return here
    "foco-regular": require("./assets/fonts/Foco-Regular.ttf"),
    "foco-bold": require("./assets/fonts/Foco-Bold.ttf"),
    "foco-black": require("./assets/fonts/Foco_Blk.ttf"),
    "foco-lt": require("./assets/fonts/Foco_Lt.ttf"),
  });
};

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <>
    <StatusBar style="light" backgroundColor='#003477' />
    <AppWithAuth/>
    </>
  );
}

export default App;