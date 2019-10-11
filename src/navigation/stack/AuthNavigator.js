import React from 'react'
import firebase from 'firebase'
import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../../page/account/LogInOptions'
import SignUpOptions from '../../page/account/SignUpOptions'
import LogInEmail from '../../page/account/LogInEmail'
import ForgotPassword from '../../page/account/ForgotPassword'
import SignUpEmail from '../../page/account/SignUpEmail'

import AccountLogOut from '../../components/account/AccountLogOut'

import LogoNav from '../navButtons/LogoNav'
import SignOutNav from '../navButtons/SignOutNav'

/**
 * Auth menu accessible page
 */
const AuthNavigator = createStackNavigator(
    {
        "LogIn with Email": LogInEmail,
        "ForgotPassword": ForgotPassword,
        "SignUp": SignUpOptions,
        "Sign Up With Email": SignUpEmail,
        "Login": LogInOptions,
        "LogOut": AccountLogOut
    }, {
        initialRouteName: "Login",       
        defaultNavigationOptions : {
            headerLeft: <LogoNav />,
            headerRight: <SignOutNav signOut={firebase.auth().signOut()} />
        }
    }
);

export default AuthNavigator