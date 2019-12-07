import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {ImageButton} from '../../../src/components/common'

describe('Image Button render correctly', () => {
    let props;

    test('Image Button render without crashing', () => {
        props ={
            onPress: () => {},
            imageSource: require('../../../src/image/BookIt_Tall.png')
        }

        var imageButton = shallow(<ImageButton {...props} />)
        expect(imageButton).toBeTruthy()
    })
})