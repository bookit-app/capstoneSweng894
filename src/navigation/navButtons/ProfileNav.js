import React from 'react'
import { Image } from 'react-native'

class ProfileNav extends React.Component {
    render(){
        return (
            <Image
                source={require('../../image/Placeholder150.png')}
                style={styles.imgSty}
            />
        )
    }
}

const styles = {
    imgSty: {
        width: 30,
        height: 30
    }
}

export default ProfileNav