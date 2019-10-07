import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from '../common'
import FaceBookProvider from './SocialMedia/FaceBookProvider'

class AccountSocialMedia extends Component {
    render(){
        return (
            <View>
              <FaceBookProvider />
              {/* <Button>
                 Google
              </Button>
              <Button>
                Twitter
              </Button> */}
            </View>
        )
    }
}

export default AccountSocialMedia