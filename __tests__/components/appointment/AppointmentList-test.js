
import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {AppointmentList} from '../../../src/components/appointment'
import JestMock from 'jest-mock';
import { exportAllDeclaration } from '@babel/types';

describe('appointment list correctly renders', () => {
    let appointmentList;
    let props;

    const renderItem = (item) => {}
    const listHeader = () => {}
    const listSeparater = () => {}
    const listEmpty = () => {}

    props = {
        list: [],
        state: {},
        renderItem: renderItem(),
        listHeader: listHeader(),
        listSeparater: listSeparater(),
        listEmpty: listEmpty()
    }

    test('appointment list renders without crashing', () => {
        appointmentList = shallow(<AppointmentList {...props}/>)

        expect(appointmentList).toBeTruthy()
    })
})