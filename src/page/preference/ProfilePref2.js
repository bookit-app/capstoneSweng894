import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Button, Spinner } from '../../components/common'
import { preference } from '../../actions'
import { PrefTop } from '../../components/preference'
import styles from '../styles/Preference.styles'
import { NavigationEvents, ThemeContext } from 'react-navigation'
import utilites from '../../utilites'
import { GetProviderSearchResult } from '../../store'
import store from '../../store'

const Item = (props) => {
    return(
        <View style={styles.Item}>
            <TouchableOpacity onPress={() => { console.log(props.businessName);
            }}>
                <View style={styles.RowItem}>
                    <Image
                        style={styles.ItemimgSty}
                        source={require('../../image/Placeholder150.png')}
                    />   
                    <Text>{props.businessName}</Text>
                    <Text>{props.distance}</Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}

const Itemv2 = ({businessName}) => {
    return(
        <View style={styles.Item}>
            <TouchableOpacity onPress={() => { console.log(businessName);
            }}>
                <View style={styles.RowItem}>
                    <Image
                        style={styles.ItemimgSty}
                        source={require('../../image/Placeholder150.png')}
                    />   
                    <Text>{businessName}</Text>
                </View>
            </TouchableOpacity> 
        </View>
    )
}
class ProfilePref2 extends React.Component {
    constructor(props){
        super(props)

        state = {
            serviceProviders: [],
            currentProviders: [],
            pageProviders: [],
            maxPages: 0,
            currentIndex: 0
        }

        this.filterGenerate = utilites.filterGenerate.bind(this)
    }

    componentDidMount(){
        // console.log('componentDidMount preference', this.props.preference);
        // console.log('componentDidMount token', this.props.token);
        console.log('componentDidMount provider', this.props.searchResult);
        console.log('componentDidMount provider', this.props.errorMessage);
        console.log('componentDidMount provider', this.props.loading);
        
        firebase.auth().currentUser.getIdToken()
            .then((token) => {
                const { city, state } = this.props.preference
                // const { token } = this.props.token

                var filterType = {
                    city: city,
                    state: state,
                    zip: '',
                    businessName: ''
                }

                console.log('componentDidMount Request', filterType);
                
                var filter = this.filterGenerate(filterType)

                // this.props.getProviderResult(filter, token)
                store.dispatch(GetProviderSearchResult(filter,token))
            })
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.providerResults != this.props.providerResults){ 
            this.onPreferencePage2()
        }
    }

    onPreferencePage2(){
        var pageSize = Math.round(this.props.providerResults.length/3)
                
        var listOfList = []            

        for(var i=0; i < this.props.providerResults.length; i = i + pageSize){                
            listOfList.push(this.props.providerResults.slice(i, i + pageSize))
        }

        console.log(listOfList);

        this.setState({
            serviceProviders: this.props.providerResults,
            currentProviders: listOfList[0],
            pageProviders: listOfList,
            pageMax: listOfList.length,
            currentIndex: 0
        })
    }

    onMoveToTab(){
        this.props.settingPref(true)
        this.props.navigation.navigate('Profile')
    }

    render(){
        const { loading,errorMessage } = this.props
        console.log('Render provider', loading);
        console.log('Render provider', errorMessage.error);

        if(loading){
            return <Spinner size="large" />
        }
        
        if(errorMessage){
            return (
                <View style={styles.Column}>
                    <Text style={styles.errorFormTextStyle}>{'Test'}</Text>
                </View>
            )
        } else {
            return(
                <View style={styles.Column}>
                                <PrefTop
                        header={''}
                        subHeader={"Here are some shop we thought you would like based on your previous selections"}
                        onClickMoveToNext={() => this.props.navigation.navigate('profile')} 
                    />            
                    {/* <NavigationEvents
                        onWillFocus={this.onPreferencePage2()}
                    /> */}
                    {/* <View style={styles.Column}>
                        <FlatList
                            data={this.state.currentProviders}
                            extraData={this.state}
                            renderItem={(item) => {
                                return (
                                    <Item
                                        key={item.item.providerId}
                                        businessName={item.item.businessName}
                                    />
                                )
                            }}
                            keyExtractor = { item =>item.providerId }
                            initialNumToRender={2}
                            maxToRenderPerBatch={1}
                            onEndReachedThreshold={0.5}
                            onEndReached={()=>{
                                this.setState({
                                    currentProviders: this.pageProviders[this.state.currentIndex+1],
                                    currentIndex: this.state.currentIndex+1 
                                })
                            }}
                        />
                    </View> */}
                    <View>
                        <Button
                            onPress={this.onMoveToTab.bind(this)}
                        >
                            {'Submit'}
                        </Button>
                    </View>
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        preference: state.preference.preference,
        providerResults: state.provider.providerSearchResult,
        searchResult: state.provider.searchResult,
        errorMessage: state.provider.errorMessage,
        loading: state.provider.loading,
        token: state.auth.token,
        // providerResultsLoading: state.provider.
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref)),
        getProviderResult : (filter, token) => GetProviderSearchResult(filter, token)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePref2)