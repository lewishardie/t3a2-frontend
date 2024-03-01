import React from 'react'
import { TopNav, SideNav, BottomNav } from '../components/shared'
import { Outlet } from 'react-router'




const RootLayout = () => {
  return (

    <div className="w-full">
      <TopNav />

      <div className="w-full md:flex">
        <SideNav />

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>

        <BottomNav />
      </div>
    </div>
  );
};

export default RootLayout;