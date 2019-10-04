/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'

import Loading from './components/account/Loading'
import Profile from './components/account/Profile'

import LogInOptions from './page/account/LogInOptions'
import LogInEmail from './page/account/LogInEmail'
import LogInSocial from './page/account/LogInSocial'

import ForgotPassword from './page/account/ForgotPassword'

import SignUpOptions from './page/account/SignUpOptions'
import SignUpEmail from './page/account/SignUpEmail'
import SignUpSocial from './page/account/SignUpSocial'

import Login from './components/account/Login'

const DrawerNav = createDrawerNavigator({
  "Login": {
    screen: LogInOptions,
  },
  "LogIn with Email": {
    screen: LogInEmail
  },
  "LogIn with Social":{
    screen: LogInSocial
  },
  ForgotPassword:{
    screen: ForgotPassword
  },
  "SignUp": {
    screen: SignUpOptions
  },
  "Sign Up With Email": {
    screen: SignUpEmail
  },
  "Sign Up With Social": {
    screen: SignUpSocial
  },
  LogIn: {
    screen: Login
  },
  Profile: {
    screen: Profile
  }
})

export default createAppContainer(DrawerNav)
