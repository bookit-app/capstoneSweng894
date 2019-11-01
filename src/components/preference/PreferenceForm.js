import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Alert } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { PrefTop, PrefChoice, PrefResult } from '../preference'
import { Spinner } from '../common'
import styles from '../../page/styles/Preference.styles'
import { preference, profile } from '../../actions'
import { Time, DayOfWeek } from '../../constant'
import utilites from '../../utilites'
import validation from '../../validation'
import { GetProviderSearchResult } from '../../store'

const TopSection = (props) => {
    if(!props.onRemoveSkipBtn){
        return (
            <PrefTop
                header={props.header}
                subHeader={props.subHeader}
                onClickMoveToNext={props.onClickMoveToNext} 
            />
        )
    } else {
        return (
            <View />
        )
    }
}

class PrefeenceForm extends React.Component {
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
            time: 'i.e. Afternoon',
            timeSelected:[],
            errorTime: '',
            loading: true,
            loading_Submit: false,
            hairDresserList: [],
            barberList: [],
            error: '',
            token: ''
        }

        this.onPreferencePage1Confirmed = utilites.onPreferencePage1Confirmed.bind(this)
        this.setStyleType = utilites.setStyleType.bind(this)
        this.onPreferenceRefresh = utilites.onPreferenceRefresh.bind(this)
        this.onSubmitPrefPage1 = utilites.onSubmitPrefPage1.bind(this)
        this.resultsFromFilterPreference = utilites.resultsFromFilterPreference.bind(this)
        this.onSkipClick = utilites.onSkipClick.bind(this)
        this.isEmpty = utilites.isEmpty.bind(this)

        this.verifyCityState = validation.verifyCityState.bind(this)
    }

    UNSAFE_componentWillMount(){
        this.onPreferenceRefresh()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        // console.log('UNSAFE_componentWillReceiveProps', nextProps.profile);
        // console.log('UNSAFE_componentWillReceiveProps', this.props.profile);
        // console.log('UNSAFE_componentWillReceiveProps', this.props.loadingProfile);
        // console.log('UNSAFE_componentWillReceiveProps', this.props.preference);
        
        // if( this.props.prefSet 
        // console.log('UNSAFE_componentWillReceiveProps', this.state);
        
        if(!this.props.loadingProfile && this.state.staffClassification && !this.props.token){
            this.onPreferenceRefresh()
        }
    }

    onSelectClassication = (data) => {
        var newStyleOn = this.state.hairDresserList.filter(i => i.staffclassification == data).map(a => a.style)[0] ? 
            this.state.hairDresserList.filter(i => i.staffclassification == data).map(a => a.style)[0] 
            : this.state.barberList.filter(i => i.staffclassification == data).map(b => b.style)[0]
        var currentList = []
        currentList = this.state.hairDresserList.filter(i => i.style == newStyleOn).length > 1 ? this.state.hairDresserList : this.state.barberList

        this.setState({ 
            staffClassification: data,
            styleOn: newStyleOn,
            styleLists: currentList 
        })

        Alert.alert(
            'Style Warning',
            'Your styles does not match your styler. Please change. ',
            [
                {text: 'Ok', onPress: () => {                
                    this.setState({
                        styleOnType: null
                    })
                }}
            ]
        )
    }
    
    onStyleFromClassication = (data) => {
        this.setState({styleLists: data})
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
                    <TopSection
                        onRemoveSkipBtn={this.props.onRemoveSkipBtn}
                        header={this.props.header}
                        subHeader={this.props.subHeader}
                        onClickMoveToNext={() =>  this.onSkipClick(this.props.onSkip)}
                    />
                    <PrefChoice
                        sectionHeader={this.props.sectionHeader}
                        opt1={this.props.btnOption1}
                        opt2={this.props.btnOption2}
                        token={this.props.token}
                        pick={this.state.hairDresserList.filter(i => i.style == this.state.styleOn).length > 1 ? false : true}
                        onClassificationSelect={this.onSelectClassication}
                    />
                    <PrefResult
                        sectionHeader={this.props.resultSectionHeader}
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
                        formError={this.state.error}
                    />
                    {this.onSubmitPrefPage1(this.props.onContiune)}
                </View>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) =>{
    // console.log('PreferenceForm mapStateToProps ', state);
    
    return {
        token: state.auth.token,
        preference: state.preference.preference,
        profile: state.profile.profile,
        loadingProfile: state.profile.loading,
        providerResults: state.provider.providerSearchResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer)),
        setProfile: (prof) => dispatch(profile.setProfile(prof)),
        getProviderResult : (filter, token) => dispatch(GetProviderSearchResult(filter, token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PrefeenceForm)