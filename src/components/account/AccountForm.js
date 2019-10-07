import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import AccountImage from './AccountImage'
import AccountLogIn from './AccountLogIn'
import AccountOptions from './AccountOptions'
import { ButtonCustom } from '../common'

const ForgotPassword = (props) => {
    if(props.fgLogic){
        return ( 
            <ButtonCustom
                onPress={props.onForgotClick}
                buttonStyle={ClearBtnSty.btnBtmStyle}
                textStyle={ClearBtnSty.txtBtnStyle}
            >
                {props.forgotTxt}
            </ButtonCustom>
        )
    } else {
        return <Text />
    }
}

const AccountForm = (props) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.imgSty}>
                <AccountImage
                    imageHolder={props.imageHolder}
                    placeholder={props.placeholder}
                    image={props.image}
                />
            </View>
            <AccountLogIn
                emailValue={props.email}
                emailOnChange={props.onEmailChge}
                pdValue={props.password}
                pdOnChange={props.onPasswordChge}
            />   
            <View style={styles.Column}>
                <Text style={ErrorText.errorTextStyle}>
                    {props.error}
                </Text>
                <props.onLogInButton />
                <ForgotPassword
                   fgLogic={props.fgLogic}
                   onForgotClick={props.onForgotClick}
                   forgotTxt={props.forgotTxt}
                />
                <ButtonCustom
                    onPress={props.onSocialAccountClick}
                    buttonStyle={ClearBtnSty.btnBtmStyle}
                    textStyle={ClearBtnSty.txtBtnStyle}
                >
                    {props.socialAccountTxt}
                </ButtonCustom>
            </View>
            <View>
                <AccountOptions
                    onPress={props.onOtherAccountOptionClick}
                    buttonStyle={BottomBtnSty.btnBtmStyle}
                    textStyle={BottomBtnSty.txtBtnStyle}
                    viewStyle={BottomBtnSty.bottomView}
                    children={props.otherAccountTxt}
                />
            </View>
        </ScrollView>
    )
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

export default AccountForm