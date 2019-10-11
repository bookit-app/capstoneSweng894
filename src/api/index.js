import axios from 'axios'
import firebase from 'firebase'

/**
 * Setting the Bearer token from the curren
 */
var token = firebase.auth().currentUser.getIdToken

const api = axios.create({
    baseURL:'https://esp-vllmtwjp2a-uc.a.run.app',
    headers: {'Authorization': 'Bearer '+token}
})

/**
 * Handle inserting payload data to the profile collection in firestore
 * @param {*} payload 
 */
export const insertProfile = payload => api.post('/profile', payload)

/**
 * Handles retriving profile information for specific account profile
 * @param {*} id 
 */
export const getProfileById = id => api.get(`/profile?profileId=${id}`,) 

/**
 * Handles update profile information for specific account profile
 */
export const updateProfileById = (id, payload) => api.put(`/profile/${id}`, payload)

/**
 * Handles deleting profile informaiton for specific account profile
 */
export const deletedProfileById = id => api.delete(`/profile/${id}`)

const apis = {
    insertProfile,
    getProfileById,
    updateProfileById,
    deletedProfileById
}

export default apis