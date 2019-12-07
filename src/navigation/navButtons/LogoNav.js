import React from 'react'
import { LogoImageButton, ImageButton } from '../../components/common'
import { NavigationActions } from 'react-navigation'

/**
 * Logo button for navigation bar
 */
class LogoNav extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigateAction)
    }

    render(){
        return (
            <LogoImageButton
                onPress={() => this.navigateToScreen('Home')}
                imageSource={require('../../image/BookIt_Tall.png')}
            />
        )
    }
}

export {LogoNav}