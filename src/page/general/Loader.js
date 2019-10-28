import React from 'react'
import { connect } from 'react-redux'
import {
    ActivityIndicator,
    View,
} from 'react-native'
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
            pref: true
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }
    UNSAFE_componentWillUnmount(){
        this.props.settingPref(false)
    }

    UNSAFE_componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log('user preference user', this.state.pref); 
                console.log('user preference', this.props.pref); 
                // console.log('user profile json', this.isEmpty(this.props.profile));  
                // console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));                   
            } else {
                console.log('onAuthStateChanged', 'No one logged In');
                // console.log('user profile json', this.isEmpty(this.props.profile));  
                // console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));    
                console.log('user preference', this.props.pref);
                console.log('user preference', this.state.pref);
                // this.props.settingPref(false)
            }
            
            var currentPref = this.state.pref //this.props.pref ? 

            console.log('Preference Setting: ', currentPref);
            
            var route = user ? currentPref ? 'App' : 'Profile'  : 'Login' 
            
            console.log('Route: ', route);

            this.props.navigation.navigate(route)
        })
    }

    // componentDidMount(){        
    //     firebase.auth().onAuthStateChanged(user => {
    //         if(user){
    //             console.log('user preference user', this.state.pref); 
    //             console.log('user preference', this.props.pref); 
    //             console.log('user profile json', this.isEmpty(this.props.profile));  
    //             console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));                   
    //         } else {
    //             console.log('onAuthStateChanged', 'No one logged In');
    //             console.log('user profile json', this.isEmpty(this.props.profile));  
    //             console.log('user profile preference json', this.isEmpty(this.props.profile.preferences));    
    //             console.log('user preference', this.props.pref);
    //             console.log('user preference', this.state.pref);
    //             this.props.settingPref(false)
    //         }
            
    //         var currentPref = this.state.pref //this.props.pref ? 

    //         console.log('Preference Setting: ', currentPref);
            
    //         var route = user ? currentPref ? 'App' : 'Setting'  : 'Login' 
            
    //         console.log('Route: ', route);

    //         this.props.navigation.navigate(route)
    //     })
    // }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('UNSAFE_componentWillReceiveProps loading', nextProps.pref);
        console.log('UNSAFE_componentWillReceiveProps loading', this.props.pref);

        if(this.props.pref != nextProps.pref)
        {
            this.setState({
                    pref: this.props.pref
            });
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