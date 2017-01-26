import * as types from '../actions/action-types';

const initialState = {
    authenticated: false
};

const authReducer = function(state = initialState, action = {}) {
    switch(action.type) {
        case types.AUTHENTICATION_SUCCESS:
            return Object.assign({}, state, {authenticated: true});

        case types.AUTHENTICATION_FAILED:
            return  Object.assign({}, state, {authenticated: false});

    }

    return state;
};

export default authReducer;


