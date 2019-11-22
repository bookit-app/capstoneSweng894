import React from 'react'
import { connect } from 'react-redux'
import validation from '../../validation'
import utilites from '../../utilites'
import AccountForm from '../../components/account/AccountForm'
import { logIn } from '../../store'

import { auth, preference } from '../../actions'

/**
 * Log-In page with Email/Password Only
 */
class LogInEmail extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            error: '',
            uid: '',
            loading: false 
        }

        this.verifyEmail = validation.verifyEmail.bind(this)
        this.verifyPassword = validation.verifyPassword.bind(this)
        this.onOtherAccount = utilites.onOtherAccount.bind(this)
        this.onLogInButton = utilites.onLogInButton.bind(this)
        this.onLogInSuccess = utilites.onLogInSuccess.bind(this)
        this.onLogInFail = utilites.onLogInFail.bind(this)
        this.onLogInSub = utilites.onLogInSub.bind(this)
     }

     UNSAFE_componentWillReceiveProps(nextProps){
         if(!nextProps.loading && nextProps.error){
             this.onLogInFail(nextProps.error.message)
             this.props.userAuthError('')
         } else {
             if(!nextProps.error && nextProps.userId){
                this.onLogInSuccess('L')
             } else {
                this.props.userAuthError('')
             }
         }
     }

    render(){
        return(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.verifyEmail( email )}
                errorEmail={this.state.emailError}
                password={this.state.password}
                onPasswordChge={password => this.verifyPassword( password )}
                errorPassword={this.state.passwordError}
                error={this.state.error}
                onLogInButton={() => this.onLogInButton('L')}
                fgLogic={true}
                onForgotClick={() => this.props.navigation.navigate('ForgotPassword')}
                forgotTxt={'Forgot Password?'}
                onOtherAccountOptionClick={() => this.onOtherAccount("S")}
                otherAccountTxt={'Create an Account'}
            />  
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('mapToProps', state.auth);
    
    return {
        error: state.auth.error,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (user) => dispatch(auth.userSet(user)),
        userAuthError: (error) => dispatch(auth.userAuthError(error)),
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        loggingIn: (email, password) => dispatch(logIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInEmail)