import React from 'react'
import {
    View, Text, ScrollView,
} from 'react-native'
import styles from '../../page/styles/Appointment.styles'
import ShopLocater from './ShopLocater'
import { ButtonCustom } from '../common'
import CreateAppointmentBtn from './ShopType'
import LogInBtnStyles from '../styles/LogInBtn.styles'


{/*Setups the Input Field for User Location */}

const FindShopForm = (props) => {
    return (
        <ScrollView style={styles.scrollView}>
        
        {/*Location Header*/}
        <View style={styles.headerRow}>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.headerText}>{"Enter Your Location"}</Text>
        </View>                
        </View>
       
        {/*Shop Locater User Input Field*/}
        <View>
        <ShopLocater
        userLocationInput={props.userLocation}   
        locationOnChg={props.onLocationChge}
        />
        </View>
         
        {/*Shop Type Header*/}
        <View style={styles.headerRow}>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.headerText}>{"Would you prefer a hair dresser or barber?"}</Text>
        </View>                
        </View>
        
       {/*Shop Preference Button*/}
       <View style={{flex: 1, flexDirection: 'row'}}>
           <CreateAppointmentBtn
          onPress={props.onShopStyleClickOption}
           shopBtnStyle={LogInBtnStyles.smallButtonStylePurple}
           textStyle={LogInBtnStyles.whiteFillTextStyle}
           text={'Hair Dresser'}
       />
       <CreateAppointmentBtn
           onPress={props.onShopStyleClickOption}
           shopBtnStyle={LogInBtnStyles.smallButtonStylePurple}
           textStyle={LogInBtnStyles.whiteFillTextStyle}
           text={'Barber'}
       />
       
       </View>
       {/*Shop Type Header*/}
       <View style={styles.headerRow}>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.headerText}>{"Please select your preferred date:"}</Text>
        </View>                
        </View>
        
           
     </ScrollView>
    )
}

export default FindShopForm