import React, { Component }  from 'react';
import {Icon} from 'react-native-vector-icons'
import { TouchableOpacity, Platform, Picker, Text, View } from 'react-native'
import { Button, Card, CardSection, Input, PickerList, CheckBox } from '../common';
// import { db } from '../../config/firebaseConfig'
import * as Constant from '../../constant'
import DateTimePicker from '@react-native-community/datetimepicker'
// import PhoneInput from 'react-native-phone-input'


class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    };
    
    state = { 
        firstName: '', 
        lastName: '', 
        gender: '', 
        isSocial: false, 
        isProvider: false, 
        birthday: new Date('2020-06-12T14:42:42'), 
        phoneNumber: '',
    };

    onSubmition(){
        console.log('onSubmittion');
        
    }

    onDateChange = (event, date) => {
        date  = date || this.state.birthday

        this.setState({
            show: Platform.OS === 'ios' ? true : false,
            date,
        })
    }
    
    pickerChange(index){
        console.log(index);
        
        Constant.Gender.map( (v,i) => {
            if(index === i){
                this.setState({
                    gender: Constant.Gender[index].value
                })
            }
        })
    }

    renderOptionBtn1(){
        return(
        // <TouchableOpacity
        //    style={styles.checkBox}
        //      onPress={isSocial => this.setState({ isSocial })}
        // >
            <Icon
                // size={30}
                // color={'#211f30'}
                name='check-box-outline-blank'//{ this.state.isSocial ? 'check-box' : 'check-box-outline-blank'}
            />
        //    <Text>{'text'}</Text>
        // </TouchableOpacity>

        )
    }


    renderBtn(){
        //this.onSubmition.bind(this)
        return ( 
           <Button onPress={() => this.props.navigation.navigate('Auth')}>
               Updated Profile
           </Button>
        )
    }

    render() {
        return (   
        <Card>  
            <CardSection>        
                <Input
                    placeholder="First.Name"
                    label="First Name: "
                    value={this.state.firstName}
                    onChangeText={firstName => this.setState({ firstName })}
                />
            </CardSection>  
            <CardSection>
                <Input
                    placeholder="Last.Name"
                    label="Last Name: "
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({ lastName })}
                />
            </CardSection>
            <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) =>
                    this.pickerChange(itemIndex)
                }
            >
                {Constant.Gender.map((v) =>{
                    return <Picker.Item label={v.label} value={v.value}/>
                })}
            </Picker>
            {/* <DateTimePicker value={this.state.birthday}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={this.onDateChange} 
            /> */}
             
             {/* <CardSection>        
                <Input
                    placeholder="Birthday"
                    label="Birthday: "
                    value={this.state.birthday}
                    // onChangeText={firstName => this.setState({ firstName })}
                />
            </CardSection>  */}
        {/* <CardSection> */}
            {/* {this.renderOptionBtn1()} */}
       {/* </CardSection> */}
        <CardSection>
            {this.renderBtn()}
        </CardSection>
        </Card>     
        )
    }
}

const styles = {
    labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export default Profile;