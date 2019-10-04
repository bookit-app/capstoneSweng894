import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { ButtonCustom } from '../../components/common/ButtonCustom'
import { Spinner } from '../../components/common/Spinner'
import { auth } from '../../config/firebaseConfig'
import api from '../../api'
import AccountImageUpload from '../../components/account/AccountImageUpload'
import AccountDetail from '../../components/account/AccountDetails'
import AccountOptions from '../../components/account/AccountOptions'
import DateTimePicker from '@react-native-community/datetimepicker'

class SignUpProfile extends React.Component {
    state = {
        firstName: '',
        lastName:'',
        email:'',
        password: '',
        telephone:'',
        dob:'',
        gender:'',
        address:'',
        city:'',
        state_:'',
        error: '', 
        isSocial: false,
        isProvide: false,
        loading: false 
    }

    onProfileSub(){
        const { firstName, lastName, email, password, gender, isSocial, dob,  telephone, isProvide } = this.state

        auth.createUserWithEmailAndPassword(email, password)
            .then((user) =>{      
                const payload = {
                    "uid": user.user.uid,
                    "firstName": firstName,
                    "lastName": lastName,
                    "gender": gender,
                    "isSocial": isSocial,
                    "birthday": dob,
                    "isProvider": isProvide,
                    "phoneNumber": telephone
                }

                api.insertProfile(payload)
                .then(this.onProfileCreateSucccess.bind(this))
                .catch(this.onProfileCreateFailed.bind(this))
            })
            .catch(this.onSignUpCreateFailed.bind(this))
    }

    onSignUpCreateFailed(){
        this.setState({
            error: 'Accountion Creation Failed',
            loading: false
        })
    }

    onProfileCreateSucccess(){
        this.setState({
            firstName: '',
            lastName:'',
            email:'',
            password: '',
            telephone:'',
            dob:'',
            gender:'',
            address:'',
            city:'',
            state_:'',
            error: '', 
            isSocial: false,
            isProvide: false,
            loading: false 
        })
    }

    onProfileCreateFailed(){
        this.setState({
            error: 'Profile Creation Failed',
            loading: false
        })
    }

    onRenderProfileButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (    
            <ButtonCustom
                onPress={this.onProfileSub.bind(this)}
                buttonStyle={LogInBtnSty.buttonStyle}
                textStyle={LogInBtnSty.textStyle}
            >
                {'Submit'}
            </ButtonCustom>
        )
    }

    onIsProviderChge(index){
        console.log(index);
        
        // Constant.Gender.map( (v,i) => {
        //     if(index === i){
        //         this.setState({
        //             gender: Constant.Gender[index].value
        //         })
        //     }
        // })
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <AccountImageUpload
                    image={require('../../image/Placeholder150.png')}
                />
                <AccountDetail
                    Creation={true}
                    firstName={this.state.firstName}
                    onFirstNameChge={firstName => this.setState({ firstName })}
                    lastName={this.state.lastName}
                    onLastNameChge={lastName => this.setState({ lastName })}
                    email={this.state.email}
                    onEmailChge={email => this.setState({ email })}
                    password={this.state.password}
                    onPasswordChge={password => this.setState({ password })}
                    telephone={this.state.telephone}
                    onTelephoneChge={telephone => this.setState({ telephone })}
                    dob={this.state.dob}
                    ondobChge={dob => this.setState({ dob })}
                    gender={this.state.gender}
                    onGenderChge={gender => this.setState({ gender })}
                    address={this.state.address}
                    onAddressChge={ address => this.setState({ address })}
                    city={this.state.city}
                    onCityChge={city => this.setState({ city })}
                    state={this.state.state_}
                    onStateChge={state_ => this.setState({ state_ })}
                />
                <View style={styles.Column}>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    {this.onRenderProfileButton()}
                    <AccountOptions
                        onPress={() => this.props.navigation.navigate('Login')}
                        buttonStyle={BtnButton.btnBtmStyle}
                        textStyle={BtnButton.txtBtnStyle}
                        viewStyle={BtnButton.bottomView}
                        children={'Already have an Account? Login'}
                    />  
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      },
    Row:{
        display: 'flex',
        flewDirection: 'row',
    },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
    },
    scrollView: {
      marginHorizontal: 20,
    },
}

const BtnButton ={
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
        marginTop: 20,
      }
}

const LogInBtnSty = {
    textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,        
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor:'#4FA6FD' ,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 5,
      marginRight: 5,
      width: 250, 
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

export default SignUpProfile