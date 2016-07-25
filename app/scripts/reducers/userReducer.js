import assign from 'object-assign'

import {
  USER_REQUEST,
  USER_RECEIVE,
} from '../actions/user'

const initialState = {
  isFetching: false,
  isComplete: false,
  user: {},
}

export default function userReducer(state = initialState, action) {
  const {
    type,
    user,
  } = action

  switch (type) {
    case USER_REQUEST:
      return assign({}, state, {
        isFetching: true,
        isComplete: false,
      })

    case USER_RECEIVE:
      return assign({}, state, {
        isFetching: false,
        isComplete: true,
        user,
      })

    default:
      return state
  }
}
