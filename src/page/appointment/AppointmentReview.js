import React from 'react'
import { connect } from 'react-redux'
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
            item: {}
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

        if(this.isEmpty(this.state.list) && !this.isEmpty(list)){
            this.setState({
                list: list,
                header: navigation.getParam('headertitle', '')
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