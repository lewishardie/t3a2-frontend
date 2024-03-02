import React from 'react'
import { TopNav, SideNav, BottomNav } from '../components/shared'
import { Outlet, Navigate } from 'react-router'

import { useAuth } from '../context/AuthContext';




const RootLayout = () => {

  const { isAuthenticated } = useAuth()

  return (
      <>
          {!isAuthenticated ? (
              <Navigate to="/login" />
          ) : (
              <><div className="w-full">
              <TopNav />
        
              <div className="w-full md:flex">
                <SideNav />
        
                <section className="flex flex-1 h-full">
                  <Outlet />
                </section>
        
                <BottomNav />
              </div>
            </div>
              </>
          )};
      </>
  );
};

export default RootLayout;