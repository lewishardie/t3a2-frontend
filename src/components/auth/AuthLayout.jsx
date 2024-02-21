import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

const AuthLayout = () => {
    
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ): (
                <>
                    <section>
                        <Outlet />
                    </section>
                </>
            )}
        </>
    )
}

export default AuthLayout