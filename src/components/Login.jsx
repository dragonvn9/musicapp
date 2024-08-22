import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validErrors = {};

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

    //const reponse = await axios.get('http://localhost:3001/user')

    axios.get('http://localhost:3001/user')
      .then(result => {
        result.data.find(user=> {
          if (user.email=== formdata.email ) {
            if(user.password === formdata.password) {
              alert('Đăng nhập thành công')
              localStorage.setItem('user', JSON.stringify(user))
              //navigate('/')
              if (user.role==='Admin'){
                navigate('/admin-dashboard')
              } else if(user.role==='Artist') {
                navigate('/artist-dashboard')
              }
              else if (user.role==='Listener') {
                navigate('/listener-dashboard')
              }
            } else {
              isvalid = false;
              validErrors.password = "Sai Password"
            }
          } else if(formdata.email !== "") {
              isvalid = false;
              validErrors.email = "Sai email"
          }
        })
        setValid(isvalid);
        setErrors(validErrors);
      })
      
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <>
          {valid ? <></> :
            <span className="text-danger">
              {errors.email} <span style={{ marginLeft: '7px' }}>{errors.password}</span>
            </span>
          }
        </>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setFormdata({ ...formdata, email: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setFormdata({ ...formdata, password: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-3">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;