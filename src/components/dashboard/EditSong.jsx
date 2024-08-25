import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditSong() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        artistId: '',
        url: ''
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3005/songs/` +id)
                .then(response => {
                    setFormData(response.data);
                    console.log(formData)
                })
                .catch(error => {
                    console.error('Có lỗi xảy ra khi lấy thông tin bài hát:', error.message);
                });
        }
    }, [id]);

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
        if (formData.url === "" || formData.url === null) {
            isValid = false;
            validErrors.url = 'Yêu cầu nhập mô tả bài hát';
        }

        setValid(isValid);
        setErrors(validErrors);

        if (isValid) {
            axios.put(`http://localhost:3005/songs/` + id, formData)
                .then(() => {
                    alert('Bạn đã cập nhật bài hát thành công');
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
                        {errors.url && <div>{errors.url}</div>}
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
                      <label htmlFor="url">url Song<span className="text-danger">*</span></label>
                      <textarea
                        id="url"
                        className="form-control"
                        rows="4"
                        placeholder="url Song"
                        value={formData.url}
                        onChange={(event) => setFormData({ ...formData, url: event.target.value })}
                      ></textarea>
                    </div>
                    <div className="text-right mt-2">
                      <button type="submit" className="btn btn-primary">Edit Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default EditSong;
