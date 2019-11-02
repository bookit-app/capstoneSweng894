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

            // console.log('actions.SET_PREFERENCE', b);
            
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

            // console.log('actions.GET_PREFERENCE_FULFILLED', e);

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
        case actions.SET_STYLES: {
            var ff = {
                ...state,
                styles: action.payload
            }

            // console.log('actions.SET_STYLES', ff);
            
            return ff
        }
        case actions.GET_STYLES_PENDING: {
            var g = {
                ...state,
                styleLoading: action.styleLoading
            }

            // console.log('actions.SET_STYLES_PREFERENCE', g);

            return g
        }
        case actions.GET_STYLES_FULFILLED: {
            var h = {
                ...state,
                styles: action.payload, styleLoading: action.styleLoading, errorMessage: ''
            }
            
            // console.log('actions.GET_PREFERENCE_FULFILLED', h);

            return h
        }
        case actions.GET_STYLES_REJECTED:{
            var i = {
                ...state,
                errorMessage: action.payload, styleLoading: action.styleLoading
            }

            // console.log('actions.GET_PREFERENCE_FULFILLED', i);
            return i
        }
        default: 
            return state;
    }
}