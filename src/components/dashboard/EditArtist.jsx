import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditArtist() {
  const { id } = useParams();
  console.log(id)
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

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3005/users/` + id)
        .then(response => {
          setFormdata(response.data);
          //console.log(formdata);
        })
        .catch(error => {
          console.error('Có lỗi xảy ra:', error.message);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validErrors = {};
    
    if (formdata.firstname === "") {
      isvalid = false;
      validErrors.firstname = 'Yêu cầu nhập first name';
    }
    if (formdata.lastname === "") {
      isvalid = false;
      validErrors.lastname = 'Yêu cầu nhập last name';
    }
    if (formdata.email === "") {
      isvalid = false;
      validErrors.email = 'Yêu cầu nhập email';
    }
    if (formdata.password === "") {
      isvalid = false;
      validErrors.password = 'Yêu cầu nhập password';
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
      validErrors.role = 'Yêu cầu chọn nhận dạng người dùng';
    }

    setValid(isvalid);
    setErrors(validErrors);

    if (isvalid) {
      axios.put(`http://localhost:3005/users/` + id, formdata)
        .then(() => {
          alert('Cập nhật thành công');
          navigate('/admin-dashboard/artist-users'); 
        })
        .catch(error => {
          console.error('Có lỗi xảy ra:', error.message);
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Edit Artist</h3>
              <div>
                {!valid && 
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
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      placeholder="Enter First Name"
                      value={formdata.firstname}
                      onChange={(event) => setFormdata({ ...formdata, firstname: event.target.value })}
                    />
                  </div>
                  <div className="form-group col-md-6 mt-2 mb-2">
                    <label htmlFor="lastName">Last Name<span className="text-danger">*</span></label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      placeholder="Enter Last Name"
                      value={formdata.lastname}
                      onChange={(event) => setFormdata({ ...formdata, lastname: event.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="email">Email<span className="text-danger">*</span></label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter Email"
                    value={formdata.email}
                    onChange={(event) => setFormdata({ ...formdata, email: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="password">Password<span className="text-danger">*</span></label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter Password"
                    value={formdata.password}
                    onChange={(event) => setFormdata({ ...formdata, password: event.target.value })}
                  />
                </div>
         
                <div className="text-right mt-2">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditArtist;
