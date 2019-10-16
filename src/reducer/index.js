import { combineReducers } from 'redux'
import auth from './auth'
import setPref from './setPref'

/**
 * Combines all reducers into one to be passed to store
 */
export default combineReducers({
    auth,
    setPref
})