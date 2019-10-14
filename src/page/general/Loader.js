import React from 'react'
import {
    ActivityIndicator,
    View,
} from 'react-native'
import firebase from 'firebase'
import styles from '../styles/Loader.styles'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 */
class Loader extends React.Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            console.log('componentDidMount', 'onAuthStateChanged');

            if(user){
                try {
                    var emailVerified = user.emailVerified
                } catch (error){
                    this.props.navigation.navigate('Login')
                }

                console.log('componentDidMount emailVerified', emailVerified);
                
                if(emailVerified){
                    this.props.navigation.navigate(user ? 'App' : 'Login' )
                } else {
                    this.props.navigation.navigate('Login')
                }
            } else {
                this.props.navigation.navigate(user ? 'App' : 'Login' )
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}

export default Loader;