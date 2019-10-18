import { actions } from '../actions/type';

const initialState = {
    profile: {}
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case actions.GET_PROFILE:{
            var a = {...state,
                profile: action.profile
            }

            console.log('actions.GET_Profile', action.profile);
            
            return a
        }    
        default: return state;
    }
}