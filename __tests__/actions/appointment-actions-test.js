import React from 'react'
import * as appointments from '../../src/actions/appointment-actions'
import { actions } from '../../src/actions/type'

describe('set previous appointment with empty actions', () => {
    it('should create an action to set previous appointments list with empty list', () => {
        const previousList = []
        const expectedAction = {
            type: actions.SET_PREVIOUS_APPOINTMENT,
            payload: previousList
        }

        expect(appointments.SetPreviousAppointment(previousList)).toEqual(expectedAction)
    })
})

describe('set previous appointment with data actions', () => {
    it('should create an action to set previous appointments list with list value', () => {
        const previousList = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.SET_PREVIOUS_APPOINTMENT,
            payload: previousList
        }

        expect(appointments.SetPreviousAppointment(previousList)).toEqual(expectedAction)
    })
})

describe('get Previous appointment with false pending', () => {
    it('should create an action to get previous appointment pending false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_PREVIOUS_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetPreviousAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get Previous appointment with true pending', () => {
    it('should create an action to get previous appointment pending true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_PREVIOUS_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetPreviousAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get previous appointment fullfilled empty list', () => {
    it('should create an action to get previous appointment fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_PREVIOUS_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetPreviousAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get previous appointment fullfilled', () => {
    it('should create an action to get previous appointment fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_PREVIOUS_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetPreviousAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get previous appointment reject', () => {
    it('should create an action to get previous appointment reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_PREVIOUS_APPOINTMENT_REJECTED,
            payload: error,
            loading: false
        }
        expect(appointments.GetPreviousAppointmentReject(error)).toEqual(expectedAction)
    })
})

describe('set upcoming appointment with empty actions', () => {
    it('should create an action to set upcoming appointments list with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.SET_UPCOMING_APPOINTMENT,
            payload: data
        }

        expect(appointments.SetUpcomingAppointment(data)).toEqual(expectedAction)
    })
})

describe('set upcoming appointment with data actions', () => {
    it('should create an action to set upcoming appointments list with list value', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.SET_UPCOMING_APPOINTMENT,
            payload: data
        }

        expect(appointments.SetUpcomingAppointment(data)).toEqual(expectedAction)
    })
})

describe('get upcoming appointment with false pending', () => {
    it('should create an action to get upcoming appointment pending false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_UPCOMING_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetUpcomingAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get upcoming appointment with true pending', () => {
    it('should create an action to get upcoming appointment pending true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_UPCOMING_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetUpcomingAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get upcomnig appointment fullfilled empty list', () => {
    it('should create an action to get upcoming appointment fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_UPCOMING_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetUpcomingAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get upcoming appointment fullfilled', () => {
    it('should create an action to get upcoming appointment fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_UPCOMING_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetUpcomingAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get upcoming appointment reject', () => {
    it('should create an action to get upcoming appointment reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_UPCOMING_APPOINTMENT_REJECTED,
            payload: error,
            loading: false
        }
        expect(appointments.GetUpcomingAppointmentReject(error)).toEqual(expectedAction)
    })
})

describe('replaced appointment', () => {
    it('replace appointment from new item to old item per list type', () => {
        const newItem = {a: '1', b: '2'}
        const oldItem = {c: '3', d: '4'}
        const listType = '1'
        const expectedAction = {
            type: actions.REPLACE_APPOINTMENT,
            newItem,
            oldItem,
            listType
        }
        expect(appointments.ReplaceAppointment(newItem, oldItem, listType)).toEqual(expectedAction)
    })
})

describe('delete appointment', () => {
    it('delete item per list type', () => {
        const deleteItem = {a: '1', b: '2'}
        const listType = '1'
        const expectedAction = {
            type: actions.DELETE_APPOINTMENT,
            deleteItem,
            listType
        }
        expect(appointments.DeleteAppointment(deleteItem, listType)).toEqual(expectedAction)
    })
})


describe('add appointment', () => {
    it('add item to list', () => {
        const newItem = {a: '1', b: '2'}
        
        const expectedAction = {
            type: actions.ADD_APPOINTMENT,
            newItem
        }
        expect(appointments.AddAppointment(newItem)).toEqual(expectedAction)
    })
})

describe('set all appointment with empty actions', () => {
    it('should create an action to set all appointments list with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.SET_ALL_APPOINTMENT,
            payload: data
        }

        expect(appointments.SetAllAppointment(data)).toEqual(expectedAction)
    })
})

describe('set all appointment with data actions', () => {
    it('should create an action to set all appointments list with list value', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.SET_ALL_APPOINTMENT,
            payload: data
        }

        expect(appointments.SetAllAppointment(data)).toEqual(expectedAction)
    })
})

describe('get all appointment with false pending', () => {
    it('should create an action to get all appointment pending false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_ALL_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetAllAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get all appointment with true pending', () => {
    it('should create an action to get all appointment pending true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_ALL_APPOINTMENT_PENDING,
            payload: bool
        }

        expect(appointments.GetAllAppointment(bool)).toEqual(expectedAction)
    })
})

describe('get all appointment fullfilled empty list', () => {
    it('should create an action to get all appointment fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_ALL_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetAllAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get all appointment fullfilled', () => {
    it('should create an action to get all appointment fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_ALL_APPOINTMENT_FULFILLED,
            payload: data,
            loading: false
        }

        expect(appointments.GetAllAppointmentFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get all appointment reject', () => {
    it('should create an action to get all appointment reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_ALL_APPOINTMENT_REJECTED,
            payload: error,
            loading: false
        }
        expect(appointments.GetAllAppointmentReject(error)).toEqual(expectedAction)
    })
})