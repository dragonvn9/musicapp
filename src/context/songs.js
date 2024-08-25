import React from 'react';

// Khai báo Component Playlist bên ngoài
const Playlist = ({ songList }) => (
  <div className="playlist">
    <ul className="loi">
      {songList.map((song, i) => (
        <li key={i} className="songContainer">
          <div className="tmbn_song">
            <i className="fas fa-play"></i>
          </div>
          <div className="songmeta_playlist">
            <span className="songname">{song.title}</span>
            <span className="songauthors">{song.artistName}</span>
          </div>
          <div className="playlist_btns_group">
            <button className="fav_song playlist_btn">
              <i className="far fa-heart fa-lg"></i>
            </button>
            <button className="options_song playlist_btn">
              <i className="fas fa-ellipsis-v fa-lg"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

function Albums() {
  // Hàm fav có thể được định nghĩa ở đây nếu cần
  const fav = () => {
    // Thực hiện hành động khi nút yêu thích được nhấn
    console.log('Favorite button clicked');
  };

  // Ví dụ về danh sách bài hát để truyền cho Playlist
  const songList = [
    {
      title: 'Song Title 1',
      artistName: 'Artist 1'
    },
    {
      title: 'Song Title 2',
      artistName: 'Artist 2'
    }
  ];

  return (
    <div>
      <h1>Albums</h1>
      <div className="actions">
        <img
          src="https://freemusicarchive.org/image?file=images%2Falbums%2Fgallery%2F"
          alt="Album"
          className="album_image"
        />
        <div className="album_meta">
          <span className="alb_label">ALBUM</span>
          <h1>Mussorgsky's Pictures at an Exhibition</h1>
        </div>
        <div className="action_btns">
          <button onClick={() => fav()} className="fav_btn">
            <i className="far fa-heart fa-2x"></i>
          </button>
          <button onClick={() => fav()} className="fav_btn">
            <i className="far fa-arrow-alt-circle-down fa-2x"></i>
          </button>
          <button onClick={() => fav()} className="fav_btn">
            <i className="fas fa-ellipsis-h fa-2x"></i>
          </button>
        </div>
      </div>

      {/* Sử dụng Playlist component với danh sách bài hát */}
      <Playlist songList={songList} />
    </div>
  );
}

export default Albums;
