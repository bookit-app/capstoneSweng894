import React from 'react'
import { View } from 'react-native'
import AccountLogOut from '../../components/account/AccountLogOut'

/**
 * Sign-Out button in navigation bar
 */
class SignOutNav extends React.Component {
    render(){
        return (
            <AccountLogOut 
                style={navStyles.navBarSty}
            />
        )
    }
}

const navStyles = {
    navBarSty: {
        margin: 5
    }
}
export default SignOutNav