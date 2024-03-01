import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


export default function AuthLayout() {

    const { isAuthenticated } = useAuth()

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
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
                                {/* <img
                                    src="/assets/images/battlenet-ui.png"
                                    alt="logo"
                                    className="img-fluid h-100 w-100 object-cover"
                                /> */}
                            </div>
                        </div>
                    </div>

                </>
            )};
        </>
    );
};

