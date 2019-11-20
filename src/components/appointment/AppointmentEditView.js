import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, Alert} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import CustomInputStyles from '../styles/CustomInputStyles'
import _date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import { Time, Calendar, Status, BusinessName, Stylist, Service } from './index'
import { InputCustom, ButtonCustom, Spinner } from '../common'
import utilites from '../../utilites'
import LoginButton from '../styles/LoginButton.styles'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'
import { StateList, StatusList } from '../../constant'

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
    const [status_, setStatus] = useState(StatusList.filter(i => i.Value == code.trim())[0].Name)
    const [appState, setAppState] = useState(StateList.filter(i => i.Value == state.trim())[0].Name )
    const [comment_, setComment] = useState(comment)
    const [error, setError] = useState('')
    const [errorOnSubmission, setErrorOnSubmission] = useState('')
    const [loading, setLoading] = useState(false)
    const constHours = utilites.TimeGene(12).filter(a => a.Value >= 1 && a.Value <= 12).map(b => b.Name)
    const [existAppointments, setExistAppointments] = useState([])
    const [eaLoading, seteaLoading] = useState(true)
    const [isTimeValid, setIsTimeValid] = useState(true)

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
                allAppointmentForProvider.map(({date, time}) => ({date, time}))
                var aap = []

                for (let index = 0; index < allAppointmentForProvider.length; index++) {
                    var element = {};
                    element.time = allAppointmentForProvider[index].time 
                    element.date = allAppointmentForProvider[index].date
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
                console.log('searchAppointmentByFilter failure', err);
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
            payload.status.code = code_
        }

        if(comment_){
            payload.status.comment = comment_
        }

        payload.time = time_
    
        // console.log('updateAppointment', payload);
        // console.log('updateAppointment', appointmentId);
          
        if(isListValid(date_, time_)){
            setErrorOnSubmission("This appointment slot is already booked " + date_ + " at " + time_)
            setLoading(false)
        } else {
            api.updateAppointmentById(payload, appointmentId, token)
            .then((app) => {
                var oldItem = item

                var newItem = Object.assign({}, item)
                newItem.date = startNonDt
                newItem.note = note
                newItem.state = state_
                newItem.status = {
                    "code": code_,
                    "comment": comment_
                }
                newItem.time = time_
                
                replaceItem(newItem, oldItem, listType)
                setLoading(false)
            })
            .catch((err) => {
                setErrorOnSubmission(err.message)
                setLoading(false)
            })
        }
    }

    const onSelectingSameDateTime = (date, dateFormat, time) => {
        // console.log('onDateChange', date);
        // console.log('onDateChange', time);
        // var list = Object.assign([], existAppointments.filter(ea => ea.date == date && ea.time == time))
        // console.log('onDateChange', list)
        
        if(isListValid(date, time)){
            Alert.alert(
                'Appointment',
                'This appointment slot is already booked '+dateFormat + ' at  ' + time,
                [
                    {text: 'OK ', onPress: () => { return null}}
                ]
            )
            setIsTimeValid(false)
        } else {
            setIsTimeValid(true)
        }
    }

    function isListValid(date, time){
        var list = Object.assign([], existAppointments.filter(ea => ea.date == date && ea.time == time))
        console.log('onDateChange', list)
        
        return list.length >= 1
    }

    const onDateChange = (date_, type) => {
        var selectedDte =  moment(date_).format('YYYY-MM-DD')
        var selectedDteFormat = moment(date_).format('MMM Do YYYY')
        var selectedTime = hour + ":" + minute + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)

        if(isTimeValid){
            setStartDt(selectedDteFormat)
            setStartNonDt(selectedDte)
            setErrorOnSubmission('')
        }
    }

    const onHourChange = (hour) => {
        var selectedDte = startNonDt
        var selectedDteFormat = startDt
        var selectedTime = hour + ":" + minute + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        
        if(isTimeValid){
            setHour(hour)
            setErrorOnSubmission('')
        }
    }

    const onMinuteChange = (minute) => {
        var selectedDte = startNonDt
        var selectedDteFormat = startDt
        var selectedTime = hour + ":" + minute + ":00"

        onSelectingSameDateTime(selectedDte, selectedDteFormat, selectedTime)
        
        if(isTimeValid){
            setMinute(minute)
            setErrorOnSubmission('')
        }
    }

    const OnUpdateBtnClick = () => {
        if(loading){
            return <Spinner size='small' />
        }

        return (  
            <View style={{alignItems: 'center'}}>
                <View style={styles.Column}>
                    <Text style={CustomInputStyles.error}>
                        {errorOnSubmission}
                    </Text>
                </View>
                <ButtonCustom
                    onPress={updateAppointment}
                    buttonStyle={LoginButton.buttonStyle}
                    textStyle={LoginButton.textStyle}
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
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Time:'}</Text>
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
                    state={appState}
                    existAppointments={existAppointments}
                    listType={listType}
                    onDateChange={(d,t) => onDateChange(d,t)}
                />
                <OnUpdateBtnClick />
            </View>
        </ScrollView>
    )
}

export {AppointmentEditView}