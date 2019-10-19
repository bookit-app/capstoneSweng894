import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import AppointmentDashboard from '../../../page/appointment/AppointmentDashboard'
import AppointmentDetail from '../../../page/appointment/AppointmentDetail'
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
        Detail: AppointmentDetail,
        Reivew: AppointmentReview
    }, { 
        defaultNavigationOptions:{
            headerLeft: <LogoNav />,
            headerRight: <LogOutNav />
        }
    }
)

export default AppointmentNavigator