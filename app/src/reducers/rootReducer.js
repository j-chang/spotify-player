import { combineReducers } from 'redux'
import auth from './authReducer'
import songs from './songsReducer'

const rootReducer = combineReducers({
  auth,
  songs
})

export default rootReducer