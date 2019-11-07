import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { ButtonCustom, Spinner } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import styles from '../styles/AppointmentDashboard.styles'
import utilites from '../../utilites'
import { NavigationEvents } from 'react-navigation'
import { ReviewAppointments, UpcomingAppointments, Services } from '../../constant'
import { TouchableOpacity } from 'react-native-gesture-handler'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
const UserInfo = (props) =>{
    if(props.preferInfo && props.profInfo){
        const { firstName, lastName, email } = props.profInfo
        // console.log('UserInfo', address);
        // console.log('UserInfo', preferences);
        
        const { staffClassification, time} = props.preferInfo
        
        return (
            <View>
                <Text>{'Profile setting: ' }</Text>
                <Text>{`Name: ${firstName} ${lastName}`}</Text>
                <Text>{`email: ${email}`}</Text>
                <Text>{'Preference Setting: '}</Text>
                <Text>{`Classification: ${staffClassification}`}</Text>
                <Text>{`time: ${time}`}</Text>
            </View>
        )

    } else {
        return (
            <View />
        )
    }
}

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

        this.state ={
            profile: {},
            preference: {},
            prefSet: true,
            loadingProfile: true,
            loadingPreference: true,
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    componentDidMount(){
        this.AppointmentDashboardRefresh()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!this.props.loadingProfile){
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
            display3: false
        }) 
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
                    onClick={() => this.props.navigation.navigate('Detail',{
                        item: item.item
                    })}
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
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Reivew',{
                        list: UpcomingAppointments,
                        headertitle: 'Upcoming'
                    })}>
                        <Text style={styles.headerText}>{"View More"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    listReviewHeader = () => {        
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{"Previous"}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Reivew', {
                        list: ReviewAppointments,
                        headertitle: 'Previous'
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
        if(this.isEmpty(this.state.profile)){
            return <Spinner size="large" />
        }
           
        return (
            <ScrollView>
                <NavigationEvents
                    onDidBlur={() => this.AppointmentDashboardRefresh()}
                    onWillBlur={() => this.AppointmentDashboardRefresh()}
                />
                <AppointmentList
                    currentData={UpcomingAppointments.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listUpcomingHeader}
                    separator={this.listSeparator}
                    scrollEnabled={false}
                    listEmpty={this.listEmptyUpcoming}
                />
                <AppointmentList
                    currentData={ReviewAppointments.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listReviewHeader}
                    separator={this.listSeparator}
                    scrollEnabled={false}
                    listEmpty={this.listEmptyReview}
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
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentDashboard);