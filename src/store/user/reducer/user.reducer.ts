import * as actionTypes from '../actions/user.types'

const initialState = {
  username: null,
  isFail: false,
  isLoading: false
}

function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        isLoading: false
      }

    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        username: null,
        isFail: true,
        isLoading: false
      }
  }

  return state
}

export default reducer
