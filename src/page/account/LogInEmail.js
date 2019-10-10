import React from 'react'
import { connect } from 'react-redux'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { Spinner } from '../../components/common'
import AccountForm from '../../components/account/AccountForm'
import * as EmailValidator from 'email-validator'
import firebase from 'firebase'
import { userSet } from '../../actions/auth-action'
import LogInBtn from '../../components/styles/LogInBtn'

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
            uid: '',
            errorAnth: '', 
            loading: false 
        }

        this.onLogInSub = this.onLogInSub.bind(this)
     }

    onLogInSub(){
        const { email, password, emailError, passwordError } = this.state;

        if(!emailError && !passwordError && email && password){
            // alert('We good to submit')
            
            this.setState({ errorAnth: '', loading: true})

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((data) => this.onLogInSuccess(data.user))
                .catch(this.onLogInFail.bind(this))
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
            // alert('Please find the errors before tyring to submit')
        }
    }

    onLogInSuccess = async (user) => {
        this.setState({
            email: '',
            password: '',
            errorAnth: '',
            loading: false
        }); 
        
        // await AsyncStorage.setItem('CurrentUserId', user.uid)
        this.props.userSet(user)
        this.props.navigation.navigate('Profile')
    }

    onLogInFail(){
        this.setState({
            errorAnth: 'Authentication Failed',
            loading: false
        })
    }

    onLogInButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (    
            <ButtonCustom
                onPress={() => {this.onLogInSub()}}
                buttonStyle={LogInBtn.buttonStyle}
                textStyle={LogInBtn.textStyle}
            >
                {'Log-In'}
            </ButtonCustom>
        )
    }

    validEmail(email){        
        this.setState({
            email: email
        })

        // console.log("Email: "+email);
        // console.log("Valid Email: " + EmailValidator.validate(email))
        // console.log("valid lenght: " + (email.length > 1));
        
        if(EmailValidator.validate(email) && email.length > 1) {
            this.setState({ emailError: ''})
        } else {
            this.setState({ emailError: 'Email is not valid. Please re-enter your'})
        }
    }

    validPassword(password){
        let reg = /^[a-zA-Z0-9_+-]{4,10}$/

        this.setState({ 
            password: password 
        })

        // console.log("Reg Status: "+reg.test(password));
        // console.log("Valid lenght: "+(password.length > 1));
    
        if (reg.test(password) == true && password.length > 1) {
            this.setState({ passwordError: '' })
        } else {
            this.setState({ passwordError: 'Password is not valid. Please enter a valid password' })
        }
    }

    render(){
        return(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.validEmail( email)}
                errorEmail={this.state.emailError}
                password={this.state.password}
                onPasswordChge={password => this.validPassword( password )}
                errorPassword={this.state.passwordError}
                error={this.state.errorAnth}
                onLogInButton={() => this.onLogInButton()}
                fgLogic={true}
                onForgotClick={() => this.props.navigation.navigate('ForgotPassword')}
                forgotTxt={'Forgot Password?'}
                onOtherAccountOptionClick={() => this.props.navigation.navigate('SignUp')}
                otherAccountTxt={'Create an Account'}
            />  
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (user) => dispatch(userSet(user))
    }
}

export default connect(null, mapDispatchToProps)(LogInEmail)

//https://github.com/GavinThomas1192/motoMechanicMeeKanic/blob/master/App/Containers/LoginScreen.js
//https://dev.to/lfkwtz/how-to-create-custom-forms-with-validation-and-scroll-to-invalid-logic-in-react-native-part-two-scroll-to-invalid-2ep9