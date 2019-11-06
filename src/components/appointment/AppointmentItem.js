import React from 'react'
import {View, Image, Text, TouchableOpacity } from 'react-native'

import styles from '../styles/General.styles'

const AppointmentItem = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onClick}>
                <View style={styles.Row}>
                    <View style={styles.Row}>
                        <View style={{justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 25
                                }}
                                source={require('../../image/Placeholder150.png')}
                            />  
                        </View>
                        <View style={styles.Column}>
                            <View style={{alignItems:'flex-start', width: 'auto'}}>
                                <Text>{props.shopName}</Text>
                                <Text>{props.service}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Column}>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Text>{props.dateTime}</Text>
                            <Text>{props.status}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      
    )
}

export {AppointmentItem}