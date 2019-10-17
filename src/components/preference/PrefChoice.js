import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/PrefChoice.styles'
import { ButtonCustom } from '../common'

const PrefChoice = (props) => {
    const [btnSelected, setBtnSelected] = useState(true)

    return (
        <View>
            <View style={styles.Column}>
                <Text style={styles.subHeaderText}>{props.sectionHeader}</Text>
                <View style={styles.Row}>
                    <ButtonCustom
                        onPress={() => {
                            setBtnSelected(!btnSelected)
                            props.result = props.opt1
                        }}
                        buttonStyle={btnSelected ? styles.btnNotSelected : styles.btnSelected}
                        textStyle={btnSelected ? styles.txtNotSelected : styles.txtSelected}
                    >
                        {props.opt1}
                    </ButtonCustom>
                    <ButtonCustom
                        onPress={() => {
                            setBtnSelected(!btnSelected)
                            props.result = props.opt2
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