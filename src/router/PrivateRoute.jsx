import { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/';


export const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    const setLastPath = () => {
        const lastPath = `${pathname}${search}`;
        localStorage.setItem('lastPath', lastPath);
    }

    useEffect(() => {
        setLastPath();
    }, [pathname, search])

    return (authState?.logged)
        ? children
        : <Navigate to='/login' />
}
