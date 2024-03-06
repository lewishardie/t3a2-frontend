import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useQuery } from "../../context/QueryContext";

const UserCard = ({ data }) => {

  const { setMakeFriendRequest } = useQuery()

  const handleRequest = () => {
    const username = data?.username;
    console.log("here")
    console.log(username)
    setMakeFriendRequest(username);
    console.log(username)
  }

  return (
    
    <div className="user-card">

    <Link to={`/profile/${data.username}`} className="flex flex-row w-full gap-4 p-2 border-r-2 border-gray-100">
      <img
        src={data?.imageUrl || "/assets/icons/gamestart-logo.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
        />

      <div className="flex-center">
        <p className="h3 text-black text-center ">
          {data.username}
        </p>
      </div>
    </Link>
        <button className="" onClick={handleRequest}>
            <IoAddCircleOutline size={40}/>
        </button>
    </div>
  );
};

export default UserCard;