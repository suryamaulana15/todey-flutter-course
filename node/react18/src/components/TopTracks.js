import React, {Fragment, useEffect} from "react";
import * as actions from 'store/actions';
import {connect} from "react-redux";

const TopTracks = props => {
  const {
    onFetchTopTracks
  } = props;

  useEffect(() =>{
    onFetchTopTracks('chart.gettoptracks', '3134f5d7d8f1b452cfc652561ecf0a5d', 1, 10);
  }, [onFetchTopTracks]);

  return (
    <Fragment>
      Top Tracks
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    tracks: state.tracks.tracks,
    loading: state.tracks.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTopTracks: (method, api_key, page, limit) => dispatch(actions.fetchTopTracks(method, api_key, page, limit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTracks);
