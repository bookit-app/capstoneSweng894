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

import config from '../src/config'

class App extends React.Component {  
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