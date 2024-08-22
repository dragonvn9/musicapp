import React from 'react'
import './adminDashboard.css'

function AdminDashboard() {
    return (
        <div className='view-port d-flex min-vh-100'>

            <div className='bg-white sidebar p-2' style={{ width: '220px' }}>
                <div className='m-2'>
                    <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
                    <span className='brand-name fs-4'>Admin</span>
                </div>
                <hr className='text-dark' />
                <div className='list-group list-group-flush'>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-speedometer2 fs-5 me-2'></i>
                        <span className="fs-5">Dashboard</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-house fs-5 me-2'></i>
                        <span className="fs-5">Home</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-table fs-5 me-2'></i>
                        <span className="fs-5">Products</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-table fs-5 me-2'></i>
                        <span className="fs-5">Products</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-table fs-5 me-2'></i>
                        <span className="fs-5">Products</span>
                    </a>
                    <a className='list-group-item py-2'>
                        <i className='bi bi-table fs-5 me-2'></i>
                        <span className="fs-5">Products</span>
                    </a>
                </div>
            </div>
            <div className="layout-main flex-grow-1 d-flex flex-column p-3 bg-light">
                <table className="table caption-top bg-white rounded mt-2">
                    <caption className="fs-4 mb-1 mt-1">Recent Orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>
                <table className="table caption-top bg-white rounded mt-1">
                    <caption className="fs-4 mb-1 mt-1">Recent Orders</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </table>


            </div>

        </div>





    )
}

export default AdminDashboard