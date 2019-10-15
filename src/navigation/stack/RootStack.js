import React from 'react'
import {
    createSwitchNavigator
} from 'react-navigation'

import Loader from '../../page/general/Loader'
import AppointmentNavigator from '../stack/AppointmentNavigator'
import AuthNavigator from './AuthNavigator'

/**
 * RootStack handles managing the switch navigators for
 * the supplied stacks
 */
const RootStack = createSwitchNavigator(
    {
        AuthLoader: Loader,
        App: AppointmentNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'AuthLoader'
    }
)

export default RootStack