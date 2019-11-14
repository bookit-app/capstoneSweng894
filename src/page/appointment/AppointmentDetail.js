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

        return (
            <Modal visible={this.props.display} animationType='fade'>
                <this.props.onClose/>
                <AppointmentDetailView
                    edit={false}
                    date={this.props.item.date}   
                    time={this.props.item.time}
                    status={this.props.item.status}
                    businessName={this.props.item.businessName}
                    providerId={this.props.item.providerId}
                    stylist={this.props.item.stylist}
                    service={this.props.item.style}// == "FADE" ? "Barber" : this.props.item.style == "UPDO" ? "Hair Dresser" : this.props.item.style}
                    address={address}
                    city={city}
                    state={state}
                    zipCode={zipCode}
                    profile={this.props.profile}
                    token={this.props.token}
                    comment={this.props.item.comment}
                    note={this.props.item.note}
                />
            </Modal>
        )
    }
}

export default AppointmentDetail