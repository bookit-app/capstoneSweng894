import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/PrefResult.styles'
import { InputCustom } from '../common'

const PrefResult = (props) => {
    return (
        <View>
            <View style={styles.Column}>
                <Text style={styles.subHeaderText}>{props.sectionHeader}</Text>
                <InputCustom
                    placeholder="i.e. New York, New York"
                    label="City, State "
                    value={props.cityState}
                    onChangeText={props.onCityStateChge}
                    error={props.errorCityState}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    containerStyle={styles.containerStyle}
                    textAlign="left"
                />
                <InputCustom
                    placeholder="i.e. Barber"
                    label="Style "
                    value={props.styleOn}
                    onChangeText={props.onStyleChge}
                    error={props.errorStyle}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    containerStyle={styles.containerStyle}
                    textAlign="left"
                />
                <View style={styles.RowBtn}>
                    <InputCustom
                        placeholder="i.e. 15"
                        label="Day "
                        value={props.day}
                        onChangeText={props.onDayChge}
                        error={props.errorDay}
                        inputStyle={styles.inputStyle}
                        labelStyle={styles.labelStyle}
                        containerStyle={styles.containerStyle}
                        textAlign="left"
                    />
                    <InputCustom
                        placeholder="i.e. 20:23"
                        label="Time "
                        value={props.time}
                        onChangeText={props.onTimeChge}
                        error={props.errorTime}
                        inputStyle={styles.inputStyle}
                        labelStyle={styles.labelStyle}
                        containerStyle={styles.containerStyle}
                        textAlign="left"
                    />
                </View>
            </View>
        </View>
    )
}

export { PrefResult }