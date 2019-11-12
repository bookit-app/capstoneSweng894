import React, {useState, useEffect} from 'react'
import { View, Text, Platform, ScrollView} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import { CustomPicker } from 'react-native-custom-picker'
import { Time, Calendar } from './index'
import utilites from '../../utilites'

/**
 * CustomPicker - Individual field component
 * @param {*} settings 
 */
const renderPickerField = (settings) => { 
    const { selectedItem, defaultText, getLabel} = settings

    return (
        <View>
            {!selectedItem && <Text style={{ color: 'grey', alignSelf: 'center' }}>{defaultText}</Text>}
            {selectedItem && (
                <View style={{alignSelf: 'center'}}>
                    <Text style={{alignSelf: 'center'}}>
                        {getLabel(selectedItem)}
                    </Text>
                </View>
            )}
        </View>
    )
}


/**
 * Generators the production time arraies based on limit
 * @param {*} limit 
 */
const TimeGene = (limit) => {
    var ret = []

    for(var i = 0; i <= limit; i++){
        var timeComponent = {
            Id: i,
            Name: i < 10 ? '0' + i.toString() : i.toString(),
            Value: i < 10 ? '0' + i.toString() : i.toString()
        }

        ret.push(timeComponent)
    }

    return ret
}

const StatusList = [
    {
        Id:0,
        Name: 'Early',
        Value: 'Early'
    },
    {
        Id:1,
        Name: 'On-Time',
        Value: 'On-Time'
    },
    {
        Id:2,
        Name: 'Late',
        Value: 'Late'
    }
]

/**
 * Status handler
 * @param {*} props 
 */
const StatusHandler = (props) => {
    const {status, onSetStatus} = props

    if(!status) {
        return (
            <View>
                <Text>{'Status can not be Changed'}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={status}
                    fieldTemplate={renderPickerField}
                    options={StatusList.map(a => a.Name)}
                    onValueChange={st => onSetStatus(st)}
                    value={status}
                />
            </View>
        )
    }
}

const ShopNameHandler = (props) => {
    const { status, businessName, onSetShopName } = props

    if(!status){
        return(
            <View>

            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={businessName}
                    fieldTemplate={renderPickerField}
                    options={[]}
                    onValueChange={b => onSetShopName(b)}
                    value={businessName}
                />
            </View>
        )
    }
}


/**
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const {time, profile, preference} = props
    console.log('AppointmentEditView', profile);
    console.log('AppointmentEditView', preference);
    
    const [startDt, setStartDt] = useState(date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY'))
    const [hour, setHour] = useState(time.toString().split(':')[0])
    const [minute, setMinute] = useState(time.toString().split(':')[1])
    const [status, setStatus] = useState(props.status)

    // useEffect(() => {
                
    //     var ft = {
    //         city: props.,
    //         state: state_,
    //         // styles: styleOn
    //     }
        
    //     var filter = utilites.filterGenerate(ft)
    //     api.searchProviderByFilter(filter, props.token)
    //         .then()
    // },[])
    
    return (
        <ScrollView>
            <View style={styles.Row,{justifyContent: 'center', paddingTop: 15}}>
                <View style={styles.Column}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={styles.Row}>
                            <Text style={{color: '#724FFD', paddingStart: 5}}>{'Date:'}</Text>
                            <Text style={{paddingStart: 5}}>{startDt}</Text>
                        </View>
                        <View style={{paddingEnd: 5}}>    
                            <props.onEditClick/>
                        </View>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Time:'}</Text>
                        <Time
                            placeHour={hour}
                            defaultHour={hour}
                            optionsHour={TimeGene(24).map(a => a.Name)}
                            onHourChange={hr => setHour(hr)}
                            hour={hour}
                            placeMinute={minute}
                            defaultMinute={minute}
                            optionsMinute={TimeGene(60).map(a => a.Name)}
                            onMinuteChange={mn => setMinute(mn)}
                            minute={minute}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                        <StatusHandler
                            status={status}
                            onSetStatus={s => setStatus(s)}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                    </View>
                </View>
                <Calendar
                    status={props.status}
                    setStartDt={setStartDt}
                    appDt={props.date}
                />
            </View>
        </ScrollView>
    )
}

export {AppointmentEditView}