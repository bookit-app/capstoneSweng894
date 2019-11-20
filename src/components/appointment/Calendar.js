import React from 'react'
import { View } from 'react-native'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import CalendarPicker from 'react-native-calendar-picker'

/**
 * Calender 
 * @param {*} props 
 */
const Calendar = (props) => {
    const minDate = new Date()
    const maxDate = date.addMonths(new Date(), 2);
    const { state, existAppointments, listType, onDateChange } = props

    if(state.toUpperCase() != "BOOKED" || listType.toUpperCase().trim() == "PREVIOUS"){
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
                    customDatesStyles={existAppointments}
                />
            </View>
        )
    }
}

export {Calendar}