import React, {useState} from 'react'
import { AppointmentView, AppointmentEditView } from '../appointment'
import { ButtonCustom } from '../common'
import LoginButton from '../styles/LoginButton.styles'

/**
 * Appointment Detail View - handle switch between edit and read-only view of appointment details
 * @param {*} props 
 */
const AppointmentDetailView = (props) => {
    const [editable, setEditable] = useState(false)
    const {date, time, status, businessName, stylist, service, address, 
        state, city, zipCode, profile, preference, token, providerId, 
        comment, note} = props    

    onEditClick = () =>{
        return (
            <ButtonCustom
                onPress={() => setEditable(!editable)}
                buttonStyle={LoginButton.buttonStyle}
                textStyle={LoginButton.textStyle}
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
                providerId={providerId}
                stylist={stylist}
                service={service}
                address={address}
                city={city}
                state={state}
                zipCode={zipCode}
                profile={profile}
                preference={preference}
                token={token}
                comment={comment}
                note={note}
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
                providerId={providerId}
                stylist={stylist}
                service={service}
                address={address}
                city={city}
                state={state}
                zipCode={zipCode}
                profile={profile}
                preference={preference}
                token={token}
                comment={comment}
                note={note}
            />
        )
    }    
}

export { AppointmentDetailView }