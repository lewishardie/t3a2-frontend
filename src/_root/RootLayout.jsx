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
              <><div className="w-full">
              <TopNav />
        
              <div className="md:flex">
                <SideNav />
        
                <section className="flex flex-1">
                  <Outlet />
                </section>
        
                <BottomNav />
              </div>
            </div>
              </>
          )}
      </>
  );
};

export default RootLayout;