import React from 'react'
import AccountLogOut from '../../components/account/AccountLogOut'

/**
 * Sign-Out button in navigation bar
 */
class SignOutNav extends React.Component {
    render(){
        console.log(this.props);
        
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