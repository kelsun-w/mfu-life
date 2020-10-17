import {
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_COMMUNITIES_ERROR,
  FETCH_COMMUNITY_SUCCESS,
  FETCH_COMMUNITY_ERROR,
  UPDATE_COMMUNITY_SUCCESS,
  UPDATE_COMMUNITY_ERROR,
  COMMUNITY_IMAGE_UPLOAD_SUCCESS,
  COMMUNITY_IMAGE_UPLOAD_ERROR,
  MEMBER_COMMUNITY_SUCCESS,
  MEMBER_COMMUNITY_ERROR,
  ASSIGN_MOD_SUCCESS,
  ASSIGN_MOD_ERROR,
  ADD_RULE_SUCCESS,
  ADD_RULE_ERROR,
  REMOVE_RULE_SUCCESS,
  REMOVE_RULE_ERROR,
  ADD_BAN_SUCCESS,
  ADD_BAN_ERROR,
  REMOVE_BAN_SUCCESS,
  REMOVE_BAN_ERROR,
} from '../actions/community';

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  VOTE_SUCCESS,
  VOTE_ERROR,
  SEARCH_POSTS_SUCCESS,
  SEARCH_POSTS_ERROR
} from '../actions/posts';

import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  TOKENUPDATE_SUCCESS,
  TOKENUPDATE_ERROR,
  LOGOUT
} from '../actions/auth';

import {
  USER_GET_SUCCESS,
  USER_GET_ERROR,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_SAVEPOST_SUCCESS,
  USER_SAVEPOST_ERROR,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_ERROR,
  USER_DELETE_SUCCESS,
  USER_DELETE_ERROR,
  USER_GETSAVEDPOSTS_SUCCESS,
  USER_GETSAVEDPOSTS_ERROR,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR
} from '../actions/user';

import {
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_ERROR,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_ERROR,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_ERROR,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_ERROR
} from '../actions/reports';

import { hideErrorClearTimeout, showErrorWithTimeout } from '../actions/error';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_COMMUNITIES_SUCCESS:
    case FETCH_COMMUNITY_SUCCESS:
    case UPDATE_COMMUNITY_SUCCESS:
    case COMMUNITY_IMAGE_UPLOAD_SUCCESS:
    case MEMBER_COMMUNITY_SUCCESS:
    case ASSIGN_MOD_SUCCESS:
    case ADD_RULE_SUCCESS:
    case REMOVE_RULE_SUCCESS:
    case ADD_BAN_SUCCESS:
    case REMOVE_BAN_SUCCESS:
    case FETCH_POSTS_SUCCESS:
    case FETCH_POST_SUCCESS:
    case SEARCH_POSTS_SUCCESS:
    case CREATE_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
    case CREATE_COMMENT_SUCCESS:
    case DELETE_COMMENT_SUCCESS:
    case VOTE_SUCCESS:
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case TOKENUPDATE_SUCCESS:
    case USER_UPDATE_SUCCESS:
    case USER_SAVEPOST_SUCCESS:
    case IMAGE_UPLOAD_SUCCESS:
    case USER_DELETE_SUCCESS:
    case FETCH_REPORTS_SUCCESS:
    case CREATE_REPORT_SUCCESS:
    case UPDATE_REPORT_SUCCESS:
    case DELETE_REPORT_SUCCESS:
    case USER_GETSAVEDPOSTS_SUCCESS:
    case USER_GET_SUCCESS:
    case SEARCH_USERS_SUCCESS:
    case LOGOUT:
      if (store.getState().error) store.dispatch(hideErrorClearTimeout());
      break;

    case FETCH_COMMUNITIES_ERROR:
    case FETCH_COMMUNITY_ERROR:
    case UPDATE_COMMUNITY_ERROR:
    case COMMUNITY_IMAGE_UPLOAD_ERROR:
    case MEMBER_COMMUNITY_ERROR:
    case ASSIGN_MOD_ERROR:
    case ADD_RULE_ERROR:
    case REMOVE_RULE_ERROR:
    case ADD_BAN_ERROR:
    case REMOVE_BAN_ERROR:
    case FETCH_POSTS_ERROR:
    case FETCH_POST_ERROR:
    case SEARCH_POSTS_ERROR:
    case CREATE_POST_ERROR:
    case DELETE_POST_ERROR:
    case CREATE_COMMENT_ERROR:
    case DELETE_COMMENT_ERROR:
    case VOTE_ERROR:
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
    case TOKENUPDATE_ERROR:
    case USER_UPDATE_ERROR:
    case USER_SAVEPOST_ERROR:
    case IMAGE_UPLOAD_ERROR:
    case USER_DELETE_ERROR:
    case FETCH_REPORTS_ERROR:
    case CREATE_REPORT_ERROR:
    case UPDATE_REPORT_ERROR:
    case DELETE_REPORT_ERROR:
    case USER_GETSAVEDPOSTS_ERROR:
    case USER_GET_ERROR:
    case SEARCH_USERS_ERROR:
      store.dispatch(showErrorWithTimeout(action.error));
      break;

    default:
      break;
  }
};
