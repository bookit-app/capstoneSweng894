import '../../../src/setupTests'
import AppMenu from '../../../src/navigation/custom/AppMenu'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('AppMenu render correctly', () => {
    let appMenu;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('AppMenu correctly render', () => {
        appMenu = shallow(<AppMenu {...props} />)
        expect(appMenu).toBeTruthy()
    })  
})