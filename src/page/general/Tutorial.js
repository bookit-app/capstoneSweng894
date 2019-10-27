import React from 'react'
import { Modal, View, Text } from 'react-native'
import styles from '../styles/Tutorial.styles'
import { ButtonCustom } from '../../components/common'
import NavigationService from '../../navigation/custom/NavigationService'


class Tutorial extends React.Component{
    goProfile(){
        NavigationService.navigate('Profile')
        this.props.onModalCompleted(false)
    }
    render(){
        return (
            <Modal visible={this.props.display} animationType='slide'>
                <View style={styles.Column}>
                    <this.props.onClose/>
                    <Text style={styles.headerTxt}>
                        {'Welcome to Book it'}
                    </Text>
                    <Text>
                        {'Your almost done set-up. Please click next to go to the profile'}
                    </Text>
                    <ButtonCustom
                        onPress={() => this.goProfile()}
                    >
                        {'Next'}
                    </ButtonCustom>
                    
                </View>
            </Modal>
        )
    }
}

export default Tutorial