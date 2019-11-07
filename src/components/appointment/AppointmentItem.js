import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'
import date from 'date-and-time';
import 'date-and-time/plugin/ordinal'

import styles from '../styles/General.styles'

const AppointmentItem = (props) => {
    date.plugin('ordinal');
    
    return (
        <View>
            <TouchableOpacity onPress={props.onClick}>
                <View style={styles.Row}>
                    <View style={styles.Row}>
                        <View style={{justifyContent: 'center', paddingStart: 10, paddingEnd: 1}}>
                            <Image
                                style={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 25
                                }}
                                source={require('../../image/Placeholder150.png')}
                            />  
                        </View>
                    </View>
                    <View style={styles.Column}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={{color: '#724FFD'}}>{props.shopName}</Text>
                            <Text style={{color: '#724FFD'}}>{props.service}</Text>
                        </View>
                    </View>
                    <View style={styles.Column}>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text style={{color: '#724FFD'}}>{date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD')+ '|' + props.time}</Text>
                            <Text style={{color: '#724FFD'}}>{props.status}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      
    )
}

export {AppointmentItem}