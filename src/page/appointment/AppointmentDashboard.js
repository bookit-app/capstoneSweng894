import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, Alert } from 'react-native'
import { Spinner, ImageButton, ButtonCustom } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import styles from '../styles/Appointment.styles'
import utilites from '../../utilites'
import { NavigationEvents } from 'react-navigation'
import { PreviousAppointments, UpcomingAppointments, Services } from '../../constant'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppointmentDetail from './AppointmentDetail'
import { appointment } from '../../actions'
import api from '../../api'

/**
 * Appointment Dashboard show upcoming and most recent appointments for the client
 */
class AppointmentDashboard extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {state, navigate} = navigation;
        return {
          title: 'Book It'
        };
      };

    constructor(props){
        super(props)

        this.state = {
            profile: {},
            preference: {},
            loadingProfile: true,
            loadingPreference: true,
            prefSet: true,
            display: false,
            item: {},
            previousAppointment: [],
            upcomingAppointment: [],
            previousAppLoading: false,
            upcomingAppLoading: false,
            previousViewMore: false,
            upcomingViewMore: false,
            token: ''
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    componentDidMount(){
        this.AppointmentDashboardRefresh()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!utilites.isEmpty(this.props.previousAppointment)
            || !utilites.isEmpty(this.props.upcomingAppointment)){
            this.AppointmentDashboardRefresh()
        }
    }

    AppointmentDashboardRefresh(){
        this.setState({
            prefSet: this.props.prefSet ,
            loadingProfile: this.props.loadingProfile,
            loadingPreference: this.props.loadingPreference,
            profile: this.props.profile ,
            preference: this.props.profile.preferences,
            display: false,
            previousAppointment: this.props.previousAppointment,
            upcomingAppointment: this.props.upcomingAppointment,
            previousAppLoading: this.props.previousAppLoading,
            upcomingAppLoading: this.props.upcomingAppLoading,
            previousViewMore: !utilites.isEmpty(this.props.previousAppointment),
            upcomingViewMore: !utilites.isEmpty(this.props.upcomingAppointment),
            token: this.props.token
        }) 
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

    onDisplay(){
        this.setState({
            display: !this.state.display
        })
    }
    
    onDetailHoldClickDelete(item){
        const { appointmentId, listType } = item
        Alert.alert(
            'Delete Appointment',
            'Are you sure you want to delete this Appointment ? ',
            [
                {text: 'Cancel', onPress: () => {return null}},
                {text: 'Confirm', onPress: () => {                
                    api.deleteAppointmentById(appointmentId)
                        .then (a => {
                            this.props.deleteItem(item, listType)
                        })
                        .catch(error => {
                            console.log('error: ', error);
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

    listUpcomingHeader = () => { 
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{"Upcoming"}</Text>
                </View>
                {this.state.upcomingViewMore && 
                    <View style={{alignItems: 'flex-end'}}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Reivew',{
                                list: this.state.upcomingAppointment,
                                headertitle: 'Upcoming',
                                navigation: this.props.navigation,
                                profile: this.state.profile,
                                token: this.state.token,
                                replaceItem: this.props.replaceItem
                            })}>
                            <Text style={styles.headerText}>{"View More"}</Text>
                        </TouchableOpacity>
                    </View> 
                }
            </View>
        )
    }

    listReviewHeader = () => {  
        // console.log('listReviewHeader', this.state.token);
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{"Previous"}</Text>
                </View>
                {this.state.previousViewMore &&
                    <View style={{alignItems: 'flex-end'}}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Reivew', {
                                list: this.state.previousAppointment,
                                headertitle: 'Previous',
                                navigation: this.props.navigation,
                                profile: this.state.profile,
                                token: this.state.token,
                                replaceItem: this.props.replaceItem
                            })}>
                            <Text style={styles.headerText}>{"View More"}</Text>
                        </TouchableOpacity>
                    </View>
                }
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

    listEmptyReview = () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerNoAppointment}>{'No previous appointments'}</Text>
            </View>
        )
    }

    listEmptyUpcoming = () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerNoAppointment}>{'No upcoming appointments'}</Text>
            </View>
        )
    }

    render(){
        // console.log('AppointmentDashboard render', this.state.previousAppLoading);
        // console.log('AppointmentDashboard render', this.state.upcomingAppLoading);
        
        if(this.state.previousAppLoading
            && this.state.upcomingAppLoading){
            return <Spinner size="large" />
        }
           
        return (
            <ScrollView>
                <NavigationEvents
                    onDidBlur={() => this.AppointmentDashboardRefresh()}
                    onWillBlur={() => this.AppointmentDashboardRefresh()}
                />
                <AppointmentList
                    currentData={this.state.upcomingAppointment.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listUpcomingHeader}
                    separator={this.listSeparator}
                    scrollEnabled={false}
                    listEmpty={this.listEmptyUpcoming}
                />
                <AppointmentList
                    currentData={this.state.previousAppointment.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listReviewHeader}
                    separator={this.listSeparator}
                    scrollEnabled={false}
                    listEmpty={this.listEmptyReview}
                />
                <AppointmentDetail
                    item={this.state.item} 
                    display={this.state.display}
                    OnClose={() => this.onDetailClose()}
                    profile={this.state.profile}
                    token={this.state.token}
                    replaceItem={this.props.replaceItem}
                    onDisplay={this.onDisplay}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {           
    return {
        loadingProfile: state.profile.loading,
        loadingPreference: state.preference.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref,
        previousAppointment: state.appointment.previousAppointment,
        upcomingAppointment: state.appointment.upcomingAppointment,
        previousAppLoading: state.appointment.paloading,
        upcomingAppLoading: state.appointment.ualoading,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        replaceItem: (newItem, oldItem, listType) => dispatch(appointment.ReplaceAppointment(newItem, oldItem, listType)),
        deleteItem: (deleteItem, listType) => dispatch(appointment.DeleteAppointment(deleteItem, listType))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppointmentDashboard);