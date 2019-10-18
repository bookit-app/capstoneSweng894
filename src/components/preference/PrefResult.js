import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/PrefResult.styles'
import { InputCustom } from '../common'
import PickerModal from 'react-native-picker-modal-view'

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
                    <Text style={styles.labelStyle}>
                        {"Style"}
                    </Text>
                    <PickerModal
                        onSelected={props.onStyleChge}
                        items={props.onStyleItems}
                        sortingLanguage={'tr'}
                        showToTopButton={false}
                        selected={props.onStyleSelected}
                        showAlphabeticalIndex={false}
                        autoGenerateAlphabeticalIndex={true}
                        selectPlaceholderText={"i.e. Fade"}
                        searchPlaceholderText={'Search...'}
                        requireSelection={true}
                        autoSort={false}
                    />
                </View>
                <View style={styles.RowBtn}>
                    <View>
                        <Text style={styles.labelStyle}>
                            {"Day "}
                        </Text>
                        <PickerModal
                            onSelected={props.onDayChge}
                            items={props.onDayItems}
                            sortingLanguage={'tr'}
                            showToTopButton={false}
                            selected={props.onDaySelected}
                            showAlphabeticalIndex={false}
                            autoGenerateAlphabeticalIndex={true}
                            selectPlaceholderText={"i.e. 01"}
                            searchPlaceholderText={'Search...'}
                            requireSelection={true}
                            autoSort={false}
                        />
                    </View>
                    <View>
                        <Text style={styles.labelStyle}>
                            {"Time "}
                        </Text>
                        <PickerModal
                            onSelected={props.onTimeChge}
                            items={props.onTimeItems}
                            sortingLanguage={'tr'}
                            showToTopButton={false}
                            selected={props.onTimeSelected}
                            showAlphabeticalIndex={false}
                            autoGenerateAlphabeticalIndex={true}
                            selectPlaceholderText={"i.e. Morning"}
                            searchPlaceholderText={'Search...'}
                            requireSelection={true}
                            autoSort={false}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export { PrefResult }