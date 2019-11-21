import {AppointmentEditView} from '../src/components/appointment'
import React from 'react'
import {ButtonCustom} from '../src/components/common'
import renderer from 'react-test-renderer';
import {UpcomingAppointments} from '../src/constant'

describe('appointment edit view correctly render', () => {


    test('appointment edit view without crashing', () => {
        let props;

        const replaceItem = () => {}
        const onDisplay = () => {}
        const onEditClick = () => {
            return (
                <ButtonCustom>
                    {'Edit'}
                </ButtonCustom>
            )
        }
        const item = UpcomingAppointments[0]
        const street_ = 'Test'
        const city_ = 'Test'
        const state_ = 'Test'
        const zipCode_ = 'Test'
        const profile={}
        const preference={}
        const token='Test'
        
        props = {
            onEditClick:onEditClick(),
            item:item,
            address:street_,
            city:city_,
            state:state_,
            zipCode:zipCode_,
            profile:profile,
            preference:preference,
            token:token,
            replaceItem:replaceItem(),
            onDisplay:onDisplay(),
        }

        const appointEditView = renderer.create(<AppointmentEditView {...props}/>).toJSON()
        expect(appointEditView).toBeTruthy();
    })
})
