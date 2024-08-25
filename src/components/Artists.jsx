import React from 'react';
import img2 from '../assets/images_music/artist_image.png';
import audio01 from '../assets/audio/ChucMungChoTheGioi-NoelDauTien-M_afw.mp3';
import audio02 from '../assets/audio/LoiNhoVaoDoi-DamVinhHung_353ja.mp3';
import audio03 from '../assets/audio/Makaih Beats - Slow Burn.mp3';
import audio04 from '../assets/audio/NiemDauChonGiauNeverFallInLove-LanNha-6587964.mp3';
import audio05 from '../assets/audio/rvl6jvmp2f.mp3';
import audio06 from '../assets/audio/VungTroiBinhYen-ThuyVan_rz3c.mp3';
import im01 from '../assets/images_music/chinh.png';
import im02 from '../assets/images_music/danh.png';
import im03 from '../assets/images_music/hai.png';
import im04 from '../assets/images_music/huy.png';
import im05 from '../assets/images_music/minh.png';
import im06 from '../assets/images_music/nhat.png';
import './albums.css';


const Playlist = ({ songs }) => {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Artist</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr className="song-row" key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={song.thumb} alt={song.title} className="song-img" />
                  </div>
                </td>
                <td>
                  <span className="song-info">
                    <strong>{song.title}</strong>
                  </span>
                </td>
                <td>{song.artistName}</td>
                <td>
                  <div className="d-flex justify-content-between align-items-center">
                    <audio controls src={song.url}></audio>
                    <span>
                      <i className="bi bi-heart-fill text-pink"></i>
                      <i className="bi bi-three-dots-vertical ms-3"></i>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Artists() {
  
  const fav = () => {
    console.log('Favorite button clicked');
  };


  const songList = [
    {
      title: 'Song Title 1',
      artistName: 'Artist 1',
      thumb: im01,
      url: audio01
    },
    {
      title: 'Song Title 2',
      artistName: 'Artist 2',
      thumb: im02,
      url: audio02
    },
    {
      title: 'Song Title 3',
      artistName: 'Artist 3',
      thumb: im03,
      url: audio03
    },
    {
      title: 'Song Title 4',
      artistName: 'Artist 4',
      thumb: im04,
      url: audio04
    },
    {
      title: 'Song Title 5',
      artistName: 'Artist 5',
      thumb: im05,
      url: audio05
    },
    {
      title: 'Song Title 6',
      artistName: 'Artist 6',
      thumb: im06,
      url: audio06
    }
  ];

  return (
    <div>
      
      <div className="actions">
        <img
          src={img2}
          alt="Album"
          className="album_image"
        />
        <div className="album_meta">
       
          
        </div>
        <div className="action">
          <button onClick={() => fav()} className="">
            <i className="far fa-heart fa-2x"></i>
          </button>
          <button onClick={() => fav()} className="">
            <i className="far fa-arrow-alt-circle-down fa-2x"></i>
          </button>
          <button onClick={() => fav()} className="">
            <i className="fas fa-ellipsis-h fa-2x"></i>
          </button>
        </div>
      </div>
      
      <Playlist songs={songList} />
    </div>
  );
}

export default Artists;
