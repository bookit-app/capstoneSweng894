import { actions } from './type'

export const userSet = userId => ({
    type: actions.USER_SET,
    userId 
})

export const tokenSet = token => ({
    type: actions.TOKEN,
    token
})

export const userAuthError = error => ({
    type: actions.AUTH_ERROR,
    error
})

