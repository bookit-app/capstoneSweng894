import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Status} from '../../../src/components/appointment'

describe('Status correctly renders', () => {
    let props;

    it('Status correctly render with listtype previous', () => {
        props = {
            status: 'Ready',
            listType: 'previous',
            onSetStatus: () => {}
        }
        var status = shallow(<Status {...props} />)
        expect(status).toBeTruthy()
    })

    it('Status correctly render with upcoming', () =>{
        props = {
            status: 'Ready',
            listType: 'upcoming',
            onSetStatus: () => {}
        }
        var status = shallow(<Status {...props} />)
        expect(status).toBeTruthy()
    })
})