import '../../../src/setupTests'
import ProfilePref2 from '../../../src/page/preference/ProfilePref2'
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
            setPreference: jest.fn().mockReturnValue('mock set preference action'),
            settingPref: jest.fn().mockReturnValue('mock setting pref action')
        }
    };
});

jest.mock("../../../src/store", () => {
    return {
        GetProviderSearchResult: jest.fn().mockReturnValue('mock get provider search result action')
    };
});

describe('Profile Pref 2 render correctly', () => {
    let profilePref2;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Profile Pref 2 correctly render', () => {
        profilePref2 = shallow(<ProfilePref2 {...props} />)
        expect(profilePref2).toBeTruthy()
    })    
    
    test('should map Profile pref 2 to props', () => {
        const initialState = {
            profile: {},
            preference: {},
            providerResults: [],
            searchResult: [],
            errorMessage: '',
            loading: false,
            token: '',
        };
        store = mockStore(initialState);
        profilePref2 =  shallow(<ProfilePref2 {...props} store={store}/>)

        expect(profilePref2.props().profile).toBe(undefined);
        expect(profilePref2.props().preference).toBe(undefined);
        expect(profilePref2.props().providerResults).toBe(undefined);
        expect(profilePref2.props().searchResult).toBe(undefined);
        expect(profilePref2.props().errorMessage).toBe(undefined);
        expect(profilePref2.props().loading).toBe(undefined);
        expect(profilePref2.props().token).toBe(undefined);
    })
})

describe('Profile pref 2 map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
        let mockConnect = require("react-redux").connect;
        
        mapStateToProps = mockConnect.mock.calls[0][0]
        mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('should map Profile props to Actions', () => {
        let mockActions = require("../../../src/actions");
        let mockStore = require("../../../src/store")
        let dispatch = jest.fn();

        let props = mapDispatchToProps(dispatch);
        props.settingPref(false);

        expect(dispatch).toBeCalledWith('mock setting pref action');
        expect(mockActions.preference.settingPref).toBeCalledWith(false);

        props = mapDispatchToProps(dispatch);
        props.setPreference({a: '1'});

        expect(dispatch).toBeCalledWith('mock set preference action');
        expect(mockActions.preference.setPreference).toBeCalledWith({a: '1'});

        props = mapDispatchToProps(dispatch);
        props.getProviderResult([{a: '1'},{a: '2'}]);

        expect(dispatch).toBeCalledWith('mock get provider search result action');
        expect(mockStore.GetProviderSearchResult).toBeCalledWith([{a: '1'},{a: '2'}], undefined);
    })
})