import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { authContext } from '../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const{user,loading} = useContext(authContext)
//    if (loading) {
//         return  <Loading></Loading>
//    }
    if(user) {
       return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;