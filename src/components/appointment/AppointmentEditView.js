import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView} from 'react-native'
import api from '../../api'
import styles from '../../page/styles/Appointment.styles'
import CustomInputStyles from '../styles/CustomInputStyles'
import _date from 'date-and-time'
import 'date-and-time/plugin/ordinal'
import { Time, Calendar, Status, BusinessName, Stylist, Service } from './index'
import { InputCustom, ButtonCustom, Spinner } from '../common'
import utilites from '../../utilites'
import LoginButton from '../styles/LoginButton.styles'
import { CustomPicker } from 'react-native-custom-picker'
import { AppointmentRenderPickerField } from '../appointment'
import { StateList, StatusList } from '../../constant'

/**
 * Appointment Edit View - Edit View for Appointments
 * @param {*} props 
 */
const AppointmentEditView = (props) => {
    const {token, replaceItem, item, onDisplay } = props    
    const {state, status, businessName, staffMemberName, style, note, date, time, appointmentId, listType} = item
    const {code, comment } = status

    const [startDt, setStartDt] = useState(_date.format(_date.parse(date, 'YYYY-MM-DD'), 'MMM DDD YYYY'))
    const [startNonDt, setStartNonDt] = useState(_date.format(_date.parse(date, 'YYYY-MM-DD'), 'YYYY-MM-DD'))
    const [hour, setHour] = useState(time.toString().split(':')[0])
    const [minute, setMinute] = useState(time.toString().split(':')[1])
    const [status_, setStatus] = useState(StatusList.filter(i => i.Value == code.trim())[0].Name)
    const [appState, setAppState] = useState(StateList.filter(i => i.Value == state.trim())[0].Name )
    const [comment_, setComment] = useState(comment)
    const [error, setError] = useState('')
    const [errorOnSubmission, setErrorOnSubmission] = useState('')
    const [loading, setLoading] = useState(false)

{/* Sets the BusinessName, business name list, and etc for useEffect below
const [businName, setBusinessName] = useState(businessName)
const [businessList, setBusinessList] = useState([])
const [provId, setProvider] = useState(props.providerId)
const [staffMemberName, setStylist] = useState(props.staffMemberName)
const [stylistList, setStylistList] = useState([])
const [service, setService] = useState(props.service)
const [serviceList, setServiceList] = useState([])
const [address1, setAddress1] = useState(props.address)
const [address2, setAddress2] = useState(props.city + " " + props.state + " " + props.zipCode)
//UseEffect to retrieve business and update address, staffMemberName, and etc.. Not neccessary in Edit
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
                stylistItem['Name'] = props.staffMemberName
                stylistNameList.push(stylistItem)
                setStylistList(stylistNameList)
            })
    },[provId, service]) 
*/}
    const updateAppointment = () =>{
        setLoading(true)
        var date_ = startNonDt
        var state_ = StateList.filter(i => i.Name == appState.trim())[0].Value
        var code_ = StatusList.filter(i => i.Name == status_.trim())[0].Value
        var time_ = hour + ':' + minute + ':00'

        const payload = {
            "date":date_,
            "note": note,
            "state": state_,
            "status": {
              "code": code_,
              "comment": comment_
            },
            "time": time_
          }

        api.updateAppointmentById(payload, appointmentId, token)
          .then((app) => {
            var oldItem = item

            var newItem = Object.assign({}, item)
            newItem.date = startNonDt
            newItem.note = note
            newItem.state = state_
            newItem.status = {
                "code": code_,
                "comment": comment_
            }
            newItem.time = time_
            
            replaceItem(newItem, oldItem, listType)
            setLoading(false)
          })
          .catch((err) => {
            setErrorOnSubmission(err.message)
            setLoading(false)
          })
    }

    const OnUpdateBtnClick = () => {
        if(loading){
            return <Spinner size='small' />
        }

        return (  
            <View>
                <View style={styles.Column}>
                    <Text style={CustomInputStyles.error}>
                        {errorOnSubmission}
                    </Text>
                </View>
                <ButtonCustom
                    onPress={updateAppointment}
                    buttonStyle={LoginButton.buttonStyle}
                    textStyle={LoginButton.textStyle}
                >
                    {'Update Appointment'}
                </ButtonCustom>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={styles.Row,{justifyContent: 'center', paddingTop: 15}}>
                <View style={styles.Column}>
                    <View style={styles.Row}>  
                        <Text style={{ color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'State:'}</Text>
                        <CustomPicker
                            defaultValue={"i.e. Booked"}
                            fieldTemplate={AppointmentRenderPickerField}
                            options={StateList.map(l => l.Name)}
                            onValueChange={l => {
                                setAppState(l)
                                setErrorOnSubmission('')
                            }}
                            value={appState}
                        />
                    </View>
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
                            onHourChange={hr => {
                                setHour(hr)
                                setErrorOnSubmission('')
                            }}
                            hour={hour}
                            placeMinute={minute}
                            defaultMinute={minute}
                            optionsMinute={utilites.TimeGene(60).map(a => a.Name)}
                            onMinuteChange={mn => {
                                setMinute(mn)
                                setErrorOnSubmission('')
                            }}
                            minute={minute}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Status:'}</Text>
                        <Status
                            status={status_}
                            onSetStatus={s => {
                                setStatus(s)
                                setErrorOnSubmission('')
                            }}
                        />
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Shop Name:'}</Text>
                        <Text>{businessName}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Stylist:'}</Text>
                        <Text>{staffMemberName}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Text style={{color: '#724FFD', paddingStart: 5, paddingEnd: 5}}>{'Service:'}</Text>
                        <Text>{style}</Text>
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
                        <Text>{note}</Text>
                    </View>
                    <View>
                        <InputCustom
                            placeholder="i.e. Comment"
                            label="Comment: "     
                            value={comment_}
                            onChangeText={c => {
                                setComment(c)
                                setErrorOnSubmission('')
                            }}
                            error={error}
                            inputStyle = {CustomInputStyles.inputStyleLeft}
                            containerStyle = {CustomInputStyles.containerStyleLeft}      
                            labelStyle = {{color: '#724FFD', paddingEnd: 5}}
                            errorStyle = {CustomInputStyles.error} 
                        />
                    </View>
                </View>
                <Calendar
                    status={status_}
                    setStartDt={setStartDt}
                    setStartNonDt={setStartNonDt}
                    setErrorOnSubmission={setErrorOnSubmission}
                />
                <OnUpdateBtnClick />
            </View>
        </ScrollView>
    )
}

export {AppointmentEditView}