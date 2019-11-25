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
import Header from '../../components/common/Header'
import CustomInput  from '../../components/common/CustomInput'
import CustomInputStyles from '../../components/styles/CustomInputStyles'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
class FindShopLocation extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.headerRow}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.headerText}>{"Enter Your Location"}</Text>
                    </View>
                </View>

        
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

export default connect(mapStateToProps, null)(FindShopLocation)