import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Spinner } from '../../components/common'
import { AppointmentList, AppointmentItem } from '../../components/appointment'
import styles from '../styles/AppointmentDashboard.styles'
import utilites from '../../utilites'

/**
 * Temp Object can be changes as necessary or removed
 * @param {*} props 
 */
const UserInfo = (props) =>{
    if(props.prefSet && props.preferInfo && props.profInfo){
        const { firstName, lastName, email } = props.profInfo
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

class AppointmentReview extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            list: [],
            header: ''
        }

        this.isEmpty = utilites.isEmpty.bind(this)
    }

    componentDidMount(){
        const { navigation } = this.props

        this.setState({
            list: navigation.getParam('list', []),
            header: navigation.getParam('headertitle', '')
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        var list = navigation.getParam('list', [])
        // console.log('UNSAFE_componentWillReceiveProps', list);

        if(this.isEmpty(this.state.list) && !this.isEmpty(list)){
            this.setState({
                list: list,
                header: navigation.getParam('headertitle', '')
            })
        }
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
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingProfile: state.profile.loading,
        profile: state.profile.profile,
        preference: state.preference.preference,
        prefSet: state.preference.pref
    }
}

export default connect(mapStateToProps,null)(AppointmentReview)