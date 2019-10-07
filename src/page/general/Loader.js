import React from 'react'
import {
    ActivityIndicator,
    StatusBar,
    View
} from 'react-native'

class Loader extends React.Component {
    componentDidMount(){
        this._bootOnLoader()
    }

    _bootOnLoader = async () => {
        try {
            import { auth } from '../../config/firebaseConfig'
            this.props.navigation.navigate('App')
        } catch (error) {
            this.props.navigation.navigate('Auth')
        }
    }

    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default Loader;