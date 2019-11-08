import { combineReducers } from 'redux'
import auth from './auth'
import preference from './preference'
import profile from './profile'
import provider from './provider'
import appointment from './appointment'

/**
 * Combines all reducers into one to be passed to store
 */
export default combineReducers({
    auth,
    appointment,
    preference,
    profile,
    provider,
})