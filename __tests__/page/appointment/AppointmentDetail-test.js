import '../../../src/setupTests'
import AppointmentDetail from '../../../src/page/appointment/AppointmentDetail'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('appointment detail correctly renders', () => {
    let appointmentDetail;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('appointment detail renders without crashing', () => {
        appointmentDetail = shallow(<AppointmentDetail {...props} />)
        expect(appointmentDetail).toBeTruthy()
    })

    // test('forgetPassword renders Account Forgot Password', () => {
    //     forgetPassword = shallow(<ForgotPassword {...props} />)
    //     expect(forgetPassword.find('AccountForgotPassword')).toHaveLength(1)
    // })

    // test('forgetPassword should change state when email entered', () => {
    //     const instanceOf = renderer.create(<ForgotPassword {...props} />).getInstance()
    //     instanceOf.verifyEmail('a@a.com')
    //     expect(instanceOf.state.email).toEqual('a@a.com')
    // })
})