import { Routes, Route } from 'react-router-dom'


import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Chats, Explore, Friends, Home, Notifications, Profile, Settings, CreatePost } from './_root/pages'
import { Login } from './_auth/forms/Login'
import { Register } from './_auth/forms/Register'

import { Toaster } from 'react-hot-toast'

import "./index.css";



const App = () => {

  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/chats" element={<Chats />}/>
          <Route path="/friends" element={<Friends />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/profile" element={<Profile />}/>
          
          <Route path="/create-post" element={<CreatePost />}/>

        </Route>

      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
