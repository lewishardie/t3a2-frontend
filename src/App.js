import { Routes, Route } from 'react-router-dom'

import { Login } from './components/_auth/forms/Login'
import { Register } from './components/_auth/forms/Register'
import AuthLayout from './components/_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Explore, Home, Settings } from './_root/pages'


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
            <Route path="/settings" element={<Settings />}/>

          </Route>


        </Routes>
    </main>
  );
}

export default App;
