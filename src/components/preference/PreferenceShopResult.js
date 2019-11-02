import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { Spinner } from '../common'
import { preference } from '../../actions'
import { DisplayResults } from '../general'
import { GetProviderSearchResult } from '../../store'
import styles from '../../page/styles/Preference.styles'
import utilites from '../../utilites'
import apis from '../../api'

import NavigationService from '../../navigation/custom/NavigationService'

const Item = (props) => {
    // console.log('Item', 'here');
    return(
        <View style={styles.Item}>
            <TouchableOpacity onPress={props.onProviderSelect}>
                <View style={styles.RowItem}>
                    <Image
                        style={styles.ItemimgSty}
                        source={require('../../image/Placeholder150.png')}
                    />   
                    <Text>{props.businessName ? props.businessName :''}</Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}

class PreferenceShopResult extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            serviceProviders: [],
            currentProviders: [],
            pageProviders: [],
            maxPages: 0,
            currentIndex: 0,
            chgeStyle: false,
            city: '',
            state: '',
            styles: '',
            loading: true,
        }

        this.filterGenerate = utilites.filterGenerate.bind(this)
        this.isEmpty = utilites.isEmpty.bind(this)

        this.renderItem = this.renderItem.bind(this)
        this.setProviderPreference = this.setProviderPreference.bind(this)
        this.onLoadNext = this.onLoadNext.bind(this)
        this.onPreferenceRefreshListSource = this.onPreferenceRefreshListSource.bind(this)
    }

    // componentDidMount(){    
    //     console.log('componentDidMount', this.props.alreadyFetch);
            
    //     if(!this.props.alreadyFetch){
    //         this.onPreferenceRefreshListSource()
    //     }
    // }

    UNSAFE_componentWillReceiveProps(nextProps){       
        if(!this.isEmpty(this.props.profile) || !this.isEmpty(this.props.preference)){
            var city = this.isEmpty(this.props.preference) ? this.props.profile.address.city : this.props.preference.city
            var state = this.isEmpty(this.props.preference) ? this.props.profile.address.state : this.props.preference.state
            var styles = !this.isEmpty(this.props.preference) ? !this.isEmpty(this.props.preference.hairStyle) ? this.props.preference.hairStyle.style : '' : ''
        }

        if((this.state.loading || this.props.loading) || (nextProps.searchResult != this.state.serviceProviders)){ 
            // console.log('UNSAFE_componentWillReceiveProps', 'here');
            this.onPreferencePage2(nextProps.searchResult)
        } 
        else if(this.state.city != city || this.state.state != state || this.state.styles != styles){
            // console.log('UNSAFE_componentWillReceiveProps', 'Refresh list');
            this.onPreferenceRefreshListSource()
        }
    }

    onPreferenceRefreshListSource(){
        if(!this.isEmpty(this.props.profile) || !this.isEmpty(this.props.preference)) {
            var city = this.isEmpty(this.props.preference) ? this.props.profile.address.city : this.props.preference.city
            var state = this.isEmpty(this.props.preference) ? this.props.profile.address.state : this.props.preference.state
            var styles = !this.isEmpty(this.props.preference) ? !this.isEmpty(this.props.preference.hairStyle) ? this.props.preference.hairStyle.style : '' : ''
            
            this.setState({
                city: city,
                state: state,
                styles: styles,
                loading: true
            })

            var filterType = {
                city: city,
                state: state,
                // styles: styles
            }
            
            var filter = this.filterGenerate(filterType)

            this.props.getProviderResult(filter,this.props.token)
        }
    }

    onPreferencePage2(list){
        var searchlist = list ? list : this.props.searchResult

        try{
        //     console.log('onPreferencePage2 searchResult 2', searchlist);
            var pageSize = Math.round(searchlist.length/3)
                    
            var listOfList = []            

            for(var i=0; i < searchlist.length; i = i + pageSize){                
                listOfList.push(searchlist.slice(i, i + pageSize))
            }

            // console.log('onPreferencePage2', 'Here');
            
            this.setState({
                serviceProviders: searchlist,
                currentProviders: listOfList[0],
                pageProviders: listOfList,
                pageMax: listOfList.length,
                currentIndex: 0,
                loading: false
            })

        } catch(error){
            console.log('onPreferencePage2', 'Errored and do nothing');
        }
    }

    onLoadNext(){
        // console.log('onLoadNext', 'Here');
        
        const { currentProviders, pageProviders, currentIndex, pageMax } = this.state

        if(currentIndex <= pageMax && pageProviders[currentIndex+1]){            
            this.setState({
                currentProviders: [...currentProviders,...pageProviders[currentIndex+1]],
                currentIndex: currentIndex+1
            })
        }       
    }

    setProviderPreference(item){
        // console.log('setProviderPreference', 'here');
        
        Alert.alert(
            'Preference Provider',
            `Would you like to set ${item.businessName} as your prefered shop?`  ,
            [
                {text: 'Cancel', onPress: () => {return null}},
                {text: 'Confirm', onPress: () => {      
                    // console.log('Preference Provider',this.props.profile.preferences);
                    // console.log('Preference Provider',this.props.preference);

                    var preference = this.isEmpty(this.props.preference) ? this.props.profile.preferences : this.props.preference
                    // console.log('Preference Provider',preference);
                    preference.providerId = item.providerId

                    var payload = {
                        "preferences":{
                            providerId: item.providerId
                        }
                    }

                    // console.log('Preference Provider',payload);

                    apis.updateProfileById(payload, this.props.token)
                        .then(i => {
                            this.props.setPreference(preference)
                            NavigationService.navigate(this.props.onItemConfirmed)
                        }).catch(error =>{
                            console.log('setProviderPreference error', error);
                            
                        })
                }}
            ]
        )
    }

    renderItem(item){
        // console.log('renderItem', item);
        return (
            <Item
                key={item.item.providerId}
                businessName={item.item.businessName}
                onProviderSelect={() => this.setProviderPreference(item.item)}
            />
        )
    }


    render(){
        const { loading, errorMessage } = this.props

        if(loading){
            return <Spinner size="large" />
        }
        
        return (
            <DisplayResults
                headerText={this.props.headerText}
                noRecordsFound={this.props.noRecordsFound}
                errorMessage={errorMessage}
                currentData={this.state.currentProviders}
                extraData={this.state}
                renderItem={this.renderItem}
                onEndReached={() => this.onLoadNext()}
            />
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('mapStateToProps Preference', state);
    return {
        profile: state.profile.profile,
        preference: state.preference.preference,
        providerResults: state.provider.providerSearchResult,
        alreadyFetch: state.provider.alreadyFetch,
        searchResult: state.provider.searchResult,
        errorMessage: state.provider.errorMessage,
        loading: state.provider.loading,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        setPreference: (prefer) => dispatch(preference.setPreference(prefer)),
        getProviderResult : (filter, token) => dispatch(GetProviderSearchResult(filter, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferenceShopResult)