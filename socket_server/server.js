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

wss.broadcast = (data) => {
  wss.clients.forEach( (client) => {
    if (client.readyState === wsLib.OPEN) {
      client.send(data);
    }
  })
}
wss.on('connection', (client) => {
  console.log('Client connected');

  client.on('message',(str)=>{
    console.log("new message recieved");
    wss.broadcast(str);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  client.on('close', () => console.log('Client disconnected'));
});
