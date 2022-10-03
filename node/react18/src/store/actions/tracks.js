import * as actionTypes from 'store/actions/type';
import axios from 'axios-orders';

export const fetchTopTracksStart = () => {
  return {
    type: actionTypes.FETCH_TOP_TRACKS_START,
  };
};

export const fetchTopTracksSuccess = (response) => {
  return {
    type: actionTypes.FETCH_TOP_TRACKS_SUCCESS,
    response: response
  };
};

export const fetchTopTracksFail = (error) => {
  return {
    type: actionTypes.FETCH_TOP_TRACKS_FAIL,
    error: error
  };
};

export const fetchTopTracks = (method, api_key, page, limit) => {
  return dispatch => {
    dispatch(fetchTopTracksStart())
    axios.get(`?method=${method}&api_key=${api_key}&format=json&limit=${limit}&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
      .then(response => {
        dispatch(fetchTopTracksSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTopTracksFail(error.response.data.message));
      });
  }
}
