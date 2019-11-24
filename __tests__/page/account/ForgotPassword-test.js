import '../../../src/setupTests'
import ForgotPassword from '../../../src/page/account/ForgotPassword'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
});

describe('forgetPassword correctly renders', () => {
    let forgetPassword;
    let props;

    beforeEach(() => {
        props = createTestProps({})
    })

    test('forgetPassword renders without crashing', () => {
        forgetPassword = shallow(<ForgotPassword {...props} />)
        expect(forgetPassword).toBeTruthy()
    })

    test('forgetPassword renders Account Forgot Password', () => {
        forgetPassword = shallow(<ForgotPassword {...props} />)
        expect(forgetPassword.find('AccountForgotPassword')).toHaveLength(1)
    })

    test('forgetPassword should change state when email entered', () => {
        const instanceOf = renderer.create(<ForgotPassword {...props} />).getInstance()
        instanceOf.verifyEmail('a@a.com')
        expect(instanceOf.state.email).toEqual('a@a.com')
    })

    // test('forgetPassword render Reset Password Button', () => {
    //     const instanceOf = renderer.create(<ForgotPassword {...props} />).getInstance()
    //     instanceOf.onPasswordResetClick()
    //     expect(instanceOf.find(ButtonCustom)).toHaveLength(1)
    // })

})