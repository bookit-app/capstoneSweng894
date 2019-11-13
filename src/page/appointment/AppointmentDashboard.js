import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { Spinner, ImageButton, ButtonCustom } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import styles from '../styles/Appointment.styles'
import utilites from '../../utilites'
import { NavigationEvents } from 'react-navigation'
import { PreviousAppointments, UpcomingAppointments, Services } from '../../constant'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppointmentDetail from './AppointmentDetail'

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
            token: ''
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    componentDidMount(){
        this.AppointmentDashboardRefresh()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if((this.isEmpty(this.state.previousAppointment) && !this.isEmpty(this.props.previousAppointment)) ||
            (this.isEmpty(this.state.upcomingAppointment) && !this.isEmpty(this.props.upcomingAppointment)) ||
            (this.state.profile != this.props.profile)){
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

    renderItem = (item) => {
        return (
            <View>        
                <AppointmentItem
                    shopName={item.item.businessName}
                    service={item.item.style == "FADE" ? "Barber" : item.item.style == "UPDO" ? "Hair Dresser" : item.item.style }
                    date={item.item.date}
                    time={item.item.time}
                    status={item.item.status}
                    onClick={() => this.onDetailClick(item.item)}
                /> 
            </View>
        )
    }

    listUpcomingHeader = () => { 
        // console.log('listUpcomingHeader', this.state.token);
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{"Upcoming"}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Reivew',{
                        list: this.state.upcomingAppointment,
                        headertitle: 'Upcoming',
                        navigation: this.props.navigation,
                        profile: this.state.profile,
                        token: this.state.token
                    })}>
                        <Text style={styles.headerText}>{"View More"}</Text>
                    </TouchableOpacity>
                </View>
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
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Reivew', {
                        list: this.state.previousAppointment,
                        headertitle: 'Previous',
                        navigation: this.props.navigation,
                        profile: this.state.profile,
                        token: this.state.token
                    })}>
                        <Text style={styles.headerText}>{"View More"}</Text>
                    </TouchableOpacity>
                </View>
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
                <Text style={styles.headerText}>{'No previous appointments'}</Text>
            </View>
        )
    }

    listEmptyUpcoming = () => {
        return (
            <View style={styles.Column}>
                <Text style={styles.headerText}>{'No upcoming appointments'}</Text>
            </View>
        )
    }

    render(){
        if(this.isEmpty(this.state.upcomingAppointment) 
            || this.isEmpty(this.state.previousAppointment)){
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
                    onClose={() => this.onDetailClose()}
                    profile={this.state.profile}
                    token={this.state.token}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {    
    // console.log('AppointmentDashboard mapStateToProps', state.auth.token);
       
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

export default connect(mapStateToProps,null)(AppointmentDashboard);