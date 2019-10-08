import axios from 'axios'

const api = axios.create({
    baseURL:'https://esp-vllmtwjp2a-uc.a.run.app',
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
export const getProfileById = id => api.get(`/profile?profileId=${id}`) 

const apis = {
    insertProfile,
    getProfileById
}

export default apis