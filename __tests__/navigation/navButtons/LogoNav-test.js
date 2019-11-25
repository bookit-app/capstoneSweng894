import '../../../src/setupTests'
import {LogoNav} from '../../../src/navigation/navButtons'
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

describe('LogoNav render correctly', () => {
    let logoNav;
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
        logOutNav = shallow(<LogoNav {...props} />)
        expect(logOutNav).toBeTruthy()
    })  
})