import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Songs() {
  const [songs, setSongs] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    //code side effect
    axios.get('http://localhost:3005/songs')
      .then(Response => {
        setSongs(Response.data)
        //console.log(songs)
      })
      .catch(error => {
        setError('lỗi xảy ra trong quá trình get dữ liệu')
        console.error('lỗi get dữ liệu', error)
      })
  }, []);

  const deleteSong = async(id) => {
    ///console.log(id)
    try {
      await axios.delete(`http://localhost:3005/songs/${id}`)
      alert(`xoá thành công song : ${id}`)
      setSongs(songs.filter(song => song.id !== id))
      console.log(songs)
    }
    catch (error) {
      alert(`xoá không thành công song : ${id}`)
      setError(`xoá không thành công song : ${id}`)
    }

  }



  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <h3 className='mt-2'>Song List</h3>
      <div className='d-flex align-items-center mb-1'>
        <div className="fs-4 mb-1 mt-1 me-4">List Songs</div>
        <Link onClick={() => navigate('/add-new-song')} style={{ background: '#44bee0' }} className='text-decoration-none text-dark'>Add New Song</Link>
      </div>
      <div className="layout-main flex-grow-1 d-flex flex-column p-3 bg-light me-2">
        <table className="table caption-top bg-white rounded mt-2">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Id</th>
              <th scope="col">Tên Bài Hát</th>
              <th scope="col">Nhạc Sĩ</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <th scope="row">{index + 1}</th>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artistId}</td>
                <td>{song.description}</td>
                <td className='d-flex gap-1'>
                  <Link className='text-decoration-none text-dark' to={`/edit-song/${song.id}`} style={{ background: '#44bee0' }}>Edit Song</Link>
                  <Link onClick={() => deleteSong(song.id)} style={{ background: 'red' }} className='text-decoration-none text-dark'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Songs