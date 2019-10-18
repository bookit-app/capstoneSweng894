import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { PrefTop, PrefChoice, PrefResult } from '../../components/preference'
import {Button } from '../../components/common'
import styles from '../styles/Preference.styles'
import { preference } from '../../actions'
import { Time, Day } from '../../constant'
import utilites from '../../utilites'

class ProfilePref1 extends React.Component {
    constructor(props){
        super(props)
        
        this.state ={
            staffClassification: '',
            cityState: '',
            errorCityState: '',
            styleOn: '',
            errorStyleOn: '',
            styleLists: [],
            day: '',
            errorDay: '',
            time: '',
            errorTime: ''
        }
        this.onPreferencePage1Confirmed = utilites.onPreferencePage1Confirmed.bind(this)
    }

    onSelectClassication = (data) => {
        this.setState({ staffClassification: data })
    }
    
    onStyleFromClassication = (data) => {
        this.setState({styleLists: data})
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.Column}>
                    <PrefTop
                        header={'Hi!'}
                        subHeader={"Let's start by setting up appointment preferences"}
                        onClickMoveToNext={() => this.props.navigation.navigate('Pref2')} 
                    />
                    <PrefChoice
                        sectionHeader={'You want'}
                        opt1={'Hair Dresser'}
                        opt2={'Barber'}
                        token={this.props.token}
                        onClassificationSelect={this.onSelectClassication}
                        onStyleListSelect={this.onStyleFromClassication}
                    />
                    <PrefResult
                        sectionHeader={'Where do you prefer to book ?'}
                        cityState={this.state.cityState}
                        onCityStateChge={cityState => this.setState({ cityState })}
                        errorCityState={this.state.errorCityState}
                        onStyleChge={styleOn => this.setState({ styleOn })}
                        errorStyle={this.state.errorStyleOn}
                        onStyleSelected={this.state.styleOn}
                        onStyleItems={this.state.styleLists}
                        onDayChge={day => this.setState({ day })}
                        errorDay={this.state.errorDay}
                        onDaySelected={this.state.day}
                        onDayItems={Day}
                        onTimeChge={time => this.setState({ time })}
                        errorTime={this.state.errorTime}
                        onTimeSelected={this.state.time}
                        onTimeItems={Time}
                        token={this.props.token}
                    />
                    <Button
                        onPress={() => this.onPreferencePage1Confirmed()}
                    >
                        {'Continue'}
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer))
    }
}

const mapStateToProps = (state) =>{
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePref1)