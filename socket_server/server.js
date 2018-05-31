const express = require('express');
const SocketServer = require('ws').Server;
const wsLib = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

//This function counts the clients and broadcasts a message about client size to all clients
countSend = () => {
  let count = {type:"count", count:wss.clients.size};
  wss.broadcast(JSON.stringify(count));
}

wss.broadcast = (data) => {
  wss.clients.forEach( (client) => {
    if (client.readyState === wsLib.OPEN) {
      client.send(data);
    }
  })
}
wss.on('connection', (client) => {
  countSend();
  client.on('message',(str)=>{
    wss.broadcast(str);

  });

  client.on('close', () => {
    countSend();
  });
});
