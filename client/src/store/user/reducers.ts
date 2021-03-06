import {UserActionTypes, LOGIN, LOGOUT, WILL_LOGIN, DID_LOGIN, WILL_EDIT_USER, DID_EDIT_USER, EDIT_USER} from './types';
import {UserState} from '../types';
import {FridgeActionTypes, ADD_FRIDGE} from 'store/fridge/types';
import {ADD_FEED_ALERT, FeedAlertActionTypes} from 'store/feedAlert/types';

const intialState: UserState = {
  isLoading: false,
  feedAlertIds: [],
};

export function userReducer(
  state = intialState,
  action: UserActionTypes | FridgeActionTypes | FeedAlertActionTypes,
): UserState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload.user
      };
    case EDIT_USER:
      return {
        ...state,
        ...action.payload
      };
    case LOGOUT:
      return intialState;
    case ADD_FRIDGE:
      return {
        ...state,
        ...action.payload.user
      };
    case ADD_FEED_ALERT:
      return {
        ...state,
        ...action.payload.user
      };
    case WILL_LOGIN || WILL_EDIT_USER:
      return {
        ...state,
        isLoading: true,
      };
    case DID_LOGIN || DID_EDIT_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}