import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';
const initialUserState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case actionTypes.CLEAR_USER:
      return {
        ...initialUserState,
        isLoading: false
      };

    default:
      return state;
  }
};

const initialChannelState = {
  currentChannel: null
};

const channel_reducer = (state = initialChannelState, action) => {};

const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;
