import { Link } from "react-router-dom";


const UserCard = ({ data, onDelete, onAdd, isFriend }) => {

  const { username } = data

  const handleDelete = () => {
    if (onDelete) {
      onDelete(username)
    }
  }

  const handleAdd = () => {
    if (onAdd) {
      onAdd(username)
    }
  }

  return (
    
    <div className="user-card w-full rounded-4 shadow-gray-300 shadow-md">

      <Link to={'/profile/username'} className="flex flex-row w-full gap-4 p-2">
        <img
          src={data?.imageUrl || "/assets/icons/gamestart-logo.svg"}
          alt="user"
          className="rounded-full w-14 h-14"
          />

        <div className="flex-center">
          <p className="h3 text-black text-center ">
            {username}
          </p>
        </div>
      </Link>
      {onDelete && (
        <button onClick={handleDelete} className="bg-gray-400 text-white px-3 py-2 rounded-full hover:bg-red">
          X
        </button>
      )}
      {onAdd && !isFriend && (
        <button onClick={handleAdd} className="bg-gray-400 text-white px-3 py-2 rounded-full hover:bg-green">
          Y
        </button>
      )}

    </div>
  );
};

export default UserCard;