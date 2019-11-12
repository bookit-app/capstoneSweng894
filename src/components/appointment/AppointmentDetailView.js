import React, {useState} from 'react'
import { View } from 'react-native'
import { AppointmentView, AppointmentEditView } from '../appointment'

import { ButtonCustom } from '../common'

/**
 * Appointment Detail View - handle switch between edit and read-only view of appointment details
 * @param {*} props 
 */
const AppointmentDetailView = (props) => {
    const [editable, setEditable] = useState(false)
    const {date, time, status, businessName, stylist, serviceList, address, state, city, zipcode, profile, preference, token} = props

    onEditClick = () =>{
        return (
            <ButtonCustom
                onPress={() => setEditable(!editable)}
            >
                {'Edit'}
            </ButtonCustom>
        )
    }  

    if(!editable){
        return (
            <AppointmentView
                onEditClick={onEditClick}
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
                profile={profile}
                preference={preference}
                token={token}
            />
        )
    } else {
        return (
            <AppointmentEditView
                onEditClick={onEditClick}
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
                profile={profile}
                preference={preference}
                token={token}
            />
        )
    }    
}

export { AppointmentDetailView }