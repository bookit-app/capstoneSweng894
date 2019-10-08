import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

/**
 * Account profile upload field
 * 
 * @param {*} props 
 */
const AccountImageUpload = (props) => {
    const image = typeof props.image == 'string' ? require('../../image/Placeholder150.png') : props.image
    
    return (
        <TouchableOpacity style={styles.imgStyle}>
            <Image source={image}  style={styles.image}/>   
        </TouchableOpacity>
    )
}

const styles = {
    imgStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25   
    },
    image: {
  
    },
}

export default AccountImageUpload