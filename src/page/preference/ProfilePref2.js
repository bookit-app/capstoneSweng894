import React from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView, Image, TouchableOpacity  } from 'react-native'
import { Button } from '../../components/common'
import { preference } from '../../actions'
import {PrefTop} from '../../components/preference'
import styles from '../styles/Preference.styles'
import {serviceProvider } from '../../constant'


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

class ProfilePref1 extends React.Component {
    state = {
        service: ''
    }
    onMoveToTab(){
        this.props.settingPref(true)
        this.props.navigation.navigate('Profile')
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.Column}>
                                <PrefTop
                        header={''}
                        subHeader={"Here are some shop we thought you would like based on your previous selections"}
                        onClickMoveToNext={() => this.props.navigation.navigate('profile')} 
                    />            
                    <View style={styles.Column}>
                    {(
                        serviceProvider.map((service) =>{
                            return (
                                <Item
                                    key={service.ein}
                                    businessName={service.businessName}
                                    email={service.email}
                                    distance={service.distance}
                                />
                            )
                        })
                    )}
                    </View>
                    <View>
                        <Button
                            onPress={this.onMoveToTab.bind(this)}
                        >
                            {'Submit'}
                        </Button>
                    </View>
                </View>
        
            </ScrollView>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        settingPref: (pref) => dispatch(preference.settingPref(pref))
    }
}

export default connect(null, mapDispatchToProps)(ProfilePref1)