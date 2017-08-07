import {
  AUTHENTICATION_SUCCEED,
  AUTHENTICATION_FAILED
} from './auth.actions';

const initState = {
  authenticated: false
};

export function authReducer(state = initState, action = { type: '' }) {

  switch(action.type) {
    case AUTHENTICATION_SUCCEED:
      return Object.assign({}, state, {authenticated: true});

    case AUTHENTICATION_FAILED:
      return  Object.assign({}, state, {authenticated: false});

  }

  return state;
};



