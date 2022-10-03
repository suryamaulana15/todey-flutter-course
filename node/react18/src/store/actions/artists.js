import * as actionTypes from 'store/actions/type';
import axios from 'axios-orders';

export const fetchTopArtistsStart = () => {
  return {
    type: actionTypes.FETCH_TOP_ARTISTS_START,
  };
};

export const fetchTopArtistsSuccess = (response) => {
  return {
    type: actionTypes.FETCH_TOP_ARTISTS_SUCCESS,
    response: response
  };
};

export const fetchTopArtistsFail = (error) => {
  return {
    type: actionTypes.FETCH_TOP_ARTISTS_FAIL,
    error: error
  };
};

export const fetchTopArtists = (method, api_key, page, limit) => {
  return dispatch => {
    dispatch(fetchTopArtistsStart())
    axios.get(`?method=${method}&api_key=${api_key}&format=json&limit=${limit}&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(response => {
        dispatch(fetchTopArtistsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTopArtistsFail(error.response.data.message));
      });
  }
}
