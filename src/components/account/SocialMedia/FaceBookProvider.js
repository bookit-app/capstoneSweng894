import React from 'react'
import {
    View
} from 'react-native'
// import { auth, auth_ } from '../../../config/firebaseConfig'
import { SignUpFacebook, SignOutFacebook} from '../../../repository/authMethods'

const FBSDK = require('react-native-fbsdk')
const {
    LoginButton,
    AccessToken
} = FBSDK

class FaceBookProvider extends React.Component {
  loginUserSuccess(data){
    console.log(data);
    this.props.navigation.navigate('Profile', {
      "isSocial": true
    })
  }

  loginSingUpFail(error){
    console.log(error);
    
  }


    render() {
        return (
            <View>
            <LoginButton
              publishPermissions={["publish_actions"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        alert(data.accessToken.toString())
                        const credential = auth_.FacebookAuthProvider.credential(data.accessToken);

                        auth.signInWithCredential(credential)
                          .then((data) => this.loginUserSuccess(data.user))
                          .catch((error) => this.loginSingUpFail(error));
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => SignOutFacebook()}
              />
          </View>
        )
    }
}

export default FaceBookProvider