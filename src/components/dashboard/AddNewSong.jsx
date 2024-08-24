import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNewSong() {
  const [formData, setFormData] = useState({
    title: '',
    artistId: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validErrors = {};

    if (formData.title === "" || formData.title === null) {
      isValid = false;
      validErrors.title = 'Yêu cầu nhập tiêu đề bài hát';
    }
    if (formData.artistId === "" || formData.artistId === null) {
      isValid = false;
      validErrors.artistId = 'Yêu cầu nhập ID nghệ sĩ';
    }
    if (formData.description === "" || formData.description === null) {
      isValid = false;
      validErrors.description = 'Yêu cầu nhập mô tả bài hát';
    }

    setValid(isValid);
    setErrors(validErrors);

    if (Object.keys(validErrors).length === 0) {
      axios.post('http://localhost:3005/songs', formData)
        .then(() => {
          alert('Bạn đã thêm mới bài hát thành công');
          navigate('/admin-dashboard/song-list'); 
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
              <h3 className="card-title text-center">Creat New Song</h3>
              <div>
                {!valid && (
                  <span className="text-danger">
                    {errors.title && <div>{errors.title}</div>}
                    {errors.artistId && <div>{errors.artistId}</div>}
                    {errors.description && <div>{errors.description}</div>}
                  </span>
                )}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="title">Song Tittle<span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Song Tittle"
                    value={formData.title}
                    onChange={(event) => setFormData({ ...formData, title: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="artistId">Artist ID <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="artistId"
                    placeholder="Nhập Artist ID"
                    value={formData.artistId}
                    onChange={(event) => setFormData({ ...formData, artistId: event.target.value })}
                  />
                </div>
                <div className="form-group mt-2 mb-2">
                  <label htmlFor="description">Description Song<span className="text-danger">*</span></label>
                  <textarea
                    id="description"
                    className="form-control"
                    rows="4"
                    placeholder="Description Song"
                    value={formData.description}
                    onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                  ></textarea>
                </div>
                <div className="text-right mt-2">
                  <button type="submit" className="btn btn-primary">Add New</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewSong;
