import {appointment} from '../../src/actions'
import appointment_ from '../../src/reducer/appointment'

describe('appointment reducer', () => {
    test('should return the initial state', () => {
        const initalState = {
            upcomingAppointment: [],
            previousAppointment: [],
            errorMessage: '',
            loading: ''
        }

        expect(appointment_(undefined, {})).toEqual(initalState)
    })

    test('should set previous appointment with something', () => {
        expect(
            appointment_([],appointment.SetPreviousAppointment([{a: '1'}]))
        ).toEqual(
            {
               previousAppointment: [{a: '1', 'listType': 'previous'}],
               paloading: false
            }
        )
    })

    test('should set previous appointment empty', () => {
        expect(
            appointment_([],appointment.SetPreviousAppointment([]))
        ).toEqual(
            {
               previousAppointment: [],
               paloading: false
            }
        )
    })

    test('should get previous appointment pending false', () => {
        expect(
            appointment_([],appointment.GetPreviousAppointment(false))
        ).toEqual(
            {
               paloading: false
            }
        )
    })

    test('should get previous appointment pending true', () => {
        expect(
            appointment_([],appointment.GetPreviousAppointment(true))
        ).toEqual(
            {
               paloading: true
            }
        )
    })

    test('should get previous appointment fullfuilled', () => {
        expect(
            appointment_([],appointment.GetPreviousAppointmentFullFilled([{a: '1'}]))
        ).toEqual(
            {
               previousAppointment: [{a: '1', 'listType': 'previous'}],
               paloading: false
            }
        )
    })

    test('should get previous appointment reject', () => {
        expect(
            appointment_([],appointment.GetPreviousAppointmentReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
               paloading: false
            }
        )
    })

    test('should set upcoming appointment with something', () => {
        expect(
            appointment_([],appointment.SetUpcomingAppointment([{a: '1'}]))
        ).toEqual(
            {
               upcomingAppointment: [{a: '1', 'listType': 'upcoming'}],
               ualoading: false
            }
        )
    })

    test('should set upcoming appointment empty', () => {
        expect(
            appointment_([],appointment.SetUpcomingAppointment([]))
        ).toEqual(
            {
                upcomingAppointment: [],
                ualoading: false
            }
        )
    })

    test('should get upcoming appointment pending false', () => {
        expect(
            appointment_([],appointment.GetUpcomingAppointment(false))
        ).toEqual(
            {
                ualoading: false
            }
        )
    })

    test('should get upcoming appointment pending true', () => {
        expect(
            appointment_([],appointment.GetUpcomingAppointment(true))
        ).toEqual(
            {
                ualoading: true
            }
        )
    })

    test('should get upcoming appointment fullfuilled', () => {
        expect(
            appointment_([],appointment.GetUpcomingAppointmentFullFilled([{a: '1'}]))
        ).toEqual(
            {
               upcomingAppointment: [{a: '1', 'listType': 'upcoming'}],
               ualoading: false
            }
        )
    })

    test('should get upcoming appointment reject', () => {
        expect(
            appointment_([],appointment.GetUpcomingAppointmentReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                ualoading: false
            }
        )
    })

    test('should set all appointment with something', () => {
        expect(
            appointment_([],appointment.SetAllAppointment([{a: '1'}]))
        ).toEqual(
            {
                allAppointment: [{a: '1', 'listType': 'All'}],
                allloading: false
            }
        )
    })

    test('should set all appointment empty', () => {
        expect(
            appointment_([],appointment.SetAllAppointment([]))
        ).toEqual(
            {
                allAppointment: [],
                allloading: false
            }
        )
    })

    test('should get all appointment pending false', () => {
        expect(
            appointment_([],appointment.GetAllAppointment(false))
        ).toEqual(
            {
                allloading: false
            }
        )
    })

    test('should get upcoming appointment pending true', () => {
        expect(
            appointment_([],appointment.GetAllAppointment(true))
        ).toEqual(
            {
                allloading: true
            }
        )
    })

    test('should get all appointment fullfuilled', () => {
        expect(
            appointment_([],appointment.GetAllAppointmentFullFilled([{a: '1'}]))
        ).toEqual(
            {
                allAppointment: [{a: '1', 'listType': 'all'}],
               allloading: false
            }
        )
    })

    test('should get all appointment reject', () => {
        expect(
            appointment_([],appointment.GetAllAppointmentReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                allloading: false
            }
        )
    })

    test('should replace item in list based on listType', () => {
        expect(
            appointment_(
                {
                    upcomingAppointment: [{a:'a'},{b:'b'}]
                }, 
                appointment.ReplaceAppointment({c:'c'},{a:'a'}, 'upcoming')
        )).toEqual(
            {
                upcomingAppointment: [{c:'c'},{b:'b'}],
                previousAppointment: undefined
            }
        )
    })

    test('should replace item in list based on listType other upcoming', () => {
        expect(
            appointment_(
                {
                    upcomingAppointment: [{a:'a'},{b:'b'}],
                    previousAppointment: [{a:'a'},{b:'b'}]
                }, 
                appointment.ReplaceAppointment({c:'c'},{a:'a'}, '')
        )).toEqual(
            {
                upcomingAppointment: [{a:'a'},{b:'b'}],
                previousAppointment: [{c:'c'},{b:'b'}]
            }
        )
    })

    test('should delete item in list', () => {
        expect(
            appointment_(
                {
                    upcomingAppointment: [{a:'a'},{b:'b'},{c:'c'}]
                }, 
                appointment.DeleteAppointment({b:'b'}, 'upcoming')
        )).toEqual(
            {
                upcomingAppointment: [{a:'a'},{c:'c'}],
                previousAppointment: undefined
            }
        )
    })

    test('should delete item in listtype other this upcomning', () => {
        expect(
            appointment_(
                {
                    upcomingAppointment: [{a:'a'},{b:'b'},{c:'c'}],
                    previousAppointment: [{a:'a'},{b:'b'},{c:'c'}]
                }, 
                appointment.DeleteAppointment({b:'b'}, '')
        )).toEqual(
            {
                upcomingAppointment: [{a:'a'},{b:'b'},{c:'c'}],
                previousAppointment: [{a:'a'},{c:'c'}]
            }
        )
    })

    test('should add item in list', () => {
        expect(
            appointment_(
                {
                    upcomingAppointment: [{a:'a'},{b:'b'},{c:'c'}]
                }, 
                appointment.AddAppointment({f:'f'})
        )).toEqual(
            {
                upcomingAppointment: [{f:'f'},{a:'a'},{b:'b'},{c:'c'}]
            }
        )
    })
})