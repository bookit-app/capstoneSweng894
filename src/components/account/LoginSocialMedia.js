import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from '../common'

class LoginSocialMedia extends Component {


    render(){
        return (
            <View>
              <Button>
                 Facebook
              </Button>
              <Button>
                 Google
              </Button>
              <Button>
                Twitter
              </Button>
            </View>
        )
    }
}

export default LoginSocialMedia