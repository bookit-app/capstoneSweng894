import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import { ButtonCustom, Spinner } from '../../components/common'
import styles from '../styles/AppointmentDashboard.styles'
import SettingPref1 from '../../page/preference/SettingPref1'
import SettingPref2 from '../../page/preference/SettingPref2'
import Tutorial from '../../page/general/Tutorial'
import utilites from '../../utilites'
import { NavigationEvents } from 'react-navigation'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
const UserInfo = (props) =>{
    if(props.prefSet && props.preferInfo && props.profInfo){
        const { firstName, lastName, email } = props.profInfo
        // console.log('UserInfo', props.profInfo);
        
        const { staffClassification, time} = props.preferInfo
        
        return (
            <View>
                <Text>{'Profile setting: ' }</Text>
                <Text>{`Name: ${firstName} ${lastName}`}</Text>
                <Text>{`email: ${email}`}</Text>
                <Text>{'Preference Setting: '}</Text>
                <Text>{`Classification: ${staffClassification}`}</Text>
                <Text>{`time: ${time}`}</Text>
            </View>
        )

    } else {
        return (
            <View />
        )
    }
}

class AppointmentDashboard extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            profile: {},
            preference: {},
            prefSet: true,
            loadingProfile: true,
            loadingPreference: true,
            display1: false,
            display2: false,
            display3: false
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log('UNSAFE_componentWillReceiveProps', nextProps.profile);
        // console.log('UNSAFE_componentWillReceiveProps', this.props.profile);
        
        // if( this.props.prefSet 
        if((!this.props.loadingProfile || !this.state.loadingProfile) || (nextProps.profile != this.props.profile)){
            this.AppointmentDashboardRefresh(nextProps)
        }
    }

    AppointmentDashboardRefresh(nextProps){
        // console.log('AppointmentDashboardRefresh', nextProps);
        
        if(!this.isEmpty(nextProps))
        {
            this.setState({
                prefSet: this.props.prefSet ? this.props.prefSet: nextProps.prefSet,
                loadingProfile: this.props.loadingProfile ? this.props.loadingProfile : nextProps.loadingProfile,
                loadingPreference: this.props.loadingPreference ? this.props.loadingPreference : nextProps.loadingPreference,
                profile: this.props.profile ? this.props.profile : nextProps.profile,
                preference: this.props.preference ? this.props.preference ? nextProps.preference : this.props.profile.preferences : this.props.profile.preferences,
                display3: false
            }) 
        }
    }

    AppointmentDashboardRefresh(){
        this.setState({
            prefSet: this.props.prefSet ,
            loadingProfile: this.props.loadingProfile,
            loadingPreference: this.props.loadingPreference,
            profile: this.props.profile ,
            preference: this.props.preference ? this.props.preference : this.props.profile.preferences,
            display3: false
        }) 
    }

    profileModel1(){
        // console.log('profileModel1', this.state.display1)
        this.setState(prevState => {
            return {
                display1: true
            }
        });
    }

    profileModel2(){
        // console.log('profileModel2', this.state.display2)
        this.setState(prevState => {
            return {
                display2: true
            }
        });
    }

    onModalClose1(){
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ display1: false })
                }}
            >
                <Text>{'Close'}</Text>
            </TouchableOpacity>
        )
    }

    onModalClose2(){
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ display2: false })
                }}
            >
                <Text>{'Close'}</Text>
            </TouchableOpacity>
        )
    }

    onModalClose3(){
        // console.log('onModalClose3');
        
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ display3: false })
                }}
            >
                <Text>{'Close'}</Text>
            </TouchableOpacity>
        )
    }

    onModalCompleted = (update) => {
        // console.log('onModalCompleted', this.state.display3)
        this.setState(prevState => {
            return {
                display3: update
            }
        });
    }

    render(){
        // console.log('prefSet', this.state.prefSet);
        // console.log('prefSet', this.props.prefSet);
        // console.log('loadingProfile', this.state.loadingProfile);
        // console.log('loadingProfile', this.props.loadingProfile);
        // console.log('loadingPreference', this.state.loadingPreference);
        // console.log('loadingPreference', this.props.loadingPreference);
        
        if(this.state.prefSet || this.props.prefSet){
            if(this.state.loadingProfile && this.props.loadingProfile){
                return <Spinner size="large" />
            }

            // console.log('Appointment Dashboard', this.state.profile);
            // console.log('Appointment Dashboard', this.state.preference);       
        }
           
        return (
            <View>
                <NavigationEvents
                    onDidBlur={() => this.AppointmentDashboardRefresh()}
                    onWillBlur={() => this.AppointmentDashboardRefresh()}
                />
                <Text>{'Appointment Dashboard'}</Text>
                <UserInfo
                    prefSet={this.state.prefSet} 
                    preferInfo={this.state.preference}
                    profInfo={this.state.profile}
                />
                <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() =>
                            this.props.navigation.navigate('Detail',{
                                prefSet: this.state.prefSet,
                                profile: this.state.profile,
                                preference: this.state.preference,
                                loadingProfile: this.state.loadingProfile
                            } )}
                    >
                        {'Appointment Deatil'}
                    </ButtonCustom>
                </View>
                <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() => 
                            this.props.navigation.navigate('Reivew',{
                                prefSet: this.state.prefSet,
                                profile: this.state.profile,
                                preference: this.state.preference,
                                loadingProfile: this.state.loadingProfile
                            } )}
                    >
                        {'Appointment Review'}
                    </ButtonCustom>
                </View>
                <ButtonCustom
                        onPress={() => this.profileModel1()}
                    >
                    {'Preferece Modal'}
                </ButtonCustom>
                <SettingPref1
                    display={this.state.display1}
                    onClose={() => this.onModalClose1()}
                />
                <ButtonCustom
                        onPress={() => this.profileModel2()}
                    >
                    {'Preferece Result'}
                </ButtonCustom>
                <SettingPref2
                    display={this.state.display2}
                    onClose={() => this.onModalClose2()}
                />
                <Tutorial
                    display={this.state.display3}
                    onClose={() => this.onModalClose3()}
                    onModalCompleted={this.onModalCompleted}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingProfile: state.profile.loading,
        loadingPreference: state.preference.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentDashboard);