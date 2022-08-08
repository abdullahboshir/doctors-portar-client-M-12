import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || adminLoading){
       return <Loading/>
    }

    if(!user || !admin){
        signOut(auth)
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    return (
       children
    );
};

export default RequireAdmin;