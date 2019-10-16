import React from 'react'
import { View } from 'react-native'
import { ButtonCustom } from '../common'
import styles from '../styles/SkipNav.styles'

/**
 * Skip this page and move to the next Preference or Profile
 */
const SkipNav = (props) => {
    return(
        <View style={styles.view}>
            <ButtonCustom
                onPress={props.onClickMoveToNext}
            >
                {'Skip'}
            </ButtonCustom>
        </View>
    )
}

export { SkipNav }