/**
 * Handles auth actions and payloads
 */
export default (state = null, action ) => {
    let { type, payload } = action;

    switch (type) {
        case 'USER_SET': {
            console.log(payload);
            
            return payload
        }
        case 'AUTH_ERROR': return payload
        default: return state;
    }
}