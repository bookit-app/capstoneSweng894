import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Spinner} from '../../../src/components/common'

describe('Spinner render correctly', () => {
    test('Spinner render without crashing', () => {
        var spinner = shallow(<Spinner size={"large"} />)
        expect(spinner).toBeTruthy()
    })
})