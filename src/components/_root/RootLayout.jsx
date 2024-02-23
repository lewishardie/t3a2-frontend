import React from 'react'
import TopNav from '../TopNav'
import SideNav from '../SideNav'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className="">
        <TopNav />
        <SideNav />
            <section className="">
                <Outlet />
            </section>
    </div>
  )
}

export default RootLayout