import React from 'react'
import validation from '../../validation'
import utilites from '../../utilites'
import { Spinner, Button, ButtonCustom } from '../../components/common'
import { AccountForgotPassword } from '../../components/account'
import { NavigationActions } from 'react-navigation'

import LogInBtn from '../../components/styles/LogInBtn.styles'

/**
 * Forgot password page
 */
class ForgotPassword extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigateAction)
    }

    constructor(props){
        super(props)

        this.state ={
            email: '',
            emailError: '',
            loading: false
        }

        this.verifyEmail = validation.verifyEmail.bind(this)
        this.onPasswordResetClick = utilites.onPasswordResetClick.bind(this)
        this.onPasswordReset = utilites.onPasswordReset.bind(this)
        this.onSuccessfullLogOut = utilites.onSuccessfullLogOut.bind(this)
        this.onFailuredLogOut = utilites.onFailuredLogOut.bind(this)
    }

    render(){
        return (
            <AccountForgotPassword
                header={'Please enter your email and a email will be send to reset your password: '}
                email={this.state.email}
                emailOnChge={email => this.verifyEmail( email )}
                errorEmail={this.state.emailError}
                onPasswordReset={() => this.onPasswordResetClick()}
            />
        )
    }
}

export default ForgotPassword