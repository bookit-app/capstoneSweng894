import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {
    GetProviderSearchResult,
    GetProviderDetails,
    GetStyleInfo,
    logIn,
    signUp,
    signUpWithProfile,
    signOut,
    getAppointment
} from '../../src/store'
import { provider, auth, profile, preference, appointment } from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

// function mockFirebaseService() {
//     return new Promise(resolve => resolve(true));
//   }

// jest.mock('services/firebase', () => new Promise(resolve => resolve({
//     signInWithEmailAndPassword: () => { return { getIdToken: () => '123' } }
// })));

describe('should dispatch action', () => {
    afterEach(() => {
      fetchMock.restore()
    })

    test('should dispatch action Get Provider Search Result', async () => {
        // fetchMock.getOnce('/search/provider?', {
        //     body: { data: [{a: '1', b: '2'},{c: '1', d: '2'}] },
        //     headers: { 'content-type': 'application/json' }
        //   })

        const expectedActions = [
            provider.SetProviderSearch({}),
            provider.GetProvider(true)
        ]

        const store = mockStore({
            providerSearchResult:{},
            loading: false,
            searchResult: {},
            errorMessage: ''
        })

        var filter = 'city=Philadelphia&state=PA'
        return store.dispatch(GetProviderSearchResult(filter, ''))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        
    })

    test('should dispatch action Get Provider Search Result on successful', async () => {
        const expectedActions = undefined

        const store = mockStore({
            providerSearchResult:{},
            loading: false,
            searchResult: {},
            errorMessage: ''
        })

        var filter = 'city=Philadelphia&state=PA'
        return store.dispatch(GetProviderSearchResult(filter, ''))
            .then(() => {
                expect(store.getActions()[2]).toEqual(expectedActions)
            })
        
    })

    test('should dispatch action Get Provider Search Result in catch', async () => {
        const expectedActions = [
            provider.SetProviderSearch({}),
            provider.GetProvider(true),
            provider.GetProviderReject('error')
        ]

        const store = mockStore({
            providerSearchResult:{},
            loading: false,
            searchResult: {},
            errorMessage: ''
        })

        var filter = 'city=Philadelphia&state=PA'
        return store.dispatch(GetProviderSearchResult(filter, ''))
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
        
    })

    test('should dispatch action Get Provider details', async () => {
        const expectedActions = [
            provider.SetProviderDetails({}),
            provider.GetProviderDetails(true)
        ]

        const store = mockStore({
            providerSearchResult:{},
            loading: false,
            searchResult: {},
            errorMessage: ''
        })

        return store.dispatch(GetProviderDetails('lksjdflksjdflskj', 'safdsdfsdf'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    
    test('should dispatch action Get Provider details on success', async () => {
        const expectedActions = undefined

        const store = mockStore({
            providerSearchResult:{},
            loading: false,
            searchResult: {},
            errorMessage: ''
        })

        return store.dispatch(GetProviderDetails('lksjdflksjdflskj', 'safdsdfsdf'))
            .then(() => {
                expect(store.getActions()[2]).toEqual(expectedActions)
            })
    })

    test('should dispatch action Get Provider details', async () => {
        const expectedActions = [
            provider.SetProviderDetails({}),
            provider.GetProviderDetails(true),
            provider.GetProviderDetailsReject('error')
        ]

        const store = mockStore({})

        return store.dispatch(GetProviderDetails('lksjdflksjdflskj', 'safdsdfsdf'))
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    test('should dispatch action Get style', async () => {
        // fetchMock.getOnce('provider/', {
        //     body: { data: {a: '1', b: '2'}},
        //     headers: { 'content-type': 'application/json' }
        //   })

        const expectedActions = [
            preference.GetStylePreference(true),
            preference.setStyles({})
        ]

        const store = mockStore({})

        return store.dispatch(GetStyleInfo('lksjdflksjdflskj'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    test('should dispatch action upcoming appointments', async () => {
        const expectedActions = [
            appointment.SetUpcomingAppointment([]),
            appointment.GetUpcomingAppointment(true)
        ]

        const store = mockStore({})

        return store.dispatch(getAppointment('U','lksjdflksjdflskj'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    test('should dispatch action previous appointments', async () => {
        const expectedActions = [
            appointment.SetPreviousAppointment([]),
            appointment.GetPreviousAppointment(true)
        ]

        const store = mockStore({})

        return store.dispatch(getAppointment('P','lksjdflksjdflskj'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    test('should dispatch action sign out', async () => {
        const expectedActions = [
            profile.setProfile({}),
            preference.setPreference({}),
            preference.settingPref(false),
            auth.userSet(''),
            auth.tokenSet(''),
            auth.userAuthError(''),
            appointment.SetPreviousAppointment([]),
            appointment.SetUpcomingAppointment([]),
            appointment.SetAllAppointment([])
        ]

        const store = mockStore({})

        return store.dispatch(signOut())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })

    // test('should dispatch action login', () => {
    //     // fetchMock.getOnce('provider/', {
    //     //     body: { data: {a: '1', b: '2'}},
    //     //     headers: { 'content-type': 'application/json' }
    //     //   })

    //     const expectedActions = [
    //         profile.GetProfile(true),
    //         profile.setProfile({}),
    //         preference.GetPreference(true),
    //         preference.settingPref(false),
    //         preference.setPreference({}),
    //         auth.userSet(''),
    //         auth.tokenSet(''),
    //         auth.userAuthError('')
    //     ]

    //     const store = mockStore({})

    //     return store.dispatch(logIn('lksjdflksjdflskj'))
    //         .then(() => {
    //             expect(mockFirebaseService).toHaveBeenCalled();
    //         })
    // })
})