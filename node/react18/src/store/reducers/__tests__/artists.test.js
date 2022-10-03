import artistsReducer from "store/reducers/artists";
import * as actionTypes from 'store/actions/type';

const initialState = {
  artists: {},
  loading: false,
  errors: {}
}

it('handles actions if type FETCH TOP ARTISTS START ', () => {
  const actions = {
    type: actionTypes.FETCH_TOP_ARTISTS_START,
  };

  const newState = artistsReducer(initialState, actions);
  expect(newState).toEqual({
    artists: {},
    loading: true,
    errors: {}
  })
});

it('handles actions if type FETCH TOP ARTISTS SUCCESS ', () => {
  const actions = {
    type: actionTypes.FETCH_TOP_ARTISTS_SUCCESS,
    response: {
      "artists": {
        "artist": [],
        "@attr": {
          "page": "8",
          "perPage": "10",
          "totalPages": "430317",
          "total": "4303162"
        }
      }
    }
  };

  const newState = artistsReducer(initialState, actions);
  expect(newState).toEqual({
    artists: {
      "artists": {
        "artist": [],
        "@attr": {
          "page": "8",
          "perPage": "10",
          "totalPages": "430317",
          "total": "4303162"
        }
      }
    },
    loading: false,
    errors: {}
  });
});

it('handles actions if type FETCH TOP ARTISTS ERRORS ', () => {
  const actions = {
    type: actionTypes.FETCH_TOP_ARTISTS_FAIL,
    error: "Invalid API key - You must be granted a valid key by last.fm"
  };

  const newState = artistsReducer(initialState, actions);
  expect(newState).toEqual({
    artists: {},
    loading: false,
    errors: "Invalid API key - You must be granted a valid key by last.fm"
  })
});
