import { Routes, Route, useNavigate } from 'react-router-dom'


import { Home } from './pages'

import { Auth } from './components';


const authToken = false;



const App = () => {

  if(!authToken) return <Auth />

  return (
      <div className="App">
        <h1>Gaming Social Media</h1>
        <Routes>
          {/* public routes */}
          <Route path="/auth" element={<Auth />}>
          </Route>
        </Routes>

      </div>
  );
}

export default App;
