import { useEffect, useState } from "react";
import { useQuery } from "../../context/QueryContext";
import socketIO from "socket.io-client";
import Chat from "../../components/Chat";
import { BiMessageSquareDots } from 'react-icons/bi'

const socket = socketIO.connect(process.env.REACT_APP_BACKEND_URL);

const Chats = () => {
  const { getFriendsList, userData } = useQuery();

  const [username, setUsername] = useState("");
  const [otherUsername, setOtherUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [friendList, setFriendList] = useState([]);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const changeOtherUser = (newOtherUsername) => {
    setOtherUsername(newOtherUsername);
    setUsername(userData.username);
    setShowChat(false);
    setMessage("");
    setMessages([]);
    console.log("CLICKEDBUTTON");
    console.log("username: " + username);
    console.log("otherUsername: " + newOtherUsername);
    if (username !== "" && newOtherUsername !== "") {
      socket.emit("joinRoom", {
        names: [username, newOtherUsername],
      });
      setShowChat(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friends = await getFriendsList();
        // if (userData) {
        //   ;
        // }
        if (friends.friends.length > 0) {
          setFriendList(friends.friends);
          setOtherUsername(friends.friends[0].username);
          //changeOtherUser(friends.friends[0].username, userData.username);
        }
      } catch (error) {
        console.error("Error fetching friends: ", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeOtherUser(otherUsername);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherUsername]);

  return (

    <div className="home-container">

      <div className="flex flex-row gap-4 items-center border-b-2 border-black pb-2">
      <button>              
        <BiMessageSquareDots size={35} /> 
      </button>
      <h2 className="w-full h3-bold md:h1-bold text-left m-0">Chats </h2>
      </div>


      <div>
        {friendList ? (
          <div>
            <label htmlFor="friends">Choose a friend:</label>
            <select
              name="friends"
              id="friends"
              onChange={(e) => changeOtherUser(e.target.value)}
            >
              {friendList.map((friend, index) => (
                <option value={friend.username} key={index}>
                  {friend.username}
                </option>
              ))}
            </select>
            {/* <button onClick={joinRoom}>JOIN</button> */}
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {showChat ? (
        <Chat
          socket={socket}
          username={username}
          otherUsername={otherUsername}
          message={message}
          setMessage={setMessage}
          messages={messages}
          setMessages={setMessages}
        />
      ) : (
        <br></br>
      )}
    </div>
  );
};

export default Chats;
