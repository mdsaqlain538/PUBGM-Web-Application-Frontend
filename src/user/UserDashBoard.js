import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index';
import {Link} from 'react-router-dom';

export default function AdminDashBoard() 
{

    const AdminRightSide = () =>{
        return (
            <div className='card mb-4'>
                <h4 className='card-header'>User Information</h4>
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
                                User Area
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
        <Base title="User Panel" 
        description="User Page for User Details."
        className='container bg-info p-4'
        >
            <div className='row'>
                <div className='col'>{AdminRightSide()}</div>
            </div>
        </Base>
    )
}
