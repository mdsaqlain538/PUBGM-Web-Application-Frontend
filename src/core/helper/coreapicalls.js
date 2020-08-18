import {API} from '../../backend';

export const getProducts = () =>{
    return fetch(`${API}/products`,
    {
        method:'GET'
    }).then(Response=>{
        return Response.json()
    })
    .catch(error=>{
        console.log(error);
    })
}

export const getPlayers = () =>{
    return fetch(`${API}/players`,
    {
        method:'GET'
    }).then(Response=>{
        return Response.json()
    })
    .catch(error=>{
        console.log(error);
    })
}


export const createPlayer = (userId,token,player) =>{
    return fetch(`${API}/saqlain/${userId}`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            Authorization: `Bearer ${token}`
        },
        body:player
    }).then(Response=>{
        return Response.json()
    })
    .catch(err=>{
        console.log(err);
    })
};