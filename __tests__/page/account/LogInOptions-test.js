import '../../../src/setupTests'
import LogInOptions from '../../../src/page/account/LogInOptions'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('LogInOptions correctly renders', () => {
    let logInOptions;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              }
        }
    })

    test('logInOptions renders without crashing', () => {
        logInOptions = shallow(<LogInOptions {...props} />)
        expect(logInOptions).toBeTruthy()
    })

    test('forgetPassword renders Account Forgot Password', () => {
        logInOptions = shallow(<LogInOptions {...props} />)
        expect(logInOptions.find('AccountImage')).toHaveLength(1)
    })
})