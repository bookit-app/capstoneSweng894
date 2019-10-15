import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import PreferencePage1 from '../../page/preference/PreferencePage1'
import PreferencePage2 from '../../page/preference/PreferencePage2'

/**
 * Preference Navigatior
 */
const PreferenceNavigator = createStackNavigator(
    {
        "Pref1": PreferencePage1,
        "Pref2": PreferencePage2
    },
    {
        initialRouteName: "Pref1"
    }
)

export default PreferenceNavigator