import '../../../src/setupTests'
import PreferenceForm from '../../../src/components/preference/PreferenceForm'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

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
})

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        setPreference: jest.fn().mockReturnValue('mock set Preference'),
        setProfile: jest.fn().mockReturnValue('mock set Profile'),
        alreadyFetch: jest.fn().mockReturnValue('mock already fetch')
    };
});

jest.mock("../../../src/store", () => {
    return {
        getProviderResult: jest.fn().mockReturnValue('mock set Preference')
    };
});

describe('Preference Form map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})
})