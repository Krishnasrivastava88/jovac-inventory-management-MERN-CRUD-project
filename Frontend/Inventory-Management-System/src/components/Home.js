import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container mt-5'>
            <div className="custom-card text-center p-5">
                <h1 className="display-4 fw-bold mb-3">Welcome to IMS Dashboard</h1>
                <p className="fs-5 text-muted mb-5">
                    Manage your inventory, track product stock, and oversee your MERN CRUD operations in one place.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <NavLink to="/products" className="btn btn-primary btn-lg px-5">View Inventory</NavLink>
                    <NavLink to="/insertproduct" className="btn btn-outline-dark btn-lg px-5">Add Product</NavLink>
                </div>
            </div>
            
            {/* Quick Stats Row */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm p-3 mb-3 bg-white rounded">
                        <div className="card-body">
                            <h6 className="text-uppercase text-muted small fw-bold">Total Products</h6>
                            <h2 className="mb-0">Check Inventory</h2>
                        </div>
                    </div>
                </div>
                {/* Add more stat cards here if needed */}
            </div>
        </div>
    )
}