import { actions } from '../actions/type'

const initalState = {
    upcomingAppointment: [],
    previousAppointment: [],
    errorMessage: '',
    loading: ''
}

export default (state = initalState, action ) => {
    switch (action.type) {
        case actions.SET_PREVIOUS_APPOINTMENT:{
            var a = {
                ...state,
                previousAppointment: action.payload
            }

            // console.log('actions.SET_PREVIOUS_APPOINTMENT', a);
         
            return a
        }
        case actions.GET_PREVIOUS_APPOINTMENT_PENDING: {
            var b = {
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_PENDING', b)
            
            return b
        }
        case actions.GET_PREVIOUS_APPOINTMENT_FULFILLED: {
            var c = {
                ...state,
                previousAppointment: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_FULFILLED', c);

            return c            
        }
        case actions.GET_PREVIOUS_APPOINTMENT_REJECTED:{
            var d = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_REJECTED', d);
            
            return d
        }
        case actions.SET_UPCOMING_APPOINTMENT:{
            var e = {
                ...state,
                upcomingAppointment: action.payload
            }

            // console.log('actions.SET_UPCOMING_APPOINTMENT', e);
         
            return e
        }
        case actions.GET_UPCOMING_APPOINTMENT_PENDING: {
            var f = {
                ...state,
                loading: action.payload
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_PENDING', f)
            
            return f
        }
        case actions.GET_UPCOMING_APPOINTMENT_FULFILLED: {
            var g = {
                ...state,
                upcomingAppointment: action.payload, loading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_FULFILLED', g);

            return g            
        }
        case actions.GET_UPCOMING_APPOINTMENT_REJECTED:{
            var h = {
                ...state,
                errorMessage: action.payload, loading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_REJECTED', h);
            
            return h
        }
        default:
            return state;
    }
}

