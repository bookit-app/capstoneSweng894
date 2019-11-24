import '../../../src/setupTests'
import LogInEmail from '../../../src/page/account/LogInEmail'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn()
    },
    // verifyEmail: jest.fn(),
    // verifyPassword: jest.fn(),
    // onOtherAccount: jest.fn(),
    // onLogInButton: jest.fn(),
    // onLogInSuccess: jest.fn(),
    // onLogInFail: jest.fn(),
    // onLogInSub: jest.fn(),
    ...props
  });


describe('Log In Email render correctly', () => {
    let logInEmail;
    let props;

    beforeEach(() => {
        props = createTestProps({})
    })

    test('Log In email correctly render', () => {
        logInEmail = shallow(<LogInEmail {...props} />)
        expect(logInEmail).toBeTruthy()
    })

    // test('Log In email should change state when email entered', () => {
    //     const instanceOf = renderer.create(<LogInEmail {...props} />).getInstance()
    //     instanceOf.verifyEmail('a@a.com')
    //     expect(instanceOf.state.email).toEqual('a@a.com')
    // })
    // test('Log In email renders AccountForm', () => {
    //     logInEmail = shallow(<LogInEmail {...props} />)
    //     expect(logInEmail.find('AccountForm')).toHaveLength(1)
    // })
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
        logIn:  jest.fn().mockReturnValue('mock loggingIn action'),
    };
});

describe('Log In Email map', () => {
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
        props.loggingIn("userName", "password");
  
        expect(dispatch).toBeCalledWith("mock loggingIn action");
        expect(mockLoginActions.logIn).toBeCalledWith("userName", "password");
    })
})