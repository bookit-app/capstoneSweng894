import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import styles from '../styles/LogInOptions.styles'
import LogInBtn from '../../components/styles/LogInBtn.styles'
import BottomBtn from '../../components/styles/BottomBtn.styles'
import AccountImage from '../../components/account/AccountImage'
import AccountButtons from '../../components/account/AccountButtons'
import AccountOptions from '../../components/account/AccountOptions'

/**
 * Log-In Option Page
 */
class LogInOption extends Component {
    render(){
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.imgSty}>
                    <AccountImage
                        imageHolder={false}
                        placeholder={require('../../image/Placeholder150.png')}
                    />
                </View>
                <View style={styles.Column}>
                    <AccountButtons
                        btnOne={() => this.props.navigation.navigate('SignUp')}
                        txtOne={'Create Account'}
                        btnOneStyle={LogInBtn.buttonStyle}
                        txtOnetyle={LogInBtn.textStyle}
                    />
                </View>
                <View style={styles.Column}>
                    <AccountButtons
                        btnOne={() => this.props.navigation.navigate('LogIn with Email')}
                        txtOne={'Login'}
                        btnOneStyle={LogInBtn.buttonStylePurple}
                        txtOnetyle={LogInBtn.textStyle}
                    />
                </View>
            </ScrollView>
        )
    }
}


export default LogInOption