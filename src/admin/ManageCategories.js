import React ,{useEffect,useState} from 'react'
import Base from '../core/Base';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import { getCategories } from './helper/adminapicall';

export default function ManageCategories() {

    const [categories, setCategories] = useState([]);

     const { user, token } = isAuthenticated();

    const preload = () => {  
        getCategories().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setCategories(data);
         }
        });
    };

  useEffect(() => {
    preload();
  }, []);



    return (
        <Base title="Welcome admin" description="Manage Categories here">
      <h2 className="mb-4">All Categories:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          {
              categories.map((category,index)=>{
                  return(
                      <h5 className='text-white' key={index}>{category.name}</h5>
                  )
              })
          }
        </div>
      </div>
    </Base>
    )
}
