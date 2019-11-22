import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'
import { StateList, StatusList } from '../../constant'

/**
 * Appointment View -  readonly view
 * @param {*} props 
 */
const AppointmentView = (props) => {    
    const { item } = props
    const { state, status, businessName, staffMemberName, style, note, time } = item
    const { comment, code } = status
    
    return (
        <View style={styles.Column, {paddingTop: 15}}>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'State:'}</Text>
                <Text>{StateList.filter(i => i.Value == state.trim())[0].Name}</Text>
            </View>
            <View style={styles.Column}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Date:'}</Text>
                        <Text>{date.format(date.parse(props.item.date, 'YYYY-MM-DD'), 'MMM DDD YYYY')}</Text>
                    </View>
                    <View style={{paddingEnd: 5}}>   
                        <props.onEditClick/>
                    </View>
                </View>
                <View style={styles.Row}>
                    <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Time:'}</Text>
                    <Text>{time}</Text>
                </View>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                <Text>{StatusList.filter(i => i.Value == code.trim())[0].Name}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                <Text>{businessName}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                <Text>{staffMemberName}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Service:'}</Text>
                <Text>{style}</Text>
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
                <Text>{note}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Comment:'}</Text>
                <Text>{comment}</Text>
            </View>
        </View>
    )
}

export {AppointmentView}