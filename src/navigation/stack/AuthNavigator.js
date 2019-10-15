import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../../page/account/LogInOptions'
import SignUpOptions from '../../page/account/SignUpOptions'
import LogInEmail from '../../page/account/LogInEmail'
import ForgotPassword from '../../page/account/ForgotPassword'
import SignUpEmail from '../../page/account/SignUpEmail'
import SignUpStuff from '../../page/account/SignUpStuff'

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
        "Sign Up staff": {
            screen: SignUpStuff,
            path: 'staff/:_uid',
        }
    }
    , {
        initialRouteName: "Login"
    }
);

export default AuthNavigator