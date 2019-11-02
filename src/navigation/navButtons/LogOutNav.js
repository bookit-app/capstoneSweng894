import React from 'react'
import { View, Button, AsyncStorage } from 'react-native'
import firebase from 'firebase'
import styles from '../styles/LogOutNav.styles'
import { NavigationActions } from 'react-navigation'
import store from '../../store'
import { signOut } from '../../store'

/**
 * LogOut Component
 */
class LogOutNav extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigateAction)
    }

    onSuccessfullLogOut(){
        console.log("Success Log Out of Account");
        AsyncStorage.clear()
        store.dispatch(signOut())
        this.navigateToScreen('Login')
    } 

    onFailuredLogOut(){
        alert('Failure to Log out of Account')
    }

    onSignOut(){
        try{
            firebase.auth().signOut()
                .then(this.onSuccessfullLogOut.bind(this))
                .catch((error) => {
                    // console.log('onSignOut error',error);
                    this.onFailuredLogOut()
                })
        } catch(error){
            this.onFailuredLogOut()
        }
    }

    render(){
        return(
            <View styles={styles.btnView}>
                <Button 
                    style={styles.txtLabel}
                    title={"SignOut"}
                    onPress={() => this.onSignOut()}>
                    {'Sign Out'}
                </Button>
            </View>
        )
    }
}
export {LogOutNav}