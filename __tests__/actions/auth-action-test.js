import React from 'react'
import * as auth from '../../src/actions/auth-action'
import { actions } from '../../src/actions/type'

describe('user set', () => {
    it('should create an action to set user', () => {
        const userId = '12345'
        const expectedAction = {
            type: actions.USER_SET,
            userId
        }
        expect(auth.userSet(userId)).toEqual(expectedAction)
    })
})

describe('token set', () => {
    it('should create an action to set token', () => {
        const token = 'KOOKJSLKFSDKFNSLFISDFLKSNDFLKSNDFOISNDFLKNSDLFKS049UJ'
        const expectedAction = {
            type: actions.TOKEN,
            token
        }
        expect(auth.tokenSet(token)).toEqual(expectedAction)
    })
})

describe('user auth error', () => {
    it('should create an action to set user auth', () => {
        const error = 'User Error'
        const expectedAction = {
            type: actions.AUTH_ERROR,
            error
        }
        expect(auth.userAuthError(error)).toEqual(expectedAction)
    })
})