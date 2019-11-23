import React, { Component } from "react";
import Chatkit from "@pusher/chatkit-client";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessage";
import WhosOnlineList from "./WhosOnlineList";

class Messaging extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(text) {
    console.log(this.state.currentUser);
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id
    });
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:bcf5f63f-034c-495c-a760-959dee1db755",
      userId: "rayan" /*this.props.userName*/,
      tokenProvider: new Chatkit.TokenProvider({
        url:
          "http://ec2-35-162-213-113.us-west-2.compute.amazonaws.com:3001/authenticate"
      })
    });

    fetch(
      "http://ec2-35-162-213-113.us-west-2.compute.amazonaws.com:3001/getNewRoom",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((res) => {
      res.json().then(data => {
        const room_id = data.room_id;
        chatManager
          .connect()
          .then(currentUser => {
            this.setState({ currentUser });
            return currentUser.subscribeToRoom({
              roomId: room_id,
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.setState({
                    messages: [...this.state.messages, message]
                  });
                },
                onPresenceChange: () => this.forceUpdate()
              }
            });
          })
          .then(currentRoom => {
            this.setState({ currentRoom });

            if (false) {
              fetch(
                "http://ec2-35-162-213-113.us-west-2.compute.amazonaws.com:3001/startAdminMessages",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    room_id: room_id
                  })
                }
              );
            }
          })
          .catch(error => console.error("LOLOLOLOL", error));
          })
    });
  }

  render() {
    const styles = {
      container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
      },
      chatContainer: {
        display: "flex",
        flex: 1
      },
      whosOnlineListContainer: {
        width: "300px",
        flex: "none",
        padding: 20,
        backgroundColor: "#2c303b",
        color: "white"
      },
      chatListContainer: {
        padding: 20,
        width: "85%",
        display: "flex",
        flexDirection: "column"
      }
    };
    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <WhosOnlineList
              currentUser={this.state.currentUser}
              users={this.state.currentRoom.users}
            />
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />
            <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </div>
    );
  }
}

export default Messaging;
