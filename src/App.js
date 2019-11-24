/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import RootStack from './navigation/stack/RootStack'
import NavigationService from './navigation/custom/NavigationService'

const MainApp = createAppContainer(RootStack)

import firebase from 'firebase'

class App extends React.Component {
  UNSAFE_componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYZ7GvAWY5oSIjeStq1frjOcK_8e5fxMU",
      authDomain: "bookit-app-260021.firebaseapp.com",
      databaseURL: "https://bookit-app-260021.firebaseio.com",
      projectId: "bookit-app-260021",
      storageBucket: "bookit-app-260021.appspot.com",
      messagingSenderId: "198391779269",
      appId: "1:198391779269:web:d745383df6622c1e6745ac",
      measurementId: "G-N4TG19S58F"
    })
  }
  
  render(){
    return(
      <Provider store={store}>
        <MainApp 
          ref={navigatorRef => {
            NavigationService.setTopNavigator(navigatorRef);
          }}
        />
      </Provider>
    )
  }
}

export default App