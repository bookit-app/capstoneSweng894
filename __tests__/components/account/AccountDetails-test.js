import React from 'react'
import AccountDetails from '../../../src/components/account/AccountDetails'
import {ButtonCustom} from '../../../src/components/common/'
import {create} from 'react-test-renderer';


describe("AccountDetail correctly", () => {
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

    test("AccountDetail renders without crashing with all false for deletion, creation, and preference", () => {
        const detail = create(
            <AccountDetails
                Creation={false}
                Deletion={false}
                Preference={false}
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
        expect (detail.toJSON()).toBeTruthy();
    })

    test("AccountDetail renders without crashing with all true for deletion, creation, and preference", () => {
        const detail = create(
            <AccountDetails
                Creation={true}
                Deletion={true}
                Preference={true}
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
        expect (detail.toJSON()).toBeTruthy();
    })
    
    test("AccountDetail renders without crashing with creation true", () => {
        const detail = create(
            <AccountDetails
                Creation={true}
                Deletion={false}
                Preference={false}
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
        expect (detail.toJSON()).toBeTruthy();
    })
    
    test("AccountDetail renders without crashing with deletion true", () => {
        const detail = create(
            <AccountDetails
                Creation={false}
                Deletion={true}
                Preference={false}
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
        expect (detail.toJSON()).toBeTruthy();
    })
    
    test("AccountDetail renders without crashing with preference true", () => {
        const detail = create(
            <AccountDetails
                Creation={false}
                Deletion={false}
                Preference={true}
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
        expect (detail.toJSON()).toBeTruthy();
    })
  });