export const LOGIN_USER = 'LOGIN_USER'
export const SIGN_OUT = 'SIGN_OUT'

export const loginUser = (token) => (
  {
    type: LOGIN_USER,
    token
  }
)

const signOut = (data) => {
  return {
    type: SIGN_OUT,
    user: null
  }
}