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
import AppointmentStyleDetailsForm from '../../components/appointment/AppointmentStyleDetailsForm'
import {AppointmentList,AppointmentItem} from '../../components/appointment'
import CreateAppointmentBtn from '../../components/appointment/ShopType'
import LogInBtnStyles from '../../components/styles/LogInBtn.styles'


/**
 * Temp Object can be achanges as necessary or removed
 * @param {*} props 
 */
class SelectAppointmentDetails extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = { location: '', loading: false }
  

    }

    renderItem = (item) => {
        return (
            <View>        
                <AppointmentItem
                    shopName={item.item.businessName}
                    service={item.item.styleId == "FADE" ? "Barber" : item.item.styleId == "UPDO" ? "Hair Dresser" : item.item.styleId }
                    date={item.item.date}
                    time={item.item.time}
                    status={item.item.status.code}
                    onClick={() => this.onDetailClick(item.item)}
                    onHoldClick={() => this.onDetailHoldClickDelete(item.item)}
                /> 
            </View>
        )
    }

    listNoShopsFound= () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerNoAppointment}>{'Sorry None of Our Recourds Match Your Search'}</Text>
            </View>
        )
    }

    render() {
        console.log(this.props);
        return (
            <ScrollView>
            <AppointmentStyleDetailsForm/>

          <AppointmentList
            //  currentData={this.state.returnedShops.slice(0,3)}
             // extraData={this.state}
             listEmpty={this.listNoShopsFound}
          />

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