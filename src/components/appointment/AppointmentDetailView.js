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
    const { address, state, city, zipCode, profile, preference, token,
        replaceItem, item, onDisplay} = props  
    
    const onEditClick = () =>{
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
                item={item}
                address={address}
                city={city}
                state={state}
                zipCode={zipCode}
                profile={profile}
                preference={preference}
                token={token}
            />
        )
    } else {
        return (
            <AppointmentEditView
                onEditClick={onEditClick}
                item={item}
                address={address}
                city={city}
                state={state}
                zipCode={zipCode}
                profile={profile}
                preference={preference}
                token={token}
                replaceItem={replaceItem}
                onDisplay={onDisplay}
            />
        )
    }    
}

export { AppointmentDetailView }