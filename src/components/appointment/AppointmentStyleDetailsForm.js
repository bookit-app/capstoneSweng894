import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import styles from '../../page/styles/Appointment.styles'

const AppointmentStyleDetailsForm = (props) => {

    return(
        <ScrollView style={styles.ScrollView}>
        
        {/*Shop Header*/}
        <View style={styles.headerRow}>
        <View style={{ alignItems: 'flex-start' }}>
            <Text style={styles.headerText}>{"We found the following shops for you:"}</Text>
        </View>                
        </View>

          {/*List of Shops Loaded from Database Search*/}
   
        </ScrollView>
    )
}

export default AppointmentStyleDetailsForm