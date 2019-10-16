import React from 'react'
import {
    createSwitchNavigator
} from 'react-navigation'

import Loader from '../../page/general/Loader'
import AppTab from './general/AppTab'
import AuthNavigator from './account/AuthNavigator'
import SettingPrefNavigator from './account/SettingPrefNavigator'

import LogOutNav from '../navButtons/LogOutNav'
import LogoNav from '../navButtons/LogOutNav'

/**
 * RootStack handles managing the switch navigators for
 * the supplied stacks
 */
const RootStack = createSwitchNavigator(
    {
        AuthLoader: Loader,
        App: AppTab,
        Auth: AuthNavigator,
        Setting: SettingPrefNavigator
    },
    {
        initialRouteName: 'AuthLoader',
        navigationOptions: {
            headerLeft: <LogoNav />,
            headerRight: <LogOutNav />
        }
    }
)

export default RootStack