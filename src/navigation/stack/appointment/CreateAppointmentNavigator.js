import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import CreateAppointment from '../../../page/appointment/CreateAppointment'

import LogOutNav from '../../navButtons/LogOutNav'

/**
 * Appointment Creation Navigator - Tab
 */
const CreateAppointmentNavigator = createStackNavigator(
    {
       Create: CreateAppointment
    }, { 
        defaultNavigationOptions:{
            headerRight: <LogOutNav />
        }
    }
)

export default CreateAppointmentNavigator