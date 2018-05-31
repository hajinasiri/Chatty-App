import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
const uniqueID = require('uuid/v1');

class App extends Component {
  constructor(props){
    super();
    this.state ={
      count: "",
      color: "",
      currentUser: {name: "new user"},
      messages: [ ]
    }
    this.nameChange = this.nameChange.bind(this);
    this.messageSend = this.messageSend.bind(this);
  }
  //this function builds a message based on the two input( content of
  //the message and type of the message and sends it to the socket server)
    addMessage(content,type){
    let newmessage = {
      type: type,
      content: content,
      username: this.state.currentUser.name,
      id:uniqueID()
    };
    if(type === "message"){
      newmessage.color = this.state.color;
    }else if(type === "notification"){
      newmessage.color = "black"
    }
    this.ws.send(JSON.stringify(newmessage));
  }

  nameChange(newname){
    let oldName = this.state.currentUser.name;
    let content = oldName + " changed name to " + newname;
    if(oldName != newname){
      this.addMessage(content, "notification");
      this.setState({
        currentUser: {name:newname}

      });
    }
  }

  messageSend(text){
    this.addMessage(text, "message");
  }

  componentDidMount() {

    //setting socket server
    this.ws = new WebSocket('ws://localhost:3001');
    this.ws.addEventListener('open', () => {
    });
    this.ws.onmessage = event => {
      let broadcast = JSON.parse(event.data);
      let type = broadcast.type;
      if(type === "notification" || type =="message") {
        let newList = this.state.messages.concat([broadcast]);
        this.setState({messages: newList})
      }else if(type === "count"){
        let countMessage = "online";
        if(broadcast.count === 1){
          countMessage = "1 user " + countMessage ;
        } else{
          countMessage = broadcast.count + " users " + countMessage;
        }
        this.setState({count:countMessage});
      }else if(type === "color"){
        this.state.color = broadcast.color;
      }
    }
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })

    setTimeout(() => {

    }, 3000);
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div>
        <NavBar count = {this.state.count}/>
        <main className="messages">
          <MessageList MessageList = {this.state.messages} />
          <Message/>
        </main>
        <ChatBar currentUser = {this.state.currentUser} nameChange = {this.nameChange} messageSend = {this.messageSend}/>
      </div>
    );
  }
}
export default App;