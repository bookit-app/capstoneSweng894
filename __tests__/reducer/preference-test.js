import {preference} from '../../src/actions'
import preference_ from '../../src/reducer/preference'

describe('preference reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            pref: true
        }

        expect(preference_(undefined, {})).toEqual(initialState)
    })

    test('should set pref with false', () => {
        expect(
            preference_([], preference.settingPref(false))
        )
        .toEqual(
            {
               pref: false 
            }
        )
    })

    test('should set pref with true', () => {
        expect(
            preference_([], preference.settingPref(true))
        )
        .toEqual(
            {
               pref: true 
            }
        )
    })

    test('should set preference with empty object', () => {
        expect(
            preference_([], preference.setPreference({}))
        )
        .toEqual(
            {
                preference: {},
                loading: false
            }
        )
    })

    test('should set preference with non-empty object', () => {
        expect(
            preference_([], preference.setPreference({a:'a', b:'b'}))
        )
        .toEqual(
            {
                preference: {a:'a', b:'b'},
                loading: false
            }
        )
    })

    test('should get preference pending false', () => {
        expect(
            preference_([],preference.GetPreference(false))
        ).toEqual(
            {
                loading: false
            }
        )
    })

    test('should get preference pending true', () => {
        expect(
            preference_([],preference.GetPreference(true))
        ).toEqual(
            {
                loading: true
            }
        )
    })

    test('should get preference fullfuilled', () => {
        expect(
            preference_([],preference.GetPreferenceFullFilled([{a: '1'}]))
        ).toEqual(
            {
                preference: [{a: '1'}],
                loading: false,
                errorMessage: '',
            }
        )
    })

    test('should get preference reject', () => {
        expect(
            preference_([],preference.GetPreferenceReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                loading: false
            }
        )
    })

    test('should set style preference with empty object', () => {
        expect(
            preference_([], preference.setStyles({}))
        )
        .toEqual(
            {
                styles: {}
            }
        )
    })

    test('should set style preference with non-empty object', () => {
        expect(
            preference_([], preference.setStyles({a:'a', b:'b'}))
        )
        .toEqual(
            {
                styles: {a:'a', b:'b'}
            }
        )
    })

    test('should get style preference pending false', () => {
        expect(
            preference_([],preference.GetStylePreference(false))
        ).toEqual(
            {
                styleLoading: false
            }
        )
    })

    test('should get style preference pending true', () => {
        expect(
            preference_([],preference.GetStylePreference(true))
        ).toEqual(
            {
                styleLoading: true
            }
        )
    })

    test('should get style preference fullfuilled', () => {
        expect(
            preference_([],preference.GetStylePreferenceFullFilled([{a: '1'}]))
        ).toEqual(
            {
                styles: [{a: '1'}],
                styleLoading: false,
                errorMessage: '',
            }
        )
    })

    test('should get style preference reject', () => {
        expect(
            preference_([],preference.GetStylePreferenceReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                styleLoading: false
            }
        )
    })
})