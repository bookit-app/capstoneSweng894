import { actions } from '../actions/type'

const initialState = {
    pref: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_PREF:{            
            var a = {...state,
                pref: action.pref
            }

            // console.log('actions.SETTING_PREF', a);
            
            return a
        }
        case actions.SET_PREFERENCE:{
            var b = {...state,
                preference: action.preference, loading: false
            }

            console.log('actions.SET_PREFERENCE', b);
            
            return b
        }        
        case actions.GET_PREFERENCE_PENDING: {
            var c = {
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_PREFERENCE_PENDING', c);
            
            return c
        }
        case actions.GET_PREFERENCE_FULFILLED: {
            var e = {
                ...state,
                preference: action.payload, loading: action.loading, errorMessage: ''
            }

            console.log('actions.GET_PREFERENCE_FULFILLED', e);

            return e
        }
        case actions.GET_PREFERENCE_REJECTED: {
            var f = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PREFERENCE_REJECTED', f);

            return f
        }
        default: 
            return state;
    }
}