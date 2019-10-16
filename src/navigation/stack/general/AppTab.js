import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from 'react-native-vector-icons/FontAwesome5'

import ProfileNavigator from '../account/ProfileNavigator'
import AppointmentNavigator from '../appointment/AppointmentNavigator'

import CreateAppointmentNavigator from '../appointment/CreateAppointmentNavigator'


/**
 * App Tab Navigator 
 */
const AppTab = createBottomTabNavigator(
    {
        Main: {
            screen: AppointmentNavigator,
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
            screen: CreateAppointmentNavigator,
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
    },
    {
        swipeEnabled: true,
    } 
)

export default createStackNavigator({ AppTab }, { headerMode: "none"  })