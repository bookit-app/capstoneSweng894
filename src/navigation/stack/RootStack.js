import {
    createSwitchNavigator
} from 'react-navigation'

import Loader from '../../page/general/Loader'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

/**
 * RootStack handles managing the switch navigators for
 * the supplied stacks
 */
const RootStack = createSwitchNavigator(
    {
        AuthLoading: Loader,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'Auth'
    }
)

export default RootStack