import React from 'react'
import { Text, View } from 'react-native'
import { Spinner, ImageButton } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import AppointmentDetail from './AppointmentDetail'
import styles from '../styles/Appointment.styles'
import utilites from '../../utilites'

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

        if((this.isEmpty(this.state.list) && !this.isEmpty(list)) ||
            (this.isEmpty(this.state.profile) && !this.isEmpty(profile))){

            this.setState({
                list: list,
                header: this.props.navigation.getParam('headertitle', ''),
                profile: profile,
                token: token
            })
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
                />
                <AppointmentDetail
                    item={this.state.item} 
                    display={this.state.display}
                    onClose={() => this.onDetailClose()}
                    profile={this.state.profile}
                    token={this.state.token}
                />
            </View>
        )
    }
}

export default AppointmentReview