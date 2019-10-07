import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../../page/account/LogInOptions'
import SignUpOptions from '../../page/account/SignUpOptions'

import LogInEmail from '../../page/account/LogInEmail'
import LogInSocial from '../../page/account/LogInSocial'

import ForgotPassword from '../../page/account/ForgotPassword'

import SignUpProfile from '../../page/account/SignUpProfile'
import SignUpSocial from '../../page/account/SignUpSocial'

import SignOut from '../../page/account/SignOut'

import LogoNav from '../navButtons/LogoNav'
import SignOutNav from '../navButtons/SignOutNav'

const AuthNavigator = createStackNavigator(
    {
        "LogIn with Email": LogInEmail,
        "LogIn with Social": LogInSocial,
        "ForgotPassword": ForgotPassword,
        "SignUp": SignUpOptions,
        "Sign Up With Email": SignUpProfile,
        "Sign Up With Social":  SignUpSocial,
        "LogOut": SignOut,
        "Login": LogInOptions
    }, {
        initialRouteName: "Login",       
        defaultNavigationOptions : {
            headerLeft: <LogoNav />,
            headerRight: <SignOutNav />
        }
    }
);

export default AuthNavigator