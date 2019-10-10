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
import { createStore } from 'redux'

import RootStack from './navigation/stack/RootStack'
import reducer from './reducer'

const store = createStore(reducer)

const Navigation = createAppContainer(RootStack)

const App = () => {
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App