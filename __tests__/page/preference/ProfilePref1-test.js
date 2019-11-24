import '../../../src/setupTests'
import ProfilePref1 from '../../../src/page/preference/ProfilePref1'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

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

    // test('Log In email should change state when email entered', () => {
    //     const instanceOf = renderer.create(<LogInEmail {...props} />).getInstance()
    //     instanceOf.verifyEmail('a@a.com')
    //     expect(instanceOf.state.email).toEqual('a@a.com')
    // })
})

jest.mock("react-redux", () => {
    return {
        connect: jest.fn().mockReturnValue(() => jest.fn())
    };
});

jest.mock("../../../src/actions", () => {
    return {
        setPreference: jest.fn().mockReturnValue('mock login action')
    };
});

describe('Profile pref 1 map', () => {
    let mapStateToProps
    let mapDispatchToProps

    beforeEach(() => {
      let mockConnect = require("react-redux").connect;

      mapStateToProps = mockConnect.mock.calls[0][0];
      mapDispatchToProps = mockConnect.mock.calls[0][1];
    });
    
    afterEach(() => {jest.clearAllMocks()})

    // test('should map login props to login of profile pref Actions', () => {
    //     let mockLoginActions = require("../../../src/actions");
    //     let dispatch = jest.fn();
  
    //     let props = mapDispatchToProps(dispatch);
    //     props.setPreference({a:'a',b:'b'});
  
    //     expect(dispatch).toBeCalledWith("mock loggingIn action");
    //     expect(mockLoginActions.setPreference).toBeCalledWith({a:'a',b:'b'});
    // })
})