import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation'
import LogInBtn from '../../components/styles/LogInBtn'
import BottomBtn from '../../components/styles/BottomBtn'
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
                        btnOne={() => this.props.navigation.navigate('LogIn with Email')}
                        txtOne={'Login With Email'}
                        btnOneStyle={LogInBtn.buttonStyle}
                        txtOnetyle={LogInBtn.textStyle}
                    />
                </View>
                <View>
                    <AccountOptions
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        buttonStyle={BottomBtn.btnBtmStyle}
                        textStyle={BottomBtn.txtBtnStyle}
                        viewStyle={BottomBtn.bottomView}
                        children={'Create an Account'}
                    />  
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    imgSty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    scrollView: {
      marginHorizontal: 20,
    },
    Row: {
        display: 'flex',
        flexDirection: 'row',
      },
    Column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10
      }
}

export default withNavigation(LogInOption)