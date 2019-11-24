import '../../../src/setupTests'
import LogInOptions from '../../../src/page/account/LogInOptions'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
});

describe('LogInOptions correctly renders', () => {
    let logInOptions;
    let props;

    beforeEach(() => {
        props = createTestProps({})
    })

    test('logInOptions renders without crashing', () => {
        logInOptions = shallow(<LogInOptions {...props} />)
        expect(logInOptions).toBeTruthy()
    })

    test('forgetPassword renders Account Forgot Password', () => {
        logInOptions = shallow(<LogInOptions {...props} />)
        expect(logInOptions.find('AccountImage')).toHaveLength(1)
    })

    test('forgetPassword renders Account Forgot Password', () => {
        logInOptions = shallow(<LogInOptions {...props} />)
        expect(logInOptions.find('AccountButtons')).toHaveLength(2)
    })
})