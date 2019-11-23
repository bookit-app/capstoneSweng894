import {provider} from '../../src/actions'
import provider_ from '../../src/reducer/provider'

describe('provider reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            resultLoading: true,
            alreadyFetch: false,
            errorMessage: '',
            providerSearchResult: [],
        }

        expect(provider_(undefined, {})).toEqual(initialState)
    })

    test('should set provider with empty object', () => {
        expect(
            provider_([], provider.SetProviderSearch({}))
        )
        .toEqual(
            {
                providerSearchResult: {}
            }
        )
    })

    test('should set provider with non-empty object', () => {
        expect(
            provider_([], provider.SetProviderSearch({a:'a', b:'b'}))
        )
        .toEqual(
            {
                providerSearchResult: {a:'a', b:'b'}
            }
        )
    })

    test('should get provider pending false', () => {
        expect(
            provider_([],provider.GetProvider(false))
        ).toEqual(
            {
                loading: false
            }
        )
    })

    test('should get provider pending true', () => {
        expect(
            provider_([],provider.GetProvider(true))
        ).toEqual(
            {
                loading: true
            }
        )
    })

    test('should get provider fullfuilled', () => {
        expect(
            provider_([],provider.GetProviderFullFilled([{a: '1'}]))
        ).toEqual(
            {
                searchResult: [{a: '1'}],
                loading: false,
                errorMessage: '',
            }
        )
    })

    test('should get provider reject', () => {
        expect(
            provider_([],provider.GetProviderReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                loading: false
            }
        )
    })

    test('should set aleady fetch provider with false', () => {
        expect(
            provider_([],provider.alreadyFetch(false))
        ).toEqual(
            {
                alreadyFetch: false
            }
        )
    })

    test('should set aleady fetch provider with true', () => {
        expect(
            provider_([],provider.alreadyFetch(true))
        ).toEqual(
            {
                alreadyFetch: true
            }
        )
    })

    test('should set provider detail with empty object', () => {
        expect(
            provider_([], provider.SetProviderDetails({}))
        )
        .toEqual(
            {
                providerDetails: {}
            }
        )
    })

    test('should set provider detail with non-empty object', () => {
        expect(
            provider_([], provider.SetProviderDetails({a:'a', b:'b'}))
        )
        .toEqual(
            {
                providerDetails: {a:'a', b:'b'}
            }
        )
    })

    test('should get provider detail pending false', () => {
        expect(
            provider_([],provider.GetProviderDetails(false))
        ).toEqual(
            {
                loading: false
            }
        )
    })

    test('should get provider detail pending true', () => {
        expect(
            provider_([],provider.GetProviderDetails(true))
        ).toEqual(
            {
                loading: true
            }
        )
    })

    test('should get provider detail fullfuilled', () => {
        expect(
            provider_([],provider.GetProviderDetailFullFilled({a: '1'}))
        ).toEqual(
            {
                providerDetails: {a: '1'},
                loading: false
            }
        )
    })

    test('should get provider detail reject', () => {
        expect(
            provider_([],provider.GetProviderDetailsReject({message: 'error'}))
        ).toEqual(
            {
                errorMessage: {message: 'error'},
                loading: false
            }
        )
    })
  
})