import React, { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({
  socket,
  username,
  otherUsername,
  message,
  setMessage,
  messages,
  setMessages,
}) {
  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        names: [username, otherUsername],
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("sendMessage", messageData);
      setMessages((list) => [...list, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    const messageEvent = (messageData) => {
      setMessages((list) => [...list, messageData]);
      console.log("received message");
    };

    socket.on("receiveMessage", messageEvent);

    return () => {
      socket.off("receiveMessage", messageEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <div className="chatWindow">
      <div className="chatHeader">
        <h3>{otherUsername}</h3>
      </div>
      <div className="chatBody">
        <ScrollToBottom className="messageContainer">
          {messages.map((messageData, index) => {
            return (
              <div
                className="message"
                id={
                  username === messageData.names[0] ? "yourChat" : "otherChat"
                }
                key={index}
              >
                <div className="messageBody">
                  <p>{messageData.message}</p>
                </div>
                <div className="messageDetails">
                  <p id="time">{messageData.time}</p>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chatFooter">
        <input
          type="text"
          value={message}
          placeholder="Type here..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
