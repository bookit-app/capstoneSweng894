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

            console.log('actions.SET_PROFILE', action.profile);
            
            return a
        }    
        default: return state;
    }
}