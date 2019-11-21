import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {ButtonCustom} from '../../../src/components/common'
import {create} from 'react-test-renderer'
import {AppointmentView} from '../../../src/components/appointment'

describe('Appointment View coorrectly renders', () =>{
    let appointmentView;
    let props;

    const onEditClick = () => {
        return (
            <ButtonCustom>
                {'Edit'}
            </ButtonCustom>
        )
    }

    const item = {
        status:{
            code: 'READY',
            comment: ''
        }, 
        state: 'BOOKED', 
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

    props ={
        onEditClick: () => onEditClick,
        item: item,
        address:'Test',
        city:'Test',
        state:'Test',
        zipCode:'Test',
        profile:{},
        preference:{},
        token:'Test',
    }

    test('Appointment View renders without crashing', () => {
        appointmentView = shallow(
            <AppointmentView
                {...props}
            />
        )
        expect(appointmentView).toBeTruthy()
    })
})
