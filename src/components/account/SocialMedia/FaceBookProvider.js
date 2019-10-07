import React from 'react'
import {
    View
} from 'react-native'
import { auth, auth_ } from '../../../config/firebaseConfig'
const FBSDK = require('react-native-fbsdk')
const {
    LoginButton,
    AccessToken
} = FBSDK

class FaceBookProvider extends React.Component {
  loginUserSuccess = () => {

  }

  loginSingUpFail = () => {

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
                        // alert(data.accessToken.toString())
                        // const credential = auth.FacebookAuthProvider.credential(data.accessToken);
                        // auth.signInWithCredential(credential)
                        //   .then(loginUserSuccess(dispatch))
                        //   .catch((error) => {
                        //     loginSingUpFail(dispatch, error.message);
                        //   });
                        var provider = new auth_.FacebookAuthProvider()
                        provider.setCustomParameters({
                          'display': 'pop'
                        })

                        auth.signInWithPopup(provider)
                          .then( (i) => {
                            var token = i.credential.AccessToken;
                            var user = i.user
                          })
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => auth.signOut()}
              />
          </View>
        )
    }
}

export default FaceBookProvider