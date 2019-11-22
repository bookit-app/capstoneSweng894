import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {InputNumber} from '../../../src/components/common'

describe('InputCustom renders correctly', () => {
    test('InputCustom render without crashing secure true', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: true,
            error: 'error'
        }

        var input = shallow(<InputNumber {...props} />)
        expect(input).toBeTruthy()
    })
    
    test('InputCustom render without crashing secure false', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: false,
            error: 'error'
        }

        var input = shallow(<InputNumber {...props} />)
        expect(input).toBeTruthy()
    })
})
