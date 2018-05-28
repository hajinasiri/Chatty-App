import React, {Component} from 'react';

class Message extends Component {
  render(){

    if(this.props.type == undefined){
      return (<div></div>)
    }else if(this.props.type == "message"){
      return (
        <div>
          <span className="message-username">{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      );
    }else if(this.props.type == "notification"){
      return (
        <div className="message system">
          {this.props.content}
        </div>
        );
    }
  }
}
export default Message;