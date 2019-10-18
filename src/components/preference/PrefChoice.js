import React, { useState, useEffect } from 'react'
import api from '../../api'
import { View, Text } from 'react-native'
import styles from '../styles/PrefChoice.styles'
import { ButtonCustom } from '../common'

const PrefChoice = (props) => {
    const [btnSelected, setBtnSelected] = useState(true)
    const [hairStyles, setHairStyles] = useState([])
    const [barberStyles, setBarberStyles] = useState([])

    useEffect(
        () => {
            api.getConfiguration("styles", props.token)
                .then((sty) => {
                    var styles_ = sty.data 

                    var hairDresserList = []
                    styles_.hairStyles[1].types.map(i => {
                        console.log('hairDresserList', i);
                        
                        var single = {}
                        single['Name'] = i,
                        single['Value'] = i,
                        single['style'] = 'UPDO',
                        single['type'] = i
                        single['Id'] = hairDresserList.length
                        hairDresserList.push(single)
                    })
                    setHairStyles(hairDresserList)

                    var barberList = []
                    styles_.hairStyles[0].types.map(i => {
                        console.log('barberList', i);
                        
                        var single = {}
                        single['Name'] = i,
                        single['Value'] = i,
                        single['style'] = 'FADE',
                        single['type'] = i
                        single['Id'] = barberList.length
                        barberList.push(single)
                    })
                    setBarberStyles(barberList)
                })
        },[props.token]
    )

    return (
        <View>
            <View style={styles.Column}>
                <Text style={styles.subHeaderText}>{props.sectionHeader}</Text>
                <View style={styles.Row}>
                    <ButtonCustom
                        onPress={() => {
                            setBtnSelected(!btnSelected)
                            props.onClassificationSelect(props.opt1)
                            props.onStyleListSelect(hairStyles)
                        }}
                        buttonStyle={btnSelected ? styles.btnNotSelected : styles.btnSelected}
                        textStyle={btnSelected ? styles.txtNotSelected : styles.txtSelected}
                    >
                        {props.opt1}
                    </ButtonCustom>
                    <ButtonCustom
                        onPress={() => {
                            setBtnSelected(!btnSelected)
                            props.onClassificationSelect(props.opt2)
                            props.onStyleListSelect(barberStyles)
                        }}
                        buttonStyle={btnSelected ? styles.btnSelected : styles.btnNotSelected}
                        textStyle={btnSelected ? styles.txtSelected : styles.txtNotSelected}
                    >
                        {props.opt2}
                    </ButtonCustom>
                </View>
            </View>
        </View>
    )
}

export {PrefChoice}