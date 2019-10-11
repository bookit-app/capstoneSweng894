import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

/**
 * Account LogOut Component
 */
class AccountLogOut extends React.Component {
    state = {
        isValiedUser: firebase.auth().currentUser === null,
        error: ''
    }

    onSuccessfullLogOut(){
        console.log("Success Log Out of Account");

        // this.props.navigation.navigate('Login')
        this.props.navigation.navigate('Home')
    } 

    onFailuredLogOut(er){
        alert('Failure to Log out of Account')
        console.log(er);
    }

    renderSignOutButton(){
        if(!this.state.isValiedUser){
            return(
                <View styles={styles.btnView}>
                    <Button 
                        style={styles.txtLabel}
                        title={"SignOut"}
                        onPress={() => {
                            firebase.auth().signOut()
                                .then(this.onSuccessfullLogOut.bind(this))
                                .catch((er) => this.onFailuredLogOut(er))
                            }
                        }>
                        {'Sign Out'}
                    </Button>
                </View>
            )
        } else {
            return(
                <Text style={styles.txtLabel}>{this.state.isValiedUser ? "Not Sign In" : firebase.auth().currentUser.email}</Text>
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
    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    }, 
    txtLabel: {
        paddingRight: 5
    }
}

export default AccountLogOut