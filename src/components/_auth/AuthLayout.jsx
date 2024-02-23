import { Outlet, Navigate } from 'react-router-dom'


import React from 'react'

export default function AuthLayout() {

    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ): (
                <>
                    <section>
                        {/* Renders what has to be on the page you are on */}
                        <Outlet />
                    </section>

                    <img src="" alt="logo" className="" />

                </>
            )}
        </>
    )
}