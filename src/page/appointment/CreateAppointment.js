import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { Spinner } from '../../components/common'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import FindShopForm from '../../components/appointment/FindShopForm'
import CreateAppointmentBtn from '../../components/appointment/ShopType'
import LogInBtnStyles from '../../components/styles/LogInBtn.styles'


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

class CreateAppointment extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            profile: {},
            preference: {},
            prefSet: false,
            loadingProfile: false,
            minDate: new Date(),
            maxDate: date.addMonths(new Date(), 2),
            selectDt: ''
        }
    }

    componentDidMount(){
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

    onDateChange = (date_, type) => {      
        this.setState({
            selectDt: moment(date_).format('MMM Do YYYY'),//date.format(date_,'MMM. DDD YYYY')
        })
    }

    render(){
        if(this.state.prefSet){
            if(this.state.loadingProfile){
                return <Spinner size="large" />
            }
        }

        return (
            
            <ScrollView>
                <FindShopForm
                location={this.state.userLocationInput}
                locationOnChg={location => onChangeText(location)}

            />
               <View style={styles.Column}>
                   {/*   <View style={styles.Column}>
                        <View style={styles.Row}>
                            {/* <View style={{alignItems: 'flex-start'}}> */}
                                {/* <Text style={{color: '#724FFD', paddingStart: 5}}>{'Date:'}</Text>
                                <Text style={{paddingStart: 5}}>{this.state.selectDt}</Text> */}
                            {/* </View> */}
                        {/* </View>
                    </View> */} 
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={false}
                        minDate={new Date()}
                        maxDate={date.addMonths(new Date(), 2)}
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={this.onDateChange}
                    />
                </View>
                <View style={styles.Column}>
                    <CreateAppointmentBtn
                    btnAction={() => this.props.navigation.navigate('Next')}
                    shopBtnStyle={LogInBtnStyles.buttonStylePurple}
                    textStyle={LogInBtnStyles.textStyle}
                    text={"Next"}
                    />
                </View>
                
                
            </ScrollView>
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

export default connect(mapStateToProps,null)(CreateAppointment)