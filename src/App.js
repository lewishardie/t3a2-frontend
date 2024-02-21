import { Routes, Route } from 'react-router-dom'


// import { Auth } from './components';
import { Login } from './components/auth/Forms/Login'
import { Register } from './components/auth/Forms/Register'
import AuthLayout from './components/auth/AuthLayout'

const authToken = false;



const App = () => {

  // if(!authToken) return <Auth />

  return (
      <div className="App">
        <h1>Gaming Social Media</h1>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>
        </Routes>

      </div>
  );
}

export default App;
