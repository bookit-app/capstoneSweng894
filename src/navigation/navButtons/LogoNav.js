import React from 'react'
import { ImageButton } from '../../components/common'
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
            <ImageButton
                onPress={() => this.navigateToScreen('Home')}
                imageSource={require('../../image/Placeholder150.png')}
            />
        )
    }
}

export default LogoNav