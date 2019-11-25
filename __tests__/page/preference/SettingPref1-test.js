import '../../../src/setupTests'
import SettingPref1 from '../../../src/page/preference/SettingPref1'
import React from 'react'
import { shallow } from 'enzyme'

describe('Setting Pref 1 render correctly', () => {
    let settingPref1;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('Setting Pref 1 correctly render', () => {
        settingPref1 = shallow(<SettingPref1 {...props} />)
        expect(settingPref1).toBeTruthy()
    })    
})
