
import React from 'react'
import firebase from 'firebase'
import { auth } from '../config/firebaseConfig'
import { ButtonCustom, Spinner } from '../components/common'
import LogInBtn from '../components/styles/LogInBtn'

/**
 * On click handler for the Other account button that
 * either routes to Login or Signup depending on the auth value
 * @param {*} type - L for Log-In or other for Sign-Up 
 */ 
function onOtherAccount(type){
    this.setState({
        email:'',
        password: '',
        emailError: '',
        passwordError: '',
        uid: '',
        error: '', 
        loading: false
    }); 

    this.props.navigation.navigate(type === 'L'?'Login': 'SignUp')
}

/**
 * On click button that launches the On Log In function 
 * with a Log-In or Sign-up api call
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInButton(type){
    if(this.state.loading){
        return <Spinner size="small" />
    }

    return (    
        <ButtonCustom
            onPress={() => this.onLogInSub(type)}
            buttonStyle={LogInBtn.buttonStyle}
            textStyle={LogInBtn.textStyle}
        >
            {type === 'L'?'Log-In': 'Sign-Up'}
        </ButtonCustom>
    )
}

/**
 * On success handler from api which clears all the state
 * values and routes to the profile and dipatches user information
 * to redux
 * @param {*} type - L for Log-In or other for Sign-Up
 */
async function onLogInSuccess(user){
    this.setState({
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        uid: '',
        error: '', 
        loading: false
    }); 

    this.props.navigation.navigate('Profile')
}

/**
 * On Failure handler from api which sets error message after failing
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInFail(error){
    this.setState({
        error: error.message,
        loading: false
    })
}

/**
 * On click handler that either create or logs into a firebase account
 * @param {*} type - L for Log-In or other for Sign-Up
 */
function onLogInSub(type){
    const { email, password, emailError, passwordError } = this.state;

    if(!emailError && !passwordError && email && password){            
        this.setState({ error: '', loading: true})
        
        console.log('onLogInSub');

        if(type === 'L'){
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((data) => {
                    var user = data.user;
                    this.onLogInSuccess(user);
                })
                .catch((error) => {
                    this.onLogInFail(error);
                    console.log(error);
                })
        } else {
            auth.createUserWithEmailAndPassword(email,password)
                .then((data) => {
                    var user = data.user;
                    this.onLogInSuccess(user);
                })
                .catch((error) => {
                    this.onLogInFail(error);
                    console.log(error);
                })
        }
    } else {
        if(!email){
            this.setState({
                emailError: 'Please provide email'
            })
        }

        if(!password){
            this.setState({
                passwordError: 'Please provide password'
            })
        }
    }
}

export default {
    onOtherAccount,
    onLogInButton,
    onLogInSuccess,
    onLogInFail,
    onLogInSub
}