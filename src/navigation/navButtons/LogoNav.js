import React from 'react'
import { View, Image } from 'react-native'


class LogoNav extends React.Component {
    render(){
        return (
            <View style={styles.viewSty}>
                <Image
                    source={require('../../image/Placeholder150.png')}
                    style={styles.imgSty}
                />
            </View>
        )
    }
}

const styles = {
    imgSty: {
        width: 30,
        height: 30
    },
    viewSty: {
        margin: 5
    }
}

export default LogoNav