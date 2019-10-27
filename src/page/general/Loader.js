import React from 'react'
import { connect } from 'react-redux'
import {
    ActivityIndicator,
    View,
} from 'react-native'
import firebase from 'firebase'
import styles from '../styles/Loader.styles'
import { auth, preference } from '../../actions'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 */
class Loader extends React.Component {
    state = {
        pref: true
    }

    componentDidMount(){        
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                // console.log('user preference user', this.props.pref); 
                console.log('user preference user', this.state.pref); 
                console.log('user preference', this.props.pref);                 
            } else {
                console.log('onAuthStateChanged', 'No one logged In');
                console.log('user preference', this.props.pref);
                console.log('user preference', this.state.pref);
            }
            
            var currentPref = this.state.pref //this.props.pref ? 

            console.log('Preference Setting: ', currentPref);
            
            var route = user ? currentPref ? 'App' : 'Setting'  : 'Login' 
            
            console.log('Route: ', route);

            this.props.navigation.navigate(route)
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('UNSAFE_componentWillReceiveProps loading', nextProps.pref);
        
        if(nextProps.pref != this.props.pref){
            this.setState({
                pref: this.props.pref
            })
        }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);