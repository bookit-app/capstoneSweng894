import React from 'react'
import {AppointmentItem} from '../../../src/components/appointment'
import renderer from 'react-test-renderer';

describe('appointment item correctly render', () => {
    test('appointment item renders without crashing', () => {
        const onDetailClick = (item) => {}
        const onDetailHoldClickDelete = (itme) => {}

        const appointmentItem = renderer.create(
            <AppointmentItem
                shopName={'Test'}
                service={'Test' }
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