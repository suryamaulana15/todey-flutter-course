import React, {Fragment, useEffect} from "react";
import * as actions from 'store/actions';
import {connect} from "react-redux";

const TopArtists = (props) => {
  const {
    onFetchTopArtists
  } = props;

  useEffect(() =>{
    onFetchTopArtists('chart.gettopartists', '3134f5d7d8f1b452cfc652561ecf0a5d', 1, 10);
  }, [onFetchTopArtists]);

  return (
    <Fragment>
      Top Tracks
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    artists: state.artists.artists,
    loading: state.artists.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchTopArtists: (method, api_key, page, limit) => dispatch(actions.fetchTopArtists(method, api_key, page, limit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);
