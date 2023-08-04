import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../';


export const LoginPage = () => {
    const { authState, login } = useContext(AuthContext);
    /*
    console.log(authState);
    console.log(dispatch); 
    */
    const navigate = useNavigate();
    const handleLoging = () => {
        const pathToNavigate = localStorage.getItem('lastPath') || '/';
        login('Eduardo Uh');
        navigate(pathToNavigate, { replace: true });
    }

    return (
        <div className="container mt-5">
            <h1>
                Login
            </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLoging}
            >
                Login
            </button>
        </div>
    )
}
