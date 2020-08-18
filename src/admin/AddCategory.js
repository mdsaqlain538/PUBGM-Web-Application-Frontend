import React from 'react'
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper';
import {Link} from 'react-router-dom';
import {creatCategory} from './helper/adminapicall';


export default function AddCategory() {


    const [name, setName] = React.useState("");
    const [error, seterror] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const {user,token} = isAuthenticated();
    

    const goBack = () =>(
        <div className='mt-5'>
            <Link className='btn btn-sm btn-info mb-3' to='/admin/dashboard'
            >Admin Home</Link>
        </div>
    );

    const handleChange = (event) =>{
        seterror("");
        setName(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        seterror("");
        setSuccess(false);


        //backend request fire
        creatCategory(user._id,token,{name}).then(data =>{
            if(data.error){
                seterror(true)
            }else{
                seterror("")
                setSuccess(true)
                setName("")
            }
        })

    };

    const successMessage = () =>{
        if(success){
            return <h4 className='text-success'>Category Created Successfully</h4>
        }
    }

    const warningMessage = () =>{
        if(error){
            return <h4 className='text-danger'>Failed to Create Category</h4>
        }
    }

    const myCategoryForm = () =>(
        <form>
            <div className='from-group'>
                <p className='lead'>Enter the Category</p>
                <input type='text' 
                className='form-control my-4'
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder='For Ex.Summer'
                ></input>
                <button onClick={onSubmit} className='btn btn-outline-info'>Create Category</button>
            </div>
        </form>
    );

    return (
        <div>
            <Base title='Create a Category Here'
                description='Add a new Category for new Products'
                className='container bg-info p-4'
            >
                <div className='row bg-white rounded'>
                    <div className='col-md-8 offset-md-2'>
                        {successMessage()}
                        {warningMessage()}
                        {myCategoryForm()}
                        {goBack()}
                    </div>
                </div>
            </Base>
        </div>
    )
}
