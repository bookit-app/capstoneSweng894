import React from 'react'
import {AppointmentEditView} from '../../../src/components/appointment'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer';
import { UpcomingAppointments } from '../../../src/constant'

describe('appointment edit view correctly render', () => {
    test('Matches the snapshot', () => {
        const replaceItem = () => {}
        const onDisplay = () => {}
        const onEditClick = () => {
            return (
                <ButtonCustom>
                    {'Edit'}
                </ButtonCustom>
            )
        }
        const appointmentEditView = create(
            <AppointmentEditView
                onEditClick={onEditClick()}
                item={UpcomingAppointments[0]}
                address={'Test'}
                city={'Test'}
                state={'Test'}
                zipCode={'Test'}
                profile={{}}
                preference={{}}
                token={''}
                replaceItem={() => replaceItem()}
                onDisplay={() => onDisplay()}
            />
        )
        expect(appointmentEditView.toJSON()).toMatchSnapshot();
    })
})