import React from 'react'
import { View } from 'react-native'
import { AppointmentView } from '../appointment'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'

/**
 * Appointment Detail View - handle switch between edit and read-only view of appointment details
 * @param {*} props 
 */
const AppointmentDetailView = (props) => {
    date.plugin('ordinal')

    if(!props.edit){
        const { date, time, status, businessName, stylist, serviceList, address, state, city, zipcode} = props
        return (
            <AppointmentView
                date={date}
                time={time}
                status={status}
                businessName={businessName}
                stylist={stylist}
                serviceList={serviceList}
                address={address}
                city={city}
                state={state}
                zipcode={zipcode}
            />
        )
    } else {
        return (
            <View />
        )
    }    
}

export { AppointmentDetailView }