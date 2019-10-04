import React from 'react'
import { View, Text, Button } from 'react-native'
import { auth } from '../../config/firebaseConfig'
import { Spinner } from '../../components/common'

class SignOut extends React.Component {
    state={
        isValiedUser: auth.currentUser === null,
        error: '',
        loading: false
    }

    justBeforeSuccess(){
        this.setState({
            loading: true
        })
        
        return <Spinner size="small" />
    }

    onSuccessfullLogOut(){
        console.log("Success Log Out of Account");
        return(
            <Button
                onPress={() => this.props.navigation.navigate('Login')}
            />
        )
    }

    onFailuredLogOut(){
        this.setState({
            error: "Failure to Log out of Account"
        })
    }

    renderSignOutButton(){

        if(!this.state.isValiedUser){
            return(
                <View styles={styles.btnView}>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <Button 
                        title={"SignOut"}
                        onPress={() => {
                            auth.signOut()
                                .then(this.justBeforeSuccess.bind(this))
                                .then(this.onSuccessfullLogOut.bind(this))
                                .catch(this.onFailuredLogOut.bind())
                            }
                        }>
                        {'Sign Out'}
                    </Button>
                </View>
            )
        }else{
            return(
                <Text>{this.state.isValiedUser ? "Not Sign In" : auth.currentUser.email}</Text>
            )
        }
    }

    render(){
        return(
            <View>
                {this.renderSignOutButton()}
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
    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
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

export default SignOut