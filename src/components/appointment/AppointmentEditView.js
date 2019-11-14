import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import CustomInputStyles from '../styles/CustomInputStyles'
import date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import { Time, Calendar, Status, BusinessName, Stylist, Service } from './index'
import { InputCustom, ButtonCustom } from '../common'
import utilites from '../../utilites'
import LoginButton from '../styles/LoginButton.styles'

/**
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const { businessName, time, profile, token } = props    
    const [startDt, setStartDt] = useState(date.format(date.parse(props.date, 'MM-DD-YYYY'), 'MMM DDD YYYY'))
    const [startNonDt, setstartNonDt] = useState(props.date)
    const [hour, setHour] = useState(time.toString().split(':')[0])
    const [minute, setMinute] = useState(time.toString().split(':')[1])
    const [status, setStatus] = useState(props.status)
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    {/* Sets the BusinessName, business name list, and etc for useEffect below
    const [businName, setBusinessName] = useState(businessName)
    const [businessList, setBusinessList] = useState([])
    const [provId, setProvider] = useState(props.providerId)
    const [stylist, setStylist] = useState(props.stylist)
    const [stylistList, setStylistList] = useState([])
    const [service, setService] = useState(props.service)
    const [serviceList, setServiceList] = useState([])
    const [address1, setAddress1] = useState(props.address)
    const [address2, setAddress2] = useState(props.city + " " + props.state + " " + props.zipCode)
    */}

{/* UseEffect to retrieve business and update address, stylist, and etc.. Not neccessary in Edit
    useEffect(() => {
        const { city, state, hairStyle } = preferences
        const style = hairStyle.style

        var ft = {
            city: city,
            state: state,
            styles: style
        }
        
        var filter = utilites.filterGenerate(ft)
        var busList = [] 
        api.searchProviderByFilter(filter, token)
            .then((re) => {  
                re.data.map(i => {
                    var businessItem = {} 
                    businessItem['Id'] = i.providerId
                    businessItem['Name'] = i.businessName
                    businessItem['Value'] = i.businessName

                    const {streetAddress, city, state, zipCode} = i.address

                    setAddress1(streetAddress)
                    businessItem['Address1'] = streetAddress

                    setAddress2(city + " " + state + " " + zipCode)
                    businessItem['Address2'] = city + " " + state + " " + zipCode

                    busList.push(businessItem)
                })
                setBusinessList(busList)
            })
            .catch((err)=>{
                var businessItem = {} 
                businessItem['Id'] = provId
                businessItem['Name'] = businessName
                businessItem['Value'] = businessName
                
                setAddress1(props.address)
                businessItem['Address1'] = props.address

                setAddress2(props.city + " " + props.state + " " + props.zipcode)
                businessItem['Address2'] = props.city + " " + props.state + " " + props.zipcode

                busList.push(businessItem)
                setBusinessList(busList)
            })
    },[businessName])
    
    useEffect(()=>{
        var stylistNameList = []
        var serviceList = []
        api.getProviderDetails(provId, token)
            .then((re) => {
                // console.log('useEffect then', re.data);
                if(re.data.staff.length >= 1){
                    re.data.staff.map(i => {
                        var stylistItem = {}
                        stylistItem['Id'] = i.staffMemberId
                        stylistItem['Name'] = i.name
                        stylistNameList.push(stylistItem)
                    })
                } else {           
                    var stylistItem = {}
                    stylistItem['Id'] = 0
                    stylistItem['Name'] = 'No Stylist'
                    stylistNameList.push(stylistItem)
                }            
                setStylistList(stylistNameList)
                if(re.data.services.length >= 1){
                    re.data.services.map(i => {
                        var serviceItem = {}
                        serviceItem['Id'] = i.serviceId
                        serviceItem['Name'] = i.styleId + ' ' + i.price
                        serviceList.push(serviceItem)
                    })
                } else {
                    var serviceItem = {}
                    serviceItem['Id'] = 0
                    serviceItem['Name'] = 'No Services to offer'
                    serviceList.push(serviceItem)
                }
                setServiceList(serviceList)
            }).catch((err) =>{
                // console.log('useEffect catch', err);
                var stylistItem = {}
                stylistItem['Id'] = 0
                stylistItem['Name'] = props.stylist
                stylistNameList.push(stylistItem)
                setStylistList(stylistNameList)
            })
    },[provId, service]) 
*/}
    const updateAppointment = () =>{
        const payload = {
            "date": date.format(date.parse(startNonDt,'MM-DD-YYYY'),'YYYY-MM-DD'),
            "note": "",
            "state": "BOOKED",
            "status": {
              "code": status,
              "comment": comment
            },
            "time": hour + ':' + minute
          }

        console.log('Update Appointment',payload);
        // api.updateAppointmentById()
    }

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
                            optionsHour={utilites.TimeGene(24).map(a => a.Name)}
                            onHourChange={hr => setHour(hr)}
                            hour={hour}
                            placeMinute={minute}
                            defaultMinute={minute}
                            optionsMinute={utilites.TimeGene(60).map(a => a.Name)}
                            onMinuteChange={mn => setMinute(mn)}
                            minute={minute}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                        <Status
                            status={status}
                            onSetStatus={s => setStatus(s)}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                        {/* BusinessName component with drop-down or just BusinessName
                        <BusinessName
                            status={status}
                            businessName={businName}
                            onbusinessList={businessList}
                            onSetShopName={setBusinessName}
                            onSetProvider={setProvider}
                            onSetAddress1={setAddress1}
                            onSetAddress2={setAddress2}
                        /> */}
                        <Text>{businessName}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                        {/* Stylist componemtn with drop down or just stylist
                        <Stylist
                            status={status}
                            stylist={stylist}
                            stylistList={stylistList}
                            onSetStylist={setStylist}
                        /> */}
                        <Text>{props.stylist}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Service:'}</Text>
                        {/* 
                        <Service
                            status={status}
                            service={service}
                            serviceList={serviceList}
                            onSetServiceList={setService}
                        /> */}
                        <Text>{props.service}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Address:'}</Text>
                        <View style={styles.Column}>
                            <Text>{props.address}</Text>
                            <Text>{props.city + " " + props.state + " " + props.zipCode}</Text>
                        </View>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Note:'}</Text>
                        <Text>{props.note}</Text>
                    </View>
                    <View>
                        <InputCustom
                            placeholder="i.e. Comment"
                            label="Comment: "     
                            value={comment}
                            onChangeText={c => setComment(c)}
                            error={error}
                            inputStyle = {CustomInputStyles.inputStyleLeft}
                            containerStyle = {CustomInputStyles.containerStyleLeft}      
                            labelStyle = {{color: '#724FFD', paddingEnd: 5}}
                            errorStyle = {CustomInputStyles.error} 
                        />
                    </View>
                </View>
                <Calendar
                    status={props.status}
                    setStartDt={setStartDt}
                    setStartDtnF={setstartNonDt}
                    appDt={props.date}
                />
                <View>
                    <ButtonCustom
                        onPress={updateAppointment}
                        buttonStyle={LoginButton.buttonStyle}
                        textStyle={LoginButton.textStyle}
                    >
                        {'Update Appointment'}
                    </ButtonCustom>
                </View>
            </View>
        </ScrollView>
    )
}

export {AppointmentEditView}