import React from 'react'
import { Modal } from 'react-native'
import { AppointmentDetailView } from '../../components/appointment'

/**
 * Appointment Detail page
 */
const AppointmentDetail = ({ display, OnClose, item, profile, token, replaceItem, onDisplay }) =>{
    return (
        <Modal visible={display} animationType='fade'>
            <OnClose/>
            <AppointmentDetailView
                edit={false}
                item={item}
                profile={profile}
                token={token}
                replaceItem={replaceItem}
                onDisplay={onDisplay}
            />
        </Modal>
    )
}

export default AppointmentDetail