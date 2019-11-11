import React, {useState} from 'react'
import { View, Text, Platform} from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import CalendarPicker from 'react-native-calendar-picker'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import { CustomPicker } from 'react-native-custom-picker'
import {Time} from '../common'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const renderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            {!selectedItem && <Text style={{ color: 'grey', alignSelf: 'center' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={{alignSelf: 'center'}}>
                    <Text style={{alignSelf: 'center'}}>
                        {getLabel(selectedItem)}
                    </Text>
                </View>
            )}
        </View>
    )
}

/**
 * Calender 
 * @param {*} props 
 */
const Calendar = (props) => {
    const minDate = new Date()
    const maxDate = date.addMonths(new Date(), 2);
    const { status, setStartDt } = props
    
    const onDateChange = (date_, type) => {
        setStartDt(moment(date_).format('MMM Do YYYY'))
    }

    if(status){
        return (
            <View>
                <Text>{'Non-Calendar'}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={false}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={onDateChange}
                />
            </View>
        )
    }
}

/**
 * Generators the production time arraies based on limit
 * @param {*} limit 
 */
const TimeGene = (limit) => {
    var ret = []

    for(var i = 0; i <= limit; i++){
        var timeComponent = {
            Id: i,
            Name: i < 10 ? '0' + i.toString() : i.toString(),
            Value: i < 10 ? '0' + i.toString() : i.toString()
        }

        ret.push(timeComponent)
    }

    return ret
}

const StatusList = [
    {
        Id:0,
        Name: 'Early',
        Value: 'Early'
    },
    {
        Id:1,
        Name: 'On-Time',
        Value: 'On-Time'
    },
    {
        Id:2,
        Name: 'Late',
        Value: 'Late'
    }
]

/**
 * Status handler
 * @param {*} props 
 */
const StatusHandler = (props) => {
    const { status, onSetStatus} = props

    if(status) {
        <View>
            <Text>{'Status Can not be Change'}</Text>
        </View>
    } else {
        <View>
            <CustomPicker
                defaultValue={status}
                fieldTemplate={renderPickerField}
                options={StatusList.map(a => a.Name)}
                onValueChange={onSetStatus}
                value={status}
            />
        </View>
    }
}

/**
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const [startDt, setStartDt] = useState(date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY'))
    const [hour, setHour] = useState(props.time.toString().split(':')[0])
    const [minute, setMinute] = useState(props.time.toString().split(':')[1])
    const [status, setStatus] = useState(props.status)
    
    return (
        <View style={styles.Row,{justifyContent: 'center', paddingTop: 15}}>
            <View>
                <View style={styles.Column}>
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
                            optionsHour={TimeGene(24).map(a => a.Name)}
                            onHourChange={hr => setHour(hr)}
                            hour={hour}
                            placeMinute={minute}
                            defaultMinute={minute}
                            optionsMinute={TimeGene(60).map(a => a.Name)}
                            onMinuteChange={mn => setMinute(mn)}
                            minute={minute}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                        {/* <CustomPicker
                            defaultValue={status}
                            fieldTemplate={renderPickerField}
                            options={StatusList.map(a => a.Name)}
                            onValueChange={s => setStatus(s)}
                            value={status}
                        />
                        <StatusHandler
                            status={status}
                            onSetStatus={s => setStatus(s)}
                        /> */}
                    </View>
                </View>
                <Calendar
                    status={props.status}
                    setStartDt={setStartDt}
                />
            </View>
        </View>
    )
}

export {AppointmentEditView}