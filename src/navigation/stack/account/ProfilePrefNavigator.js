import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import ProfilePref1 from '../../../page/preference/ProfilePref1'
import ProfilePref2 from '../../../page/preference/ProfilePref2'

/**
 * Profile - Preference Navigatior
 */
const ProfilePrefNavigator = createStackNavigator(
    {
        "Pref1": ProfilePref1,
        "Pref2": ProfilePref2
    },
    {
        initialRouteName: "Pref1",
        headerMode: 'none'
    }
)

export default ProfilePrefNavigator