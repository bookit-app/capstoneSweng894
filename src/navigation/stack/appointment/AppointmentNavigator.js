import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AppointmentDashboard from '../../../page/appointment/AppointmentDashboard'
import AppointmentReview from '../../../page/appointment/AppointmentReview'

import {LogOutNav, LogoNav} from '../../navButtons'

/**
 * Appointment Navigatior
 * 
 * Has access to AppointmentDeashboard, Appointment List (new Appointments), and
 * Review Appointment (old Appointments)
 */
const AppointmentNavigator = createStackNavigator(
    {
        Dashboard: AppointmentDashboard,
        Reivew: AppointmentReview
    }, { 
        defaultNavigationOptions: {
            headerRight: <LogOutNav />
        }
    }
)

export default AppointmentNavigator