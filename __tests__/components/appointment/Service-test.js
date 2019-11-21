import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Service} from '../../../src/components/appointment'

describe('Service correctly renders', () => {
    let props;

    it('Services correctly renders without blank status', () => {
        props = {
            status: '',
            service: '',
            serviceList:  ["A", "B"],
            onSetServiceList:() => {}
        }

        var service_ = shallow(<Service {...props}/>)

        expect(service_).toBeTruthy()
    })

    it('Services correctly renders without populate status', () => {
        props = {
            status: 'TEST',
            service: '',
            serviceList:  ["A", "B"],
            onSetServiceList:() => {}
        }

        var service_ = shallow(<Service {...props}/>)

        expect(service_).toBeTruthy()
    })
})