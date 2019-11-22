import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {DisplayResults} from '../../../src/components/general'

describe('Display results correctly', () => {
    test('Display results renders without crashing with error not populated', () => {
        let props = {
            headerText: 'Header Text',
            noRecordsFound: 'No Records Found',
            errorMessage: '',
            currentData: [{a: 1, b: 2, providerId: 'lkjlkjkjsdf'}, {a: 3, b: 4, providerId: 'salkjsldfkj'}],
            extraData:{},
            renderItem: () => {},
            onEndReached: () => {},
            listHeader: () => {}
        }
        var displayResult = shallow(<DisplayResults {...props}/>)
        expect(displayResult).toBeTruthy()
    })
    
    test('Display results renders without crashing with error not populated', () => {
        let props = {
            headerText: 'Header Text',
            noRecordsFound: 'No Records Found',
            errorMessage: 'Error Message',
            currentData: [{a: 1, b: 2, providerId: 'lkjlkjkjsdf'}, {a: 3, b: 4, providerId: 'salkjsldfkj'}],
            extraData:{},
            renderItem: () => {},
            onEndReached: () => {},
            listHeader: () => {}
        }
        var displayResult = shallow(<DisplayResults {...props}/>)
        expect(displayResult).toBeTruthy()
    })
})