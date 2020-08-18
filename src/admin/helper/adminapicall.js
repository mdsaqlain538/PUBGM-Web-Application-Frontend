import { API } from "../../backend";

export const creatCategory = (userId,token,category) => {
    return fetch(`${API}/category/create/${userId}`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(Response=>{
        return Response.json();
    })
    .catch(err=>{
        console.log(err);
    })
};

//get all categories
export const getCategories = () =>{
    return fetch(`${API}/categories`,{
        method:'GET'
    }).then(Response=>{
        return Response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

//get all products
export const getProducts = () =>{
    return fetch(`${API}/products`,{
        method:'GET'
    }).then(Response=>{
        return Response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}


// products call
export const createProduct = (userId,token,product) =>{
    return fetch(`${API}/product/create/${userId}`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}`
        },
        body:product
    }).then(Response=>{
        return Response.json()
    })
    .catch(err=>{
        console.log(err);
    })
};

//delet a product 
export const deleteProduct = (productId,userId,token,) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:'DELETE',
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(Response=>{
        return Response.json()
    })
    .catch(err=>{
        console.log(err);
    })
};


//get a product
export const getProduct = productId =>{
    return fetch(`${API}/product/${productId}`,{
        method:'GET',
    }).then(Response=>{
        return Response.json()
    })
    .catch(err=>{
        console.log(err);
    })
};


//update a product
export const updateProduct = (productId,userId,token,product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:'PUT',
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}`
        },
        body:product
    }).then(Response=>{
        return Response.json()
    })
    .catch(err=>{
        console.log(err);
    })
};