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
import AppointmentDetail from './AppointmentDetail'

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
        this.onRenderItemClick = this.onRenderItemClick.bind(this)
    }

    componentDidMount(){
        this.AppointmentDashboardRefresh()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(!this.props.loadingProfile){
            // this.AppointmentDashboardRefresh(nextProps)
            this.AppointmentDashboardRefresh()
        }
    }

    AppointmentDashboardRefresh(nextProps){        
        if(!this.isEmpty(nextProps))
        {
            this.setState({
                prefSet: this.props.prefSet ? this.props.prefSet: nextProps.prefSet,
                loadingProfile: this.props.loadingProfile ? this.props.loadingProfile : nextProps.loadingProfile,
                loadingPreference: this.props.loadingPreference ? this.props.loadingPreference : nextProps.loadingPreference,
                profile: this.props.profile ? this.props.profile : nextProps.profile,
                preference: this.props.profile.preferences,
                display3: false
            }) 
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

    // profileModel1(){
    //     // console.log('profileModel1', this.state.display1)
    //     this.setState(prevState => {
    //         return {
    //             display1: true
    //         }
    //     });
    // }

    // profileModel2(){
    //     // console.log('profileModel2', this.state.display2)
    //     this.setState(prevState => {
    //         return {
    //             display2: true
    //         }
    //     });
    // }

    // onModalClose1(){
    //     return (
    //         <TouchableOpacity
    //             onPress={() => {
    //                 this.setState({ display1: false })
    //             }}
    //         >
    //             <Text>{'Close'}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    // onModalClose2(){
    //     return (
    //         <TouchableOpacity
    //             onPress={() => {
    //                 this.setState({ display2: false })
    //             }}
    //         >
    //             <Text>{'Close'}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    // onModalClose3(){
    //     // console.log('onModalClose3');
    //     return (
    //         <TouchableOpacity
    //             onPress={() => {
    //                 this.setState({ display3: false })
    //             }}
    //         >
    //             <Text>{'Close'}</Text>
    //         </TouchableOpacity>
    //     )
    // }

    // onModalCompleted = (update) => {
    //     // console.log('onModalCompleted', this.state.display3)
    //     this.setState(prevState => {
    //         return {
    //             display3: update
    //         }
    //     });
    // }

    onRenderItemClick(item){
        console.log('onRenderItemClick', item);
    }

    renderItem(item){
        // console.log(item);
        return (
            <AppointmentItem
                shopName={item.item.businessName}
                service={item.item.style == "FADE" ? "Barber" : item.item.style == "UPDO" ? "Hair Dresser" : item.item.style }
                dateTime={item.item.date + "|" + item.item.time}
                status={item.item.status}
                onClick={
                //     this.props.navigation.navigate('Detail',{
                //         Details: item.item
                // } )
                () => {
                    return (
                        <AppointmentDetail
                            detail={item.item}
                        />
                    )
                }
                }
            />
        )
    }

    listHeader = () => {
        return (
            <View style={styles.headerRow}>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={styles.headerText}>{"Upcoming"}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity>
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

    render(){
        
        // if(this.state.prefSet || this.props.prefSet){
            if(this.isEmpty(this.state.profile)){
                return <Spinner size="large" />
            }
        // }
           
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
                    listHeader={this.listHeader}
                    separator={this.listSeparator}
                />
                <AppointmentList
                    currentData={ReviewAppointments.slice(0,3)}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    listHeader={this.listHeader}
                    separator={this.listSeparator}
                />
                {/* <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() =>
                            this.props.navigation.navigate('Detail',{
                                prefSet: this.state.prefSet,
                                profile: this.state.profile,
                                preference: this.state.preference,
                                loadingProfile: this.state.loadingProfile
                            } )}
                    >
                        {'Appointment Deatil'}
                    </ButtonCustom>
                </View>
                <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() => 
                            this.props.navigation.navigate('Reivew',{
                                prefSet: this.state.prefSet,
                                profile: this.state.profile,
                                preference: this.state.preference,
                                loadingProfile: this.state.loadingProfile
                            } )}
                    >
                        {'Appointment Review'}
                    </ButtonCustom>
                </View> */}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('AppointmentDashboard ', state);
    
    return {
        loadingProfile: state.profile.loading,
        loadingPreference: state.preference.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentDashboard);