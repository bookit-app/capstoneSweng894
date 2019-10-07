
import React from 'react'

import { createStackNavigator  } from 'react-navigation-stack'

import Profile from '../../page/account/Profile'
import Home from '../../page/general/Home'

import LogoNav from '../navButtons/LogoNav'
import SignOutNav from '../navButtons/SignOutNav'

const AppNavigator = createStackNavigator(
    {
        "Profile": Profile,
        "Home": Home
    },
    {
       initialRouteName: "Profile",
       defaultNavigationOptions : {
        headerLeft: <LogoNav />,
        headerRight: <SignOutNav />
    }
    }
);

export default AppNavigator;