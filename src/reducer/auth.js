import { actions } from '../actions/type'
/**
 * Handles auth actions and payloads
 */
export default (state = null, action ) => {
    let { type, payload } = action;

    switch (type) {
        case actions.USER_SET: {
            console.log('USER_SET Payload: ', payload);            
            return payload;
        }
        case actions.TOKEN: {
            console.log('TOKEN Payload: ', payload);
            
            return payload;
        }
        case actions.AUTH_ERROR: return payload
        default: return state;
    }
}