import {
  ADD_FIELD,
  DELETE_FIELD,
  EDIT_FIELD,
  SEARCH_FIELD,
  CHANGE_FIELD
} from '../types';

const handlers = {
  [SEARCH_FIELD]: (state, { payload }) => ({ ...state, fields: payload }),
  [ADD_FIELD]: (state, { payload }) => ({ ...state, form: payload }),
  [DELETE_FIELD]: (state, { payload }) => ({ ...state, form: payload }),
  [CHANGE_FIELD]: (state, { payload }) => ({ ...state, form: payload }),
  [EDIT_FIELD]: (state, { payload }) => ({ ...state, form: payload }),
  DEFAULT: state => state
};


export const formReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
