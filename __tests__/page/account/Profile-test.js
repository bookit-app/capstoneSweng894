import '../../../src/setupTests'
import Profile from '../../../src/page/account/Profile'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        settingPref:  jest.fn().mockReturnValue('mock settingProf action'),
        setProfile:  jest.fn().mockReturnValue('mock setProfile action'),
    };
});

jest.mock("../../../src/store", () => {
    return {
        signOut:  jest.fn().mockReturnValue('mock signOut action'),
    };
});

describe('Profile render correctly', () =>{
    let profile;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('profile correctly render', () => {
        profile = shallow(<Profile {...props} />)
        expect(profile).toBeTruthy()
    })

    // test('profile renders ScrollView', () => {
    //     profile = shallow(<Profile {...props} />)
    //     expect(profile.find('ScrollView')).toHaveLength(1)
    // })
})