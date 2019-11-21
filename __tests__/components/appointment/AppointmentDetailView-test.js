import React from 'react'
import {AppointmentDetailView} from '../../../src/components/appointment'
import randerer from 'react-test-renderer';
import { UpcomingAppointments } from '../../../src/constant'

describe('Appointment Detail View correctly renderer', () => {
    test('Appointment Detail View renderer without crashing', () => {
        // const replaceItem = () => {}
        // const onDisplay = () => {}

        const appointmentDetailView = randerer.create(
            <AppointmentDetailView
                edit={false}
                item={UpcomingAppointments[0]}
                profile={''}
                token={''}
                replaceItem={() => {}}
                onDisplay={() => {}}
            />
        ).toJSON()
        expect(appointmentDetailView).toBeTruthy();
    })


})
