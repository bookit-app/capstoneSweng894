import React from 'react'
import { connect } from 'react-redux'
import {
    View, Text, ScrollView,
} from 'react-native'
import { Spinner } from '../../components/common'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import FindShopForm from '../../components/appointment/FindShopForm'


/**
 * Temp Object can be achanges as necessary or removed
 * @param {*} props 
 */
class SelectAppointmentDetails extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = { location: '', loading: false }
  

    }

    render() {
        console.log(this.props);
        return (
            <FindShopForm
                location={this.state.userLocationInput}
                locationOnChg={location => onChangeText(location)}

            />

            
        )
    }
}



/* 
const mapStateToProps = (state) => {
    return {
        loadingProfile: state.profile.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
} */

export default connect(null)(SelectAppointmentDetails)