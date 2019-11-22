
import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {AppointmentList} from '../../../src/components/appointment'
import JestMock from 'jest-mock';
import { exportAllDeclaration } from '@babel/types';

describe('appointment list correctly renders', () => {
    let appointmentList;
    let props;

    const renderItem = (item) => {}
    const listHeader = () => {}
    const listSeparater = () => {}
    const listEmpty = () => {}

    test('appointment list renders without crashing', () => {
        props = {
            list: [],
            state: {},
            renderItem: renderItem(),
            listHeader: listHeader(),
            listSeparater: listSeparater(),
            listEmpty: listEmpty()
        }

        appointmentList = shallow(<AppointmentList {...props}/>)

        expect(appointmentList).toBeTruthy()
    })

    test('appointment list renders without crashing dummy list', () => {
        props = {
            list: [{
                state:{
                    code: 'READY',
                    comment: ''
                }, 
                status: 'ON-TIME', 
                businessName: 'Test', 
                staffMemberName: 'sdlfkjsldkfjskjf', 
                style: 'Barber', 
                note: '', 
                date: '2019-11-25', 
                time: '12:00:00', 
                appointmentId: 'lkjsdlfkjsodfi', 
                listType: 'upcoming', 
                providerId: '10001'
            },{
                state:{
                    code: 'READY',
                    comment: ''
                }, 
                status: 'ON-TIME', 
                businessName: 'Test', 
                staffMemberName: 'sdlfkjsldkfjskjf', 
                style: 'Barber', 
                note: '', 
                date: '2019-11-25', 
                time: '12:00:00', 
                appointmentId: 'lkjsdlfkjsodfi', 
                listType: 'upcoming', 
                providerId: '10001'
            },
        ],
            state: {},
            renderItem: renderItem(),
            listHeader: listHeader(),
            listSeparater: listSeparater(),
            listEmpty: listEmpty()
        }
        
        appointmentList = shallow(<AppointmentList {...props}/>)

        expect(appointmentList).toBeTruthy()
    })
})