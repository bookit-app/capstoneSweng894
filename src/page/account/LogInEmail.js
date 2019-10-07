import React from 'react'
import { 
    View, 
    Text, 
    ScrollView,
    AsyncStorage
} from 'react-native'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { auth } from '../../config/firebaseConfig'
import AccountImage from '../../components/account/AccountImage'
import AccountLogIn from '../../components/account/AccountLogIn'
import AccountOptions from '../../components/account/AccountOptions'
import { Spinner } from '../../components/common'

class LogInEmail extends React.Component {
    // static navigationOptions = {
    //     title: 'Login With Email',
    // };

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

        auth.signInWithEmailAndPassword(email, password)
            .then(this.onLogInSuccess.bind(this))
            .catch(this.onLogInFail.bind(this))
    }

    onLogInSuccess = async () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        }); 
        
        await AsyncStorage.setItem('CurrentUserId', auth.currentUser.uid)

        this.props.navigation.navigate('Profile')
    }

    onLogInFail(){
        this.setState({
            error: 'Authentication Failed',
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
                buttonStyle={LogInBtnSty.buttonStyle}
                textStyle={LogInBtnSty.textStyle}
            >
                {'Login'}
            </ButtonCustom>
        )
    }

    render(){
        return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.imgSty}>
                <AccountImage
                    imageHolder={false}
                    placeholder={require('../../image/Placeholder150.png')}
                />
            </View>
            <AccountLogIn
                emailValue={this.state.email}
                emailOnChange={email => this.setState({ email })}
                pdValue={this.state.password}
                pdOnChange={password => this.setState({ password })}
            />   
            <View style={styles.Column}>
                <Text style={ErrorText.errorTextStyle}>
                    {this.state.error}
                </Text>
                {this.onLogInButton()}
                <ButtonCustom
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    buttonStyle={ClearBtnSty.btnBtmStyle}
                    textStyle={ClearBtnSty.txtBtnStyle}
                >
                    {'Forgot Password?'}
                </ButtonCustom>
                <ButtonCustom
                    onPress={() => this.props.navigation.navigate('LogIn with Social')}
                    buttonStyle={ClearBtnSty.btnBtmStyle}
                    textStyle={ClearBtnSty.txtBtnStyle}
                >
                    {'Login with Social Account'}
                </ButtonCustom>
            </View>
            <View>
                <AccountOptions
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    buttonStyle={BottomBtnSty.btnBtmStyle}
                    textStyle={BottomBtnSty.txtBtnStyle}
                    viewStyle={BottomBtnSty.bottomView}
                    children={'Create an Account'}
                />
            </View>
        </ScrollView>

        )
    }
}

const styles = {
    scrollView: {
      marginHorizontal: 20,
    },
    imgSty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
      }
}

const ClearBtnSty = {
    btnBtmStyle: {
        textColor: 'black',
        flex: 1
    },
    txtBtnStyle: {
        color: 'gray'
    },
    bottomView:{
        paddingUp: 10,
        alignItems: 'center',
        borderBottomColor: 'color',
        borderBottomWidth: 2,
        marginBottom: 20,
      }
}

const ErrorText = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
}

const LogInBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 5,
      paddingBottom: 5,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor:'#4FA6FD' ,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      width: 250, 
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

const BottomBtnSty ={
    btnBtmStyle: {
        textColor: 'black',
        flex: 1
    },
    txtBtnStyle: {
        color: 'gray'
    },
    bottomView:{
        paddingUp: 10,
        alignItems: 'center',
        borderTopColor: 'color',
        borderTopWidth: 2,
        marginBottom: 20,
        }
}

export default LogInEmail