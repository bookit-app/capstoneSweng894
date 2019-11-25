import '../../../src/setupTests'
import PreferenceForm from '../../../src/components/preference/PreferenceForm'
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
            setPreference: jest.fn().mockReturnValue('mock set Preference')
        },
        profile: {
            setProfile: jest.fn().mockReturnValue('mock set Profile')
        },
        provider: {
            alreadyFetch: jest.fn().mockReturnValue('mock already fetch')
        }
    };
});

jest.mock("../../../src/store", () => {
    return {
        GetProviderSearchResult: jest.fn().mockReturnValue('mock set Provider list')
    };
});
describe('Preference Form renders correctly', () => {
    let prefForm;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Preference form correctly render', () => {
        prefForm = shallow(<PreferenceForm {...props}/>)
        expect(prefForm).toBeTruthy()
    })
    
    test('should map Preference form to props', () => {
        const initialState = {
            token: '',
            preference: {},
            styles: {},
            loadingStyles: false,
            profile: {},
            loadingProfile: false,
            providerResults: []
        };
        store = mockStore(initialState);
        prefForm =  shallow(<PreferenceForm {...props} store={store}/>)

        expect(prefForm.props().token).toBe(undefined);
        expect(prefForm.props().preference).toBe(undefined);
        expect(prefForm.props().styles).toBe(undefined);
        expect(prefForm.props().loadingStyles).toBe(undefined);
        expect(prefForm.props().profile).toBe(undefined);
        expect(prefForm.props().loadingProfile).toBe(undefined);
        expect(prefForm.props().providerResults).toBe(undefined);
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
        props.setProfile({});
  
        expect(dispatch).toBeCalledWith('mock set Profile');
        expect(mockActions.profile.setProfile).toBeCalledWith({});

        props = mapDispatchToProps(dispatch);
        props.alreadyFetch(false);
  
        expect(dispatch).toBeCalledWith('mock already fetch');
        expect(mockActions.provider.alreadyFetch).toBeCalledWith(false);

        props = mapDispatchToProps(dispatch);
        props.getProviderResult([{a: '1', b: '2'}]);
  
        expect(dispatch).toBeCalledWith('mock set Provider list');
        expect(mockStore.GetProviderSearchResult).toBeCalledWith([{a: '1', b: '2'}], undefined);
    })
})