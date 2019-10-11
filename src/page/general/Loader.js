import React from 'react'
import {
    ActivityIndicator,
    View,
} from 'react-native'
import firebase from 'firebase'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 */
class Loader extends React.Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth' )
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator />
                {/* <StatusBar barStyle="default" /> */}
            </View>
        )
    }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

export default Loader;