import '../../../src/setupTests'
import Tutorial from '../../../src/page/general/Tutorial'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

describe('tutorial correctly renders', () => {
    let tutorial;
    let props;

    beforeEach(() => {
        props = {
            navigation: {
                navigate: jest.fn()
              },
        }
    })

    test('tutorial renders without crashing', () => {
        tutorial = shallow(<Tutorial {...props} />)
        expect(tutorial).toBeTruthy()
    })
})