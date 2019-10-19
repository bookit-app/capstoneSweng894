import React from 'react'
import api from '../../api'
import { connect } from 'react-redux'
import { View, ScrollView } from 'react-native'
import { PrefTop, PrefChoice, PrefResult } from '../../components/preference'
import { Button, Spinner } from '../../components/common'
import styles from '../styles/Preference.styles'
import { preference, profile } from '../../actions'
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
            styleOnType: '',
            errorStyleOn: '',
            styleLists: [],
            styleSelected: [],
            day: '',
            daySelected:[],
            errorDay: '',
            time: '',
            timeSelected:[],
            errorTime: '',
            loading: true,
            hairDresserList: [],
            barberList: [],
            error: ''
        }
        this.onPreferencePage1Confirmed = utilites.onPreferencePage1Confirmed.bind(this)
    }

    UNSAFE_componentWillMount(){
        api.getConfiguration("styles", this.props.token)
        .then((sty) => {
            var styles_ = sty.data 

            styles_.hairStyles[1].types.map(i => {
                
                var single = {}
                single['Id'] = this.state.hairDresserList.length
                single['Name'] = i
                single['Value'] = i
                

                if(i == this.props.preference.hairStyle.type){
                    this.state.styleSelected.push(single)
                    this.state.styleOnType = styles_.hairStyles[1].style
                }

                this.state.hairDresserList.push(single)
            })

            styles_.hairStyles[0].types.map(i => {
                
                var single = {}
                single['Id'] = this.state.barberList.length
                single['Name'] = i
                single['Value'] = i

                if(i == this.props.preference.hairStyle.type){
                    this.state.styleSelected.push(single)
                    this.state.styleOnType = styles_.hairStyles[0].style
                }

                this.state.barberList.push(single)
            })

            this.state.timeSelected = Time.filter(i => i.Value === this.props.preference.time).map(j => j.Name)
            this.state.daySelected = Day.filter(i => i.Value == parseInt(this.props.preference.day)).map(j => j.Name)

            this.setState({
                staffClassification: this.props.preference.staffClassification,
                styleOn: this.props.preference.hairStyle.type,
                styleLists: this.state.hairDresserList.indexOf(this.state.styleOn) ? this.state.hairDresserList : this.state.barberList,
                day: this.props.preference.day,
                time: this.props.preference.time,
                cityState: this.props.profile.address.city + ', ' + this.props.profile.address.state,
                loading: false
            })
        })
    }

    onSelectClassication = (data) => {
        this.setState({ staffClassification: data })
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
                        pick={this.state.hairDresserList.indexOf(this.state.styleOn) ? false : true}
                        onClassificationSelect={this.onSelectClassication}
                    />
                    <PrefResult
                        sectionHeader={'Where do you prefer to book ?'}
                        cityState={this.state.cityState}
                        onCityStateChge={cityState => this.setState({ cityState })}
                        errorCityState={this.state.errorCityState}
                        onStyleChge={styleOn => this.setState({ styleOn })}
                        errorStyle={this.state.errorStyleOn}
                        onStyleSelected={this.state.styleOn}
                        onStyleItems={this.state.styleLists.map( i => i.Name)}
                        onDayChge={day => this.setState({ day })}
                        errorDay={this.state.errorDay}
                        onDaySelected={this.state.day}
                        onDayItems={Day.map(a => a.Value)}
                        onTimeChge={time => this.setState({ time })}
                        errorTime={this.state.errorTime}
                        onTimeSelected={this.state.time}
                        onTimeItems={Time.map(t => t.Value)}
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

const mapStateToProps = (state) =>{
    return {
        token: state.auth.token,
        preference: state.preference.preference,
        profile: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setPreference: (prefer) => dispatch(preference.setPreference(prefer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePref1)