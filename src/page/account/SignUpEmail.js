import React from 'react'
import { connect } from 'react-redux'
import validation from '../../validation'
import utilites from '../../utilites'
import AccountSignUpForm from '../../components/account/AccountSignUpForm'
import { signUp } from '../../store'
import { auth, preference } from '../../actions'

/**
 * Sign-Up page with Email/Password Only
 */
class SignUpEmail extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            email:'',
            password: '',
            emailError: '',
            passwordError: '',
            uid: '',
            error: '', 
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
        //  console.log('UNSAFE_componentWillReceiveProps', nextProps.loading);
        //  console.log('UNSAFE_componentWillReceiveProps', nextProps.error);
         
         if(!nextProps.loading && nextProps.error){
            this.onLogInFail(nextProps.error.message)
            this.props.settingPref(false)
         } else {
            this.onLogInSuccess('S')
            this.props.settingPref(false)
         }
     }

    render(){
        return(
            <AccountSignUpForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.verifyEmail( email )}
                errorEmail={this.state.emailError}
                password={this.state.password}
                onPasswordChge={password => this.verifyPassword( password )}
                errorPassword={this.state.passwordError}
                error={this.props.error.message}
                onLogInButton={() => this.onLogInButton('S')}
                fgLogic={false}
                onOtherAccountOptionClick={() => this.onOtherAccount("L")}
                otherAccountTxt={'Already have an Account? Login'}            
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (user) => dispatch(auth.userSet(user)),
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        signingUp: (email,password) => dispatch(signUp(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpEmail)