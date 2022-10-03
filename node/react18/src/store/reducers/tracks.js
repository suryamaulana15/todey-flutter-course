import * as actionTypes from 'store/actions/type';
import {updateObject} from "../../shared/utility";

const initialState = {
  tracks: {},
  loading: false,
  errors: {}
};

const fetchTopTracksStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const fetchTopTracksSuccess = (state, action) => {
  return updateObject(state, {
    tracks: action.response,
    loading: false
  });
};

const fetchTopTracksFail = (state, action) => {
  return updateObject(state, {
    errors: action.errors,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOP_TRACKS_START: return fetchTopTracksStart(state, action)
    case actionTypes.FETCH_TOP_TRACKS_SUCCESS: return fetchTopTracksSuccess(state, action)
    case actionTypes.FETCH_TOP_TRACKS_FAIL: return fetchTopTracksFail(state, action)

    default: return state
  }
};

export default reducer;
