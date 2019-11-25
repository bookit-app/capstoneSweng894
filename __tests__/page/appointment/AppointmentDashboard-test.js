import '../../../src/setupTests'
import AppointmentDashboard from '../../../src/page/appointment/AppointmentDashboard'
import React from 'react'
import { shallow } from 'enzyme'
import renderer, {create} from 'react-test-renderer';

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

describe('Appointment Dashboard render correctly', () => {
    let aDashboard;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Appointment Dashboard correctly render', () => {
        aDashboard = shallow(<AppointmentDashboard {...props} />)
        expect(aDashboard).toBeTruthy()
    })
})

describe('Replacement Appointment Dashboard map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map ReplaceAppointment props to Replacement Appointment Dashboard', () => {
        let mockLoginActions = require("../../../src/actions");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.replaceItem({a:'1'},{b:'2'},'P');
  
        expect(dispatch).toBeCalledWith('mock ReplaceAppointment action');
        expect(mockLoginActions.appointment.ReplaceAppointment).toBeCalledWith({a:'1'},{b:'2'},'P');

        
        let props2 = mapDispatchToProps(dispatch);
        props2.deleteItem({a:'1'},'P');
  
        expect(dispatch).toBeCalledWith('mock DeleteAppointment action');
        expect(mockLoginActions.appointment.DeleteAppointment).toBeCalledWith({a:'1'},'P');
    })
})