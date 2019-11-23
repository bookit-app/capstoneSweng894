import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {Calendar} from '../../../src/components/appointment'

describe('Calendar correctly render', () =>{
    let props;

    const onDateChange = (date, type) => {}
    const isFalse = () => {return false}
    const isTrue = () => {return true}

    it('Calendar renders without crashing with isCalendarDispaly false populated', () => {
        props = {
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            onDateChange: () => onDateChange(),
            isCalendarDispaly: isFalse
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })

    it('Calendar renders without crashing  with isCalendarDispaly true', () => {
        props = {
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            listType: 'previous',
            isCalendarDispaly: isTrue
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
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            onDateChange: () => onDateChange(),
            isCalendarDispaly: isTrue
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
            existAppointments: [
                '2019-11-20',
                '2019-11-21',
                '2019-11-22',
            ],
            onDateChange: () => onDateChange(),
            isCalendarDispaly: isTrue
        }
        let calendar = shallow(
            <Calendar
                {...props}
            />
        )
        expect(calendar).toBeTruthy()
    })
})