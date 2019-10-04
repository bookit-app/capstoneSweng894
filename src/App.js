/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Profile from './page/account/Profile'

import LogInOptions from './page/account/LogInOptions'
import LogInEmail from './page/account/LogInEmail'
import LogInSocial from './page/account/LogInSocial'

import ForgotPassword from './page/account/ForgotPassword'

import SignUpOptions from './page/account/SignUpOptions'
import SignUpProfile from './page/account/SignUpProfile'
import SignUpSocial from './page/account/SignUpSocial'

import SignOut from './page/account/SignOut'

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
  "LogOut": {
    screen: SignOut
  },
  "SignUp": {
    screen: SignUpOptions
  },
  "Sign Up With Email": {
    screen: SignUpProfile
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
