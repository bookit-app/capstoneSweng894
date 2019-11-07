import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Spinner } from '../../components/common'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'

import styles from '../styles/AppointmentDashboard.styles'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
const DetailView = (props) =>{        
    date.plugin('ordinal');

    if(!props.edit){
        const { date, time, status, businessName, stylist, serviceList, address} = props
        
        return (
            <View style={styles.Column}>
                <View style={styles.Column}>
                    {/* <Text>{'Date:'}{date.format(date.parse(this.state.details.date, 'MM-DD-YYYY'), 'MMM DDD, YYYY')}</Text> */}
                    <View style={styles.Row}>
                        <Text>{'Date:'}</Text>
                        <Text>{date}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text>{'Time:'}</Text>
                        <Text>{time}</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <Text>{'Status:'}</Text>
                    <Text>{status}</Text>
                </View>
                <View style={styles.Row}>
                    <Text>{'Shop Name:'}</Text>
                    <Text>{businessName}</Text>
                </View>
                <View style={styles.Row}>
                    <Text>{'Stylist:'}</Text>
                    <Text>{stylist}</Text>
                </View>
                <View style={styles.Row}>
                    <Text>{'Services:'}</Text>
                    <Text>{serviceList}</Text>
                </View>
                <View style={styles.Row}>
                    <Text>{'Address:'}</Text>
                    <View style={styles.Column}>
                        <Text>{address}</Text>
                        {/* <Text>{'Oxford, PA 19352'}</Text> */}
                    </View>
                </View>
            </View>
        )

    } else {
        return (
            <View />
        )
    }
}

class AppointmentDetail extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            details: {}
        }
    }

    componentDidMount(){
        const { navigation } = this.props
        
        this.setState({
            details: navigation.getParam('item', {})
        })
    }

    render(){        
        return (
            <DetailView
                edit={false}
                date={this.state.details.date}   
                time={this.state.details.time}
                status={this.state.details.status}
                businessName={this.state.details.businessName}
                stylist={'Jennifer Creed'}
                serviceList={this.state.details.style == "FADE" ? "Barber" : this.state.details.style == "UPDO" ? "Hair Dresser" : this.state.details.style}
                address={'1570 Baltimore Pike,Oxford, PA 19352'}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingProfile: state.profile.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentDetail)