import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Alert} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import CustomInputStyles from '../styles/CustomInputStyles'
import newStyle from '../../components/styles/LogInBtn.styles'
import _date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import { Time, Calendar, Status } from './index'
import { InputCustom, ButtonCustom, Spinner } from '../common'
import utilites from '../../utilites'
import LoginButton from '../styles/LoginButton.styles'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'
import { StateList, StatusList, Period } from '../../constant'

/**
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const {token, replaceItem, item, onDisplay } = props    
    const {state, status, businessName, staffMemberName, style, note, date, time, appointmentId, listType, providerId} = item
    const {code, comment } = status

    const [startDt, setStartDt] = useState(_date.format(_date.parse(date, 'YYYY-MM-DD'), 'MMM DDD YYYY'))
    const [startNonDt, setStartNonDt] = useState(_date.format(_date.parse(date, 'YYYY-MM-DD'), 'YYYY-MM-DD'))
    const [hour, setHour] = useState(time.toString().split(':')[0])
    const [minute, setMinute] = useState(time.toString().split(':')[1])
    const [period, setPeriod] = useState(time.toString().split(':')[0] >= 9 && time.toString().split(':')[0] < 12 ? "am" : "pm")
    const [status_, setStatus] = useState(StatusList.filter(i => i.Value == code.trim())[0].Name)
    const [appState, setAppState] = useState(StateList.filter(i => i.Value == state.trim())[0].Name )
    const [comment_, setComment] = useState(comment)
    const [error, setError] = useState('')
    const [errorOnSubmission, setErrorOnSubmission] = useState('')
    const [loading, setLoading] = useState(false)
    const constHours = utilites.TimeGene(12).filter(a => a.Value >= 1 && a.Value <= 12).map(b => b.Name)
    const [existAppointments, setExistAppointments] = useState([])
    const [eaLoading, seteaLoading] = useState(true)

    useEffect(() => {
        seteaLoading(true)
        var payload = {
            providerId: providerId
        }

        // console.log('useEffect', payload);

        var filter = utilites.filterGenerate(payload)
        api.searchAppointmentByFilter(filter, token)
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
                // console.log('useEffect', aap);
                
                setExistAppointments(aap)
                seteaLoading(false)
            })
            .catch((err) => {
                Alert.alert(
                    'Warning',
                    'Something went wrong, sorry. Please try again later',
                    [
                        {text: 'OK ', onPress: () => { return null}}
                    ]
                )
                seteaLoading(false)
            })
    },[providerId])

    const updateAppointment = () =>{
        setLoading(true)
        var date_ = startNonDt
        var state_ = StateList.filter(i => i.Name == appState.trim())[0].Value
        var code_ = StatusList.filter(i => i.Name == status_.trim())[0].Value
        var time_ = hour + ':' + minute + ':00'
        
        const payload = {}

        payload.date = date_
        payload.note = note

        if(state_ != 'BOOKED'){
            payload.state = state_
        }

        if(code_){
            payload.status = {
                code: code_
            }
        }

        if(comment_){
            payload.status = {
                comment: comment_
            }
        }

        payload.time = time_
          
        // console.log('updateAppointment', period);
        // console.log('updateAppointment', time);
        
        if(isNotListValid(date_, time_)){
            setErrorOnSubmission("This appointment slot is already booked " + date_ + " at " + time_)
            setLoading(false)
        } else if(isNotValidTimePeriod(period, time_)){
            setErrorOnSubmission("This appointment time is outside operation business hour on " + date_ + " at " + time + " " + period)
            setLoading(false)
        } else {
            api.updateAppointmentById(payload, appointmentId, token)
            .then((app) => {                
                setLoading(false)
                onCompletionUpdate()
            })
            .catch((err) => {
                setErrorOnSubmission(err.message)
                setLoading(false)
            })
        }
    }

    const onCompletionUpdate = () => {
        Alert.alert(
            'Appointment',
            'This appointment has been successfully updated',
            [
                {text: 'OK ', onPress:() => {return onDisplay()}}
            ]
        )
    }

    const onSelectingSameDateTime = (date, dateFormat, time) => {        
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
    const isNotListValid = (date, time) => {
        var list = Object.assign([], existAppointments
            .filter(ea => ea.date == date 
                && ea.time == time 
                && ea.appointmentId != appointmentId))
        // console.log('onDateChange', list)
        
        return list.length >= 1
    }

    const onSelectingTimeValid = (period, dateFormat, time) => {
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
    const isNotValidTimePeriod = (pe, tm) => {
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

    const isCalendarDispaly = () => {
        if(appState.toUpperCase() != "BOOKED" || listType.toUpperCase().trim() == "PREVIOUS"){
            return true
        } else {
            return false
        }
    }

    const onDateChange = (date_, type) => {
        var selectedDte =  moment(date_).format('YYYY-MM-DD')
        var selectedDteFormat = moment(date_).format('MMM Do YYYY')
        var selectedTime = hour + ":" + minute + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        onSelectingTimeValid(period, selectedDteFormat, selectedTime)

        setStartDt(selectedDteFormat)
        setStartNonDt(selectedDte)
        setErrorOnSubmission('')
    }

    const onHourChange = (hr) => {
        var selectedDte = startNonDt
        var selectedDteFormat = startDt
        var selectedTime = hr + ":" + minute + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        onSelectingTimeValid(period, selectedDteFormat, selectedTime)

        setHour(hr)
        setErrorOnSubmission('')
    }

    const onMinuteChange = (min) => {
        var selectedDte = startNonDt
        var selectedDteFormat = startDt
        var selectedTime = hour + ":" + min + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        onSelectingTimeValid(period, selectedDteFormat, selectedTime)
        
        setMinute(min)
        setErrorOnSubmission('')
    }

    const onPeriodChange = (pe) => {
        var selectedDteFormat = startDt
        var selectedTime = hour + ":" + minute + ":00"

        onSelectingTimeValid(pe, selectedDteFormat, selectedTime)
        
        setPeriod(pe)
        setErrorOnSubmission('')
    }

    const OnUpdateBtnClick = () => {
        if(loading){
            return <Spinner size='small' />
        }

        return (  
            <View style={{alignItems: 'center'}}>
                <View style={styles.Column, {alignItems: 'center'}}>
                    <Text style={CustomInputStyles.error}>
                        {errorOnSubmission}
                    </Text>
                </View>
                <ButtonCustom
                    onPress={updateAppointment}
                    buttonStyle={newStyle.smallButtonStylePurple}
                    textStyle={newStyle.whiteFillTextStyle}
                >
                    {'Update Appointment'}
                </ButtonCustom>
            </View>
        )
    }

    if(eaLoading){
        return <Spinner size='small' />
    }

    return (
        <ScrollView>
            <View style={styles.Row,{justifyContent: 'center', paddingTop: 15}}>
                <View style={styles.Column}>
                    <View style={styles.Row}>  
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'State:'}</Text>
                        <CustomPicker
                            defaultValue={"i.e. Booked"}
                            fieldTemplate={AppointmentRenderPickerField}
                            options={StateList.map(l => l.Name)}
                            onValueChange={l => {
                                setAppState(l)
                                setErrorOnSubmission('')
                            }}
                            value={appState}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.Row}>
                            <Text style={{color: '#724FFD', paddingStart: 5}}>{'Date:'}</Text>
                            <Text style={{paddingStart: 5}}>{startDt}</Text>
                        </View>
                        <View style={{paddingEnd: 5}}>    
                            <props.onEditClick/>
                        </View>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Time:'}</Text>
                        <Time
                            placeHour={hour}
                            defaultHour={hour}
                            optionsHour={constHours}
                            onHourChange={hr => onHourChange(hr)}
                            hour={hour}
                            placeMinute={minute}
                            defaultMinute={minute}
                            optionsMinute={utilites.TimeGene(60).map(a => a.Name)}
                            onMinuteChange={mn => onMinuteChange(mn)}
                            minute={minute}
                            placePeriod={period}
                            defaultPeriod={period}
                            optionsPeriod={Period.map(p => p.Name)}
                            onPeriodChange={p => onPeriodChange(p)}
                            period={period}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                        <Status
                            status={status_}
                            listType={listType}
                            onSetStatus={s => {
                                setStatus(s)
                                setErrorOnSubmission('')
                            }}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                        <Text>{businessName}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                        <Text>{staffMemberName}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Service:'}</Text>
                        <Text>{style}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Address:'}</Text>
                        <View style={styles.Column}>
                            <Text>{props.address}</Text>
                            <Text>{props.city + " " + props.state + " " + props.zipCode}</Text>
                        </View>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Note:'}</Text>
                        <Text>{note}</Text>
                    </View>
                    <View>
                        <InputCustom
                            placeholder="i.e. Comment"
                            label="Comment: "     
                            value={comment_}
                            onChangeText={c => {
                                setComment(c)
                                setErrorOnSubmission('')
                            }}
                            error={error}
                            inputStyle = {CustomInputStyles.inputStyleLeft}
                            containerStyle = {CustomInputStyles.containerStyleLeft}      
                            labelStyle = {{color: '#724FFD', paddingEnd: 5}}
                            errorStyle = {CustomInputStyles.error} 
                        />
                    </View>
                </View>
                <Calendar
                    existAppointments={existAppointments}
                    onDateChange={(d,t) => onDateChange(d,t)}
                    isCalendarDispaly={isCalendarDispaly}
                />
                <OnUpdateBtnClick />
            </View>
        </ScrollView>
    )
}

export {AppointmentEditView}