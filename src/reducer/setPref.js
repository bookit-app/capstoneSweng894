import { actions } from '../actions/type'

const initialState = {
    pref: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SETTING_PREF:{

            console.log('action.pref', action.pref);
            console.log('state.pref', state.pref);
            
            var a = {...state,
                pref: action.pref
            }

            console.log('actions.SETTING_PREF', a);
            
            return a
        }
        default: return state;
    }
}