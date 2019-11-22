
import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {AppointmentDetailView} from '../../../src/components/appointment'
import JestMock from 'jest-mock';

describe('Appointment Detail View correctly renderer', () => {
    let appointmentDetailView
    let props

    const replaceItem = () => {}
    const onDisplay = () => {}
    const item = {
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
    }

    beforeEach(() => {
        useEffect = JestMock.spyOn(React, "useEffect").mockImplementation(f => f())

        props = {
            edit:false,
            item:item,
            profile:{},
            token: '',
            replaceItem:replaceItem(),
            onDisplay:onDisplay()
        }

        appointmentDetailView = shallow(<AppointmentDetailView {...props}/>)
    })

    test('Appointment Detail View renderer without crashing', () => {
        expect(appointmentDetailView).toBeTruthy();
    })


})
