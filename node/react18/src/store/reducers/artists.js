import * as actionTypes from 'store/actions/type';
import {updateObject} from 'shared/utility';

const initialState = {
  artists: {},
  loading: false,
  errors: {}
}

const fetchTopArtistsStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const fetchTopArtistsSuccess = (state, action) => {
  return updateObject(state, {
    artists: action.response,
    loading: false
  });
};

const fetchTopArtistsFail = (state, action) => {
  return updateObject(state, {
    errors: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOP_ARTISTS_START: return fetchTopArtistsStart(state, action)
    case actionTypes.FETCH_TOP_ARTISTS_SUCCESS: return fetchTopArtistsSuccess(state, action)
    case actionTypes.FETCH_TOP_ARTISTS_FAIL: return fetchTopArtistsFail(state, action)

    default: return state
  }
};

export default reducer;
