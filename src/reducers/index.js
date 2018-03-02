import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import getData from './elections'

export default combineReducers({
  routing: routerReducer,
  getData
})
