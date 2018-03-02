import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import getData from './books'

export default combineReducers({
  routing: routerReducer,
  getData
})
