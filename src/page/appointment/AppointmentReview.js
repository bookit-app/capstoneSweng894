import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Spinner } from '../../components/common'


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

class AppointmentReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            profile: {},
            preference: {},
            prefSet: false,
            loadingProfile: false,
        }
    }

    componentDidMount(){
        const { navigation } = this.props

        // console.log('profile',JSON.stringify(navigation.getParam('profile', 'NO-ID')));

        this.setState({
            prefSet: this.props.prefSet,
            loadingProfile: this.props.loadingProfile,
            profile: this.props.profile,
            preference: this.props.preference
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        if( this.props.prefSet 
            && !this.props.loadingProfile){
            this.setState({
                prefSet: this.props.prefSet,
                loadingProfile: this.props.loadingProfile,
                profile: this.props.profile,
                preference: this.props.preference
            })
        }
    }

    render(){
        if(this.state.prefSet){
            if(this.state.loadingProfile){
                return <Spinner size="large" />
            }
        }

        return (
            <View>
                <Text>{'AppointmentReview'}</Text>
                <UserInfo
                    prefSet={this.state.prefSet} 
                    preferInfo={this.state.preference}
                    profInfo={this.state.profile}
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

export default connect(mapStateToProps,null)(AppointmentReview)