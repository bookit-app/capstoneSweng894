
import * as EmailValidator from 'email-validator'
import { stateList, Gender } from '../constant'

/**
 * Email - Validates email includes @ and .com
 * @param {*} email 
 */
function emailValidator(email){
   return (EmailValidator.validate(email) && email.length > 1)
}

/**
 * Password - Validates password is alphnumic with a lenght 4 to 10
 * @param {*} password 
 */
function passwordValidator(password){
    let reg = /^[a-zA-Z0-9_+-]{4,10}$/

    return (reg.test(password))
}

/**
 * Name - Validates name is letter with underscore & dash with 
 * a lenght of 3 to 15
 * @param {*} firstName 
 */
function nameValidator(firstName){
    let reg = /^[\w-!@#$%^&*]{3,15}$/

    return (reg.test(firstName))
}

/**
 * Telephone - Validates telephone number is in the following format
 * ddd-ddd-dddd all number with dash in-between
 */
function telephoneValidator(telephone){
    let reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/

    return (reg.test(telephone))
}

/**
 * Date - Validates date is in the following format
 * yyyy-mm-dd
 */
function dateValidator(dob){
    let reg = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/

    return (reg.test(dob))
}

/**
 * Gender - Validates gender is Male, Female, or other
 * @param {*} gender 
 */
function genderValidator(gender){
    return (Gender.findIndex(z => 
        { return (z.label.toLowerCase() === gender.toLowerCase())}) > -1)
}

/**
 * Is Provider - Validates if user is a provider
 */
function isProviderValidator(isProvide){
    return (isProvide.toLowerCase() === 'yes' ? true : isProvide.toLowerCase() === 'no' ? true : false)
}

/**
 * Address - Validates the address is greater then 1
 * @param {*} address 
 */
function streetValidator(street){
    return (street.length > 0)
}

/**
 * City - Validates the city is greater then 1
 * @param {*} city 
 */
function cityValidator(city){
    return (city.length >= 1)
}

/**
 * State - Validates the state is valid
 * @param {*} state 
 */
function stateValidator(state){
    return (stateList.findIndex(i => 
        i.value.toLowerCase() === state.toLowerCase()) > 0)
}

/**
 * Zip - Validates the zip is 5 digits long
 */
function zipValidator(zip){
    let reg = /^(?:\d{5})?$/

    return (reg.test(zip))
}

/**
 * Email verifier
 * @param {*} email 
 */
function verifyEmail(email){        
    this.setState({
        email: email
    })

    if(emailValidator(email)){
        this.setState({ emailError: ''})
    } else {
        this.setState({ emailError: 'Email is not valid. Please re-enter valid email'})
    }
}

/**
 * Password verifier
 * @param {*} password 
 */
function verifyPassword(password){
    this.setState({ 
        password: password 
    })

    if(passwordValidator(password)){
        this.setState({ passwordError: '' })
    } else {
        this.setState({ passwordError: 'Password is not valid. Please enter a valid password.' })
    }
}

/**
 * FirstName verifier
 * @param {*} firstName 
 */
function verifyFirstName(firstName){
    this.setState({
        firstName: firstName
    })

    if(nameValidator(firstName)){
        this.setState({ firstNameError: '' })
    } else {
        this.setState({ firstNameError: 'First name is not valid. Please re-enter a valid first name.' })
    }
}

/**
 * LastName verifier
 * @param {*} lastName 
 */
function verifyLastName(lastName){
    this.setState({
        lastName: lastName
    })

    if(nameValidator(lastName)){
        this.setState({ lastNameError: '' })
    } else {
        this.setState({ lastNameError: 'Last name is not valid. Please re-enter a valid last name.' })
    }
}

/**
 * Telephone verifier
 * @param {*} telephone 
 */
function verifyTelephone(telephone){
    this.setState({
        telephone: telephone
    })

    if(telephoneValidator(telephone)){
        this.setState({ telephoneError: '' })
    } else {
        this.setState({ telephoneError: 'Telephone is not valid. Please re-enter a valid telephone number.' })
    }
}

/**
 * dob verifier
 * @param {*} date 
 */
function verifyDate(date){
    this.setState({
        dob: date
    })

    if(dateValidator(date)){
        this.setState({ dobError: '' })
    } else {
        this.setState({ dobError: 'Date of birth is not valid. Please re-enter a valid date of birth.' })
    }
}

/**
 * Gender verifier
 * @param {*} gender 
 */
function verifyGender(gender){
    this.setState({
        gender: gender
    })

    if(genderValidator(gender)){
        this.setState({ genderError: '' })
    } else {
        this.setState({ genderError: 'Gender is not valid. Please re-enter a valid gender.' })
    }
}

function verifyIsProvider(isProvide){
    this.setState({
        isProvide: isProvide,
        isProvider: isProviderValidator(isProvide)
    })

    if(isProviderValidator(isProvide)){
        this.setState({ isProviderError : '' })
    } else {
        this.setState({ isProviderError : 'Is provider is not valid. Plase re-enter a valid response' })
    }
}

/**
 * Street verifier
 * @param {*} street 
 */
function verifyStreet(street){
    this.setState({
        street: street
    })

    if(streetValidator(street)){
        this.setState({ streetError: '' })
    } else {
        this.setState({ streetError: 'Street is not valid. Please re-enter a valid street.' })
    }
}

/**
 * State verifier
 * @param {*} state_ 
 */
function verifyState(state_){
    this.setState({
        state_: state_
    })

    if(stateValidator(state_)){
        this.setState({ state_Error: ''})
    } else {
        this.setState({ state_Error: 'State is not valid. Please re-enter a valid states 2 character'})
    }
}

/**
 * City verifier
 * @param {*} city 
 */
function verifyCity(city){
    this.setState({
        city: city
    })

    if(cityValidator(city)){
        this.setState({ cityError: '' })
    } else {
        this.setState({ cityError: 'City is not valid. Please re-enter a valid city.' })
    }
}

/**
 * Zip verifier
 * @param {*} zip 
 */
function verifyZip(zip){
    this.setState({
        zip: zip
    })

    if(zipValidator(zip)){
        this.setState({ zipError: '' })
    } else {
        this.setState({ zipError: 'Zip Code is not valid. Please re-enter a valid zip code.'})
    }
}

/**
 * City, State (i.e. PA) verifier
 * @param {*} cityState 
 */
function verifyCityState(cityState){
    this.setState({
        cityState: cityState
    })

    try{       
        var city = cityState.split(',')[0].trim()
        var state_ = cityState.split(',')[1].trim()
        
        var isValidCity = (city ? cityValidator(city) : false)
        var isValidState = (state_ ? stateValidator(state_) : false)
        var isCommaPresent = (cityState.indexOf(',') > -1)    

        if(isValidCity && isValidState && isCommaPresent){
            this.setState({
                errorCityState: ''
            })
        } else {
            this.setState({
                errorCityState: "City or/and State is not valid. Pleaes re-enter a valid city and state."
            })

        }
    } catch(e) {
        
        this.setState({
            errorCityState: "City or/and State is not valid. Pleaes re-enter a valid city and state."
        })
    }
}

export default {
    verifyEmail,
    verifyPassword,
    verifyFirstName,
    verifyLastName,
    verifyTelephone,
    verifyDate,
    verifyGender,
    verifyIsProvider,
    verifyStreet,
    verifyCity,
    verifyState,
    verifyZip,
    verifyCityState
}