
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './home.css'; 
import { useNavigate, Link, Outlet } from 'react-router-dom';
import icon01 from '../components/images/Vector -favourite.png';
import icon02 from '../components/images/add-playsist.png';
import icon03 from '../components/images/Vector- recently.png';
import icon04 from '../components/images/your-playsist.png';
import icon05 from '../components/images/albums.png';
import icon06 from '../components/images/artists.png';
import icon07 from '../components/images/discover.png';
import icon08 from '../components/images/logout.png';
import icon09 from '../components/images/most player.png';
import icon10 from '../components/images/setting.png';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const elements = document.querySelectorAll('.box-icon, .box-discover, .box-albums, .box-artists');

    elements.forEach((element) => {
      element.addEventListener('click', function() {
        
        elements.forEach((el) => el.classList.remove('active-effect'));
      
        element.classList.add('active-effect');
      });
    });
  }, []);


  return (
    <div className='view-port d-flex min-vh-100'>
      <div className='container-sidebar bg-dark text-white d-flex flex-column' style={{ width: '266px' }}>
        <div className='melodies-box d-flex justify-content-center mb-3 ml-1 p-0 '>
          <span className='melodies'>Melodies</span>
        </div>

        <ul className="box-menu list-unstyled">
          <section className='text-section mb-3'>Menu</section>
          <li onClick={() => navigate('/')} className='box-icon d-flex align-items-center mb-2'>
            <i className="bi bi-house fs-3 me-2"></i>
            <Link to="#" className='text-white text-decoration-none fs-4'>Home</Link>
          </li>
          <li onClick={() => navigate('/discover')} className='box-discover d-flex align-items-center mb-2'>
            <img src={icon07} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Discover</Link>
          </li>
          <li onClick={() => navigate('/albums')} className='box-albums d-flex align-items-center mb-2'>
            <img src={icon05} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Albums</Link>
          </li>
          <li onClick={() => navigate('/artists')} className='box-artists d-flex align-items-center mb-2'>
            <img src={icon06} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Artists</Link>
          </li>
        </ul>

        <ul className="box-library list-unstyled mt-3">
          <section className="text-section mb-3">Library</section>
          <li className='box-2 d-flex align-items-center mb-2'>
            <img src={icon03} alt="" className="icon-side me-2" />
            <span className="text-link text-light fs-4">Recently Added</span>
          </li>
          <li className='box-2 d-flex align-items-center mb-2'>
            <img src={icon09} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Most played</Link>
          </li>
        </ul>

        <ul className="playsist-box list-unstyled mt-3">
          <section className="text-section mb-3">Playlist And Favorite</section>
          <li className='box-2 d-flex align-items-center mb-2'>
            <img src={icon01} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none d-flex align-items-center'>
              <img src={icon04} alt="" className="icon-side me-2" />
              <span className="text-link text-light fs-4">Your favorites</span>
            </Link>
          </li>
          <li className='box-2 d-flex align-items-center mb-2'>
            <Link to="#" className='text-white text-decoration-none d-flex align-items-center'>
              <img src={icon02} alt="" className="icon-side me-2" />
              <span className="text-link text-light fs-4">Your playlist</span>
            </Link>
          </li>
          <li className='box-2 d-flex align-items-center mb-2'>
            <Link to="#" className='text-white text-decoration-none d-flex align-items-center'>
              <img src={icon01} alt="" className="icon-side me-2" />
              <span className="text-link text-light fs-4">Add playlist</span>
            </Link> 
          </li>
        </ul>

        <ul className="setting-box list-unstyled mt-3">
          <section className="text-section mb-3">General</section>
          <li className='box-2 d-flex align-items-center mb-2'>
            <img src={icon10} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Setting</Link>
          </li>
          <li className='box-2 d-flex align-items-center mb-2'>
            <img src={icon08} alt="" className="icon-side me-2" />
            <Link to="#" className='text-white text-decoration-none fs-4'>Logout</Link>
          </li>
        </ul>
      </div>

      <div className="layout-main flex-grow-1 d-flex flex-column p-3">
        <div className="header-bar d-flex align-items-center mb-4 mt-3">
          <input type="text" placeholder="Tìm kiếm..." name="search" className='search-box form-control me-3' style={{ maxWidth: '359px' }} />
          <div className='header-items d-flex align-items-center ms-5 gap-3'>
            <Link to="#about" className='about text-decoration-none text-light me-2 fs-4'>About</Link>
            <Link to="#contact" className='contact text-decoration-none text-light me-2 fs-4'>Contact</Link>
            <Link onClick={() => navigate('/admin-dashboard')} to="#premuim" className='premuim text-decoration-none text-light fs-4'>Premuim</Link>
          </div>
          <div className="header-right d-flex">
            <Link onClick={() => navigate('/login')}  to="#login" className='login btn btn-dark text-light me-2 fs-5'>Login</Link>
            <Link onClick={() => navigate('/register')}  to="#signup" className='sign-up btn btn-primary text-light fs-5'>Sign Up</Link>
          </div>
        </div>
        <div className="couser"></div>

        <div className="layout-body-main flex-grow-1">
          <Outlet />
        </div>

            {/* Footer content */}
        <footer className="text-white mt-auto py-4">
          <div className="container">
            <div className="row">
              
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-bold fs-3">About</h5>
                <p className='text-long'>Melodies is a website that has been created for over 5 years now and it is one of the most famous music player websites in the world. In this website, you can listen and download songs for free. Also if you want no limitation you can buy our <span className="text-primary">premium pass's</span>.</p>
              </div>

              
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 className="custom-underline fw-bold text-decoration-underline fs-3">Melodies</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-content text-white text-decoration-none">Songs</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Radio</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Podcast</a></li>
                </ul>
              </div>

              
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 className="custom-underline fw-bold text-decoration-underline fs-3">Access</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-content text-white text-decoration-none">Explore</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Artists</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Playlists</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Albums</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Trending</a></li>
                </ul>
              </div>

              
              <div className="col-lg-2 col-md-3 mb-4">
                <h5 className="custom-underline fw-bold text-decoration-underline fs-3">Contact</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-content text-white text-decoration-none">About</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Policy</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Social Media</a></li>
                  <li><a href="#" className="text-content text-white text-decoration-none">Support</a></li>
                </ul>
              </div>

              
              <div className="col-lg-2 col-md-3 mb-4 text-end">
                <h5 className="melodies-footer">Melodies</h5>
                <div className="d-flex justify-content-end gap-3">
                  <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
  
        </div>
      </div>
    );
  }
  
  export default Home;