import '../../../src/setupTests'
import React from 'react'
import { shallow } from 'enzyme';
import {create} from 'react-test-renderer'
import {InputCustom} from '../../../src/components/common'

describe('InputCustom renders correctly', () => {
    const styles = {
        inputStyle: {
          color: '#000',
           backgroundColor:  '#ffffff',
           paddingRight: 5,
           paddingLeft: 5,
           paddingBottom: 20,
           color: '#000',
           backgroundColor:  '#fff',
           fontSize: 18,
           lineHeight: 3,
           flex: 2,
           width: 293,
           height: 38,
           alignItems: 'flex-start',
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
        },
        inputStyleOs: {
          color: '#000',
          backgroundColor:  '#ffffff',
          paddingRight: 5,
          paddingLeft: 5,
          paddingBottom: 20,
          fontSize: 18,
          lineHeight: 3,
          flex: 2,
           color: '#000',
           backgroundColor:  '#fff',
           width: 293,
           height: 38,
           alignItems: 'flex-start',
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 2 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
        },
        labelStyle: {
          fontSize: 16,
          flex: 1,
          paddingBottom: 10
        },
        containerStyle: {
          display: 'flex',
          flexDirection: 'column',
          flexBasis: 90,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          margin: 10,
          backgroundColor:  '#ffffff',
          alignItems: 'flex-start'
        },
        error: {
          marginTop: 10,
          position: "absolute",
          bottom: 0,
          color: "red",
          fontSize: 10,
          textAlign: 'center',
          backgroundColor:  '#ffffff'
        }
      };

    test('InputCustom render without crashing secure true', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: true,
            error: 'error',
            inputStyle: styles.inputStyle,
            labelStyle: styles.labelStyle,
            containerStyle: styles.containerStyle,
            errorStyle: styles.error,
            textAlign: 'center'
        }

        var input = shallow(<InputCustom {...props} />)
        expect(input).toBeTruthy()
    })
    
    test('InputCustom render without crashing secure false', () => {
        let props = {
            label: 'Test',
            value: 'test',
            onChangeText: () => {},
            placeholder: 'test',
            secureTextEntry: false,
            error: 'error',
            inputStyle: styles.inputStyle,
            labelStyle: styles.labelStyle,
            containerStyle: styles.containerStyle,
            errorStyle: styles.error,
            textAlign: 'center'
        }

        var input = shallow(<InputCustom {...props} />)
        expect(input).toBeTruthy()
    })
})
