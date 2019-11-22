import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {BusinessName} from '../../../src/components/appointment'

describe('Business Name correctly renders', () => {
    let props;

    it('Business Name renders without crashing with status blank', () => {
        props = {
            status: '',
            businessName: 'Test',
            onbusinessList: ["A", "B"],
            onSetProvider: () => {}, 
            onSetShopName: () => {},  
            onSetAddress1: () => {}, 
            onSetAddress: () => {}, 
        }
        var businessName = shallow(
            <BusinessName
                {...props}
            />
        )
        expect(businessName).toBeTruthy()
    })

    it('Business Name renders without crashing with status ', () => {

        props = {
            status: 'BOOKED',
            businessName: 'Test',
            onbusinessList: ["A", "B"],
            onSetProvider: () => {}, 
            onSetShopName: () => {},  
            onSetAddress1: () => {}, 
            onSetAddress: () => {}, 
        }
        var businessName = shallow(
            <BusinessName
                {...props}
            />
        )
        expect(businessName).toBeTruthy()
    })
})