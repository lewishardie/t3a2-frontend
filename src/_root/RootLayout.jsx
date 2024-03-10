import React from 'react'
import { TopNav, SideNav, BottomNav } from '../components/shared'
import { Outlet, Navigate } from 'react-router'

import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';


const RootLayout = () => {

  const { isAuthenticated } = useAuth()
  const { location } = useLocation()

    return (
      <>
          {!isAuthenticated ? (
              <Navigate to="/login" state={{ from: location}} replace/>
          ) : (
            <>
              <div className="w-full md:flex flex-col">
                <TopNav />
                <div className="flex flex-1 mt-24">
                  <SideNav />

                <section className="flex flex-1 h-full w-1/4">
                  <Outlet />
                </section>
        
                </div>
                <BottomNav />
             
              </div>
            </>
          )}
    </>
  );
};

export default RootLayout;