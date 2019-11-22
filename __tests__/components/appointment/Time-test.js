import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {Time} from '../../../src/components/appointment'

describe('Time correctly renders', () => {
    test('Time render without crashing', () => {
        var time = shallow(
            <Time
                placeHour={"01"}
                defaultHour={"01"}
                optionsHour={["01", "02", "03"]}
                onHourChange={() => {}}
                hour={"01"}
                placeMinute={"01"}
                defaultMinut={"01"}
                optionsMinute={["01", "02", "03"]}
                onMinuteChange={() => {}}
                minute={"01"}
            />
        )

        expect(time).toBeTruthy()
    })
})
