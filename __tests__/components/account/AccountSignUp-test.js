import React from 'react'
import AccountSignUp from '../../../src/components/account/AccountSignUp'
import renderer from 'react-test-renderer';

describe('Account Sign Up correctly renders', () => {
    test('Account Sign Up renders without crashing', () => {
        const accountSignUp = renderer.create(
            <AccountSignUp
                firstNameValue={'Test'}
                firstNameChge={() => {}}
                errorFirstName={'Test'}
                lastNameValue={'Test'}
                lastNameChge={() => {}}
                errorLastName={'Test'}
                emailValue={'Test'}
                emailOnChge={() => {}}
                errorEmail={'Test'}
                passwordValue={'Test'}
                passwordOnChge={() => {}}
                errorPassword={'Test'}
                telephoneValue={'Test'}
                telephoneOnChge={() => {}}
                errorTelephone={'Test'} 
                genderOnChge={() => {}}
                genderItem={[]}
                genderValue={'Test'}
                errorGender={'Test'}
                dobValue={'Test'}
                dobChge={() => {}}
                errordob={'Test'}
                streetValue={'Test'}
                streetOnChge={() => {}}
                errorStreet={'Test'}
                cityValue={'Test'}
                cityOnChge={() => {}}
                errorCity={'Test'}
                stateValue={'Test'}
                stateOnChge={() => {}}
                errorState={'Test'}
                zip={'Test'}
                onZipChge={() => {}}
                errorZip={'Test'} 
            /> 
        ).toJSON()
        expect(accountSignUp).toBeTruthy()
    })
})