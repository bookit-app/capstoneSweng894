
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Profile from '../../page/account/Profile'
import PreferenceNavigator from '../../navigation/stack/PreferenceNavigator'

/**
 * Profile stock
 */
const ProfileNavigator = createStackNavigator(
    {
        "Profile": Profile,
        "Preference": PreferenceNavigator
    },{
        headerMode: 'none'
    }
);

export default ProfileNavigator;