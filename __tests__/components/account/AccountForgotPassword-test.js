import React from 'react'
import { AccountForgotPassword } from '../../../src/components/account'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer'

describe('Account ForgotPassword correctly', () => {
    test('Account ForgotPassword renders without crashing', () => {
        const onPasswordResetClick = () => {
            return (
                <ButtonCustom>
                    {'Reset Password'}
                </ButtonCustom>
            )
        }

        const forgotPassword = create(
            <AccountForgotPassword
                header={'Test'}
                email={'Test'}
                emailOnChge={() => {}}
                errorEmail={'Test'}
                onPasswordReset={() => onPasswordResetClick()}
            />
        );
        expect(forgotPassword.toJSON()).toBeTruthy();
    })
})