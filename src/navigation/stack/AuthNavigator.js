import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../../page/account/LogInOptions'
import SignUpOptions from '../../page/account/SignUpOptions'

import LogInEmail from '../../page/account/LogInEmail'
import SocialAccess from '../../page/account/SocialAccess'

import ForgotPassword from '../../page/account/ForgotPassword'

import SignUpEmail from '../../page/account/SignUpEmail'

import LogoNav from '../navButtons/LogoNav'
import SignOutNav from '../navButtons/SignOutNav'

const AuthNavigator = createStackNavigator(
    {
        "LogIn with Email": LogInEmail,
        "LogIn with Social": SocialAccess,
        "ForgotPassword": ForgotPassword,
        "SignUp": SignUpOptions,
        "Sign Up With Email": SignUpEmail,
        "Sign Up With Social":  SocialAccess,
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