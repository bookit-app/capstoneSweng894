import { combineReducers } from 'redux'
import auth from './auth'
import preference from './preference'
import profile from './profile'

/**
 * Combines all reducers into one to be passed to store
 */
export default combineReducers({
    auth,
    preference,
    profile
})