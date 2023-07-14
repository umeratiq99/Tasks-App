import React from 'react'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute({children}) {
    const userLoggedIn =  localStorage.getItem('token');

    if(!userLoggedIn){
        return(
            <Navigate to='/login'/>
        )
    }
    return children;
}
