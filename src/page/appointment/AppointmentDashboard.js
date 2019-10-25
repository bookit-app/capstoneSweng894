import React from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity } from 'react-native'
import { ButtonCustom, Spinner } from '../../components/common'
import styles from '../styles/AppointmentDashboard.styles'
import SettingPref1 from '../../page/preference/SettingPref1'
import SettingPref2 from '../../page/preference/SettingPref2'
import Tutorial from '../../page/general/Tutorial'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
const UserInfo = (props) =>{
    if(props.prefSet && props.preferInfo && props.profInfo){
        const { firstName, lastName, email } = props.profInfo
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
            prefSet: false,
            loadingProfile: false,
            display1: false,
            display2: false,
            display3: true
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log(nextProps);

        if( this.props.prefSet 
            && !this.props.loadingProfile){
            this.setState({
                prefSet: this.props.prefSet,
                loadingProfile: this.props.loadingProfile,
                profile: this.props.profile,
                preference: this.props.preference ? this.props.preference : this.props.profile.preferences,
                display3: false
            })
        }
    }

    profileModel1(){
        console.log('profileModel1', this.state.display1)
        this.setState(prevState => {
            return {
                display1: true
            }
        });
    }

    profileModel2(){
        console.log('profileModel2', this.state.display2)
        this.setState(prevState => {
            return {
                display2: true
            }
        });
    }

    /**
     * Example of other Preference setting option
     */
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

    /**
     * Example of other Preference result option
     */
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
        console.log('onModalClose3');
        
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
        console.log('onModalCompleted', this.state.display3)
        this.setState(prevState => {
            return {
                display3: update
            }
        });
    }

    render(){
        if(this.state.prefSet){
            if(this.state.loadingProfile){
                return <Spinner size="large" />
            }

            // console.log('Appointment Dashboard', this.state.profile);
            // console.log('Appointment Dashboard', this.state.preference);       
        }
           
        return (
            <View>
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
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentDashboard);