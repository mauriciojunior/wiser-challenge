import * as actionTypes from './user.types'

export const loginRequest = (data: any) => {
  return {
    type: actionTypes.USER_LOGIN_REQUEST,
    payload: data
  }
}

export const loginSuccess = (username: string) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: {
      username
    }
  }
}

export const loginFail = () => {
  return {
    type: actionTypes.USER_LOGIN_FAIL
  }
}
