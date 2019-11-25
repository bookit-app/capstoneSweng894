import '../../../src/setupTests'
import PreferenceShopResult from '../../../src/components/preference/PreferenceShopResult'
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
            settingPref: jest.fn().mockReturnValue('mock setting Pref'),
            setPreference: jest.fn().mockReturnValue('mock set Preference')
        }
    };
});

jest.mock("../../../src/store", () => {
    return {
        GetProviderSearchResult: jest.fn().mockReturnValue('mock set Provider list')
    };
});

describe('Preference Shop Result renders correctly', () => {
    let prefShopResult;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Preference Shop Result correctly render', () => {
        prefShopResult = shallow(<PreferenceShopResult {...props}/>)
        expect(prefShopResult).toBeTruthy()
    })
    
    test('should map Preference Shop Result to props', () => {
        const initialState = {
            profile: {},
            preference: {},
            providerResults: [],
            alreadyFetch: false,
            searchResult: [],
            errorMessage: '',
            loading: false,
            token: ''
        };

        store = mockStore(initialState);
        prefShopResult =  shallow(<PreferenceShopResult {...props} store={store}/>)

        expect(prefShopResult.props().profile).toBe(undefined);
        expect(prefShopResult.props().preference).toBe(undefined);
        expect(prefShopResult.props().providerResults).toBe(undefined);
        expect(prefShopResult.props().alreadyFetch).toBe(undefined);
        expect(prefShopResult.props().searchResult).toBe(undefined);
        expect(prefShopResult.props().errorMessage).toBe(undefined);
        expect(prefShopResult.props().loading).toBe(undefined);
        expect(prefShopResult.props().token).toBe(undefined);
    })
})

describe('Preference Form map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})    

    test('should map Preference Form props Actions', () => {
        let mockStore = require("../../../src/store");
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();
  
        let props = mapDispatchToProps(dispatch);
        props.setPreference({});
  
        expect(dispatch).toBeCalledWith('mock set Preference');
        expect(mockActions.preference.setPreference).toBeCalledWith({});
        
        props = mapDispatchToProps(dispatch);
        props.settingPref(false);
  
        expect(dispatch).toBeCalledWith('mock setting Pref');
        expect(mockActions.preference.settingPref).toBeCalledWith(false);

        props = mapDispatchToProps(dispatch);
        props.getProviderResult([{a: '1', b: '2'}]);
  
        expect(dispatch).toBeCalledWith('mock set Provider list');
        expect(mockStore.GetProviderSearchResult).toBeCalledWith([{a: '1', b: '2'}], undefined);
    })
})