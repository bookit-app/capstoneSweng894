import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { Button } from '../../components/common'
import { preference } from '../../actions'
import {PrefTop} from '../../components/preference'
import styles from '../styles/Preference.styles'
import { NavigationEvents } from 'react-navigation'

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
class ProfilePref1 extends React.Component {
    constructor(props){
        super(props)

        state = {
            serviceProviders: this.props.providerResults,
            currentProviders: this.props.providerResults.slice(0,5),
            pageProviders: [],
            maxPages: 0,
            currentIndex: 0
        }

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
        return(
            <View style={styles.Column}>
                            <PrefTop
                    header={''}
                    subHeader={"Here are some shop we thought you would like based on your previous selections"}
                    onClickMoveToNext={() => this.props.navigation.navigate('profile')} 
                />            
                <NavigationEvents
                    onWillFocus={this.onPreferencePage2()}
                />
                <View style={styles.Column}>
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
                </View>
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

const mapStateToProps = (state) => {
    return {
        providerResults: state.provider.providerSearchResult,
        // providerResultsLoading: state.provider.
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePref1)