// import { Loader } from '../../components/shared';

import { useAuth } from '../../context/AuthContext';
import { useQuery } from '../../context/QueryContext'
import { Loader } from '../../components/shared';

const Profile = () => {
    const { isAuthenticated } = useAuth()
    const { userData, isLoading, error } = useQuery();

    if (!isAuthenticated) {
        return null;
    }

    if (isLoading) {
        return <Loader />; // Render loader while data is loading
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Render error message if there's an error
    }

  return (

    <div className="profile-container">
        <div className="profile-inner_container">
            <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
                <img
                    src="../assets/icons/gamestart-logo.svg"
                    // src={
                    //     userData?.imageUrl || "../assets/icons/gamestart-logo.svg"
                    // }
                    alt="profile"
                    className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
                />
                <div className="flex flex-col flex-1 justify-between md:mt-2">
                    <div className="flex flex-col w-full">
                        <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                            {userData?.name}
                        </h1>
                        <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                            {userData?.username}
                        </p>
                    </div>

                    <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
                        
                    </div>

                    <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
                        {userData?.about}
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile


// // import { Loader } from '../../components/shared';
// import axios from '../../lib/api/api'

// import { useAuth } from '../../context/AuthContext';
// import { useEffect, useState } from 'react';

// const Profile = () => {
//     const { isAuthenticated } = useAuth()
//     const [currentUser, setCurrentUser] = useState(null); 
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const fetchCurrentUser = async () => {
//             try {
//                 if (!isAuthenticated) {
//                     return;
//                 }
//                 const token = localStorage.getItem('token');
//                 const config = {
//                     headers: {
//                         'jwt': `${token}`,
//                     }
//                 }
//                 console.log(token)
//                 const response = await axios.get('/users', config);
//                 setCurrentUser(response.data)

//                 console.log(response)
//                 console.log(response.data)
            
//             setLoading(false);
                
//             } catch(error) {
//                 console.error("Error", error)
//                 setLoading(false)
//             }
//         }
//         fetchCurrentUser()
//     }, [isAuthenticated, ]);