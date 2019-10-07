import React from 'react'
import { View } from 'react-native'
import AccountLogOut from '../../components/account/AccountLogOut'

class SignOutNav extends React.Component {
    render(){
        return (
            <View style={navStyles.navBarSty}>
                <AccountLogOut />
            </View>
        )
    }
}

const navStyles = {
    navBarSty: {
        margin: 5
    }
}
export default SignOutNav