import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {SkipNav} from '../../../src/components/preference'

describe('SkipNav renders correctly', () => {
    test('SkipNav render without crashing', () => {
        var skipNav = shallow(
            <SkipNav
                onPress={() => {}}
            />
        )
        expect(skipNav).toBeTruthy()
    })
})