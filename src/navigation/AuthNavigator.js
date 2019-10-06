import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../page/account/LogInOptions'
import SignUpOptions from '../page/account/SignUpOptions'
import SignOut from '../page/account/SignOut'

const AuthNavigator = createStackNavigator(
    { 
       LogIn: {screen: LogInOptions},
       SignUp: { screen: SignUpOptions},
       SignOut: { screen: SignOut}, 
    },
    {
        headerMode: 'none'
    }
);

export default AuthNavigator