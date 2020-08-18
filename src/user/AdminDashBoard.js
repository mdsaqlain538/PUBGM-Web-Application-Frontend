import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index';
import {Link} from 'react-router-dom';

export default function AdminDashBoard() 
{
    const AdminLeftSide = () =>{
        return (
            <div className='card'>
                <h4 className='card-header bg-dark text-white'>Admin Navigation</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to='/admin/create/category' className='nav-link text-success'>Create Categories</Link>
                        <Link to='/admin/categories' className='nav-link text-success'>Manage Categories</Link>
                        <Link to='/admin/create/product' className='nav-link text-success'>Create Product</Link>
                        <Link to='/admin/products' className='nav-link text-success'>Manage Products</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const AdminRightSide = () =>{
        return (
            <div className='card mb-4'>
                <h4 className='card-header'>Admin Information</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Name:
                        </span>{name}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-primary mr-2'>
                                Email:
                        </span>{email}
                    </li>
                    <li className='list-group-item'>
                        <span className='badge badge-danger mr-2'>
                                Adimn Area
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
    const {
        user:{name,email,role}
    } = isAuthenticated();
    return (
        <Base title="Admin Panel" 
        description="Slipkart Website for Admin to add Items."
        className='container bg-info p-4'
        >
            <div className='row'>
                <div className='col-3'>{AdminLeftSide()}</div>
                <div className='col-9'>{AdminRightSide()}</div>
            </div>
        </Base>
    )
}
