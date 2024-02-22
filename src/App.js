import { Routes, Route } from 'react-router-dom'

import { Login } from './components/_auth/Forms/Login'
import { Register } from './components/_auth/Forms/Register'
import AuthLayout from './components/_auth/AuthLayout'


// const authToken = false;



const App = () => {

  // if(!authToken) return <AuthLayout />

  return (
      <div className="App">
        <h1>Gaming Social Media</h1>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>

          {/* private routes */}
          

        </Routes>

      </div>
  );
}

export default App;
