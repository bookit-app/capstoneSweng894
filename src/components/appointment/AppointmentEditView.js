import React, {useState, useEffect} from 'react'
import { View, Text, Platform, ScrollView} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import { CustomPicker } from 'react-native-custom-picker'
import { Time, Calendar } from './index'
import utilites from '../../utilites'
import { StatusList } from '../../constant'

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

/**
 * Shop Name handler
 * @param {*} props 
 */
const ShopNameHandler = (props) => {
    const { status, businessName,  onbusinessList, onSetProvider, onSetShopName } = props

    if(!status){
        return(
            <View>
                <Text>{businessName}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e. Salon"}
                    fieldTemplate={renderPickerField}
                    options={onbusinessList.map(b => b.Name)}
                    onValueChange={b => {
                        onSetShopName(b)
                        onSetProvider(onbusinessList.filter(b => b.Name == b)[0].providerId)
                    }}
                    value={businessName}
                />
            </View>
        )
    }
}

const StylistHandler = (props) => {
    const { status, stylist, stylistList, onSetStylist } = props
    console.log('StylistHandler',stylist);
    
    if(!status){
        return (
            <View>
                <Text>{stylist}</Text>
            </View>
        )
    } else {
        return (
            <View>
                <CustomPicker
                    defaultValue={"i.e Stylist"}
                    fieldTemplate={renderPickerField}
                    options={stylistList.map(s => s.Name)}
                    onValueChange={s => onSetStylist(s)}
                    value={stylist}
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
    const {businessName, time, profile, token} = props
    const { preferences } = profile
    
    const [startDt, setStartDt] = useState(date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY'))
    const [hour, setHour] = useState(time.toString().split(':')[0])
    const [minute, setMinute] = useState(time.toString().split(':')[1])
    const [status, setStatus] = useState(props.status)
    const [businName, setBusinessName] = useState(businessName)
    const [businessList, setBusinessList] = useState([])
    const [provId, setProvider] = useState(props.providerId)
    const [stylist, setStylist] = useState(props.stylist)
    const [stylistList, setStylistList] = useState([])

    useEffect(() => {
        const { city, state, hairStyle } = preferences
        const style = hairStyle.style

        var ft = {
            city: city,
            state: state,
            styles: style
        }
        
        var filter = utilites.filterGenerate(ft)
        api.searchProviderByFilter(filter, token)
            .then((re) => {  
                var busList = [] 
                re.data.map(i => {
                    var businessItem = {} 
                    businessItem['Id'] = i.providerId
                    businessItem['Name'] = i.businessName
                    businessItem['Value'] = i.businessName
                    businessItem['Address'] = i.address

                    busList.push(businessItem)
                })
                setBusinessList(busList)
            })
    },[businName])
    
    useEffect(()=>{
        api.getProviderDetails(provId, token)
            .then((re) => {
                var stylistNameList = []
                re.data.staff.map(i => {
                    var stylistItem = {}
                    stylistItem['Id'] = i.staffMemberId
                    stylistItem['Name'] = i.name

                    stylistNameList.push(stylistItem)
                })
                console.log('stylist', stylistNameList);
                
                setStylistList(stylistNameList)
            })
    },[provId])

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
                        <ShopNameHandler
                            status={status}
                            businessName={businName}
                            onbusinessList={businessList}
                            onSetShopName={setBusinessName}
                            onSetProvider={setProvider}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                        <StylistHandler
                            status={status}
                            stylist={stylist}
                            stylistList={stylistList}
                            onSetStylist={setStylist}
                        />
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