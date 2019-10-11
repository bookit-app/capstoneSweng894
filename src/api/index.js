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

/**
 * Handles update profile information for specific account profile
 */
export const updateProfileById = (id, payload) => api.get(`/profile/${id}`, payload)

/**
 * Handles deleting profile informaiton for specific account profile
 */
export const deletedProfileById = id => api.delete(`/profile/${id}`)

const apis = {
    insertProfile,
    getProfileById
}

export default apis