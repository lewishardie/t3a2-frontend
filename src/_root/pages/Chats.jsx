import { useEffect, useState } from "react";
import { useQuery } from "../../context/QueryContext";
import socketIO from "socket.io-client";
import Chat from "../../components/Chat";
const socket = socketIO.connect(process.env.REACT_APP_BACKEND_URL);

const Chats = () => {
  const { getFriendsList, userData } = useQuery();

  const [username, setUsername] = useState("");
  const [otherUsername, setOtherUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [friendList, setFriendList] = useState([]);

  const joinRoom = () => {
    setShowChat(false);
    console.log("CLICKEDBUTTON");
    console.log("username: " + username);
    console.log("otherUsername: " + otherUsername);
    if (username !== "" && otherUsername !== "") {
      socket.emit("joinRoom", {
        names: [username, otherUsername],
      });
      setShowChat(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friends = await getFriendsList();
        if (friends.friends.length > 0) {
          setFriendList(friends.friends);

          setOtherUsername(friends.friends[0].username);
        }
        if (userData) {
          setUsername(userData.username);
        }
      } catch (error) {
        console.error("Error fetching friends: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Chats</h1>

      {showChat ? (
        <Chat
          socket={socket}
          username={username}
          otherUsername={otherUsername}
        />
      ) : (
        <div>
          {friendList ? (
            <div>
              <label htmlFor="friends">Choose a friend:</label>
              <select
                name="friends"
                id="friends"
                onChange={(e) => setOtherUsername(e.target.value)}
              >
                {friendList.map((friend, index) => (
                  <option value={friend.username} key={index}>
                    {friend.username}
                  </option>
                ))}
              </select>
              <button onClick={joinRoom}>JOIN</button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
};

export default Chats;
