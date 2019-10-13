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
        AuthLoader: Loader,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'AuthLoader'
    }
)

export default RootStack