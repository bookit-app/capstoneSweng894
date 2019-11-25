import React from 'react'
import {AppointmentItem} from '../../../src/components/appointment'
import renderer from 'react-test-renderer';

describe('appointment item correctly render', () => {
    test('appointment item renders without crashing with non Barber', () => {
        const onDetailClick = (item) => {}
        const onDetailHoldClickDelete = (itme) => {}

        const appointmentItem = renderer.create(
            <AppointmentItem
                shopName={'Test'}
                service={'' }
                date={'2001-01-01'}
                time={'11:10:10'}
                status={'Test'}
                onClick={() => onDetailClick(item.item)}
                onHoldClick={() => onDetailHoldClickDelete(item.item)}
            />
        ).toJSON()

        expect(appointmentItem).toBeTruthy();
    })
    test('appointment item renders without crashing with Barber', () => {
        const onDetailClick = (item) => {}
        const onDetailHoldClickDelete = (itme) => {}

        const appointmentItem = renderer.create(
            <AppointmentItem
                shopName={'Test'}
                service={'Barber' }
                date={'2001-01-01'}
                time={'11:10:10'}
                status={'Test'}
                onClick={() => onDetailClick(item.item)}
                onHoldClick={() => onDetailHoldClickDelete(item.item)}
            />
        ).toJSON()

        expect(appointmentItem).toBeTruthy();
    })
})