import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Calendar} from '../../../src/components/appointment'

describe('Calendar correctly render', () =>{
    let props;

    const onDateChange = (date, type) => {}

    props = {
        state: 'BOOKED',
        existAppointments: [
            '2019-11-20',
            '2019-11-21',
            '2019-11-22',
        ],
        listType: 'previous',
        onDateChange: () => onDateChange()
    }

    it('Calendar renders without crashing with state populated', () => {
        props = {
            state: 'BOOKED',
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            listType: 'previous',
            onDateChange: () => onDateChange()
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })

    it('Calendar renders without crashing with state blank', () => {
        props = {
            state: '',
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            listType: 'previous',
            onDateChange: () => onDateChange()
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })

    it('Calendar renders without crashing with state populated with upcoming populated', () => {
        props = {
            state: 'BOOKED',
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            listType: 'upcoming',
            onDateChange: () => onDateChange()
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })

    it('Calendar renders without crashing with state blank with upcoming populated', () => {
        props = {
            state: '',
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            listType: 'upcoming',
            onDateChange: () => onDateChange()
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })
})