import React, { useState, useEffect } from 'react'
import api from '../../api'
import { View, Text } from 'react-native'
import styles from '../styles/PrefChoice.styles'
import { ButtonCustom } from '../common'

const PrefChoice = (props) => {
    const [btnSelected, setBtnSelected] = useState(props.pick)

    return (
        <View>
            <View style={styles.Column}>
                <Text style={styles.subHeaderText}>{props.sectionHeader}</Text>
                <View style={styles.Row}>
                    <ButtonCustom
                        onPress={() => {
                            setBtnSelected(!btnSelected)
                            props.onClassificationSelect(props.opt1)
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