import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import PreferencePage1 from '../../../page/preference/PreferencePage1'
import PreferencePage2 from '../../../page/preference/PreferencePage2'
import SkipNav from '../../../components/preference/SkipNav'

/**
 * Profile - Preference Navigatior
 */
const SettingPrefNavigator = createStackNavigator(
    {
        "SettingPref1": PreferencePage1,
        "SettingPref2": PreferencePage2
    },
    {
        initialRouteName: "SettingPref1",
        headerMode: 'none'
    }
)

export default SettingPrefNavigator