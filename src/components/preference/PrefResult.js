import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/PrefResult.styles'
import { InputCustom } from '../common'
import { CustomPicker } from 'react-native-custom-picker'

const PrefResult = (props) => {
    return (
        <View>
            <View style={styles.Column}>
                <Text style={styles.subHeaderText}>{props.sectionHeader}</Text>
                <InputCustom
                    placeholder="i.e. New York, New York"
                    label="City, State"
                    value={props.cityState}
                    onChangeText={props.onCityStateChge}
                    error={props.errorCityState}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    containerStyle={styles.containerStyle}
                    textAlign="left"
                />
                <View>
                    <CustomPicker
                        placeholder={"i.e. Fade"}
                        options={props.onStyleItems}
                        onValueChange={props.onStyleChge}
                        defaultValue={props.onStyleSelected}
                        value={props.onStyleSelected}
                    />
                </View>
                <View style={styles.RowBtn}>
                    <View>
                        <Text style={styles.labelStyle}>
                            {"Day "}
                        </Text>                        
                        <CustomPicker
                            placeholder={"i.e. 01"}
                            options={props.onDayItems}
                            onValueChange={props.onDayChge}
                            defaultValue={props.onDaySelected}
                            value={props.onDaySelected}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelStyle}>
                            {"Time "}
                        </Text>
                        <CustomPicker
                            placeholder={"i.e. Morning"}
                            options={props.onTimeItems}
                            onValueChange={props.onTimeChge}
                            defaultValue={props.onTimeSelected}
                            value={props.onTimeSelected}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export { PrefResult }