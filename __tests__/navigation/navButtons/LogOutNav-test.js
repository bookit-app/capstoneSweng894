import '../../../src/setupTests'
import {LogOutNav} from '../../../src/navigation/navButtons'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

jest.mock("react-navigation", () => {
    return {
        NavigationActions: {
            navigate: jest.fn()
        }
    };
});

describe('LogOutNav render correctly', () => {
    let logOutNav;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn(),
                dispatch: jest.fn()
              },
        }
    })

    test('LogOutNav correctly render', () => {
        logOutNav = shallow(<LogOutNav {...props} />)
        expect(logOutNav).toBeTruthy()
    })  
})