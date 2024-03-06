import { Link } from "react-router-dom";

const UserCard = ({ data }) => {

  return (
    
    <div className="user-card w-full rounded-4 shadow-gray-300 shadow-md">

    <Link to={`/profile/${data.username}`} className="flex flex-row w-full gap-4 p-2">
      <img
        src={data?.imageUrl || "/assets/icons/gamestart-logo.svg"}
        alt="user"
        className="rounded-full w-14 h-14"
        />

      <div className="flex-center">
        <p className="h3 text-black text-center ">
          {data.username}
        </p>
      </div>
    </Link>

    </div>
  );
};

export default UserCard;