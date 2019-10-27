import { actions } from '../actions/type';

const initialState = {
    profile: {}
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case actions.SET_PROFILE:{
            var a = {...state,
                profile: action.profile
            }

            // console.log('actions.SET_PROFILE', a);
            
            return a
        }   
        case actions.GET_PROFILE_PENDING: {
            var b = {
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_PROFILE_PENDING', b);
            
            return b
        }
        case actions.GET_PROFILE_FULFILLED: {
            var c = {
                ...state,
                profile: action.payload, loading: action.loading, errorMessage: ''
            }

            // console.log('actions.GET_PROFILE_FULFILLED', c);

            return c
        }
        case actions.GET_PROFILE_REJECTED: {
            var d = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PROFILE_REJECTED', d);

            return d    
        }
        default:
            return state
    }
}