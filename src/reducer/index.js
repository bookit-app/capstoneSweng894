import { combineReducers } from 'redux'
import auth from './auth'

/**
 * Combines all reducers into one to be passed to store
 */
export default combineReducers({
    auth
})