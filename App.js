import { View, Text,LogBox } from 'react-native'
import React from 'react'
import { RootNavigator } from './src/Navigation/RootNavigator'

import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';



let {store, persistor} = configureStore();
const App = () => {
  LogBox.ignoreAllLogs();


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RootNavigator/>
     
      </PersistGate>
    </Provider>
  )
}

export default App

