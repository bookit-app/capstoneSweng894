import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import {AppointmentEditView} from '../../../src/components/appointment'
import React from 'react'
import {ButtonCustom} from '../../../src/components/common'
import renderer from 'react-test-renderer';
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
    const item = UpcomingAppointments[0]
    const street_ = 'Test'
    const city_ = 'Test'
    const state_ = 'Test'
    const zipCode_ = 'Test'
    const profile={}
    const preference={}
    const token='Test'


    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
        
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

        appointEditView = shallow(<AppointmentEditView {...props}/>)

    })

    test('appointment edit view without crashing', () => {
        // const appointEditView = renderer.create(<AppointmentEditView {...props}/>).toJSON()
        expect(appointEditView).toBeTruthy();
    })
})
