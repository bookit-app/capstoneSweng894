import axios from 'axios'

const api = axios.create({
    baseURL:'https://esp-vllmtwjp2a-uc.a.run.app',
})

export const insertProfile = payload => api.post('/profile', payload)
export const getProfileById = id => api.get(`/profile?profileId=${id}`) 

const apis = {
    insertProfile,
    getProfileById
}

export default apis