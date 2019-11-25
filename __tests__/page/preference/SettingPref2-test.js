import '../../../src/setupTests'
import SettingPref2 from '../../../src/page/preference/SettingPref2'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('Setting Pref 2 render correctly', () => {
    let settingPref2;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Setting Pref 2 correctly render', () => {
        settingPref2 = shallow(<SettingPref2 {...props} />)
        expect(settingPref2).toBeTruthy()
    })    
})
