import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    const { authState, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
        navigate('/login', { replace: true });
    }
    return (
        <nav className="navbar bg-dark navbar-dark rounded-bottom-4 p-2">
            <div className="container-fluid d-flex align-items-center">
                <div className="w-50" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex flex-row gap-3">
                        {/* nav-link active */}
                        <NavLink to="/marvel" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            Marvel
                        </NavLink>
                        <NavLink to="/dc" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            DC
                        </NavLink>
                        <NavLink to="/search" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className="w-50" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex flex-row gap-3 justify-content-end">
                        <span className="nav-item nav-link text-primary">
                            {authState?.user?.name}
                        </span>
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    )
}