import React from 'react'
import { 
    AsyncStorage
} from 'react-native'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { auth } from '../../config/firebaseConfig'
import { Spinner } from '../../components/common'
import LogInBtn from '../../components/styles/LogInBtn'
import AccountForm from '../../components/account/AccountForm'

/**
 * Sign-Up page with Email/Password Only
 */
class SignUpEmail extends React.Component {
    state ={
        email:'',
        password: '',
        uid: '',
        error: '', 
        loading: false 
    }

    onLogInSub(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true})

        auth.createUserWithEmailAndPassword(email,password)
            .then((data) => this.onLogInSuccess(data.user))
            .catch(this.onLogInFail.bind(this))
    }

    onLogInSuccess = async (user) => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        }); 
        
        await AsyncStorage.setItem('CurrentUserId', user.uid)

        this.props.navigation.navigate('Profile', {
            'CurrentUserId': user.uid,
            'email':user.email
        })
    }

    onLogInFail(){
        this.setState({
            error: 'Creation Failure',
            loading: false
        })
    }

    onLogInButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (    
            <ButtonCustom
                onPress={this.onLogInSub.bind(this)}
                buttonStyle={LogInBtn.buttonStyle}
                textStyle={LogInBtn.textStyle}
            >
                {'Sign-Up'}
            </ButtonCustom>
        )
    }
    render(){
        return(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../image/Placeholder150.png')}
                image={require('../../image/Placeholder150.png')}
                email={this.state.email}
                onEmailChge={email => this.setState({ email })}
                password={this.state.password}
                onPasswordChge={password => this.setState({ password })}
                error={this.state.error}
                onLogInButton={() => this.onLogInButton()}
                fgLogic={false}
                onOtherAccountOptionClick={() => this.props.navigation.navigate('Login')}
                otherAccountTxt={'Already have an Account? Login'}            
            />
        )
    }
}

export default SignUpEmail