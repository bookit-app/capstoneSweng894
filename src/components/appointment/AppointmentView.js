import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'

/**
 * Appointment View -  readonly view
 * @param {*} props 
 */
const AppointmentView = (props) => {    
    
    return (
        <View style={styles.Column, {paddingTop: 15}}>
            <View style={styles.Column}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Date:'}</Text>
                        <Text>{date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY')}</Text>
                    </View>
                    <View style={{paddingEnd: 5}}>   
                        <props.onEditClick/>
                    </View>
                </View>
                <View style={styles.Row}>
                    <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Time:'}</Text>
                    <Text>{props.time}</Text>
                </View>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                <Text>{props.status}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                <Text>{props.businessName}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                <Text>{props.stylist}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Service:'}</Text>
                <Text>{props.service}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Address:'}</Text>
                <View style={styles.Column}>
                    <Text>{props.address}</Text>
                    <Text>{props.city+" "+props.state+" "+props.zipCode}</Text>
                </View>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Note:'}</Text>
                <Text>{props.note}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Comment:'}</Text>
                <Text>{props.comment}</Text>
            </View>
        </View>
    )
}

export {AppointmentView}