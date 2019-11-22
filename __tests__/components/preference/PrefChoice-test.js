import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {PrefChoice} from '../../../src/components/preference'

describe('Pref Choice render correctly', () => {
    test('Pref Choice render correctly with information populated pick Hair Dresser', () => {        
        var prefChoice = shallow(
            <PrefChoice
                sectionHeader={"Header"}
                opt1={"Hair Dresser"}
                opt2={"Barber"}
                token={""}
                pick={true}
                onClassificationSelect={() => {}}
            />
        )
        expect(prefChoice).toBeTruthy()
    })
    
    test('Pref Choice render correctly with information populated pick Barber', () => {        
        var prefChoice = shallow(
            <PrefChoice
                sectionHeader={"Header"}
                opt1={"Hair Dresser"}
                opt2={"Barber"}
                token={""}
                pick={false}
                onClassificationSelect={() => {}}
            />
        )
        expect(prefChoice).toBeTruthy()
    })
})