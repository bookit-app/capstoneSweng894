import React from 'react'
import AccountDetails from '../../../src/components/account/AccountDetails'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer';


describe("AccountDetail correctly", () => {
    test("Matches the snapshot", () => {
        const onRenderProfileButton = () => {
            return (
                <ButtonCustom>
                    {'Submit'}
                </ButtonCustom>
            )
        }

        const onRenderProfileDelete = () => {
            return (
                <ButtonCustom>
                    {'Delete Profile'}
                </ButtonCustom>
            )
        }

        const onRenderPreference = () => {
            return (
                <ButtonCustom>
                    {'Preference'}
                </ButtonCustom>
            )
        }

        const detail = create(
            <AccountDetails
                Creation={false}
                Deletion={"Test"}
                Preference={"Test"}
                firstName={"Test"}
                onFirstNameChge={() => {}}
                errorFirstName={"Test"}
                lastName={"Test"}
                onLastNameChge={() => {}}
                errorLastName={"Test"}
                email={"Test"}
                onEmailChge={() => {}}
                errorEmail={"Test"}
                password={"Test"}
                onPasswordChge={() => {}}
                errorPassword={"Test"}
                telephone={"Test"}
                onTelephoneChge={() => {}}
                errorTelephone={"Test"}
                dob={"Test"}
                ondobChge={() => {}}
                errorDob={"Test"}
                gender={"Test"}
                onGenderChge={() => {}}
                errorGender={"Test"}
                address={"Test"}
                onAddressChge={() => {}}
                errorAddress={"Test"}
                city={"Test"}
                onCityChge={() => {}}
                errorCity={"Test"}
                state={"Test"}
                onStateChge={() => {}}
                errorState={"Test"}
                zip={"Test"}
                onZipChge={() => {}}
                errorZip={"Test"}
                isProvider={"Test"}
                onProviderChge={() => {}}
                errorIsProvider={false}
                error={"Test"}
                onSubmit={() => onRenderProfileButton()}
                onDelete={() => onRenderProfileDelete()}
                onPref={() => onRenderPreference()}
            />
        );
        expect (detail.toJSON()).toMatchSnapshot();
    })
  });