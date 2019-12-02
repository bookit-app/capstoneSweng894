import React from 'react'
import { View, Button, AsyncStorage } from 'react-native'
import styles from '../styles/LogOutNav.styles'
import { NavigationActions } from 'react-navigation'
import store from '../../store'
import { signOut } from '../../store'

class BackToCreateView extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });

        this.props.navigation.dispatch(navigateAction)
    }

    onBackSelection(){
        console.log("User went back to initial create appointment view");
        AsyncStorage.clear()
        store.dispatch(signOut())
        this.navigateToScreen('Next')
    } 

    render(){
        return(
            <View styles={styles.btnView}>
                <Button 
                    style={styles.txtLabel}
                    title={"Back"}
                    onPress={() => this.goBack()}>
                    {'Create'}
                </Button>
            </View>
        )
    }
}

export {BackToCreateView}