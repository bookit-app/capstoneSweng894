import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import { PrefTop, PrefChoice, PrefResult } from '../../components/preference'
import {Button } from '../../components/common'
import styles from '../styles/Preference.styles'
import { preference } from '../../actions'

class ProfilePref1 extends React.Component {
    constructor(props){
        super(props)
        
        this.state ={
            staffClassification: '',
            cityState: '',
            errorCityState: '',
            styleOn: '',
            errorStyleOn: '',
            day: '',
            errorDay: '',
            time: '',
            errorTime: ''
        }
    }

    onPreferencePage1Confirmed(){
        var preferences = {
            day: this.state.day,
            hairStyle: this.state.styleOn,
            staffClassification: this.state.staffClassification,
            time: this.state.time
        }

        console.log('onPreferencePage1Confirmed', preferences);
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
                        result={value => this.setState({ staffClassification: value })}
                    />
                    <PrefResult
                        sectionHeader={'Where do you prefer to book ?'}
                        cityState={this.state.cityState}
                        onCityStateChge={cityState => this.setState({ cityState })}
                        errorCityState={this.state.errorCityState}
                        styleOn={this.state.styleOn}
                        onStyleChge={styleOn => this.setState({ styleOn })}
                        errorStyle={this.state.errorStyleOn}
                        day={this.state.day}
                        onDayChge={day => this.setState({ day })}
                        errorDay={this.state.errorDay}
                        time={this.state.time}
                        onTimeChge={time => this.setState({ time })}
                        errorTime={this.state.errorTime}
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
        setPreference: (preference) => dispatch(preference.setPreference(preference))
    }
}

export default connect(null,mapDispatchToProps)(ProfilePref1)