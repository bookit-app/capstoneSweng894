import React from 'react'
import { connect } from 'react-redux'
import {
    ActivityIndicator,
    View,
} from 'react-native'
import firebase from 'firebase'
import styles from '../styles/Loader.styles'
import { auth, preference, profile } from '../../actions'

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

                user.getIdToken()
                    .then(token =>{
                        this.props.tokenSet(token)
                    })

                // Still not working
                // this.props.getProfileData()
                // console.log('onAuthStateChanged UserId', this.props.userId);
                console.log('onAuthStateChanged token', this.props.token);
                
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
    console.log('Loader mapStateToProps', state);
    
      return {
        userId: state.auth.userId,
        token: state.auth.token,
        pref: state.preference.pref
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSet: (userId) => dispatch(auth.userSet(userId)),
        tokenSet: (token) => dispatch(auth.tokenSet(token)),
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        getProfileData: () => dispatch(profile.getProfileData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);