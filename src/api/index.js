import axios from 'axios'
// import firebase from 'firebase'
// import {auth} from '../config/firebaseConfig'

/**
 * Setting the Bearer token from the curren
 */

// var token = !auth ? '' : firebase.auth().currentUser.getIdToken
// const api = axios.create({
//     baseURL:'https://esp-vllmtwjp2a-uc.a.run.app'
// })

const baseURL = 'https://esp-vllmtwjp2a-uc.a.run.app';

/**
 * Handle inserting payload data to the profile collection in firestore
 * @param {*} payload 
 */
export const insertProfile = (payload, token) => {
    var headers = {
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    
    console.log(payload);    

    return (
        axios({
            method: 'POST',
            url: baseURL + '/profile',
            data: payload,
            headers: headers
        })
    )
}

/**
 * Handles retriving profile information for specific account profile
 * @param {*} id ?profileId=
 */
export const getProfileById = (id, token) => {    
    var headers = {
        "Authorization": "Bearer " + token,
        "Accept": "application/json"
      }
    
    return(
        axios({
            method: 'GET',
            url: baseURL + `/profile/${id}`,
            headers: headers
        })
    )
}

/**
 * Handles update profile information for specific account profile
 */
export const updateProfileById = (id, payload, token) => {
    var headers = {
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }

    // console.log('updateProfileById: ', headers);
    
    // var url = baseURL + `/profile`
    
    // console.log('updateProfileById: ', url);

    return(
        axios({
            method: 'PATCH',
            url: baseURL + `/profile`,
            data: payload,
            headers: headers
        })
    )
}

/**
 * Handles deleting profile informaiton for specific account profile
 */
export const deletedProfileById = (id, token) => {
    //  api.delete(`/profile/${id}`)
    // var headers =  { 'Authorization': 'Bearer ' + token }

    var headers = {
        "Authorization": "Bearer " + token,
        "Accept": "application/json"
      }

    console.log('deletedProfileById: ', headers);
    
    return (
        axios({
            method: 'DELETE',
            url: baseURL + `/profile/${id}`,
            headers: headers
        })
    )
}

const apis = {
    insertProfile,
    getProfileById,
    updateProfileById,
    deletedProfileById
}

export default apis