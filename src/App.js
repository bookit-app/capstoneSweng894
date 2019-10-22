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

const MainApp = createAppContainer(RootStack)

import firebase from 'firebase'

class App extends React.Component {
  UNSAFE_componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDnT6gW3pqhWWl8EHyGQgKb2bc4D6SffXU",
      authDomain: "sweng-581-capstone.firebaseapp.com",
      databaseURL: "https://sweng-581-capstone.firebaseio.com",
      projectId: "sweng-581-capstone",
      storageBucket: "sweng-581-capstone.appspot.com",
      messagingSenderId: "847848697992",
      appId: "1:847848697992:web:1b7bf75e83a0ef62dfef3d",
      measurementId: "G-D1PG6M1YMT"
    })
  }
  
  render(){
    return(
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  }
}

export default App