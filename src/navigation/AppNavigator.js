import { createStackNavigator  } from 'react-navigation-stack'

import Profile from '../page/account/Profile'

const AppNavigator = createStackNavigator(
    {
        Profile: {screen: Profile}
    },
    {
        headerMode: 'none'
    }
);

export default AppNavigator;