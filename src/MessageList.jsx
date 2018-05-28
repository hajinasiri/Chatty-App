import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render(){
    const list = this.props.MessageList;
    const allMesseges = list.map((message, index) => {
        return(
          <Message key = {index} username = {message.username} content = {message.content} type = {message.type}/>
        );

    });

    return(
      <div >
        {allMesseges}
      </div>
    );
  }
}
export default MessageList;
