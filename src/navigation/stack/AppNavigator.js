
import React from 'react'

// import { createStackNavigator  } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Profile from '../../page/account/Profile'
import Home from '../../page/general/Home'

import LogoNav from '../navButtons/LogoNav'
// import SignOutNav from '../navButtons/SignOutNav'

/**
 * Application menu accessible page
 */
const AppNavigator = createDrawerNavigator(
    {
        "Home": Home,
        "Profile": Profile
    },
    {
       initialRouteName: "Profile",
       defaultNavigationOptions : {
        headerRight: <LogoNav />
    }
    }
);

export default AppNavigator;