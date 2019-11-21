import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Stylist} from '../../../src/components/appointment'

describe('Stylist correctly renders', () => {
    let props

    it('Stylist correctly renders with status blank', () => {
        props = {
            status: '',
            staffMemberName: 'test test',
            stylistList: [],
            onSetStylist: () => {},
        }
        var stylist = shallow(<Stylist {...props}/>)
        expect(stylist).toBeTruthy()
    })

    it('Stylist correctly renders with status', () => {
        props = {
            status: 'READY',
            staffMemberName: 'test test',
            stylistList: ['a1 a2', 'b2 b2'],
            onSetStylist: () => {}
        }
        var stylist = shallow(<Stylist {...props}/>)
        expect(stylist).toBeTruthy()
    })
})