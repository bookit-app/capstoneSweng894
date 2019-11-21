import React from 'react'
import AccountOptions from '../../../src/components/account/AccountOptions'
import {create} from 'react-test-renderer';

describe('Account Image correctly renders', () => {
    test('Matches the snapshot', () => {
        const accountOption = create(
            <AccountOptions
                onPress={() => {}}
                buttonStyle={{}}
                textStyle={{}}
                viewStyle={{}}
                children={'Test'}
            />  
        )
        expect(accountOption.toJSON()).toMatchSnapshot();
    })
})