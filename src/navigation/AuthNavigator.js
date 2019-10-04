import { createStackNavigator  } from 'react-navigation'

import Login from '../components/account/Login'

const AuthNavigator = createStackNavigator(
    { 
       LogIn: {screen: Login},
    },
    {
        headerMode: 'none'
    }
);

export { AuthNavigator }