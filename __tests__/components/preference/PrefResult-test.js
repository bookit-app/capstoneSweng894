import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {PrefResult} from '../../../src/components/preference'

describe('Preference Result renders correctly', () => {
    test('Preference Result renders correctly without crashing with errors not populated', () => {
        var prefResult = shallow(
            <PrefResult
                sectionHeader={"Test"}
                cityState={"Test"}
                onCityStateChge={() => {}}
                errorCityState={""}
                onStyleTypeChge={() => {}}
                errorStyleType={""}
                onStyleTypeSelected={""}
                onStyleTypeItems={["Hair Dresser", "Barber"]}
                onDayChge={() => {}}
                errorDay={""}
                onDaySelected={"Test"}
                onDayItems={["01","02","03"]} 
                onTimeChge={() => {}}
                errorTime={""}
                onTimeSelected={"Test"}
                onTimeItems={["01","02","03"]} 
                token={""}
                formError={""}
            />
        )
        expect(prefResult).toBeTruthy()
    })
    
    test('Preference Result renders correctly without crashing with errors populated', () => {
        var prefResult = shallow(
            <PrefResult
                sectionHeader={"Test"}
                cityState={"Test"}
                onCityStateChge={() => {}}
                errorCityState={"error"}
                onStyleTypeChge={() => {}}
                errorStyleType={"error"}
                onStyleTypeSelected={"error"}
                onStyleTypeItems={["Hair Dresser", "Barber"]}
                onDayChge={() => {}}
                errorDay={"error"}
                onDaySelected={"Test"}
                onDayItems={["01","02","03"]} 
                onTimeChge={() => {}}
                errorTime={"error"}
                onTimeSelected={"Test"}
                onTimeItems={["01","02","03"]} 
                token={"error"}
                formError={"error"}
            />
        )
        expect(prefResult).toBeTruthy()
    })
})