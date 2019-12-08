import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Alert } from 'react-native'
import { Spinner, ImageButton } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import AppointmentDetail from './AppointmentDetail'
import styles from '../styles/Appointment.styles'
import utilites from '../../utilites'
import api from '../../api'
import { getAppointment } from '../../store'

class AppointmentReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            list: [],
            header: '',
            display: false,
            item: {},
            profile: {},
            token: ''
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    componentDidMount(){
        this.setState({
            list: this.props.navigation.getParam('list', []),
            header: this.props.navigation.getParam('headertitle', ''),
            profile: this.props.navigation.getParam('profile', {}),
            token: this.props.navigation.getParam('token', '') 
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        var list = this.props.navigation.getParam('list', [])
        var profile = this.props.navigation.getParam('profile', {})
        var token =  this.props.navigation.getParam('token', '') 
        var header = this.props.navigation.getParam('headertitle', '')

        if((this.isEmpty(this.state.list) && !this.isEmpty(list)) ||
            (this.isEmpty(this.state.profile) && !this.isEmpty(profile))){

            this.setState({
                list: list,
                header: header,
                profile: profile,
                token: token
            })
        }

        if(nextProps.previousAppointment.length > 0 ||
            nextProps.upcomingAppointment.length > 0){
                this.setState({
                    list: header == 'Previous' ? nextProps.previousAppointment : nextProps.upcomingAppointment
                })
            }
    }

    onDisplay = () => {
        this.setState({
            display: !this.state.display
        })

        if(!this.state.display){
            this.props.refreshAppointment('P',this.state.token)
            this.props.refreshAppointment('U',this.state.token)
        }
    }

    onDetailClose(){
        return (
            <ImageButton
                onPress={() => {
                    this.setState({ display: false })
                }}
                imageSource={require('../../image/close-x-icon.png')}
                
            />
        )
    }
    
    onDetailClick(item){
        this.setState({
            item: item,
            display: true
        });
    }
    
    onDetailHoldClickDelete(item){
        const { appointmentId} = item
        const { token, list } = this.state

        var oldList = Object.assign([], list)

        this.setState({
            list: []
        })

        Alert.alert(
            'Delete Appointment',
            'Are you sure you want to delete this Appointment ? ',
            [
                {text: 'Cancel', onPress: () => {
                    this.setState({
                        list: oldList
                    })

                    return null
                }},
                {text: 'Confirm', onPress: () => {           
                            
                    api.deleteAppointmentById(appointmentId, token)
                        .then (a => {
                            this.props.refreshAppointment('U', token)
                            this.props.refreshAppointment('P', token)
                            
                            var list = Object.assign([], oldList)
                            list.splice(list.indexOf(item),1);
                            
                            this.setState({
                                list: list
                            })
                        })
                        .catch(error => {
                            this.setState({
                                list: oldList
                            })
                            Alert.alert(
                                'Warning',
                                'Something went wrong, sorry. Please try again later',
                                [
                                    {text: 'OK ', onPress: () => { return null}}
                                ]
                            )
                        })
                }}
            ]
        )
    }

    renderItem = (item) => {
        return (
            <View>    
                <AppointmentItem
                    shopName={item.item.businessName}
                    service={item.item.styleId == "FADE" ? "Barber" : item.item.styleId == "UPDO" ? "Hair Dresser" : item.item.styleId }
                    date={item.item.date}
                    time={item.item.time}
                    status={item.item.status.code}
                    onClick={() => this.onDetailClick(item.item)}
                    onHoldClick={() => this.onDetailHoldClickDelete(item.item)}
                />
            </View>
        )
    }

    listHeader = () => {        
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{this.state.header}</Text>
                </View>
            </View>
        )
    }

    listEmpty = () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerText}>{'No '+this.state.header+' appointments'}</Text>
            </View>
        )
    }

    listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: 'black'
                }}
            />
        )
    }

    render(){
        if(this.isEmpty(this.state.list)){
            return <Spinner size="large" />
        }

        return (
            <View>
                <AppointmentList
                    currentData={this.state.list}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listHeader}
                    separator={this.listSeparator}
                    scrollEnabled={true}
                    listEmpty={this.listEmpty}
                    keyExtractor={item => item.appointmentId}
                />
                <AppointmentDetail
                    item={this.state.item} 
                    display={this.state.display}
                    OnClose={() => this.onDetailClose()}
                    profile={this.state.profile}
                    token={this.state.token}
                    replaceItem={this.props.refreshAppointment}
                    onDisplay={this.onDisplay}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshAppointment: (type, token) => dispatch(getAppointment(type, token)),
    }
}

const mapStateToProps = (state) => {     
    return {
        previousAppointment: state.appointment.previousAppointment,
        upcomingAppointment: state.appointment.upcomingAppointment
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AppointmentReview)