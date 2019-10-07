/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createDrawerNavigator } from 'react-navigation-drawer'

import Loader from './page/general/Loader'

import AppNavigator  from './navigation/stack/AppNavigator'
import AuthNavigator  from './navigation/stack/AuthNavigator'

  export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loader,
    App: AppNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth'
  }
))

