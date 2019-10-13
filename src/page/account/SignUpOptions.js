import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from '../styles/SignUpOptions.styles'
import LogInBtn from '../../components/styles/LogInBtn.styles'
import BottomBtn from '../../components/styles/BottomBtn.styles'
import AccountImage from '../../components/account/AccountImage'
import AccountButtons from '../../components/account/AccountButtons'
import AccountOptions from '../../components/account/AccountOptions'

/**
 * Sign-Up Option Page
 */
class SignUpOptions extends React.Component {
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
                        btnOne={() => this.props.navigation.navigate('Sign Up With Email')}
                        txtOne={'Sign Up With Email'}
                        btnOneStyle={LogInBtn.buttonStyle}
                        txtOnetyle={LogInBtn.textStyle}
                    />
                </View>
                <View>
                    <AccountOptions
                        onPress={() => this.props.navigation.navigate('Login')}
                        buttonStyle={BottomBtn.btnBtmStyle}
                        textStyle={BottomBtn.txtBtnStyle}
                        viewStyle={BottomBtn.bottomView}
                        children={'Already have account? Login'}
                    />  
                </View>
            </ScrollView>
        )
    }
}

export default SignUpOptions