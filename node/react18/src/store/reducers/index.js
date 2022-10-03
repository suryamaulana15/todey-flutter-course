import {combineReducers} from "redux";
import artists from 'store/reducers/artists';
import tracks from 'store/reducers/tracks';

export default combineReducers({
  artists,
  tracks
});
