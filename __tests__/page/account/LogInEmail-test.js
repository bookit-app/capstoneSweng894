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
        auth: {
            userSet: jest.fn().mockReturnValue('mock useSet action'),
            userAuthError:  jest.fn().mockReturnValue('mock userAuthError action'),
        },
        preference: {
            settingPref:  jest.fn().mockReturnValue('mock settingProf action')
        }
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

    test('should map login props to login of Actions', () => {
        let mockStore = require("../../../src/store");
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.loggingIn("userName", "password");
  
        expect(dispatch).toBeCalledWith("mock loggingIn action");
        expect(mockStore.logIn).toBeCalledWith("userName", "password");
        
        props = mapDispatchToProps(dispatch);
        props.userSet("sflkjsdlkfjsdlfk");
  
        expect(dispatch).toBeCalledWith('mock useSet action');
        expect(mockActions.auth.userSet).toBeCalledWith("sflkjsdlkfjsdlfk");

        props = mapDispatchToProps(dispatch);
        props.userAuthError("sflkjsdlkfjsdlfk");
  
        expect(dispatch).toBeCalledWith('mock userAuthError action');
        expect(mockActions.auth.userAuthError).toBeCalledWith("sflkjsdlkfjsdlfk");

        props = mapDispatchToProps(dispatch);
        props.settingPref(false);
  
        expect(dispatch).toBeCalledWith('mock settingProf action');
        expect(mockActions.preference.settingPref).toBeCalledWith(false);
    })
})