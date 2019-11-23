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
                previousAppointment: action.payload.map(obj => ({...obj, 'listType': 'previous'})), paloading: false
            }

            // console.log('actions.SET_PREVIOUS_APPOINTMENT', a);
         
            return a
        }
        case actions.GET_PREVIOUS_APPOINTMENT_PENDING: {
            var b = {
                ...state,
                paloading: action.payload
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_PENDING', b)
            
            return b
        }
        case actions.GET_PREVIOUS_APPOINTMENT_FULFILLED: {
            var c = {
                ...state,
                previousAppointment: action.payload.map(obj => ({...obj, 'listType': 'previous'})), paloading: action.loading
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_FULFILLED', c);

            return c            
        }
        case actions.GET_PREVIOUS_APPOINTMENT_REJECTED:{
            
            // console.log('actions.GET_PREVIOUS_APPOINTMENT_REJECTED', action.loading);
            var d = {
                ...state,
                errorMessage: action.payload, paloading: action.loading
            }

            // console.log('actions.GET_PREVIOUS_APPOINTMENT_REJECTED', d);
            
            return d
        }
        case actions.SET_UPCOMING_APPOINTMENT:{
            var e = {
                ...state,
                upcomingAppointment: action.payload.map(obj => ({...obj, 'listType': 'upcoming'})), ualoading: false
            }

            // console.log('actions.SET_UPCOMING_APPOINTMENT', e);
         
            return e
        }
        case actions.GET_UPCOMING_APPOINTMENT_PENDING: {
            var f = {
                ...state,
                ualoading: action.payload
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_PENDING', f)
            
            return f
        }
        case actions.GET_UPCOMING_APPOINTMENT_FULFILLED: {
            var g = {
                ...state,
                upcomingAppointment: action.payload.map(obj => ({...obj, 'listType': 'upcoming'})), ualoading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_FULFILLED', g);

            return g            
        }
        case actions.GET_UPCOMING_APPOINTMENT_REJECTED:{
            var h = {
                ...state,
                errorMessage: action.payload, ualoading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_REJECTED', h);
            
            return h
        }
        case actions.REPLACE_APPOINTMENT: {
            var list = action.listType == 'upcoming' ? state.upcomingAppointment : state.previousAppointment
            
            list.splice(list.indexOf(action.oldItem),0,action.newItem);

            var i = {
                ...state,
                upcomingAppointment: action.listType == 'upcoming' ? list : state.upcomingAppointment,
                previousAppointment: action.listType == 'upcoming' ? state.previousAppointment : list
            }

            // console.log('actions.REPLACE_APPOINTMENT', i);            
            
            return i
        }
        case actions.DELETE_APPOINTMENT: {
            var list = action.listType == 'upcoming' ? state.upcomingAppointment : state.previousAppointment
            
            list.splice(list.indexOf(action.deleteItem)-1,1);

            var k = {
                ...state,
                upcomingAppointment: action.listType == 'upcoming' ? list : state.upcomingAppointment,
                previousAppointment: action.listType == 'upcoming' ? state.previousAppointment : list
            }

            // console.log('actions.DELETE_APPOINTMENT', k);            
            
            return k
        }
        case actions.SET_ALL_APPOINTMENT:{
            var j = {
                ...state,
                allAppointment: action.payload.map(obj => ({...obj, 'listType': 'All'})), allloading: false
            }

            // console.log('actions.SET_UPCOMING_APPOINTMENT', j);
         
            return j
        }
        case actions.GET_ALL_APPOINTMENT_PENDING: {
            var k = {
                ...state,
                allloading: action.payload
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_PENDING', k)
            
            return k
        }
        case actions.GET_ALL_APPOINTMENT_FULFILLED: {
            var l = {
                ...state,
                allAppointment: action.payload.map(obj => ({...obj, 'listType': 'all'})), allloading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_FULFILLED', l);

            return l          
        }
        case actions.GET_ALL_APPOINTMENT_REJECTED:{
            var m = {
                ...state,
                errorMessage: action.payload, allloading: action.loading
            }

            // console.log('actions.GET_UPCOMING_APPOINTMENT_REJECTED', m);
            
            return m
        }
        default:
            return state;
    }
}

