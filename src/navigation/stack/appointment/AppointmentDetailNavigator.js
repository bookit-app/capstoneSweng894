import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import CreateAppointment from '../../../page/appointment/CreateAppointment'
import SelectAppointmentDetails from '../../../page/appointment/SelectAppointmentDetails'

import {LogOutNav, LogoNav} from '../../navButtons'
import BackButton from 'react-navigation-stack/lib/typescript/views/Header/BackButtonWeb'
import { BackToCreateView } from '../../navButtons/BackToCreateView'
//import FindShopLocation from '../../../page/appointment/FindShopLocation'

/**
 * Appointment Creation Navigator - Tab
 */
const AppointmentDetailNavigator = createStackNavigator(
    {
       "Next": SelectAppointmentDetails

    }, { 
        defaultNavigationOptions:{
            headerLeft: <BackToCreateView />,
            headerRight: <LogOutNav />
        }
    }
)

export default AppointmentDetailNavigator