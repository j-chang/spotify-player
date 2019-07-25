import { LOGIN_USER } from '../actions/authActions'

const initialState = {
  user: null,
  token: null,
  error: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: true,
        token: action.token,
        error: null
      }
    default:
      return state
  }
}

export default authReducer