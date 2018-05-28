import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : this.props.currentUser.name,
      contentString: ""
    }
  }

  //to change to textfield when user types something
  changeString = (event) => {
    this.setState({contentString:event.target.value});
  }

  //to change the namefield when user types a new name
  nameString = (event) => {
    this.setState({name:event.target.value});
  }

  nameKeyHandler = (event) => {
    if(event.charCode === 13){
      let name = event.target.value;
      this.props.nameChange(name);
    }
  }

  chatKeyHandler = (event) => {
    if(event.charCode === 13){
      this.props.messageSend(event.target.value);
      this.state.contentString = "";
    }
  }


  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)"  value={this.state.name} onChange = {this.nameString} onKeyPress = {this.nameKeyHandler}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" value = {this.state.contentString} onChange = {this.changeString} onKeyPress = {this.chatKeyHandler} />
      </footer>
    );
  }
}
export default ChatBar;



