import React from 'react'
import firbase from 'firebase'
import { Text, View } from 'react-native'

/**
 * Home Page
 */
class Home extends React.Component {
    render(){
        return (
            <View>
                <Text style={styles.textStyles}>{'Home'}</Text>
                <Text style={styles.textStyles}>{firbase.auth().currentUser.email}</Text>
                <Text style={styles.textStyles}>{firbase.auth().currentUser.displayName}</Text>
            </View>
        )
    }
}

const styles = {
    textStyles: {
        textAlign: 'center',      
    }
}

export default Home