import React from 'react'
import { ScrollView, Text, View, Button } from 'react-native'
import styles from './AppMenu.style'
import { NavigationActions } from 'react-navigation'
import LogOutNav from '../navButtons/LogOutNav'

class AppMenu extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigateAction)
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navSectionStyle}>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                        </View>
                        <View style={styles.navSectionStyle}>
                            <Text 
                                style={styles.navItemStyle}
                                onPress={this.navigateToScreen('Profile')}>
                                Profile
                            </Text>
                        </View>
                        <View style={styles.footerContainer}>
                            <LogOutNav />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default AppMenu