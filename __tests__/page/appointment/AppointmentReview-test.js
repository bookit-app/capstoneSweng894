import '../../../src/setupTests'
import AppointmentReview from '../../../src/page/appointment/AppointmentReview'
import React from 'react'
import { shallow } from 'enzyme'

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
    let areview;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Appointment Dashboard correctly render', () => {
        areview = shallow(<AppointmentReview {...props} />)
        expect(areview).toBeTruthy()
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