import {
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation'

import Loading from '../components/account/Loading'
import Profile from '../components/account/Profile'

const HomeStackNavigator = createStackNavigator({
    Home: {screen: Loading}
})

const AppNavigator = createDrawerNavigator({
    Home: { screen: HomeStackNavigator},
    Profile: { screen: Profile}
}, {
    contentComponent: menubar,
    drawerWidth: widthPercentageToDp('100%'),
    initialRouteName: 'Home'
})

export { AppNavigator }

