import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
  constructor(props){
    super();
    this.state ={
      currentUser: {name: "new user"},
      messages: [ ]
    }
    this.nameChange = this.nameChange.bind(this);
    this.messageSend = this.messageSend.bind(this);
  }

    addMessage(content,type){
    let messages = this.state.messages;

    let newmessage = {
      type: type,
      content: content,
      username: this.state.currentUser.name
    }
    messages.push(newmessage);
    this.setState({
      messages: messages
    })
  }

  nameChange(newname){
    let oldName = this.state.currentUser.name;
    let content = oldName + " changed name to " + newname;
    this.addMessage(content, "notification");
    this.setState({
      currentUser: {name:newname}

    });
  }

  messageSend(text){
    this.addMessage(text, "message");
  }

componentDidMount() {

//setting socket server
this.ws = new WebSocket('ws://localhost:3001');
  this.ws.addEventListener('open', () => {

  });
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
  this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  setTimeout(() => {

  }, 3000);
}
  render() {
    return (
      <div>
        <NavBar/>
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