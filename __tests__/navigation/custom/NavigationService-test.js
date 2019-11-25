import '../../../src/setupTests'
import ns from '../../../src/navigation/custom/NavigationService'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

jest.mock("react-navigation", () => {
    return {
        NavigationActions: {
            navigate: jest.fn().mockReturnValue(() => jest.fn())
        }
    };
});

describe('NavigationService render correctly', () => {
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
        _navigator = {
            dispatch: jest.fn()
        }
    })

    test('NavigationService set top Navigator', () => {
        expect(ns.setTopNavigator(props)).toEqual(undefined)
    })  
})