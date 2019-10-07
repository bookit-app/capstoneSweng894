import { createStackNavigator  } from 'react-navigation-stack'

import LogInOptions from '../../page/account/LogInOptions'
import SignUpOptions from '../../page/account/SignUpOptions'

const AuthNavigator = createStackNavigator(
    { 
       LogIn: {screen: LogInOptions},
       SignUp: { screen: SignUpOptions},
    },
    {
        headerMode: 'none'
    }
);

export default AuthNavigator