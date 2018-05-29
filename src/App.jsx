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
  // console.log("componentDidMount <App />");
  setTimeout(() => {
    // console.log("Simulating incoming message");
    // // Add a new message to the list of messages in the data store
    // const newMessage = {id: 3, username: "Michelle", content: "Hello there!", type: 'message'};
    // const messages = this.state.messages.concat(newMessage)
    // // Update the state of the app component.
    // // Calling setState will trigger a call to render() in App and all child components.
    // this.setState({messages: messages})
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