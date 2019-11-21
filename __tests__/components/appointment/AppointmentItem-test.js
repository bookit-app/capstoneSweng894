import React from 'react'
import {AppointmentItem} from '../../../src/components/appointment'
import {create} from 'react-test-renderer';

describe('appointment item correctly render', () => {
    test('Matches the snapshot', () => {
        const onDetailClick = (item) => {}
        const onDetailHoldClickDelete = (itme) => {}

        const appointmentItem = create( 
            <AppointmentItem
                shopName={'Test'}
                service={'Test' }
                date={'2001-01-01'}
                time={'11:10:10'}
                status={'Test'}
                onClick={() => onDetailClick(item.item)}
                onHoldClick={() => onDetailHoldClickDelete(item.item)}
            />
        )
        expect(appointmentItem.toJSON()).toMatchSnapshot();
    })
})