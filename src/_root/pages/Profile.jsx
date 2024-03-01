// import React from 'react'
// import { Loader } from '../../components/shared';
// import { useParams } from 'react-router-dom'
// import { useUserContext } from '../../context/AuthContext';
// import { useGetUserById }

// const Profile = () => {
//     // const { id } = useParams();
//     // const { user } = useUserContext();

//     const { data: currentUser } = useGetUserById(id || "")

//     if (!currentUser)
//         return (
//             <div className="flex-center w-full h-full">
//                 <Loader />
//             </div>
//         )


//   return (

//     <div className="profile-container">
//         <div className="profile-inner_container">
//             <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
//                 <img
//                     src="../assets/icons/gamestart-logo.svg"
//                     // src={
//                     //     currentUser.imageUrl || "../assets/icons/gamestart-logo.svg"
//                     // }
//                     alt="profile"
//                     className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
//                 />
//                 <div className="flex flex-col flex-1 justify-between md:mt-2">
//                     <div className="flex flex-col w-full">
//                         <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
//                             {/* {currentUser.name} */}
//                             Lewis
//                         </h1>
//                         <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
//                             {/* @{currentUser.username} */}
//                             Lewbagz
//                         </p>
//                     </div>

//                     <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">

//                     </div>

//                     <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
//                         {/* {currentUser.bio} */}
//                         Lewis is a mad guy
//                     </p>
//                 </div>

//                 <div className="flex justify-center gap-4">
//                     <div className="">

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Profile