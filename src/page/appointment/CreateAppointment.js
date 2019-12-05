import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, Alert, Image, TouchableOpacity } from 'react-native'
import { Spinner, ButtonCustom } from '../../components/common'
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import CreateAppointmentBtn from '../../components/appointment/ShopType'
import LogInBtnStyles from '../../components/styles/LogInBtn.styles'
import apis from '../../api'
import {Time} from '../../components/appointment'
import { Period } from '../../constant'
import {InputCustom}  from '../../components/common/InputCustom'
import CustomInputStyles from '../../components/styles/CustomInputStyles'
import utilites from '../../utilites'

import {AppointmentList} from '../../components/appointment'
import { getAppointment } from '../../store'

const constHours = utilites.TimeGene(12).filter(a => a.Value >= 1 && a.Value <= 12).map(b => b.Name)

const image_ = {
    A: require('../../image/A_.png'),
    B: require('../../image/B_.png'),
    C: require('../../image/C_.png'),
    D: require('../../image/D_.png'),
    E: require('../../image/E_.png'),
    F: require('../../image/F_.png'),
    G: require('../../image/G_.png'),
    H: require('../../image/H_.png'),
    I: require('../../image/I_.png'),
    J: require('../../image/J_.png'),
    K: require('../../image/K_.png'),
    L: require('../../image/L_.png'),
    M: require('../../image/M_.png'),
    N: require('../../image/N_.png'),
    O: require('../../image/O_.png'),
    P: require('../../image/P_.png'),
    Q: require('../../image/Q_.png'),
    R: require('../../image/R_.png'),
    S: require('../../image/S_.png'),
    T: require('../../image/T_.png'),
    U: require('../../image/U_.png'),
    V: require('../../image/V_.png'),
    W: require('../../image/W_.png'),
    X: require('../../image/X_.png'),
    Y: require('../../image/Y_.png'),
    Z: require('../../image/Z_.png'),
}  

const imageService_ = {
    barber: require("../../image/barber.png"),
    hairDress: require("../../image/hair-dresser.png"),
    custom: require('../../image/custom-hair.png')
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
            selectDt: '',
            selectDtFormat: '',
            userLocationInput: '',
            token: '',
            providerList: [],
            provider: '',
            providerId: '',
            hairDress: false,
            barber: false ,
            style: '',
            selectStyle: '',
            existAppointment: [],
            hour:"12",
            minute: "00",
            period: 'AM',
            serviceList: [],
            serviceId: '',
            staffList: [],
            staffMemberId: '',
            note: '',
            loadingCal: false,
            loadingBusiness: false,
            loadingSubmission: false
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
        if(this.isNotListValid(date, time)){
            Alert.alert(
                'Appointment',
                'This appointment slot is already booked ' + dateFormat + ' at ' + time,
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    isNotListValid = (date, time) => {
        var list = Object.assign([], this.state.existAppointment
            .filter(ea => ea.date == date 
                && ea.time == time 
                && ea.appointmentId != appointmentId))
        
        return list.length >= 1
    }

    onSelectingTimeValid = (period, dateFormat, time) => {
        if(this.isNotValidTimePeriod(period, time) && dateFormat){
            Alert.alert(
                'Appointment',
                'This appointment time is outside operation business hour on '+dateFormat + ' at ' + time + ' ' + period,
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    isNotValidTimePeriod = (pe, tm) => {
        var hr = parseInt(tm.split(':')[0])
        
        if(hr >= 9 && hr <= 11 && pe.toLowerCase() == "am"){
            return false
        } else if ((hr == 12 || (hr >= 1 && hr < 6)) && pe.toLowerCase() == "pm"){
            return false
        }
        return true
    }

    onDateChange = (date_, type) => {   
        const { period, hour, minute } = this.state

        var selectedDte =  moment(date_).format('YYYY-MM-DD')
        var selectedDteFormat = moment(date_).format('MMM Do YYYY')
        var selectedTime = hour + ":" + minute + ":00"
        
        this.onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        this.onSelectingTimeValid(period, selectedDteFormat, selectedTime)
        
        this.setState({
            selectDt: selectedDte,
            selectDtFormat: selectedDteFormat, 
        })
    }
    
    onHourChange = (hr) => {
        const {selectDt, selectDtFormat, minute, period} = this.state

        var selectedTime = hr + ":" + minute + ":00"

        this.onSelectingSameDateTime(selectDt, selectDtFormat, selectedTime)
        this.onSelectingTimeValid(period, selectDtFormat, selectedTime)

        this.setState({
            hour: hr
        })
    }

    onMinuteChange = (min) => {
        const {selectDt, selectDtFormat, hour, period} = this.state

        var selectedTime = hour + ":" + min + ":00"

        this.onSelectingSameDateTime(selectDt, selectDtFormat, selectedTime)
        this.onSelectingTimeValid(period, selectDtFormat, selectedTime)
        
        this.setState({
            minute: min
        })
    }

    onPeriodChange = (pe) => {
        const {selectDtFormat, hour, minute} = this.state

        var selectedTime = hour + ":" + minute + ":00"

        this.onSelectingTimeValid(pe, selectDtFormat, selectedTime)
        
        this.setState({
            period: pe
        })
    }

    onLocationChange = (loc) => {
        this.setState({
            userLocationInput: loc.trim()
        })  
    }

    onNoteChange = (info) => {
        this.setState({
            note: info
        })  
    }

    renderItemProvider = (item) => {
        var loc = item.item.businessName.substring(0,1).toUpperCase() 
        
        return (
            <View style={styles.Item}
                key={item.item.providerId}>
                <TouchableOpacity onPress={() => this.setProvider(item.item)}>
                    <View style={item.item.businessName == this.state.provider ? styles.RowItemSelect : styles.RowItem}>
                        <Image
                            style={{
                                width: 35,
                                height: 35,
                                borderRadius: 25
                            }}
                            source={image_[loc]}
                        />   
                        <Text>{item.item.businessName}</Text>
                    </View>
                </TouchableOpacity> 
            </View>
        )
    }

    renderItemStaff = (item) => {
        var loc = item.item.name.substring(0,1).toUpperCase() 
        
        return (
            <View style={styles.Item}
                key={item.item.staffMemberId}>
                <TouchableOpacity onPress={() => this.setStaff(item.item)}>
                    <View style={item.item.staffMemberId == this.state.staffMemberId ? styles.RowItemSelect : styles.RowItem}>
                        <Image
                            style={{
                                width: 35,
                                height: 35,
                                borderRadius: 25
                            }}
                            source={image_[loc]}
                        />   
                        <Text>{item.item.name}</Text>
                    </View>
                </TouchableOpacity> 
            </View>
        )
    }

    renderItemService = (item) => {
        return (   
            <View style={styles.Item}
                key={item.item.serviceId}>
                <TouchableOpacity onPress={() => this.setService(item.item)}>
                    <View style={item.item.serviceId == this.state.serviceId ? styles.RowItemSelect : styles.RowItem}>
                        <Image
                            style={{
                                width: 35,
                                height: 35,
                                borderRadius: 25
                            }}
                            source={item.item.styleId == "CUSTOM" ? imageService_.custom : item.item.styleId == "FADE" ? imageService_.barber : imageService_.hairDress}
                        />   
                        <Text>{item.item.description + " - " + item.item.price}</Text>
                    </View>
                </TouchableOpacity> 
            </View>
        )
    }

    setProvider = (item) =>{
        const { token } = this.state
           
        this.setState({
            provider: 'loading',
            loadingCal: true
        })

        Alert.alert(
            'Provider',
            `You have selected ${item.businessName} for your appointment. Are you sure you want this shop?`  ,
            [
                {text: 'No', onPress: () => {
                    this.setState({
                        provider: '',
                        providerId: '',
                        loadingCal: false
                    })
                    return null
                }},
                {text: 'Yes', onPress: () => {      
                    this.setState({
                        provider: item.businessName,
                        providerId: item.providerId,
                    })

                    var payload = {
                        providerId: item.providerId
                    }
            
                    var filter = utilites.filterGenerate(payload)
                    apis.searchAppointmentByFilter(filter, token)
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
                            this.setState({
                                loadingCal: false
                            })
                            this.SomethingWentWrong()
                        })
                        this.setState({
                            serviceList: [],
                            staffList: [],
                        })
                    
                    apis.getProviderDetails(item.providerId, token)
                        .then((data) => {
                            var providerDetails = data.data
                            this.setState({
                                serviceList: providerDetails.services,
                                staffList: providerDetails.staff,
                                loadingCal: false
                            })
                            
                        }).catch((err) => {
                            this.setState({
                                loadingCal: false
                            })     
                            
                            this.SomethingWentWrong() 
                        })
                }}
            ]
        )
    }

    setService = (item) => {
        Alert.alert(
            'Service',
            `You have selected ${item.description} as your service it cost ${item.price}. Are you sure you want this service?`,
            [
                {text: 'No', onPress: () => {return null}},
                {text: 'Yes', onPress: () => { 
                    this.setState({
                        serviceId: item.serviceId
                    })
                }}
            ]
        )
    }

    setStaff = (item) => {
        Alert.alert(
            'Staff',
            `You have selected ${item.name} as your stylist. Are you sure you want this staffmember?`,
            [
                {text: 'No', onPress: () => {return null}},
                {text: 'Yes', onPress: () => { 
                    this.setState({
                        staffMemberId: item.staffMemberId
                    })
                }}
            ]
        )
    }

    listNoFound= () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerNoAppointment}>{'Sorry None of Our Recourds Match Your Search'}</Text>
            </View>
        )
    }

    onSearchPopulated = (styles) => {
        const {userLocationInput, barber, hairDress, token} = this.state

        var filter = {}
        var city = ''
        var state = ''
        var zipCode = ''

        if(userLocationInput.includes(',')){
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
            this.setState({
                barber: false, 
                hairDress: !hairDress,
                selectStyle: styles
            })
        } else {
            this.setState({
                hairDress: false,
                barber: !barber,
                selectStyle: styles
            })
        }

        this.setState({
            providerList: [{a:'a'}],
            loadingBusiness: true
        })
        
        var filterType = this.filterGenerate(filter)
        
        if(userLocationInput){
            apis.searchProviderByFilter(filterType, token)
                .then((result) => {                    
                    this.setState({
                        providerList: result.data,
                        loadingBusiness: false
                    })
                })
                .catch((error) => {
                    this.setState({
                        loadingBusiness: false
                    }) 
                    
                    this.SomethingWentWrong()
                })
        } else {
            this.setState({
                providerList: [],
                loadingBusiness: false
            }) 

            Alert.alert(
                'Warning',
                'Please populate the location with either city, state or zip code',
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    OnProviderPopulate = () => {
        if(this.state.providerList.length == 0) {
            return (
                <View />
            )
        } else {
            if(this.state.loadingBusiness){
                return <Spinner size="large" />
            }

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
                        renderItem={this.renderItemProvider}
                        scrollEnabled={false}
                        listEmpty={this.listNoFound}
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
            if(this.state.loadingCal){
                return <Spinner size="large" />
            }

            return (
                <ScrollView>
                    <View style={styles.headerRow}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={styles.headerText}>{"Select specific time:"}</Text>
                        </View>                
                    </View>
                    <View style={{padding: 10}}>
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
                    </View>
                    <View style={styles.headerRow}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={styles.headerText}>{"Select the Stylist:"}</Text>
                        </View>                
                    </View> 
                    <AppointmentList
                        currentData={this.state.staffList}
                        extraData={this.state}
                        renderItem={this.renderItemStaff}
                        scrollEnabled={false}
                        listEmpty={this.listNoFound}
                        keyExtractor={item => item.staffMemberId}
                    />
                    <View style={styles.headerRow}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={styles.headerText}>{"Select the Service you want performed:"}</Text>
                        </View>                
                    </View> 
                    <AppointmentList
                        currentData={this.state.serviceList}
                        extraData={this.state}
                        renderItem={this.renderItemService}
                        scrollEnabled={false}
                        listEmpty={this.listNoFound}
                        keyExtractor={item => item.serviceId}
                    />
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
                    <View style={styles.headerRow}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={styles.headerText}>{"Enter any notes"}</Text>
                        </View>                
                    </View>
                    <View>
                        <InputCustom
                            placeholder ="Note"
                            value={this.state.note}
                            onChangeText={note => this.onNoteChange(note)}
                            inputStyle={CustomInputStyles.inputStyleCityandState}
                            containerStyle={CustomInputStyles.containerStyleLeft}
                            textAlign={CustomInputStyles.inputTextAlignment}
                        />
                    </View>
                    <this.OnSubmission />
                </ScrollView>
            )
        }
    }

    OnSubmission = () =>{
        if(this.state.loadingSubmission){
            return <Spinner size="large" />
        }

        return (
            <View style={{alignItems: 'center'}}>
                <ButtonCustom
                    buttonStyle={LogInBtnStyles.smallButtonStyleFillPurple}
                    textStyle={LogInBtnStyles.textStyle}
                    onPress={() => this.onBookAppointment()}
                >
                {'Book It'}
                </ButtonCustom>
            </View>
        )
    }

    onBookAppointment = () => {
        this.setState({
            loadingSubmission: true
        })

        const {selectDt, providerId, staffMemberId, hour, minute, serviceId, note, token } = this.state
        
        if(selectDt && providerId && staffMemberId && hour && minute && serviceId){     
            var payload = {
                date: selectDt,
                note: note == undefined ? '' : note,
                providerId: providerId,
                staffMemberId: staffMemberId,
                time: hour + ":" + minute + ":00",
                serviceId: serviceId,
            }

            apis.insertAppointments(payload, token)
                .then((ap) => {
                    this.setState({
                        loadingSubmission: true
                    })
                    this.props.refreshAppointment('U', token)
                    this.onBookItComplete()
                })
                .catch((er) => {
                    this.setState({
                        loadingSubmission: true
                    })
                    this.SomethingWentWrong()
                })
        } else {
            this.setState({
                loadingSubmission: true
            })

            Alert.alert(
                'Warning',
                'One the following fields is not populated: shop, staffmember, service, note, time or date',
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
        }
    }

    SomethingWentWrong = () => {              
        Alert.alert(
            'Warning',
            'Something went wrong, sorry. Please try again later',
            [
                {text: 'OK ', onPress: () => { return null}}
            ]
        )
    }

    onBookItComplete = () => {
        Alert.alert(
            'Appointment',
            'This appointment has been successfully Create',
            [
                {text: 'OK ', onPress:() => {
                    this.setState({
                        selectDt: '',
                        selectDtFormat: '',
                        userLocationInput: '',
                        providerList: [],
                        provider: '',
                        providerId: '',
                        hairDress: false,
                        barber: false ,
                        style: '',
                        selectStyle: '',
                        existAppointment: [],
                        hour:"12",
                        minute: "00",
                        period: 'AM',
                        serviceList: [],
                        serviceId: '',
                        staffList: [],
                        staffMemberId: '',
                        note: '',
                        loadingCal: false,
                        loadingBusiness: false,
                        loadingSubmission: false
                    })
                }}
            ]
        )
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
                        value={this.state.userLocationInput}
                        onChangeText={location => this.onLocationChange(location)}
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
        refreshAppointment: (type, token) => dispatch(getAppointment(type, token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateAppointment)