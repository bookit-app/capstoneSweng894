
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Profile from '../../../page/account/Profile'
import ProfilePrefNavigator from './ProfilePrefNavigator'
import { LogOutNav } from '../../navButtons'

/**
 * Profile stock
 */
const ProfileNavigator = createStackNavigator(
    {
        "Profile": Profile,
        "Preference": ProfilePrefNavigator
    }, { 
        defaultNavigationOptions:{
            headerRight: <LogOutNav />
        }
    }
);

export default ProfileNavigator;