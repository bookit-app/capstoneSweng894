import React, { useState, useEffect} from 'react'
import { Alert } from 'react-native'
import { AppointmentView, AppointmentEditView } from '../appointment'
import { ButtonCustom, Spinner } from '../common'
import LoginButton from '../styles/LoginButton.styles'
import newStyle from '../../components/styles/LogInBtn.styles'
import api from '../../api'

/**
 * Appointment Detail View - handle switch between edit and read-only view of appointment details
 * @param {*} props 
 */
const AppointmentDetailView = (props) => {
    const { address, state, city, zipCode, profile, preference, token,
        replaceItem, item, onDisplay} = props  

    const [loading, setLoading] = useState(true)
    const [editable, setEditable] = useState(false)
    const [street_, setStreet] = useState(address)
    const [state_, setState] = useState(state)
    const [city_, setCity] = useState(city)
    const [zipCode_, setZipCode] = useState(zipCode)
    
    useEffect(() => {
        const {providerId, serviceId}  = item
        api.getProviderDetails(providerId, token)
            .then((data) => {
                var provider = data.data
                var address = provider.address

                const {streetAddress, city, state, zip} = address
                setStreet(streetAddress)
                setCity(city)
                setState(state)
                setZipCode(zip)
                var services = provider.services.filter(i => i.serviceId == serviceId)[0]
                item.style = services.styleId == "FADE" ? "Barber" : services.styleId == "UPDO" ? "Hair Dresser" : services.styleId
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                Alert.alert(
                    'Warning',
                    'Something went wrong, sorry. Please try again later',
                    [
                        {text: 'OK ', onPress: () => { return null}}
                    ]
                )
            })
    },[item])

    const onEditClick = () =>{
        return (
            <ButtonCustom
                onPress={() => setEditable(!editable)}
                buttonStyle={LoginButton.editButtonStyle}
                textStyle={LoginButton.editTextStyle}
            >
                {'Edit'}
            </ButtonCustom>
        )
    } 

    if(loading){
        return <Spinner size="small" />
    }

    if(!editable){
        return (
            <AppointmentView
                onEditClick={onEditClick}
                item={item}
                address={street_}
                city={city_}
                state={state_}
                zipCode={zipCode_}
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
                address={street_}
                city={city_}
                state={state_}
                zipCode={zipCode_}
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