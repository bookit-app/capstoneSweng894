import '../../../src/setupTests'
import AppointmentDashboard from '../../../src/page/appointment/AppointmentDashboard'
import React from 'react'
import { shallow } from 'enzyme'
import { PreviousAppointments, UpcomingAppointments } from '../../../src/constant'

import renderer, {create} from 'react-test-renderer';

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        appointment: {
            ReplaceAppointment:  jest.fn().mockReturnValue('mock ReplaceAppointment action'),
            DeleteAppointment:  jest.fn().mockReturnValue('mock DeleteAppointment action'),
        }
    };
});

jest.mock("../../../src/store", () => {
    return {
        getAppointment:  jest.fn().mockReturnValue('mock getAppointment action'),
    };
});

describe('Appointment Dashboard render correctly', () => {
    let aDashboard;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              }
        }
    })

    test('Appointment Dashboard correctly render', () => {
        aDashboard = shallow(<AppointmentDashboard {...props} />)
        expect(aDashboard).toBeTruthy()
    })

    test('Appointment Dashboard with instance of null', () => {
        props = {
            loadingProfile: true,
            loadingPreference: true,
            profile: {
                a: 1,
                b: 2
            },
            preference: {
                a: 1,
                b: 2
            },
            prefSet: true,
            previousAppointment: PreviousAppointments,
            upcomingAppointment: UpcomingAppointments,
            previousAppLoading: true,
            upcomingAppLoading: true,
            token: 'lksjdflksjflksdf',
        }
        const instanceOf = shallow(<AppointmentDashboard {...props}/>).instance()
        expect(instanceOf).toBe(null)
    })
    
    test('should map Appointment Dashboard to props', () => {
        const initialState = {        
            loadingProfile: false,
            loadingPreference: false,
            profile: {},
            preference: {},
            prefSet: false,
            previousAppointment: [],
            upcomingAppointment: [],
            previousAppLoading: false,
            upcomingAppLoading: false,
            token: '',
        };
        
        store = mockStore(initialState);
        aDashboard =  shallow(<AppointmentDashboard {...props} store={store}/>)

        expect(aDashboard.props().loadingProfile).toBe(undefined);
        expect(aDashboard.props().loadingPreference).toBe(undefined);
        expect(aDashboard.props().profile).toBe(undefined);
        expect(aDashboard.props().preference).toBe(undefined);
        expect(aDashboard.props().prefSet).toBe(undefined);
        expect(aDashboard.props().previousAppointment).toBe(undefined);
        expect(aDashboard.props().upcomingAppointment).toBe(undefined);
        expect(aDashboard.props().previousAppLoading).toBe(undefined);
        expect(aDashboard.props().upcomingAppLoading).toBe(undefined);
        expect(aDashboard.props().token).toBe(undefined);
    })
})

describe('Replace/Delete Appointment Dashboard map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map ReplaceAppointment props to Replacement Appointment Dashboard', () => {
        let mockLoginActions = require("../../../src/store");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.refreshAppointment('P', 'jslkjfslkdfj');
  
        expect(dispatch).toBeCalledWith('mock getAppointment action');
        expect(mockLoginActions.getAppointment).toBeCalledWith('P', 'jslkjfslkdfj');

        // let props2 = mapDispatchToProps(dispatch);
        // props2.deleteItem({a:'1'},'P');
  
        // expect(dispatch).toBeCalledWith('mock DeleteAppointment action');
        // expect(mockLoginActions.appointment.DeleteAppointment).toBeCalledWith({a:'1'},'P');
    })
})