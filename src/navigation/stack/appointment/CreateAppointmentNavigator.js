import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import CreateAppointment from '../../../page/appointment/CreateAppointment'
import {LogOutNav, LogoNav} from '../../navButtons'
//import FindShopLocation from '../../../page/appointment/FindShopLocation'

/**
 * Appointment Creation Navigator - Tab
 */
const CreateAppointmentNavigator = createStackNavigator(
    {
       Create: CreateAppointment
    }, { 
        defaultNavigationOptions:{
            headerLeft: <LogoNav />,
            headerRight: <LogOutNav />
        }
    }
)

export default CreateAppointmentNavigator