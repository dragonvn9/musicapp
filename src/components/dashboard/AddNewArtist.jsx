import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNewArtist() {
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: '', 
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validErrors = {};
    if (formdata.firstname === "" || formdata.firstname === null) {
      isvalid = false;
      validErrors.firstname = 'Yêu cần nhập first name';
    }
    if (formdata.lastname === "" || formdata.lastname === null) {
      isvalid = false;
      validErrors.lastname = 'Yêu cần nhập last name';
    }
    if (formdata.email === "" || formdata.email === null) {
      isvalid = false;
      validErrors.email = 'Yêu cần nhập email';
    }
    if (formdata.password === "" || formdata.password === null) {
      isvalid = false;
      validErrors.password = 'Yêu cần nhập password';
    } else if (formdata.password.length < 6) {
      isvalid = false;
      validErrors.password = 'Password cần tối thiểu 6 ký tự';
    }

    if (formdata.confirmpassword !== formdata.password) {
      isvalid = false;
      validErrors.confirmpassword = 'Password không khớp, vui lòng nhập lại';
    }

    if (formdata.role === '') {
      isvalid = false;
      validErrors.role = 'Yêu cầu chọn nhận dạng người dủng';
    }

    setValid(isvalid);
    setErrors(validErrors);

    if (Object.keys(validErrors).length === 0) {
      axios.post('http://localhost:3005/users', formdata)
        .then(result => alert('Bạn đã thêm mới thành công'))
        .then(() => navigate('/admin-dashboard/artist-users'))
        .catch(error => {
          // Xử lý lỗi
          console.error('Có lỗi xảy ra:', error.message);
        })
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Add New Artist</h3>
              <div>
                {valid ? <></> :
                  <span className="text-danger">
                    {errors.firstname}
                    {errors.lastname}
                    {errors.email}
                    {errors.password}
                    {errors.confirmpassword}
                    {errors.role}
                  </span>
                }
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6 mt-2 mb-2">
                    <label htmlFor="firstName">First Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name"
                      onChange={(event) => setFormdata({ ...formdata, firstname: event.target.value })}
                    />
                  </div>
                  <div className="form-group col-md-6 mt-2 mb-2">
                    <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name"
                      onChange={(event) => setFormdata({ ...formdata, lastname: event.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="email">Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter Email"
                    onChange={(event) => setFormdata({ ...formdata, email: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="password">Password<span className="text-danger">*</span></label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Password"
                    onChange={(event) => setFormdata({ ...formdata, password: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="confirmPassword">Confirm Password<span className="text-danger">*</span></label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
                    onChange={(event) => setFormdata({ ...formdata, confirmpassword: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="Artist" name="role" value="Artist"
                      checked={formdata.role === 'Artist'}
                      onChange={(event) => setFormdata({ ...formdata, role: event.target.value })}
                    />
                    <label className="form-check-label" htmlFor="Artist">
                      Artist
                    </label>
                  </div>
                  {errors.role && <div className="text-danger">{errors.role}</div>}
                </div>
                <div className="text-right mt-2">
                  <button type="submit" className="btn btn-primary">Creat New</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewArtist;
