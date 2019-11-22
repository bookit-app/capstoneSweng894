import { actions } from './type'

export const SetPreviousAppointment = (data) => ({
    type: actions.SET_PREVIOUS_APPOINTMENT,
    payload: data
})

export const GetPreviousAppointment = (bool) => ({
    type: actions.GET_PREVIOUS_APPOINTMENT_PENDING,
    payload: bool
})

export const GetPreviousAppointmentFullFilled = (data) => ({
    type: actions.GET_PREVIOUS_APPOINTMENT_FULFILLED,
    payload: data,
    loading: false
})

export const GetPreviousAppointmentReject = (error) => ({
    type: actions.GET_PREVIOUS_APPOINTMENT_REJECTED,
    payload: error,
    loading: false
})

export const SetUpcomingAppointment = (data) => ({
    type: actions.SET_UPCOMING_APPOINTMENT,
    payload: data
})

export const GetUpcomingAppointment = (bool) => ({
    type: actions.GET_UPCOMING_APPOINTMENT_PENDING,
    payload: bool
})

export const GetUpcomingAppointmentFullFilled = (data) => ({
    type: actions.GET_UPCOMING_APPOINTMENT_FULFILLED,
    payload: data,
    loading: false
})

export const GetUpcomingAppointmentReject = (error) => ({
    type: actions.GET_UPCOMING_APPOINTMENT_REJECTED,
    payload: error,
    loading: false
})

export const ReplaceAppointment = (newItem, oldItem, listType) => ({
    type: actions.REPLACE_APPOINTMENT,
    newItem,
    oldItem,
    listType
})

export const DeleteAppointment = (deleteItem, listType) => ({
    type: actions.DELETE_APPOINTMENT,
    deleteItem,
    listType
})

export const SetAllAppointment = (data) => ({
    type: actions.SET_ALL_APPOINTMENT,
    payload: data
})

export const GetAllAppointment = (bool) => ({
    type: actions.GET_ALL_APPOINTMENT_PENDING,
    payload: bool
})

export const GetAllAppointmentFullFilled = (data) => ({
    type: actions.GET_ALL_APPOINTMENT_FULFILLED,
    payload: data,
    loading: false
})

export const GetAllAppointmentReject = (error) => ({
    type: actions.GET_ALL_APPOINTMENT_REJECTED,
    payload: error,
    loading: false
})