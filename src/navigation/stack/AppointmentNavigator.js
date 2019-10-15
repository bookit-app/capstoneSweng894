import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'

import ProfileNavigator from '../../navigation/stack/ProffileNavigator'

import AppointmentDashboard from '../../page/appointment/AppointmentDashboard'
import AppointmentList from '../../page/appointment/AppointmentList'
import CreateAppointment from '../../page/appointment/CreateAppointment'
import ReviewAppointment from '../../page/appointment/ReviewAppointment'

/**
 * Appointment Navigatior
 */
const AppointmentNavigation = createStackNavigator(
    {
        Dashboard: AppointmentDashboard,
        List: AppointmentList,
        Reivew: ReviewAppointment
    }
)

const CreateAppointmentNavigation = createStackNavigator(
    {
       Create: CreateAppointment
    }
)

const AppointmentTab = createBottomTabNavigator(
    {
        Main: {
            screen: AppointmentNavigation,
            navigationOptions: {
                title: 'Main',
                tabBarIcon: ({ tintColor }) => {
                    <Icon
                        name="eye"
                        size={17}
                        color={tintColor}
                    />
                }
            }
        },
        Create: {
            screen: CreateAppointmentNavigation,
            navigationOptions: {
                title: 'Create',
                tabBarIcon: ({ tintColor }) => {
                    <Icon
                        name="plus-square"
                        size={17}
                        color={tintColor}
                    />
                }
            }
        },
        Profile: {
            screen: ProfileNavigator,
            navigationOptions: {
                title: 'Profile',
                tabBarIcon: ({ tintColor }) =>{
                    <Icon
                        name="user"
                        size={17}
                        color={tintColor}
                    />
                }
            }
        }
        
    }
)

export default createStackNavigator({ AppointmentTab }, { headerMode: "none"  })