import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import SettingPref1 from '../../../page/preference/SettingPref1'
import SettingPref2 from '../../../page/preference/SettingPref2'
import SkipNav from '../../../components/preference/SkipNav'

/**
 * Profile - Preference Navigatior
 */
const SettingPrefNavigator = createStackNavigator(
    {
        "SettingPref1": SettingPref1,
        "SettingPref2": SettingPref2
    },
    {
        initialRouteName: "SettingPref1",
        headerMode: 'none'
    }
)

export default SettingPrefNavigator