import '../../../src/setupTests'
import ProfilePref1 from '../../../src/page/preference/ProfilePref1'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        preference: { 
            setPreference: jest.fn().mockReturnValue('mock set preference action')
        }
    };
});

describe('Profile Pref 1 render correctly', () => {
    let profilePref1;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Profile Pref 1 correctly render', () => {
        profilePref1 = shallow(<ProfilePref1 {...props} />)
        expect(profilePref1).toBeTruthy()
    })  
    
    test('should map Profile pref 1 to props', () => {
        const initialState = {
            token: '',
            profile: {},
            preference: {},
            providerResults: [],
        };
        store = mockStore(initialState);
        profilePref1 =  shallow(<ProfilePref1 {...props} store={store}/>)

        expect(profilePref1.props().profile).toBe(undefined);
        expect(profilePref1.props().preference).toBe(undefined);
        expect(profilePref1.props().providerResults).toBe(undefined)
        expect(profilePref1.props().token).toBe(undefined);
    })
})

describe('Profile pref 1 map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
        let mockConnect = require("react-redux").connect;

        mapStateToProps = {
            token: 'sdfsdfsdf',
            preference: {},
            profile: {},
            providerResults: []
        }
        mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map Profile props to Actions', () => {
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();

        let props = mapDispatchToProps(dispatch);
        props.setPreference({a: '1'});

        expect(dispatch).toBeCalledWith('mock set preference action');
        expect(mockActions.preference.setPreference).toBeCalledWith({a: '1'});
    })
})