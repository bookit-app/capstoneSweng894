import React from 'react'
import { Modal } from 'react-native'
import utilites from '../../utilites'
import { AppointmentDetailView } from '../../components/appointment'

/**
 * Appointment Detail page
 */
class AppointmentDetail extends React.Component {
    render(){                       
        if(!utilites.isEmpty(this.props.item.styleAddress)){
            var address = this.props.item.styleAddress.streetAddress
            var city = this.props.item.styleAddress.city
            var state = this.props.item.styleAddress.state
            var zipCode = this.props.item.styleAddress.zipCode
    } else {
            var address = ''
            var city = ''
            var state = ''
            var zipCode = ''
        }

        console.log('AppointmentDetail', this.props.item);
        
        return (
            <Modal visible={this.props.display} animationType='fade'>
                <this.props.onClose/>
                <AppointmentDetailView
                    edit={false}
                    item={this.props.item}
                    address={address}
                    city={city}
                    state={state}
                    zipCode={zipCode}
                    profile={this.props.profile}
                    token={this.props.token}
                    replaceItem={this.props.replaceItem}
                    onDisplay={this.props.onDisplay}
                />
            </Modal>
        )
    }
}

export default AppointmentDetail