import React, {useState} from 'react'
import { View, Text} from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'

const AppointmentEditView = (props) => {
    const [startDt, setStartDt] = useState('')
    const [endDt, setEndDt] = useState('')
    const minDate = new Date()
    const maxDate = new Date(2020, 10, 11);
    
    onDateChange = (date, type) => {
        if(type == 'END_DATE'){
            setEndDt(date)
        } else {
            setStartDt(date)
            setEndDt(null)
        }
    }

    return (
        <View style={styles.Row}>
            <View>
                <View style={{alignItems: 'flex-start'}}>
                    <Text>{'AppointmentEditView'}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>  
                    <props.onEditClick/>
                </View>
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
                <View>
                    <Text>{'Selected Date:'+startDt}</Text>
                </View>
            </View>
        </View>
    )
}

export {AppointmentEditView}