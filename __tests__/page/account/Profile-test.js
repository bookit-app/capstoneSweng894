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
        preference: {
            setPreference:  jest.fn().mockReturnValue('mock set preferences action'),
        },
        profile: {
            setProfile:  jest.fn().mockReturnValue('mock set profile action'),
        }
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
})

describe('Profile map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
    let mockConnect = require("react-redux").connect;

    mapStateToProps = mockConnect.mock.calls[0][0];
    mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    test('should map Profile props to Actions', () => {
        let mockStore = require("../../../src/store");
        let mockActions = require("../../../src/actions");
        let dispatch = jest.fn();

        let props = mapDispatchToProps(dispatch);
        props.signOut();

        expect(dispatch).toBeCalledWith('mock signOut action');
        expect(mockStore.signOut).toBeCalledWith();
        
        props = mapDispatchToProps(dispatch);
        props.setPreference({a: '1'});

        expect(dispatch).toBeCalledWith('mock set preferences action');
        expect(mockActions.preference.setPreference).toBeCalledWith({a: '1'});

        props = mapDispatchToProps(dispatch);
        props.setProfile({a: '1'});

        expect(dispatch).toBeCalledWith('mock set profile action');
        expect(mockActions.profile.setProfile).toBeCalledWith({a: '1'});
    })
})