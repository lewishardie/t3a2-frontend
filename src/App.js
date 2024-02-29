import { Routes, Route } from 'react-router-dom'


import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Chats, Explore, Friends, Home, Notifications, Settings } from './_root/pages'
import { Login } from './_auth/forms/Login'
import { Register } from './_auth/forms/Register'



// const authToken = false;

const App = () => {

// ----------------------------
// test from class example

  // let [backendUrl, setBackendUrl ] = useState("")
  // let [userList, setUserList ] = useState("")

  // useEffect(() => {
  //   setBackendUrl(process.env.REACT_APP_BACKEND_URL)
  
  // }, []);

  // useEffect(() => {
  //   if (backendUrl === ""){

  //   } else {
  //     console.log(backendUrl, process.env.REACT_APP_BACKEND_URL);
  //     fetch(backendUrl + "users/").then(response => response.json()).then(data => {
  //       console.log("Data from /users/ is: " + JSON.stringify(data));
  //       setUserList(data.result);
  //     });
  //   };
  // }, [backendUrl])

// ----------------------------

  // if(!authToken) return <AuthLayout />

  return (
    <main className="">
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

          </Route>

        </Routes>
        {/* <h2>sds is {backendUrl}</h2>
        <h3> {userList} </h3> */}
    </main>
  );
}

export default App;
