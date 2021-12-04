import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { changeFilter } from './contacts-actions'

const changeFilterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

const filterReducer = combineReducers({
  filter: changeFilterReducer,
})

export default filterReducer
