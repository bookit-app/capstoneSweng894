import '../../../src/setupTests'
import SignUpEmail from '../../../src/page/account/SignUpEmail'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

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
    
    test('should map Sign Up to props', () => {
        const initialState = {
            error: '',
            userId: ''
        };
        store = mockStore(initialState);
        signUpEmail =  shallow(<SignUpEmail {...props} store={store}/>)

        expect(signUpEmail.props().error).toBe(undefined);
        expect(signUpEmail.props().userId).toBe(undefined);
    })
})

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

    test('should map SignUp props to SignUp of Actions', () => {
        let mockStore = require("../../../src/store");
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.signUpWithProfile("userName", "password", {a:'1', b: '2'});
  
        expect(dispatch).toBeCalledWith("mock signUpWithProfile action");
        expect(mockStore.signUpWithProfile).toBeCalledWith("userName", "password", {a:'1', b: '2'});

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

        props = mapDispatchToProps(dispatch);
        props.signingUp("userName", "password");
  
        expect(dispatch).toBeCalledWith("mock signUp action");
        expect(mockStore.signUp).toBeCalledWith("userName", "password");
    })
})