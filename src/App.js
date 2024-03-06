import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Chats, Explore, Friends, Home, Notifications, Profile, Settings, CreatePost, Missing } from './_root/pages'
import { Login } from './_auth/forms/Login'
import { Register } from './_auth/forms/Register'
import { ToastContainer } from 'react-toastify'
// import { useAuth } from './context/AuthContext'
import { useQuery } from './context/QueryContext'

import "./index.css";



const App = () => {

  const { userData } = useQuery()

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
          <Route path="/explore" element={<Explore />}/>
          <Route path="/chats" element={<Chats />}/>
          <Route path="/friends" element={<Friends />}/>
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path={`/profile/${userData?.username}`} element={<Profile />}/>
          <Route path="/create-post" element={<CreatePost />}/>
          {/* catch all */}
          <Route path="*" element={<Missing />}/>
        </Route>


      </Routes>
      <ToastContainer/>
    </main>
  );
}

export default App;
