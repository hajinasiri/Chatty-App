# Chatty app
This is a chatt app, and it has one page. 
- Users can open the page and chat with other users that have the page open.
- The number of online users is dispalyed on the top right side of the page.
- When the user types a text in text box and hits Enter, the message shows up on all the users' page.
- Each username shows up in a random color picked form a list of 4 different colors
- Text box gets cleared when the user hits Enter.
- User can change their name by typing the new name in the name box and hitting Enter key. 
- When a user changes their name, a message shows up on all the user's page saying that that particular user changed their name from the old name to the new name.
- User can paste a photo url in the text box and hit enter and the photo will show up in the page


# Dependencies
app server:
* React
* React-dom
* sass-loader
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

socket server dependencies:
* express
* ws

# Running the app
This app has an app server that can be run by typing node "server.js" on command line inside "firstReact" foler. There is also a socket server that can be run by typing "node server.js" on command line inside "chatty_server" foler.
Both servers are on local host, and the app server runs at "localhost:3000".

# ScreenShots
- !["The chatty app page"](https://github.com/hajinasiri/Chatty-App/blob/master/Doc/Screen%20Shot%202018-05-31%20at%2012.52.14%20PM.png?raw=true)
