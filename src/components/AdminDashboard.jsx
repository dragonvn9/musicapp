import React from 'react'
import './adminDashboard.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'


function AdminDashboard() {
    const navigate = useNavigate();
    return (
        <div className='view d-flex min-vh-100'>

            <div className='bg-white sidebar p-2' style={{ width: '220px' }}>
                <div className='m-2'>
                    <i class="bi bi-speedometer fs-5 me-2"></i>
                    <span className='brand-name fs-4'>Admin</span>
                </div>
                <hr className='text-dark' />
                <div className='list-group list-group-flush'>
                    <Link to="/" className='list-group-item py-2' >
                        <i className='bi bi-house-door fs-5 me-2'></i>
                        <span className="fs-5">Home</span>
                    </Link>
                    <Link to="/admin-dashboard/artist-users" className='list-group-item py-2' >
                        <i className='bi bi-person-plus fs-5 me-2'></i>
                        <span className="fs-5">Artist Users</span>
                    </Link >
                    <Link to="/admin-dashboard/listener-users" className='list-group-item py-2'>
                        <i className='bi bi-people fs-5 me-2'></i>
                        <span className="fs-5">Listener Users</span>
                    </Link>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-file-music fs-5 me-2'></i>
                        <span className="fs-5">Songs List</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-music-note-list fs-5 me-2'></i>
                        <span className="fs-5">Playlists</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-journal-album fs-5 me-2'></i>
                        <span className="fs-5">Albums</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-chat-left-quote fs-5 me-2'></i>
                        <span className="fs-5">Comments</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-megaphone fs-5 me-2'></i>
                        <span className="fs-5">Announcements</span>
                    </a>
                </div>
            </div>
            <div className=" flex-grow-1">
                <Outlet />
            </div>

        </div>





    )
}

export default AdminDashboard