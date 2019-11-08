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
            var address = utilites.isEmpty(this.props.item.styleAddress.streetAddress) ? '' : this.props.item.styleAddress.streetAddress
            var city = utilites.isEmpty(this.props.item.styleAddress.city) ? '' : this.props.item.styleAddress.city
            var state = utilites.isEmpty(this.props.item.styleAddress.state) ? '' : this.props.item.styleAddress.state
            var zipCode = utilites.isEmpty(this.props.item.styleAddress.zipCode) ? '' : this.props.item.styleAddress.zipCode
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
                    stylist={this.props.item.stylist}
                    serviceList={this.props.item.style == "FADE" ? "Barber" : this.props.item.style == "UPDO" ? "Hair Dresser" : this.props.item.style}
                    address={address}
                    city={city}
                    state={state}
                    zipCode={zipCode}
                />
            </Modal>
        )
    }
}

export default AppointmentDetail