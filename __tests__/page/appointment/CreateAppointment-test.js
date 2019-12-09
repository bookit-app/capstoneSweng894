import '../../../src/setupTests'
import CreateAppointment from '../../../src/page/appointment/CreateAppointment'
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

describe('Appointment creation render correctly', () => {
    let areview;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Appointment Creation correctly render', () => {
        areview = shallow(<CreateAppointment {...props} />)
        expect(areview).toBeTruthy()
    })
})

describe('Create Appointment map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map Create Appointment props to Create Appointment Dashboard', () => {
        let mockLoginActions = require("../../../src/store");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.refreshAppointment('P', 'jslkjfslkdfj');
  
        expect(dispatch).toBeCalledWith('mock getAppointment action');
        expect(mockLoginActions.getAppointment).toBeCalledWith('P', 'jslkjfslkdfj');
  
        props = mapDispatchToProps(dispatch);
        props.refreshAppointment('U', 'jslkjfslkdfj');
  
        expect(dispatch).toBeCalledWith('mock getAppointment action');
        expect(mockLoginActions.getAppointment).toBeCalledWith('U', 'jslkjfslkdfj');

        // let props2 = mapDispatchToProps(dispatch);
        // props2.deleteItem({a:'1'},'P');
  
        // expect(dispatch).toBeCalledWith('mock DeleteAppointment action');
        // expect(mockLoginActions.appointment.DeleteAppointment).toBeCalledWith({a:'1'},'P');
    })
})
