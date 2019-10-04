import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button, Spinner } from '../common'
import Login from './Login'
import Profile from './Profile'
import { auth } from '../../config/firebaseConfig'

const Loading = () => {
    const [loggedIn, setLoggedIn] = useState(true)

    useEffect(
        () => {
            console.log('useEffect');
            
            auth
                .onAuthStateChanged((user) => {
                    if(user){
                        console.log('has a user');
                        setLoggedIn(true)
                    } else {
                        console.log('does not have user');
                        setLoggedIn(false)
                    }
                })
        },[]
    )

    rContent = () => {        
        console.log(loggedIn);

        switch (loggedIn) {
            case true:
                return <Profile />
            case false:
                return <Login />
            default:
                return (
                    <View style={sty.spinnerSyle}>
                        <Spinner size="large" />
                    </View>
                )
        }
    }

    return(
        <View>
            {rContent()}
        </View>
    )
}

const sty = {
    spinnerSyle: {
        marginTop: 20,
    }
}

export default Loading