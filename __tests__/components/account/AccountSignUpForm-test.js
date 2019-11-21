import React from 'react'
import AccountSignUpForm from '../../../src/components/account/AccountSignUpForm'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer';
import { GenderV2 } from '../../../src/constant'

describe('Account Image correctly renders', () => {
    test('Matches the snapshot', () => {
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

        const accountSignForm = create(
            <AccountSignUpForm
                imageHolder={false}
                placeholder={require('../../../src/image/Placeholder150.png')}
                image={require('../../../src/image/Placeholder150.png')}
                firstName = {'Test'}
                firstNameChge={() => {}}
                firstNameError = {'Test'}
                lastName = {'Test'}
                lastNameChge={() => {}}
                lastNameError =  {'Test'}
                email= {'Test'}
                onEmailChge={() => {}}
                emailError= {'Test'}
                password= {'Test'}
                onPasswordChge={() => {}}
                passwordError= {'Test'}
                telephone =  {'Test'}
                telephoneOnChge={() => {}}
                telephoneError ={'Test'}
                gender = {'Test'}
                genderItem={GenderV2.map(a => a.Name)}
                genderOnChge={() => {}}
                genderError =  {'Test'}
                dob={'Test'}
                dobOnChge={() => {}}
                dobError =  {'Test'}
                street =  {'Test'}
                streetOnChge={() => {}}
                streetError =  {'Test'}
                city =  {'Test'}
                cityOnChge={() => {}}
                cityError =  {'Test'}
                stateValue =  {'Test'}
                stateOnChge={() => {}}
                stateError =  {'Test'}
                zip = {'Test'}
                onZipChge={() => {}}
                zipError = {'Test'}
                error= {'Test'}
                onLogInButton={() => onLogInButton('S')}
                fgLogic={false}
                onOtherAccountOptionClick={() => onOtherAccount("L")}
                otherAccountTxt={'Test'}  
            />
        )
        expect(accountSignForm.toJSON()).toMatchSnapshot();
    })
})