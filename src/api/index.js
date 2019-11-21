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
 * Handle's inserting payload data to the profile collection in firestore
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
 * Handle's inserting payload data to the provider collection in firestore
 * @param {*} payload 
 * @param {*} token 
 */
// export const insertServiceProvider = (payload, token) => {
//     var headers = createHeaderContent(token)

//     // console.log('insertServiceProvider ', headers);
//     // console.log('url ', baseURL + `/provider`);
//     // console.log('payload ', payload);
    
//     return (
//         axios({
//             method: 'POST',
//             url: baseURL + `/provider`,
//             payload: payload,
//             headers: headers
//         })
//     )
// }

/**
 * Handle'ss retriving profile information for specific account profile
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
 * Handle'ss update profile information for specific account profile
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
 * Handle'ss deleting profile informaiton for specific account profile
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
 * Handle'ss retreving Provider information based on filter
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

/**
 * Handle'ss retreving specific provider details
 * @param {*} id 
 * @param {*} token 
 */
export const getProviderDetails = (id, token) =>{
    const headers = createHeader(token)
    const url = baseURL + '/provider/'+id

    // console.log('provider details',headers);
    // console.log('url',url);

    return (
        axios({
            method: 'GET',
            url: url,
            headers: headers
        })
    )
}

/**
 * Handle'ss retreving appointment based on the below
 * @param {*} filter
 * @param {*} token 
 */
export const searchAppointmentByFilter = async (filter, token) => {
    const headers = createHeader(token)
    const url = baseURL + '/search/appointments?' + filter

    // console.log('getAppointmentList', headers);
    // console.log('url', url);

    return (
        axios({
            method: 'GET',
            url: url,
            headers: headers
        })
    )
}

/**
 * Handle's inserting payload data to the appointment collection in firestore
 * @param {*} payload 
 * @param {*} token 
 */
export const insertAppointments = (payload, token) => {
    const headers = createHeaderContent(token)
    const url = baseURL + '/appointments'

    // console.log('insertAppointments', headers);
    // console.log('url', url);
    
    return (
        axios({
            method: 'POST',
            url:url,
            headers: headers,
            data: payload
        })
    )
    
}

/**
 * Handle's updating payload data to the appointment collection in firestore
 * @param {*} payload 
 * @param {*} id 
 * @param {*} token 
 */
export const updateAppointmentById = (payload, id, token) => {
    const headers = createHeaderContent(token)
    const url = baseURL +'/appointments/'+id

    // console.log('updateAppointmentById', headers);
    // console.log('url', url);

    return (
        axios({
            method: 'PATCH',
            url: url,
            headers: headers,
            data: payload
        })
    )
    
}

/**
 * Handle's getting appointment data from the appointment collection in firestore
 * @param {*} payload 
 * @param {*} id 
 * @param {*} token 
 */
export const getAppointmentById = (payload, id, token) => {
    const headers = createHeader(token)
    const url = baseURL + '/appointments/'+ id

    // console.log('getAppointmentById', headers);
    // console.log('url', url);

    return (
        axios({
            method: 'GET',
            url: url,
            headers: headers,
            data: payload
        })
    )
    
    
}

/**
 * Handle's deleting appointment data from the appointment collection in firestore
 * @param {*} id 
 * @param {*} token 
 */
export const deleteAppointmentById = (id, token) => {
    const headers = createHeader(token)
    const url = baseURL + '/appointments/'+ id

    // console.log('deleteAppointmentById', headers);
    // console.log('url', url);

    return (
        axios({
            method: 'DELETE',
            url: url,
            headers: headers,
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
    getProviderDetails,
    insertAppointments,
    updateAppointmentById,
    getAppointmentById,
    deleteAppointmentById,
    searchAppointmentByFilter
}

export default apis