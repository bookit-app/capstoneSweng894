import va from '../../src/validation/index'

describe('Validation functions unit test', () =>{
    test('email', () => {
        expect(va.emailValidator('')).toEqual(false)
        expect(va.emailValidator('ejej.a.com')).toEqual(false)
        expect(va.emailValidator('a@a.com')).toEqual(true)
    })

    test('password', () => {
        expect(va.passwordValidator('')).toBe(false)
        expect(va.passwordValidator('a')).toBe(false)
        expect(va.passwordValidator('Password')).toBe(true)
    })

    test('name', () => {
        expect(va.nameValidator('')).toBe(false)
        expect(va.nameValidator('a')).toBe(false)
        expect(va.nameValidator('abcde')).toBe(true)
    })

    test('telephone', () => {
        expect(va.telephoneValidator('')).toBe(false)
        expect(va.telephoneValidator('1231231234')).toBe(false)
        expect(va.telephoneValidator('123-123-1234')).toBe(true)
    })

    test('date', () => {
        expect(va.dateValidator('')).toBe(false)
        expect(va.dateValidator('20190101')).toBe(false)
        expect(va.dateValidator('2019-01-01')).toBe(true)
    })

    test('gender', () => {
        expect(va.genderValidator('')).toBe(false)
        expect(va.genderValidator('A')).toBe(false)
        expect(va.genderValidator('Male')).toBe(true)
        expect(va.genderValidator('Female')).toBe(true)
        expect(va.genderValidator('male')).toBe(true)
        expect(va.genderValidator('female')).toBe(true)
    })

    test('isProvider', () => {
        expect(va.isProviderValidator('')).toBe(false)
        expect(va.isProviderValidator('a')).toBe(false)
        expect(va.isProviderValidator('Yes')).toBe(true)
        expect(va.isProviderValidator('No')).toBe(true)
        expect(va.isProviderValidator('yes')).toBe(true)
        expect(va.isProviderValidator('no')).toBe(true)
    })

    test('Street', () => {
        expect(va.streetValidator('')).toBe(false)
        expect(va.streetValidator('a')).toBe(true)
    })

    test('city', () => { 
        expect(va.cityValidator('')).toBe(false)
        expect(va.cityValidator('a')).toBe(true)
    })

    test('state', () => {
        expect(va.stateValidator('')).toBe(false)
        expect(va.stateValidator('A')).toBe(false)
        expect(va.stateValidator('DE')).toBe(true)
    })

    test('zip code', () => {
        // expect(va.zipValidator('')).toBe(false)
        expect(va.zipValidator('1987')).toBe(false)
        expect(va.zipValidator('19871')).toBe(true)
        expect(va.zipValidator(9)).toBe(false)
        expect(va.zipValidator(19870)).toBe(true)
    })

    // test('verify Email', () => {
    //     expect(va.verifyEmail('a@a.com')).toEqual({email: 'a@a.com', emailError: ''})
    // })
})