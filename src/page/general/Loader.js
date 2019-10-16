import React from 'react'
import { connect } from 'react-redux'
import {
    ActivityIndicator,
    View,
} from 'react-native'
import firebase from 'firebase'
import styles from '../styles/Loader.styles'
import { userSet } from '../../actions/auth-action'
import { settingPref } from '../../actions/setting-action'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 */
class Loader extends React.Component {
    componentDidMount(){        
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log('onAuthStateChanged', user);
                this.props.userSet(user.uid)
            } else {
                console.log('onAuthStateChanged', 'No one logged In');
            }
            
            var currentPref = this.props.pref

            console.log('Preference Setting: ', currentPref);
            
            var route = user ? currentPref ? 'App' : 'Setting'  : 'Login' 
            
            console.log('Route: ', route);

            this.props.navigation.navigate(route)
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

const mapStateToProps = (state) => {
      return {
        userId: state.userId,
        pref: state.setPref.pref
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (userId) => dispatch(userSet(userId)),
        settingPref: (pref) => dispatch(settingPref(pref))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);