import '../../../src/setupTests'
import PreferenceShopResult from '../../../src/components/preference/PreferenceShopResult'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

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
})

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        settingPref: jest.fn().mockReturnValue('mock setting Pref'),
        setProfile: jest.fn().mockReturnValue('mock set Profile')
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