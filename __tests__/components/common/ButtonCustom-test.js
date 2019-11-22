import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {ButtonCustom} from '../../../src/components/common'

describe('ButtonCustom correctly renders', () =>{
    let props;
    const styles = {
        textStyle: {
          textAlign: 'center',
          alignSelf: 'center',
          color: '#007aff',
          fontSize: 16,
          fontWeight: '600',
          paddingTop: 10,
          paddingBottom: 10
        },
        buttonStyle: {
          flex: 1,
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#007aff',
          marginLeft: 5,
          marginRight: 5
          }
      };
    props = {
        onPress: () => {},
        children: 'Test',
        buttonStyle: styles.buttonStyle, 
        textStyle: styles.textStyle
    }

    it('ButtonCustom renders without crashing', () => {
        var button = shallow(<ButtonCustom {...props} />)
        expect(button).toBeTruthy()
    })
})