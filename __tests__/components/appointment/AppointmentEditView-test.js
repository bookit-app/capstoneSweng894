
import '../../../src/setupTests'
import {AppointmentEditView} from '../../../src/components/appointment'
import React from 'react'
import {ButtonCustom} from '../../../src/components/common'
import {UpcomingAppointments} from '../../../src/constant'
import { shallow } from "enzyme";

describe('appointment edit view correctly render', () => {
    let appointEditView
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

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
        
        props = {
            onEditClick:onEditClick(),
            item: UpcomingAppointments[0],
            address:'Test',
            city:'Test',
            state:'Test',
            zipCode:'Test',
            profile:{},
            preference:{},
            token:'Test',
            replaceItem:replaceItem(),
            onDisplay:onDisplay(),
        }

        appointEditView = shallow(<AppointmentEditView {...props}/>)
    })

    test('appointment edit view without crashing', () => {
        expect(appointEditView).toBeTruthy();
    })
})
