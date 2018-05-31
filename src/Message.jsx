import React, {Component} from 'react';
class Message extends Component {
  render(){
    var url ="";
    var visibility = "hidden";
    var message = "";
    let content = this.props.content;
    let test = (/\.(gif|jpg|png)$/i).test(content);
    if(test){
      let pathArray = content.split('http');
      pathArray.forEach((str) => {
        if(str.indexOf('jpg') > -1 || str.indexOf('png') > -1 || str.indexOf('gif') > -1){
          url = "http" + str;
          visibility = "visible";

        }else{
          message = message + str;
        }
      });
    }else{
      message = this.props.content;
    }

    console.log("url", url);

    if(this.props.type == undefined){
      return (<div></div>)
    }else if(this.props.type == "message"){
      return (
        <div>
          <span className="message-username" style={{color: this.props.color}}>{this.props.username}</span>
          <span className="message-content">{message}</span>
          <p>
            <img className="image" src={url} style={{visibility: visibility}}/>
          </p>
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