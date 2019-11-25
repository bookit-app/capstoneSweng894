import '../../../src/setupTests'
import SignUpOptions from '../../../src/page/account/SignUpOptions'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('SignInOptions correctly renders', () => {
    let signUpOptions;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              }
        }
    })

    test('SignInOptions renders without crashing', () => {
        signUpOptions = shallow(<SignUpOptions {...props} />)
        expect(signUpOptions).toBeTruthy()
    })

    test('forgetPassword renders Account Forgot Password', () => {
        signUpOptions = shallow(<SignUpOptions {...props} />)
        expect(signUpOptions.find('AccountImage')).toHaveLength(1)
    })
})