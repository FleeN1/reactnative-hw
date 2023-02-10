import React, { useCallback } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from "./router";





export default function App() {
  const [loadFonts] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })

   const onLayout = useCallback(async () => {
    if (loadFonts) {
      await SplashScreen.hideAsync()
    }
  }, [loadFonts])

  if (!loadFonts) {
    return null
  }
  
  const routing = useRoute(true)
  
  return (
    <NavigationContainer onLayout={onLayout}>
      {routing}
    </NavigationContainer>)
}
