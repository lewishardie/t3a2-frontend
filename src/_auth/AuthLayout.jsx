import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';


export default function AuthLayout() {
    const { isAuthenticated } = useAuth()
    const { location } = useLocation()

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" state={{ from: location}} replace/>
            ) : (
                <>

                    <div className="container-fluid">
                        <div className="row">
                            {/* Left column for content */}
                            <div className="col-md-6 d-flex justify-content-center align-items-center py-10 bg-secondary">
                                {/* Renders register/login */}
                                <Outlet />
                            </div>

                            {/* Right column for image */}
                            <div className="col-md-6 d-none d-md-block p-0 bg-dark">
                            </div>
                        </div>
                    </div>
                </>
            )};
        </>
    );
};

