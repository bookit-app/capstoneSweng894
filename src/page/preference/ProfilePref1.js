import React from 'react'
import api from '../../api'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { PrefTop, PrefChoice, PrefResult } from '../../components/preference'
import { Button, Spinner } from '../../components/common'
import styles from '../styles/Preference.styles'
import { preference, provider, profile } from '../../actions'
import { Time, Day, DayOfWeek } from '../../constant'
import utilites from '../../utilites'
import validation from '../../validation'

class ProfilePref1 extends React.Component {
    constructor(props){
        super(props)
        
        this.state ={
            staffClassification: '',
            cityState: 'i.e. Malven, Pa',
            errorCityState: '',
            styleOn: '',
            styleOnType: 'i.e. Hair',
            styleOnTyle:[],
            errorStyleOnType: '',
            styleLists: [],
            styleSelected: [],
            day: 'i.e. Monday',
            daySelected:[],
            errorDay: '',
            time: 'i.e. AFTERNOON',
            timeSelected:[],
            errorTime: '',
            loading: true,
            loading_Submit: false,
            hairDresserList: [],
            barberList: [],
            error: ''
        }

        this.onPreferencePage1Confirmed = utilites.onPreferencePage1Confirmed.bind(this)
        this.setStyleType = utilites.setStyleType.bind(this)
        this.onPreferenceRefresh = utilites.onPreferenceRefresh.bind(this)
        this.onSubmitPrefPage1 = utilites.onSubmitPrefPage1.bind(this)
        this.passServicePreference = utilites.passServicePreference.bind(this)


        this.verifyCityState = validation.verifyCityState.bind(this)
    }

    UNSAFE_componentWillMount(){
        this.onPreferenceRefresh()
    }

    onSelectClassication = (data) => {
        this.setState({ staffClassification: data })
    }
    
    onStyleFromClassication = (data) => {
        this.setState({styleLists: data})
    }

    onSkipClick(){
        const { cityState } = this.state

        var city = cityState.split(',')[0].trim() 
        var state_ = cityState.split(',')[1].trim()

        var filterType = {
            city: city,
            state: state_.toUpperCase(),
            zip: '',
            businessName: ''
        }
    
        this.passServicePreference(filterType)
        this.props.navigation.navigate('Pref2')
    }

    render(){
        if(this.state.loading){
            return <Spinner size="large" />
        }

        return(
            <ScrollView style={styles.scrollView}>
                <NavigationEvents
                    onDidBlur={() => this.onPreferenceRefresh()}
                />
                <View style={styles.Column}>
                    <PrefTop
                        header={'Hi!'}
                        subHeader={"Let's start by setting up appointment preferences"}
                        onClickMoveToNext={() =>  this.onSkipClick()} 
                    />
                    <PrefChoice
                        sectionHeader={'You want'}
                        opt1={'Hair Dresser'}
                        opt2={'Barber'}
                        token={this.props.token}
                        pick={this.state.hairDresserList.indexOf(this.state.styleOn) ? false : true}
                        onClassificationSelect={this.onSelectClassication}
                    />
                    <PrefResult
                        sectionHeader={'Where do you prefer to book ?'}
                        cityState={this.state.cityState}
                        onCityStateChge={cityState => this.verifyCityState( cityState )}
                        errorCityState={this.state.errorCityState}
                        onStyleTypeChge={styleOnType => this.setStyleType( styleOnType )}
                        errorStyleType={this.state.errorStyleOnType}
                        onStyleTypeSelected={this.state.styleOnType}
                        onStyleTypeItems={this.state.styleLists.map( i => i.Value)}

                        onDayChge={day => this.setState({ day: DayOfWeek.filter(i => i.Name == day)[0].Name })}
                        errorDay={this.state.errorDay}
                        onDaySelected={this.state.day}
                        onDayItems={DayOfWeek.map(a => a.Name)}

                        onTimeChge={time => this.setState({ time })}
                        errorTime={this.state.errorTime}
                        onTimeSelected={this.state.time}
                        onTimeItems={Time.map(t => t.Value)}
                        token={this.props.token}
                    />
                    {this.onSubmitPrefPage1()}
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        token: state.auth.token,
        preference: state.preference.preference,
        profile: state.profile.profile,
        providerResults: state.provider.providerSearchResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer)),
        setProviderSearch: (filter) => dispatch(provider.set_provider_search(filter))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePref1)