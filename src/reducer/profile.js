import { actions } from '../actions/type';

const initialState = {
    profile: {}
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case actions.GET_PROFILE:{
            console.log('action.profile: ', action.profile);
            console.log('state.profile: ', state.profile);
            
            var a = {...state,
                profile: action.profile
            }

            console.log('actions.GET_Profile', a);
            
            return a
        }    
        default: return state;
    }
}