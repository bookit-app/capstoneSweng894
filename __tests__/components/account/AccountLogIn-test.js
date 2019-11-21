import React from 'react'
import AccountLogIn from '../../../src/components/account/AccountLogIn'
import {create} from 'react-test-renderer';

describe('Account Login correctly renders', () => {
    test('Account Login renders without crashing', () => {
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
        expect(accountLogin.toJSON()).toBeTruthy()
    })
})
