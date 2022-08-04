import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading){
       return <Loading/>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return (
       children
    );
};

export default RequireAuth;