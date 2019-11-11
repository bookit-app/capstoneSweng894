import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/PrefResult.styles'
import { InputCustom } from '../common'
import { CustomPicker } from 'react-native-custom-picker'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const renderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            <View style={styles.containerStyle}>
            {!selectedItem && <Text style={styles.inputStyle, { color: 'grey' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={styles.inputStyle}>
                    <Text>
                        {getLabel(selectedItem)}
                    </Text>
                    <Text/>{/* Not necessary but makes the form match City, State may want to remove  */}
                </View>
            )}
            </View>
        </View>
    )
}

/**
 * Preference - Results of User peferences (bad name)
 * @param {*} props 
 */
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
                        fieldTemplate={renderPickerField}
                        options={props.onStyleTypeItems}
                        onValueChange={props.onStyleTypeChge}
                        defaultValue={"i.e. Fade"}
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
                        fieldTemplate={renderPickerField}
                        options={props.onDayItems}
                        onValueChange={props.onDayChge}
                        defaultValue={"i.e. Monday"}
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
                        fieldTemplate={renderPickerField}
                        options={props.onTimeItems}
                        onValueChange={props.onTimeChge}
                        defaultValue={"i.e. Morning"}
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