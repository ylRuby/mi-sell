import { combineReducers } from 'redux';
import cartCount from './cartcount'
import user from './user'

export default combineReducers({
    cartCount,
    user
})