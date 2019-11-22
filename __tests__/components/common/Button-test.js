import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Button} from '../../../src/components/common'

describe('Button correctly renders', () =>{
    let props;

    props = {
        onPress: () => {},
        children: 'Test'
    }

    it('Button renders without crashing', () => {
        var button = shallow(<Button {...props} />)
        expect(button).toBeTruthy()
    })
})