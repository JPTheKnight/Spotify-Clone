import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';

import Home from './Home';
import Account from './Account';
import Browser from './Components/BrowserComponents';
import Login from './Components/LoginComponents';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-node";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZF1E35i2pcxPIpOH').then((playlist) => {
        dispatch({
          type: 'SET_RECOM_PLAYLISTS',
          recom_playlists: playlist,
        });
      });
      spotify.getPlaylist('6sG9yo2EWGbsYEGXRVtcD3').then((playlist) => {
        dispatch({
          type: 'SET_RECOM_PLAYLISTS',
          recom_playlists: playlist,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcCUOVPp7tPSG').then((playlist) => {
        dispatch({
          type: 'SET_RECOM_PLAYLISTS',
          recom_playlists: playlist,
        });
      });
      spotify.getPlaylist('2CGbuj9aBgriSOpoXzIsqI').then((playlist) => {
        dispatch({
          type: 'SET_RECOM_PLAYLISTS',
          recom_playlists: playlist,
        });
      });
      spotify.getPlaylist('6YxHtcBvhy0CQUhI658GXu').then((playlist) => {
        dispatch({
          type: 'SET_RECOM_PLAYLISTS',
          recom_playlists: playlist,
        });
      });
    }
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/browser' element={<Browser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
