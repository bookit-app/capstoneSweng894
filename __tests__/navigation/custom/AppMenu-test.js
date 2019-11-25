import '../../../src/setupTests'
import AppMenu from '../../../src/navigation/custom/AppMenu'
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

describe('AppMenu render correctly', () => {
    let appMenu;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn(),
                dispatch: jest.fn()
              },
        }
    })

    test('AppMenu correctly render', () => {
        appMenu = shallow(<AppMenu {...props} />)
        expect(appMenu).toBeTruthy()
    })  
})