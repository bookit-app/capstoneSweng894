import {profile} from '../../src/actions'
import profile_ from '../../src/reducer/profile'

describe('profile reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            profile: {}
        }

        expect(profile_(undefined, {})).toEqual(initialState)
    })

    test('should set profile with empty object', () => {
        expect(
            profile_([], profile.setProfile({}))
        )
        .toEqual(
            {
                profile: {},
                loading: false
            }
        )
    })

    test('should set profile with non-empty object', () => {
        expect(
            profile_([], profile.setProfile({a:'a', b:'b'}))
        )
        .toEqual(
            {
                profile: {a:'a', b:'b'},
                loading: false
            }
        )
    })

    test('should get profile pending false', () => {
        expect(
            profile_([],profile.GetProfile(false))
        ).toEqual(
            {
                loading: false
            }
        )
    })

    test('should get profile pending true', () => {
        expect(
            profile_([],profile.GetProfile(true))
        ).toEqual(
            {
                loading: true
            }
        )
    })

    test('should get profile fullfuilled', () => {
        expect(
            profile_([],profile.GetProfileFullFilled([{a: '1'}]))
        ).toEqual(
            {
                profile: [{a: '1'}],
                loading: false,
                errorMessage: '',
            }
        )
    })

    test('should get profile reject', () => {
        expect(
            profile_([],profile.GetProfileReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                loading: false
            }
        )
    })
})