import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import PreferencePage1 from '../../../page/preference/PreferencePage1'
import PreferencePage2 from '../../../page/preference/PreferencePage2'

/**
 * Profile - Preference Navigatior
 */
const ProfilePrefNavigator = createStackNavigator(
    {
        "Pref1": PreferencePage1,
        "Pref2": PreferencePage2
    },
    {
        initialRouteName: "Pref1",
        headerMode: 'none'
    }
)

export default ProfilePrefNavigator