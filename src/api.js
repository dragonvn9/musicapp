// src/api.js
import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const fetchPlaylistTracks = async (playlistId, token) => {
  const response = await axios.get(`${BASE_URL}/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return response.data;
};
// src/App.js
import React, { useEffect, useState } from 'react';
import { getAccessToken } from './auth';
import { fetchPlaylistTracks } from './api';

function App() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const token = await getAccessToken();
        const data = await fetchPlaylistTracks('YOUR_PLAYLIST_ID', token);
        setTracks(data.items);
      } catch (err) {
        setError('Failed to fetch tracks');
      }
    };

    loadTracks();
  }, []);

  return (
    <div>
      <h1>Playlist Tracks</h1>
      {error && <p>{error}</p>}
      <ul>
        {tracks.map(track => (
          <li key={track.track.id}>
            <img src={track.track.album.images[0].url} alt={track.track.name} />
            <p>{track.track.name} - {track.track.artists.map(artist => artist.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
