import React from 'react'
import { ImageButton } from '../../components/common'

class LogoNav extends React.Component {
    render(){
        return (
            <ImageButton
                onPress={() => this.props.navigation.navigate('Home')}
                imageSource={require('../../image/Placeholder150.png')}
            />
        )
    }
}

export default LogoNav