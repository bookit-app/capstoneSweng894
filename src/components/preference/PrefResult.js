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
                    errorStyle={styles.errorTextStyle}
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                    containerStyle={styles.containerStyle}
                />
                <View>
                    <Text style={styles.labelStyle}>
                        {"Style "}
                    </Text>    
                    <CustomPicker
                        placeholder={"i.e. Fade"}
                        options={props.onStyleTypeItems}
                        onValueChange={props.onStyleTypeChge}
                        defaultValue={props.onStyleTypeSelected}
                        value={props.onStyleTypeSelected}
                    />
                    <Text style={styles.errorTextStyle}>{props.errorStyleType}</Text>
                </View>
                <View>
                    <Text style={styles.labelStyle}>
                        {"Day of the Week "}
                    </Text>                        
                    <CustomPicker
                        placeholder={"i.e. Monday"}
                        options={props.onDayItems}
                        onValueChange={props.onDayChge}
                        defaultValue={props.onDaySelected}
                        value={props.onDaySelected}
                    />
                    <Text style={styles.errorTextStyle}>{props.errorDay}</Text>
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
                    <Text style={styles.errorTextStyle}>{props.errorTime}</Text>
                </View>
            </View>
            <Text style={styles.errorFormTextStyle}>{props.formError}</Text>
        </View>
    )
}

export { PrefResult }