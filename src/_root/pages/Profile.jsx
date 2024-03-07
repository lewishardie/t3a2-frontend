// import { Loader } from '../../components/shared';

import { useAuth } from '../../context/AuthContext';
import { useQuery } from '../../context/QueryContext'
import { Loader } from '../../components/shared';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { isAuthenticated } = useAuth()
    const { isLoading, error, getUserByUsername, userData } = useQuery();
    const { username } = useParams()
    const [ profileData, setProfileData ] = useState(null)
    const [isOwnProfile, setIsOwnProfile] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const data = await getUserByUsername(username);
                setProfileData(data);
                setIsOwnProfile(userData?.username === data?.username)
                console.log(userData)
                console.log(data)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchProfileData()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    const handleAddFriend = async () => {
        return null
    };

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
                            {profileData?.name}
                        </h1>
                        <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                            {profileData?.username}
                        </p>
                    </div>

                    <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
                            {!isOwnProfile && (
                                <button onClick={handleAddFriend} className="btn btn-primary">Add friend</button>
                            )}
                        </div>

                    <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
                        {profileData?.about}
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