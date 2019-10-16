import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCustom } from '../../components/common'
import styles from '../styles/AppointmentDashboard.styles'

class AppointmentDashboard extends React.Component {
    render(){
        return (
            <View>
                <Text>{'Appointment Dashboard'}</Text>
                <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() =>
                            this.props.navigation.navigate('Detail')}
                    >
                        {'Appointment Deatil'}
                    </ButtonCustom>
                </View>
                <View style={styles.viewLayout}>
                    <ButtonCustom
                        onPress={() => 
                            this.props.navigation.navigate('Reivew')}
                    >
                        {'Appointment Review'}
                    </ButtonCustom>
                </View>
            </View>
        )
    }
}

export default AppointmentDashboard;