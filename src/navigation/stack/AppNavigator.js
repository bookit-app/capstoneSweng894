
import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Profile from '../../page/account/Profile'
import Home from '../../page/general/Home'
import AppMenu from '../drawer/AppMenu'

/**
 * Application menu accessible page
 */
const AppNavigator = createDrawerNavigator(
    {
        "Home": Home,
        "Profile": Profile
    },
    {
        initialRouteName: "Home",
        contentComponent: AppMenu,
    }
);

export default AppNavigator;