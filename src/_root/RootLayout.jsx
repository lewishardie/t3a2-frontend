import React from 'react'
import TopNav from '../components/shared/TopNav'
import SideNav from '../components/shared/SideNav'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className="w-100 md-flex">
        <TopNav />
        <SideNav />
            <section className="d-flex h-100">
                <Outlet />
            </section>
    </div>
  )
}

export default RootLayout