import React from 'react'
import { Image } from 'react-native'

/**
 * Account Image componemt for Account forms
 * 
 * @param {*} props 
 */
const AccountImage = (props) => {
    const ImageHolder = () => {
        console.log(props.imageHolder);
        
        if(!props.imageHolder){
            return (
                <Image
                    source={props.placeholder}
                />
            )
        } else {
            return (
                <Image
                    source={props.image}
                />
            )
        }

    }
    return (
        <ImageHolder />
    )
}

export default AccountImage