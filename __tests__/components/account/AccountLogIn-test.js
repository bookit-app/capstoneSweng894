import React from 'react'
import AccountLogIn from '../../../src/components/account/AccountLogIn'
import {create} from 'react-test-renderer';

describe('Account Image correctly renders', () => {
    test('Matches the snapshot', () => {
        const accountLogin = create(
            <AccountLogIn
                emailValue={"Test"}
                emailOnChge={() => {}}
                errorEmail={"Test"}
                passwordValue={"Test"}
                passwordOnChge={() => {}}
                errorPassword={"Test"}
            />   
        )
        expect(accountLogin.toJSON()).toMatchSnapshot();
    })
})
