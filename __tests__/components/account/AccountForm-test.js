import React from 'react'
import AccountForm from '../../../src/components/account/AccountForm'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer';

describe('Account Form correctly renderer', () => {
    test('Account Form renders without creashing with forget true', () => {
        const onOtherAccount = (type) => {
            return (
                <ButtonCustom>
                    {'Other Account'}
                </ButtonCustom>
            )
        }

        const onLogInButton = (type) => {
            return (
                <ButtonCustom>
                    {'Log-In'}
                </ButtonCustom>
            )
        }

        const accountForm = create(
            <AccountForm
                imageHolder={false}
                placeholder={require('../../../src/image/BookIt_Tall.png')}
                image={require('../../../src/image/BookIt_Tall.png')}
                email={'Test'}
                onEmailChge={() => {}}
                errorEmail={'Test'}
                password={'Test'}
                onPasswordChge={() => {}}
                errorPassword={'Test'}
                error={'Test'}
                onLogInButton={() => onLogInButton('L')}
                fgLogic={true}
                onForgotClick={() => {}}
                forgotTxt={'Forgot Password?'}
                onOtherAccountOptionClick={() => onOtherAccount("S")}
                otherAccountTxt={'Create an Account'}
            />
        )
        expect (accountForm.toJSON()).toBeTruthy();
    })
    test('Account Form renders without creashing with forget false', () => {
        const onOtherAccount = (type) => {
            return (
                <ButtonCustom>
                    {'Other Account'}
                </ButtonCustom>
            )
        }

        const onLogInButton = (type) => {
            return (
                <ButtonCustom>
                    {'Log-In'}
                </ButtonCustom>
            )
        }

        const accountForm = create(
            <AccountForm
                imageHolder={true}
                placeholder={require('../../../src/image/BookIt_Tall.png')}
                image={require('../../../src/image/BookIt_Tall.png')}
                email={'Test'}
                onEmailChge={() => {}}
                errorEmail={'Test'}
                password={'Test'}
                onPasswordChge={() => {}}
                errorPassword={'Test'}
                error={'Test'}
                onLogInButton={() => onLogInButton('L')}
                fgLogic={false}
                onForgotClick={() => {}}
                forgotTxt={'Forgot Password?'}
                onOtherAccountOptionClick={() => onOtherAccount("S")}
                otherAccountTxt={'Create an Account'}
            />
        )
        expect (accountForm.toJSON()).toBeTruthy();
    })
})