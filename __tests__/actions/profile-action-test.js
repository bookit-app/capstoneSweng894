import React from 'react'
import * as profile_ from '../../src/actions/profile-action'
import { actions } from '../../src/actions/type'


describe('set profile with empty actions', () => {
    it('should create an action to set profile list with empty list', () => {
        const profile = []
        const expectedAction = {
            type: actions.SET_PROFILE,
            profile
        }

        expect(profile_.setProfile(profile)).toEqual(expectedAction)
    })
})

describe('set profile with data actions', () => {
    it('should create an action to set profile list with list value', () => {
        const profile = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.SET_PROFILE,
            profile
        }

        expect(profile_.setProfile(profile)).toEqual(expectedAction)
    })
})

describe('get profile with false pending', () => {
    it('should create an action to get profile pending false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_PROFILE_PENDING,
            payload: bool
        }

        expect(profile_.GetProfile(bool)).toEqual(expectedAction)
    })
})

describe('get profile with true pending', () => {
    it('should create an action to get profile pending true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_PROFILE_PENDING,
            payload: bool
        }

        expect(profile_.GetProfile(bool)).toEqual(expectedAction)
    })
})

describe('get profile fullfilled empty list', () => {
    it('should create an action to get profile fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_PROFILE_FULFILLED,
            payload: data,
            loading: false
        }

        expect(profile_.GetProfileFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get profile fullfilled', () => {
    it('should create an action to get profile fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_PROFILE_FULFILLED,
            payload: data,
            loading: false
        }

        expect(profile_.GetProfileFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get profile reject', () => {
    it('should create an action to get profile reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_PROFILE_REJECTED,
            payload: error,
            loading: false
        }
        expect(profile_.GetProfileReject(error)).toEqual(expectedAction)
    })
})