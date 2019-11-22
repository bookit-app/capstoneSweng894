import React from 'react'
import * as preference_ from '../../src/actions/preference-action'
import { actions } from '../../src/actions/type'

describe('set preference with empty object', () => {
    it('should create an action to set preference empty object', () => {
        const preference = {}
        const expectedAction = {
            type: actions.SET_PREFERENCE,
            preference
        }
        expect(preference_.setPreference(preference)).toEqual(expectedAction)
    })
})

describe('set preference', () => {
    it('should create an action to set preference', () => {
        const preference = [{a: '1', b: '2', c: '3'}]
        const expectedAction = {
            type: actions.SET_PREFERENCE,
            preference
        }
        expect(preference_.setPreference(preference)).toEqual(expectedAction)
    })
})

describe('setting Pref to false', () => {
    it('should create an action to setting pref to false', () => {
        const pref = false
        const expectedAction = {
            type: actions.SET_PREF,
            pref
        }
        expect(preference_.settingPref(pref)).toEqual(expectedAction)
    })
})

describe('setting Pref to true', () => {
    it('should create an action to setting pref to true', () => {
        const pref = true
        const expectedAction = {
            type: actions.SET_PREF,
            pref
        }
        expect(preference_.settingPref(pref)).toEqual(expectedAction)
    })
})

describe('set styles', () => {
    it('should create an action to set styles', () => {
        const styles = {a: '1', b: '2'}
        const expectedAction = {
            type: actions.SET_STYLES,
            payload: styles
        }
        expect(preference_.setStyles(styles)).toEqual(expectedAction)
    })
})

describe('get style preference to false', () => {
    it('should create an action to set style preference to false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_STYLES_PENDING,
            styleLoading: bool
        }
        expect(preference_.GetStylePreference(bool)).toEqual(expectedAction)
    })
})

describe('get style preference to true', () => {
    it('should create an action to set style preference to true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_STYLES_PENDING,
            styleLoading: bool
        }
        expect(preference_.GetStylePreference(bool)).toEqual(expectedAction)
    })
})

describe('get style preference fullfilled empty list', () => {
    it('should create an action to get style preference fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_STYLES_FULFILLED,
            payload: data,
            styleLoading: false
        }

        expect(preference_.GetStylePreferenceFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get style preference fullfilled', () => {
    it('should create an action to get style preference fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_STYLES_FULFILLED,
            payload: data,
            styleLoading: false
        }

        expect(preference_.GetStylePreferenceFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get style preference reject', () => {
    it('should create an action to get style preference reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_STYLES_REJECTED,
            payload: error,
            styleLoading: false
        }
        expect(preference_.GetStylePreferenceReject(error)).toEqual(expectedAction)
    })
})

describe('get preference to false', () => {
    it('should create an action to set preference to false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_PREFERENCE_PENDING,
            payload: bool
        }
        expect(preference_.GetPreference(bool)).toEqual(expectedAction)
    })
})

describe('get preference to true', () => {
    it('should create an action to set preference to true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_PREFERENCE_PENDING,
            payload: bool
        }
        expect(preference_.GetPreference(bool)).toEqual(expectedAction)
    })
})

describe('get preference fullfilled empty list', () => {
    it('should create an action to get preference fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_PREFERENCE_FULFILLED,
            payload: data,
            loading: false
        }

        expect(preference_.GetPreferenceFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get preference fullfilled', () => {
    it('should create an action to get preference fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_PREFERENCE_FULFILLED,
            payload: data,
            loading: false
        }

        expect(preference_.GetPreferenceFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get preference reject', () => {
    it('should create an action to get preference reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_PREFERENCE_REJECTED,
            payload: error,
            loading: false
        }
        expect(preference_.GetPreferenceReject(error)).toEqual(expectedAction)
    })
})

