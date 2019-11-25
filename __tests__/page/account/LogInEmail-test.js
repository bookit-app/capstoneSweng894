import '../../../src/setupTests'
import LogInEmail from '../../../src/page/account/LogInEmail'
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

describe('Log In Email render correctly', () => {
    let logInEmail;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Log In email correctly render', () => {
        logInEmail = shallow(<LogInEmail {...props} />)
        expect(logInEmail).toBeTruthy()
    })
})

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