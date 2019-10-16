import { combineReducers } from 'redux'
import auth from './auth'
import setPref from './setPref'
import profile from './profile'

/**
 * Combines all reducers into one to be passed to store
 */
export default combineReducers({
    auth,
    setPref,
    profile
})