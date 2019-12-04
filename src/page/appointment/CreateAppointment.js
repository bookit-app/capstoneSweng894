import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, Alert } from 'react-native'
import { Spinner } from '../../components/common'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import CreateAppointmentBtn from '../../components/appointment/ShopType'
import LogInBtnStyles from '../../components/styles/LogInBtn.styles'
import apis from '../../api'
import {Time} from '../../components/appointment'
import {appointment} from '../../actions'
import { StateList, StatusList, Period } from '../../constant'
import {InputCustom}  from '../../components/common/InputCustom'
import CustomInputStyles from '../../components/styles/CustomInputStyles'
import utilites from '../../utilites'
import { PreferenceItem } from '../../components/preference'

import {AppointmentList,AppointmentItem} from '../../components/appointment'

const constHours = utilites.TimeGene(12).filter(a => a.Value >= 1 && a.Value <= 12).map(b => b.Name)
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
            selectDt: '',
            userLocationInput: '',
            token: '',
            providerList: [],
            provider: '',
            hairDress: false,
            barber: false ,
            style: '',
            existAppointment: [],
            hour:"12",
            minute: "00",
            period: 'AM',
        }

        this.filterGenerate = utilites.filterGenerate.bind(this)
    }


    componentDidMount(){
        this.setState({
            prefSet: this.props.prefSet,
            loadingProfile: this.props.loadingProfile,
            profile: this.props.profile,
            preference: this.props.preference,
            token: this.props.token
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
                preference: this.props.preference,
                token: this.props.token
            })
        }
    }

    onSelectingSameDateTime = (date, dateFormat, time) => {        
        if(isNotListValid(date, time)){
            Alert.alert(
                'Appointment',
                'This appointment slot is already booked ' + dateFormat + ' at ' + time,
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    /**
     * Is new data & time of appointment not in the existing appointment list
     * @param {*} date 
     * @param {*} time 
     */
    isNotListValid = (date, time) => {
        var list = Object.assign([], this.state.existAppointment
            .filter(ea => ea.date == date 
                && ea.time == time 
                && ea.appointmentId != appointmentId))
        // console.log('onDateChange', list)
        
        return list.length >= 1
    }

    onSelectingTimeValid = (period, dateFormat, time) => {
        if(isNotValidTimePeriod(period, time)){
            Alert.alert(
                'Appointment',
                'This appointment time is outside operation business hour on '+dateFormat + ' at ' + time + ' ' + period,
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    /**
     * Is new date and time without valid business hours 9 to 6 - everyday
     * @param {*} pe 
     * @param {*} tm 
     */
    isNotValidTimePeriod = (pe, tm) => {
        var hr = parseInt(tm.split(':')[0])
        // console.log('isNotValidTimePeriod hour', hr);
        // console.log('isNotValidTimePeriod period', pe);
        
        if(hr >= 9 && hr <= 11 && pe == "am"){
            // console.log('isNotValidTimePeriod 9 to 11 am');
            return false
        } else if ((hr == 12 || (hr >= 1 && hr < 6)) && pe == "pm"){
            // console.log('isNotValidTimePeriod 12 to 6 pm');
            return false
        }
        // console.log('isNotValidTimePeriod not am or pm');
        return true
    }
     onHourChange = (hr) => {
        // var selectedDte = startNonDt
        // var selectedDteFormat = startDt
        // var selectedTime = hr + ":" + minute + ":00"

        // onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        // onSelectingTimeValid(period, selectedDteFormat, selectedTime)

        this.setState({
            hour: hr
        })
    }

     onMinuteChange = (min) => {
        // var selectedDte = startNonDt
        // var selectedDteFormat = startDt
        // var selectedTime = hour + ":" + min + ":00"

        // onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        // onSelectingTimeValid(period, selectedDteFormat, selectedTime)
        
        this.setState({
            minute: min
        })
    }

     onPeriodChange = (pe) => {
        // var selectedDteFormat = startDt
        // var selectedTime = hour + ":" + minute + ":00"

        // onSelectingTimeValid(pe, selectedDteFormat, selectedTime)
        
        this.setState({
            period: pe
        })
    }

    onDateChange = (date_, type) => {      
        this.setState({
            selectDt: moment(date_).format('MMM DD YYYY'),//date.format(date_,'MMM. DDD YYYY')
        })
    }

    onChangeText = (loc) => {
        this.setState({
            userLocationInput: loc
        })  
    }

    renderItem = (item) => {
        return (
            <View>   
                <PreferenceItem
                    key={item.item.providerId}
                    businessName={item.item.businessName}
                    onProviderSelect={() => this.setProvider(item.item)}
                />
            </View>
        )
    }

    /**
     * Handles the provider setting alter
     * @param {*} item 
     */
    setProvider(item){
        Alert.alert(
            'Provider',
            `Would you like to select ${item.businessName}?`  ,
            [
                {text: 'Cancel', onPress: () => {return null}},
                {text: 'Confirm', onPress: () => {      
                    this.setState({
                        provider: item.businessName
                    })

                    var payload = {
                        providerId: item.providerId
                    }
            
                    var filter = utilites.filterGenerate(payload)
                    apis.searchAppointmentByFilter(filter, this.state.token)
                        .then( (data) => {
                            var allAppointmentForProvider = data.data
                            allAppointmentForProvider.map(({date, time, appointmentId}) => ({date, time, appointmentId}))
                            var aap = []
            
                            for (let index = 0; index < allAppointmentForProvider.length; index++) {
                                var element = {};
                                element.time = allAppointmentForProvider[index].time 
                                element.date = allAppointmentForProvider[index].date
                                element.appointmentId = allAppointmentForProvider[index].appointmentId
                                element.style = {backgroundColor: '#4FA6FD'}
                                element.textStyle = { color: 'white'}
                                element.containerStyle = []
                                aap.push(element)
                            }
                            this.setState({
                                existAppointment: aap
                            })
                        })
                        .catch((err) => {
                            console.log('SetProviders', err);
                            // Add error handing
                        })
                }}
            ]
        )
    }

    listNoShopsFound= () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerNoAppointment}>{'Sorry None of Our Recourds Match Your Search'}</Text>
            </View>
        )
    }

    onSearchPopulated = (styles) => {
        const {userLocationInput, barber, hairDress, token} = this.state

        console.log('onProviderPopulated', zipCode);

        var filter = {}
        var city = ''
        var state = ''
        var zipCode = ''

        if(userLocationInput.split(',').length > 0){
            city = userLocationInput.split(',')[0].trim()
            state =userLocationInput.split(',')[1].trim() 
        } else {
            zipCode = userLocationInput
        }

        if(city){
            filter.city = city
        }

        if(state){
            filter.state = state
        }

        if(zipCode){
            filter.zip = zipCode
        }

        if(styles == 'H'){
            // filter.styles = "UPDO"
            this.setState({
                hairDress: !hairDress
            })
        } else {
            // filter.styles = 'FADE'
            this.setState({
                barber: !barber
            })
        }
        console.log('onProviderPopulated', filter.styles);
        
        var filterType = this.filterGenerate(filter)
        // if((city && state && (barber || hairDress)) || (zipCode && (barber || hairDress))){

            apis.searchProviderByFilter(filterType, token)
                .then((result) => {
                    console.log('onProviderPopulated', result.data);
                    
                    this.setState({
                        providerList: result.data
                    })
                })
                .catch((error) => {
                    console.log('onProviderPopulated', error); 
                })
        // } else {
        //     console.log('onProviderPopulate', 'Error');
        //     //Error set state here
        // }
    }

    OnProviderPopulate = () => {
        if(this.state.providerList.length == 0) {
            console.log('onProviderPopulate', this.state.providerList.length);
            return (
                <View />
            )
        } else {
            console.log('onProviderPopulate', this.state.providerList);
            return (
                <ScrollView>
                <View style={styles.headerRow}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.headerText}>{"We found the following shops for you:"}</Text>
                </View>                
            </View> 
                <AppointmentList
                    currentData={this.state.providerList.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    scrollEnabled={false}
                    listEmpty={this.listNoShopsFound}
                    keyExtractor={item => item.providerId}
                />
                </ScrollView>
                
            )
        }
    }
    
    
    OnCalender = () => {
        if(!this.state.provider){
            return (
                <View />
            )
        } else {
            return (
                <ScrollView>
                <View style={styles.headerRow}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.headerText}>{"Select a Date:"}</Text>
                    </View>                
                </View>    
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={false}
                    minDate={new Date()}
                    maxDate={date.addMonths(new Date(), 2)}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                    customDatesStyles={this.state.existAppointment}
                />
                <Time
                    placeHour={this.state.hour}
                    defaultHour={this.state.hour}
                    optionsHour={constHours}
                    onHourChange={hr => this.onHourChange(hr)}
                    hour={this.state.hour}
                    placeMinute={this.state.minute}
                    defaultMinute={this.state.minute}
                    optionsMinute={utilites.TimeGene(59).map(a => a.Name)}
                    onMinuteChange={mn => this.onMinuteChange(mn)}
                    minute={this.state.minute}
                    placePeriod={this.state.period}
                    defaultPeriod={this.state.period}
                    optionsPeriod={Period.map(p => p.Name)}
                    onPeriodChange={p => this.onPeriodChange(p)} 
                    period={this.state.period}              
                />
                </ScrollView>
            )
        }
    }

    render(){
        if(this.state.prefSet){
            if(this.state.loadingProfile){
                return <Spinner size="large" />
            }
        }

        return (  
            <ScrollView>
                {/*Location Header*/}
                <View style={styles.headerRow}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.headerText}>{"Enter Your Location"}</Text>
                    </View>                
                </View>
            
                {/*Shop Locater User Input Field*/}
                <View>
                    <InputCustom
                        placeholder ="City, State or Zip Code"
                        value={this.state.userLocationInput} //{props.userLocationInput}
                        onChangeText={location => this.onChangeText(location)} //{props.locationOnChge}
                        inputStyle={CustomInputStyles.inputStyleCityandState}
                        containerStyle={CustomInputStyles.containerStyleLeft}
                        textAlign={CustomInputStyles.inputTextAlignment}
                    />
                </View>
                
                {/*Shop Type Header*/}
                <View style={styles.headerRow}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.headerText}>{"Would you prefer a hair dresser or barber?"}</Text>
                    </View>                
                </View>
                
            {/*Shop Preference Button*/}
            <View style={{flex: 1, flexDirection: 'row'}}>
                <CreateAppointmentBtn
                    btnAction={() => this.onSearchPopulated('H')}
                    shopBtnStyle={ this.state.hairDress ? LogInBtnStyles.smallButtonStyleFillPurple : LogInBtnStyles.smallButtonStylePurple}
                    textStyle={ this.state.hairDress ? LogInBtnStyles.textStyle : LogInBtnStyles.whiteFillTextStyle}
                    text={'Hair Dresser'}
                />
                <CreateAppointmentBtn
                    btnAction={() => this.onSearchPopulated('B')}
                    shopBtnStyle={ this.state.barber ? LogInBtnStyles.smallButtonStyleFillPurple : LogInBtnStyles.smallButtonStylePurple}
                    textStyle={ this.state.barber ? LogInBtnStyles.textStyle : LogInBtnStyles.whiteFillTextStyle}
                    text={'Barber'}
                />
      
            </View>
    
            {/*Shop Type Header*/}
              
                <this.OnProviderPopulate />
                
                <this.OnCalender />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingProfile: state.profile.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddItem: (newItem) => dispatch(appointment.AddAppointment(newItem))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateAppointment)