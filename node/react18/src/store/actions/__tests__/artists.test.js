import {fetchTopArtistsStart, fetchTopArtistsSuccess, fetchTopArtistsFail} from "store/actions/artists";
import * as actionTypes from 'store/actions/type';

describe('test all function Fetch Top Artists', () => {
  it('has the correct type', () => {
    const action = fetchTopArtistsStart();

    expect(action.type).toEqual(actionTypes.FETCH_TOP_ARTISTS_START)
  });

  it('has the correct success', () => {
    const action = fetchTopArtistsSuccess({
      "artists": {
        "artist": [],
        "@attr": {
          "page": "8",
          "perPage": "10",
          "totalPages": "430317",
          "total": "4303162"
        }
      }
    });

    expect(action.response).toEqual({
        "artists": {
          "artist": [],
          "@attr": {
            "page": "8",
            "perPage": "10",
            "totalPages": "430317",
            "total": "4303162"
          }
        }
      });
  });

  it('has the correct error', () => {
    const action = fetchTopArtistsFail("Invalid API key - You must be granted a valid key by last.fm");

    expect(action.error).toEqual("Invalid API key - You must be granted a valid key by last.fm");
  });
})

