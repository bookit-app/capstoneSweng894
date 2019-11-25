import '../../../src/setupTests'
import SignUpEmail from '../../../src/page/account/SignUpEmail'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('Sign Up Email render correctly', () => {
    let signUpEmail;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Sign Up Email correctly render', () => {
        signUpEmail = shallow(<SignUpEmail {...props} />)
        expect(signUpEmail).toBeTruthy()
    })
})

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        userSet: jest.fn().mockReturnValue('mock login action'),
        userAuthError:  jest.fn().mockReturnValue('mock userAuthError action'),
        settingPref:  jest.fn().mockReturnValue('mock settingProf action'),
        loggingIn:  jest.fn().mockReturnValue('mock loggingIn action'),
    };
});

jest.mock("../../../src/store", () => {
    return {
        signUpWithProfile:  jest.fn().mockReturnValue('mock signUpWithProfile action'),
        signUp:  jest.fn().mockReturnValue('mock signUp action'),
    };
});

describe('Sign Up With Profile map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map login props to login of LoginActions', () => {
        let mockLoginActions = require("../../../src/store");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.signUpWithProfile("userName", "password", {a:'1', b: '2'});
  
        expect(dispatch).toBeCalledWith("mock signUpWithProfile action");
        expect(mockLoginActions.signUpWithProfile).toBeCalledWith("userName", "password", {a:'1', b: '2'});
    })
})