import React from 'react'
import * as provider_ from '../../src/actions/provider-action'
import { actions } from '../../src/actions/type'

describe('set provider search with empty list', () => {
    it('should create an action to set search provider as empty', () => {
        const result = []
        const expectedAction = {
            type: actions.SET_PROVIDER_SEARCH,
            result
        }
        expect(provider_.SetProviderSearch(result)).toEqual(expectedAction)
    })
})

describe('set provider search with list', () => {
    it('should create an action to set search provider list', () => {
        const result = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.SET_PROVIDER_SEARCH,
            result
        }
        expect(provider_.SetProviderSearch(result)).toEqual(expectedAction)
    })
})

describe('already fetch is false', () => {
    it('should create an action to set to false if already fetch', () => {
        const bool = false
        const expectedAction = {
            type: actions.ALREADY_FETCH_PROVIDER,
            payload: bool
        }
        expect(provider_.alreadyFetch(bool)).toEqual(expectedAction)
    })
})

describe('already fetch is true', () => {
    it('should create an action to set to true if alredy fetch', () => {
        const bool = true
        const expectedAction = {
            type: actions.ALREADY_FETCH_PROVIDER,
            payload: bool
        }
        expect(provider_.alreadyFetch(bool)).toEqual(expectedAction)
    })
})

describe('get provider to false', () => {
    it('should create an action to set provider to false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_PROVIDER_PENDING,
            payload: bool
        }
        expect(provider_.GetProvider(bool)).toEqual(expectedAction)
    })
})

describe('get provider to true', () => {
    it('should create an action to set provider to true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_PROVIDER_PENDING,
            payload: bool
        }
        expect(provider_.GetProvider(bool)).toEqual(expectedAction)
    })
})

describe('get provider fullfilled empty list', () => {
    it('should create an action to get provider fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_PROVIDER_FULFILLED,
            payload: data,
            loading: false
        }

        expect(provider_.GetProviderFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get provider fullfilled', () => {
    it('should create an action to get provider fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_PROVIDER_FULFILLED,
            payload: data,
            loading: false
        }

        expect(provider_.GetProviderFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get provider reject', () => {
    it('should create an action to get provider reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_PROCIDER_REFJECTED,
            payload: error,
            loading: false
        }
        expect(provider_.GetProviderReject(error)).toEqual(expectedAction)
    })
})

describe('set provider details with empty data', () => {
    it('should create an action to set provder details with empty data', () => {
        const data = {}
        const expectedAction = {
            type: actions.SET_PROVIDER_DETAIL,
            payload: data
        }
        expect(provider_.SetProviderDetails(data)).toEqual(expectedAction)
    })
})

describe('set provider details', () => {
    it('should create an action to set provder details', () => {
        const data = {a: '1', b: '2'}
        const expectedAction = {
            type: actions.SET_PROVIDER_DETAIL,
            payload: data
        }
        expect(provider_.SetProviderDetails(data)).toEqual(expectedAction)
    })
})

describe('get provider detail to false', () => {
    it('should create an action to set provider detail to false', () => {
        const bool = false
        const expectedAction = {
            type: actions.GET_PROVIDER_DETAIL_PENDING,
            payload: bool
        }
        expect(provider_.GetProviderDetails(bool)).toEqual(expectedAction)
    })
})

describe('get provider detail to true', () => {
    it('should create an action to set provider detail  to true', () => {
        const bool = true
        const expectedAction = {
            type: actions.GET_PROVIDER_DETAIL_PENDING,
            payload: bool
        }
        expect(provider_.GetProviderDetails(bool)).toEqual(expectedAction)
    })
})

describe('get provider detail fullfilled empty list', () => {
    it('should create an action to get provider detail fullfilled with empty list', () => {
        const data = []
        const expectedAction = {
            type: actions.GET_PROVIDER_DETAIL_FULFILLED,
            payload: data,
            loading: false
        }

        expect(provider_.GetProviderDetailFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get provider detail fullfilled', () => {
    it('should create an action to get provider detail fullfilled', () => {
        const data = [{a: '1', b: '2'},{c: '1', d: '2'}]
        const expectedAction = {
            type: actions.GET_PROVIDER_DETAIL_FULFILLED,
            payload: data,
            loading: false
        }

        expect(provider_.GetProviderDetailFullFilled(data)).toEqual(expectedAction)
    })
})

describe('get provider detail reject', () => {
    it('should create an action to get provider detail reject', () => {
        const error = 'Request Failed'
        const expectedAction = {
            type: actions.GET_PROVIDER_DETAIL_REJECTED,
            payload: error,
            loading: false
        }
        expect(provider_.GetProviderDetailsReject(error)).toEqual(expectedAction)
    })
})

