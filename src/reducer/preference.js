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

            console.log('actions.SETTING_PREF', action.pref);
            
            return a
        }
        case actions.SET_PREFERENCE:{
            var b = {...state,
                preference: action.preference
            }

            // console.log('actions.SET_PREFERENCE', action.preference);
            
            return b
        }
        default: return state;
    }
}