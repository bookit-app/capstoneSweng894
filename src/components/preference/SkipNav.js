import React from 'react'
import { View } from 'react-native'
import { ButtonCustom } from '../common'
import styles from './SkipNav.styles'
import { NavigationActions } from 'react-navigation'

/**
 * Skip this page and move to the next Preference or Profile
 */
class SkipNav extends React.Component {
    render(){
        return(
            <View style={styles.view}>
                <ButtonCustom
                    onPress={this.props.onClickMoveToNext}
                >
                    {'Skip'}
                </ButtonCustom>
            </View>
        )
    }
}

export default SkipNav