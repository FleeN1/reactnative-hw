import React, { useState } from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from "./Screens/LoginScreen";

SplashScreen.preventAutoHideAsync()



const loadFonts = async () => {
  await Font.loadAsync({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}


export default function App() {
  const [isReady, setIsReady] = useState(false)


  if (!isReady) {
    return (
      <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
    )
  }

  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen /> 
    </>

  )
}
