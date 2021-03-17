import * as Auth from 'services/auth.service'
import { USER_LOGIN_REQUEST } from '../actions/user.types'

import { call, put, all, takeLatest } from 'redux-saga/effects'
import { loginSuccess, loginFail } from '../actions/user.actions'

function* loginRequest(action: any = {}) {
  try {
    const user: { username: string } = yield call(Auth.login, action.payload)

    yield put(loginSuccess(user.username))
  } catch (e) {
    yield put(loginFail())
  }
}

export default function* rootSaga() {
  yield all([takeLatest(USER_LOGIN_REQUEST, loginRequest)])
}
