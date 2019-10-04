import React from 'react'
import { View, Text } from 'react-native'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { auth } from '../../config/firebaseConfig'
import AccountImage from '../../components/account/AccountImage'
import AccountLogIn from '../../components/account/AccountLogIn'
import AccountOptions from '../../components/account/AccountOptions'
import { Spinner } from '../../components/common'


class LogInEmail extends React.Component {
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

    onLogInSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });

        this.props.navigation.navigate('Loading')
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
        <View>
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
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                {this.onLogInButton()}
                <ButtonCustom
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    buttonStyle={styles.btnBtmStyle}
                    textStyle={styles.txtBtnStyle}
                >
                    {'Forgot Password?'}
                </ButtonCustom>
                <ButtonCustom
                    onPress={() => this.props.navigation.navigate('LogInSocial')}
                    buttonStyle={styles.btnBtmStyle}
                    textStyle={styles.txtBtnStyle}
                >
                    {'Login with Social Account'}
                </ButtonCustom>
            </View>
            <View>
                <AccountOptions
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    buttonStyle={styles.btnBtmStyle}
                    textStyle={styles.txtBtnStyle}
                    viewStyle={styles.bottomView}
                    children={'Create an Account'}
                />
            </View>
        </View>

        )
    }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    },
    imgSty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
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

export default LogInEmail