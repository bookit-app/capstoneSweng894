import React from 'react'
import AccountSignUpForm from '../../../src/components/account/AccountSignUpForm'
import {ButtonCustom} from '../../../src/components/common/'
import renderer from 'react-test-renderer';
import { GenderV2 } from '../../../src/constant'

describe('Account Sign Form correctly renders', () => {
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

    test('Account Sign Form renders without crashing with forgot section not showing', () => {
        const accountSignForm = renderer.create(
            <AccountSignUpForm
                imageHolder={false}
                placeholder={require('../../../src/image/BookIt_Tall.png')}
                image={require('../../../src/image/BookIt_Tall.png')}
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
        ).toJSON()
        expect(accountSignForm).toBeTruthy();
    })

    test('Account Sign Form renders without crashing with forgot section showing', () => {
        const accountSignForm = renderer.create(
            <AccountSignUpForm
                imageHolder={false}
                placeholder={require('../../../src/image/BookIt_Tall.png')}
                image={require('../../../src/image/BookIt_Tall.png')}
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
                fgLogic={true}
                onOtherAccountOptionClick={() => onOtherAccount("L")}
                otherAccountTxt={'Test'}  
            />
        ).toJSON()
        expect(accountSignForm).toBeTruthy();
    })
})