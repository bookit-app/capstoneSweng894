import React from 'react'
import { View } from 'react-native'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import moment from 'moment'
import CalendarPicker from 'react-native-calendar-picker'

/**
 * Calender 
 * @param {*} props 
 */
const Calendar = (props) => {
    const minDate = new Date()
    const maxDate = date.addMonths(new Date(), 2);
    const { status, setStartDt, appDt } = props
    
    const onDateChange = (date_, type) => {
        setStartDt(moment(date_).format('MMM Do YYYY'))
    }

    if(status){
        return (
            <View/>
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

export {Calendar}