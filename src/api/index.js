import axios from 'axios'

const baseURL = 'https://esp-vllmtwjp2a-uc.a.run.app';

/**
 * Header component for api request with content 
 * @param {*} token 
 */
export const createHeaderContent = (token) => {
    return {
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}

/**
 * Header component for api request
 * @param {*} token 
 */
export const createHeader = (token) => {
    return {
        "Authorization": "Bearer " + token,
        "Accept": "application/json"
    }
}

/**
 * Handle inserting payload data to the profile collection in firestore
 * @param {*} payload
 * @param {*} token 
 */
export const insertProfile = (payload, token) => {
    var headers = createHeaderContent(token)
    
    // console.log('insertProfile',headers);
    // console.log('url',baseURL + '/profile');
    // console.log('payload',payload);    

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
 * Handle inserting payload data to the provider collection in firestore
 * @param {*} payload 
 * @param {*} token 
 */
export const insertServiceProvider = (payload, token) => {
    var headers = createHeaderContent(token)

    // console.log('insertServiceProvider ', headers);
    // console.log('url ', baseURL + `/provider`);
    // console.log('payload ', payload);
    
    return (
        axios({
            method: 'POST',
            url: baseURL + `/provider`,
            payload: payload,
            headers: headers
        })
    )
}

/**
 * Handles retriving profile information for specific account profile
 * @param {*} id
 * @param {*} token 
 */
export const getProfileById = (id, token) => {    
    var headers = createHeader(token)
    
    // console.log('getProfileById', headers);
    // console.log('url', baseURL + `/profile/${id}`);

    return(
        axios({
            method: 'GET',
            url: baseURL + `/profile/${id}`,
            headers: headers
        })
    )
}

/**
 * Get the configuration data based on the configuration type
 * 
 * @param {*} configType 
 * @param {*} token 
 */
export const getConfiguration = (configType, token) => {
    var headers = createHeader(token)

    // console.log('getConfiguration', headers);
    // console.log('url', baseURL + `/configuration/${configType}`);

    return (
        axios({
            method: 'GET',
            url: baseURL + `/configuration/${configType}`,
            headers: headers
        })
    )
}

/**
 * Handles update profile information for specific account profile
 * @param {*} payload 
 * @param {*} token 
 */
export const updateProfileById = (payload, token) => {
    var headers = createHeaderContent(token)

    // console.log('updateProfileById',headers);
    // console.log('url',baseURL + '/profile');
    // console.log('payload',payload);  

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
 * @param {*} id
 * @param {*} token 
 */
export const deletedProfileById = (id, token) => {
    var headers = createHeader(token)

    // console.log('deletedProfileById',headers);
    // console.log('url',baseURL + `/profile/${id}`);
    
    return (
        axios({
            method: 'DELETE',
            url: baseURL + `/profile/${id}`,
            headers: headers
        })
    )
}

/**
 * Handles retreving Provider information based on filter
 * @param {*} filter 
 * @param {*} token 
 */
export const searchProviderByFilter = (filter, token) => {
    const headers = createHeader(token)
    const url = baseURL + '/search/provider?'+ filter

    // console.log('searchProviderByFilter',headers);
    // console.log('url',url);
    
    return (
        axios({
            method: 'GET',
            url: url,
            headers: headers
        })
    )
}

const apis = {
    insertProfile,
    getProfileById,
    getConfiguration,
    updateProfileById,
    deletedProfileById,
    searchProviderByFilter,
}

export default apis