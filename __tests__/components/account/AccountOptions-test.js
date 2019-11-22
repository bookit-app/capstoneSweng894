import React from 'react'
import AccountOptions from '../../../src/components/account/AccountOptions'
import renderer from 'react-test-renderer';

describe('Account Options correctly renders', () => {
    test('Account Options renders without crashing', () => {
        const accountOption = renderer.create(
            <AccountOptions
                onPress={() => {}}
                buttonStyle={{}}
                textStyle={{}}
                viewStyle={{}}
                children={'Test'}
            />  
        ).toJSON()
        expect(accountOption).toBeTruthy()
    })
})