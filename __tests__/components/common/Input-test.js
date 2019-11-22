import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Input} from '../../../src/components/common'

describe('Input renders correctly', () => {
    test('Input render without crashing secure true', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: true,
            error: 'error'
        }

        var input = shallow(<Input {...props} />)
        expect(input).toBeTruthy()
    })
    test('Input render without crashing secure false', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: false,
            error: 'error'
        }

        var input = shallow(<Input {...props} />)
        expect(input).toBeTruthy()
    })
})
