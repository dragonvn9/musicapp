import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtistUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3005/users')
      .then(response => {
        setUsers(response.data)
        console.log(users)
      })
      .catch(error => {
        console.error('Có lỗi xảy ra:', error);
        setError('Không thể tải dữ liệu');
      })

  }, []);


  return (
    <div >
      <h3 className='mt-2'>Artist Users Management</h3>

      <div className="layout-main flex-grow-1 d-flex flex-column p-3 bg-light me-2">
        <table className="table caption-top bg-white rounded mt-2">
          <caption className="fs-4 mb-1 mt-1">List Artist</caption>
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
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default ArtistUsers