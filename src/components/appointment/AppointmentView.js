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
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5, marginTop: 20}}>{'State:'}</Text>
                <Text style={{marginTop:20}}>{StateList.filter(i => i.Value == state.trim())[0].Name}</Text>
            </View>
            <View style={styles.Column}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5, marginTop: 20}}>{'Date:'}</Text>
                        <Text style={{marginTop: 20}}>{date.format(date.parse(props.item.date, 'YYYY-MM-DD'), 'MMM DDD YYYY')}</Text>
                    </View>
                    <View style={{paddingEnd: 5}}>   
                        <props.onEditClick/>
                    </View>
                </View>
                <View style={styles.Row}>
                    <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Time:'}</Text>
                    <Text style={{marginTop: 20}}>{time}</Text>
                </View>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5, marginTop: 20}}>{'Status:'}</Text>
                <Text style={{marginTop: 20}}>{StatusList.filter(i => i.Value == code.trim())[0].Name}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Shop Name:'}</Text>
                <Text style={{marginTop: 20}}>{businessName}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Stylist:'}</Text>
                <Text style={{marginTop: 20}}>{staffMemberName}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Service:'}</Text>
                <Text style={{marginTop: 20}}>{style}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Address:'}</Text>
                <View style={styles.Column}>
                    <Text style={{marginTop: 20}}>{props.address}</Text>
                    <Text>{props.city+" "+props.state+" "+props.zipCode}</Text>
                </View>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Note:'}</Text>
                <Text style={{marginTop: 20}}>{note}</Text>
            </View>
            <View style={styles.Row}>
                <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5,marginTop: 20}}>{'Comment:'}</Text>
                <Text style={{marginTop: 20}}>{comment}</Text>
            </View>
        </View>
    )
}

export {AppointmentView}