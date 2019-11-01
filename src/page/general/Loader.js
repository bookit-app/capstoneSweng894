import React from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, View } from 'react-native'
import firebase from 'firebase'
import styles from '../styles/Loader.styles'
import { auth, preference } from '../../actions'
import utilites from '../../utilites'

/**
 * Loader page used to navigator depending on if 
 * account is created in firebase
 */
class Loader extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            pref: false,
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }
    UNSAFE_componentWillUnmount(){
        this.props.settingPref(false)
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            var currentPref = this.state.pref //this.props.pref ?
            console.log('user profile preference', this.props.pref);
            
            if(user){
                // console.log('user profile json', this.isEmpty(this.props.profile));  
                // console.log('user profile preference json', this.props.profile.preferences);
                // console.log('user profile preference json', this.props);
                console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));
                console.log('user profile preference json', this.isEmpty(this.props.preference));
                currentPref = !this.isEmpty(this.props.profile.preferences)               
            } else {
                console.log('onAuthStateChanged', 'No one logged In');
                console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));
                console.log('user profile preference json', this.isEmpty(this.props.preference));
                currentPref = !this.isEmpty(this.props.profile.preferences) 
            } 

            console.log('Preference Setting: ', currentPref);
            
            var route = user ? currentPref ? 'App' : 'Preference'  : 'Login' 
            
            console.log('Route: ', route);

            this.props.navigation.navigate(route)
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!this.props.loadPreference && (this.props.pref || nextProps.pref)){
            this.setState({
                pref: true
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
        profile: state.profile.profile,
        preference: state.preference.preference,
        loadPreference: state.preference.loading,
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