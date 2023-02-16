import React, { useCallback } from "react";

import { Provider } from 'react-redux'
import { store } from './redux/store'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Main from './component/Main'




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

  
  return (
    <Provider store={store}>
      <Main onLayout={onLayout} />
    </Provider>
  )
}
