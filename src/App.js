import { Routes, Route } from 'react-router-dom'

import { Login } from './_auth/forms/Login'
import { Register } from './_auth/forms/Register'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Chats, Explore, Friends, Home, Notifications, Settings } from './_root/pages'


// const authToken = false;

const App = () => {

  // if(!authToken) return <AuthLayout />

  return (
    <main class="">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/chats" element={<Chats />}/>
            <Route path="/friends" element={<Friends />}/>
            <Route path="/notifications" element={<Notifications />}/>
            <Route path="/settings" element={<Settings />}/>

          </Route>


        </Routes>
    </main>
  );
}

export default App;
