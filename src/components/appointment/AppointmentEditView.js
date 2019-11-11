import React, {useState} from 'react'
import { View, Text} from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import CalendarPicker from 'react-native-calendar-picker'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'

/**
 * Calender 
 * @param {*} props 
 */
const Calendar = (props) => {
    const minDate = new Date()
    const maxDate = date.addMonths(new Date(), 2);
    const { status, setStartDt } = props
    
    onDateChange = (date_, type) => {
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
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const [startDt, setStartDt] = useState(date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY'))
    const [hours, setHr] = useState(timeHours)
    const [selectMin, setSelectMin] = useState(0)
    const [time, setTime] = useState('10:00')

    // onTimeChg = (hours, minutes) => {
    //     setSelectHr(hours)
    //     setSelectMin(minutes)

    //     var time = hours.toString() + ':' + minutes.toString()

    //     setTime(time)

    //     console.log('onTimeChg', time)
    // }

    const timeHours = () => {
        var ret = []

        for(var i = 0; i <= 60; i++){
            var hour = i < 10 ? '0' + i.toString() : i.toString()
            ret.push(hour)
        }

        return timeHours
    }

    
    return (
        <View style={styles.Row,{justifyContent: 'center'}}>
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
                        <Text style={{ color: '#724FFD'}}>{'Time:'}</Text>
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