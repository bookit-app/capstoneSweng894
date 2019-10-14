// import firebase from 'firebase'
// import {
//     AsyncStorage
// } from 'react-native'

// export const getCurrentUser = async () =>{
//     try {
//        const cUid =  await AsyncStorage.getItem('cUid');
//        if(cUid !== null){
//            return cUid
//        }
//     } catch (error) {
//         return null
//     }
//     return null
// }

// export const postCurrentUser = async (uid) => {
//     try {
//         await AsyncStorage.setItem('cUid', uid)
//     } catch (error) {
//         return null
//     }
// }

// export const getCurrentToken = async() => {
//     firebase.auth().currentUser.getIdToken()
//         .then((token) => {
//             console.log('getCurrentToken', token);
            
//             return token
//         })   
// }

// const auth = {
//     getCurrentUser,
//     postCurrentUser,
//     getCurrentToken
// }

// export default auth