import {auth} from '../../src/actions'
import auth_ from '../../src/reducer/auth'
import {actions} from '../../src/actions/type'

describe('auth reducer', () => {
    test('should return the initial state', () => {
        const initialState = {
            userId: '',
            token: '',
            error: ''
        }

        expect(auth_(undefined, {})).toEqual(initialState)
    }) 

    test('should set user with something', () => {
        expect(
            auth_([],auth.userSet('slkjsdflkjds'))
        ).toEqual(
            {
                userId:'slkjsdflkjds'
            }
        )
    })

    test('should set token with something', () => {
        expect(
            auth_([],auth.tokenSet('slkjsdflkjds'))
        ).toEqual(
            {
                token:'slkjsdflkjds'
            }
        )
    })

    test('should set user error with something', () => {
        expect(
            auth_([],auth.userAuthError('Erro Error'))
        ).toEqual(
            {
                error:'Erro Error'
            }
        )
    })
})