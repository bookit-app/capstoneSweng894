import { actions } from '../actions/type'

const initialState = {
    userId: '',
    token: '',
    error: ''
}
/**
 * Handles auth actions and payloads
 */
export default (state = initialState, action ) => {
    switch (action.type) {
        case actions.USER_SET: { 
            var a = {...state,
                userId: action.userId
            }          
            
            console.log('USER_SET Payload: ', action.userId); 

            return a;
        }
        case actions.TOKEN: {
            var b = {...state,
                token: action.token
            }

            console.log('TOKEN Payload: ', action.token);
            
            return b
        }
        case actions.AUTH_ERROR: {
            var c = {...state,
                error: action.error
            }

            return c
        }
        default: return state;
    }
}