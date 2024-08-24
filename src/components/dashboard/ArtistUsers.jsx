import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';


function ArtistUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3005/users')
      .then(response => {
        setUsers(response.data)
        //console.log(users)
        setError(null)
      })
      .catch(error => {
        console.error('Có lỗi xảy ra:', error);
        setError('Không thể tải dữ liệu');
      })

  }, []);

  const deleteArtist = async (id)=> {
    //console.log(id)
    try {
      await axios.delete(`http://localhost:3005/users/${id}`)
      alert(`xoá thành công user : ${id}`)
      setUsers(users.filter(user => user.id !== id))
    }
    catch(error) {
      alert(`xoá không thành công user : ${id}`)
      setError(`xoá không thành công user : ${id}`)
    }

  }

  return (
    <div >
      {error && <div className="error-message">{error}</div>}
      <h3 className='mt-2'>Artist Users Management</h3>
      <div className='d-flex align-items-center mb-1'>
        <div className="fs-4 mb-1 mt-1 me-4">List Artist</div>
        <Link onClick={() => navigate('/add-new-artist')} style = {{background: '#44bee0'}} className='text-decoration-none text-dark'>Add New Artist</Link>
      </div>
      <div className="layout-main flex-grow-1 d-flex flex-column p-3 bg-light me-2">
        <table className="table caption-top bg-white rounded mt-2">

          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(user => user.role === "Artist").map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td className='d-flex gap-1'>
                  <Link className='text-decoration-none text-dark'to={`/edit-artist/${user.id}`} style = {{background: '#44bee0'}}>Edit Artist</Link>
                  <Link onClick={()=> deleteArtist(user.id)} style = {{background: 'red'}} className='text-decoration-none text-dark'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default ArtistUsers